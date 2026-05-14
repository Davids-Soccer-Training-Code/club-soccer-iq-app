"use server";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth/options";
import {
  completeLesson,
  getResponses,
  saveKnowledgeAnswers,
  saveTacticsAnswers,
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
