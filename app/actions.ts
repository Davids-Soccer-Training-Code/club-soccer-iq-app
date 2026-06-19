"use server";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth/options";
import {
  completeLesson,
  getResponses,
  saveKnowledgeAnswers,
  saveTacticsAnswers,
  saveTacticsDraft,
  upsertPlayer,
} from "@/lib/data";
import { getLearningModule, getModuleLesson } from "@/lib/modules";
import { positionQuestions, tacticsQuestions, type AnswerMap } from "@/lib/questions";

async function requireUserId() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    redirect("/signin");
  }

  return userId;
}

function cleanAnswer(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function answersFromForm(formData: FormData, questions: readonly { id: string }[]) {
  return questions.reduce<AnswerMap>((answers, question) => {
    answers[question.id] = cleanAnswer(formData.get(question.id));
    return answers;
  }, {});
}

const MAX_DRAFT_ANSWER_LENGTH = 5000;

// Drafts come straight from the client, so only trust known question ids and
// coerce each value to a length-capped string.
function draftAnswers(input: unknown, questions: readonly { id: string }[]) {
  const source =
    input && typeof input === "object" ? (input as Record<string, unknown>) : {};

  return questions.reduce<AnswerMap>((answers, question) => {
    const value = source[question.id];
    answers[question.id] =
      typeof value === "string" ? value.slice(0, MAX_DRAFT_ANSWER_LENGTH) : "";
    return answers;
  }, {});
}

export async function savePlayerName(formData: FormData) {
  const userId = await requireUserId();
  const playerName = cleanAnswer(formData.get("playerName"));

  if (!playerName) {
    redirect("/onboarding/player?error=missing-name");
  }

  await upsertPlayer(userId, playerName);
  redirect("/quiz/positions");
}

export async function savePositionsQuiz(formData: FormData) {
  const userId = await requireUserId();
  const responses = await getResponses(userId);

  if (responses?.completedAt) {
    redirect("/dashboard");
  }

  await saveKnowledgeAnswers(userId, answersFromForm(formData, positionQuestions));
  redirect("/quiz/tactics");
}

export async function saveTacticsQuiz(formData: FormData) {
  const userId = await requireUserId();
  const responses = await getResponses(userId);

  if (responses?.completedAt) {
    redirect("/dashboard");
  }

  await saveTacticsAnswers(userId, answersFromForm(formData, tacticsQuestions));
  redirect("/dashboard");
}

export async function saveKnowledgeDraft(answers: AnswerMap) {
  const userId = await requireUserId();
  const responses = await getResponses(userId);

  // Never overwrite a finished quiz with a late-arriving autosave.
  if (responses?.completedAt) {
    return;
  }

  await saveKnowledgeAnswers(userId, draftAnswers(answers, positionQuestions));
}

export async function saveTacticsDraftAnswers(answers: AnswerMap) {
  const userId = await requireUserId();
  const responses = await getResponses(userId);

  if (responses?.completedAt) {
    return;
  }

  await saveTacticsDraft(userId, draftAnswers(answers, tacticsQuestions));
}

export async function markLessonComplete(formData: FormData) {
  const userId = await requireUserId();
  const moduleSlug = cleanAnswer(formData.get("moduleSlug"));
  const lessonSlug = cleanAnswer(formData.get("lessonSlug"));
  const learningModule = getLearningModule(moduleSlug);
  const lesson = getModuleLesson(moduleSlug, lessonSlug);

  if (!learningModule || !lesson) {
    redirect("/dashboard");
  }

  await completeLesson(userId, moduleSlug, lessonSlug);
  redirect(`/modules/${learningModule.slug}`);
}
