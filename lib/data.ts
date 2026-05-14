import "server-only";

import { query } from "@/lib/db";
import type { AnswerMap } from "@/lib/questions";

export type PlayerProfile = {
  id: string;
  userId: string;
  playerName: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SoccerIqResponses = {
  id: string;
  userId: string;
  knowledgeAnswers: AnswerMap;
  tacticsAnswers: AnswerMap;
  completedAt: Date | null;
  updatedAt: Date;
};

export type ModuleLessonCompletion = {
  moduleSlug: string;
  lessonSlug: string;
  completedAt: Date;
};

type PlayerRow = {
  id: string;
  user_id: string;
  player_name: string;
  created_at: Date;
  updated_at: Date;
};

type ResponseRow = {
  id: string;
  user_id: string;
  knowledge_answers: AnswerMap;
  tactics_answers: AnswerMap;
  completed_at: Date | null;
  updated_at: Date;
};

type CompletionRow = {
  module_slug: string;
  lesson_slug: string;
  completed_at: Date;
};

function mapPlayer(row: PlayerRow): PlayerProfile {
  return {
    id: row.id,
    userId: row.user_id,
    playerName: row.player_name,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapResponses(row: ResponseRow): SoccerIqResponses {
  return {
    id: row.id,
    userId: row.user_id,
    knowledgeAnswers: row.knowledge_answers ?? {},
    tacticsAnswers: row.tactics_answers ?? {},
    completedAt: row.completed_at,
    updatedAt: row.updated_at,
  };
}

export async function getPlayer(userId: string) {
  const result = await query<PlayerRow>(
    "SELECT id, user_id, player_name, created_at, updated_at FROM players WHERE user_id = $1",
    [userId],
  );

  return result.rows[0] ? mapPlayer(result.rows[0]) : null;
}

export async function upsertPlayer(userId: string, playerName: string) {
  const result = await query<PlayerRow>(
    `
      INSERT INTO players (user_id, player_name)
      VALUES ($1, $2)
      ON CONFLICT (user_id) DO UPDATE
      SET player_name = EXCLUDED.player_name,
          updated_at = now()
      RETURNING id, user_id, player_name, created_at, updated_at
    `,
    [userId, playerName],
  );

  return mapPlayer(result.rows[0]);
}

export async function getResponses(userId: string) {
  const result = await query<ResponseRow>(
    `
      SELECT id, user_id, knowledge_answers, tactics_answers, completed_at, updated_at
      FROM soccer_iq_responses
      WHERE user_id = $1
    `,
    [userId],
  );

  return result.rows[0] ? mapResponses(result.rows[0]) : null;
}

export async function saveKnowledgeAnswers(userId: string, answers: AnswerMap) {
  const result = await query<ResponseRow>(
    `
      INSERT INTO soccer_iq_responses (user_id, knowledge_answers)
      VALUES ($1, $2::jsonb)
      ON CONFLICT (user_id) DO UPDATE
      SET knowledge_answers = EXCLUDED.knowledge_answers,
          updated_at = now()
      RETURNING id, user_id, knowledge_answers, tactics_answers, completed_at, updated_at
    `,
    [userId, JSON.stringify(answers)],
  );

  return mapResponses(result.rows[0]);
}

export async function saveTacticsAnswers(userId: string, answers: AnswerMap) {
  const result = await query<ResponseRow>(
    `
      INSERT INTO soccer_iq_responses (user_id, tactics_answers, completed_at)
      VALUES ($1, $2::jsonb, now())
      ON CONFLICT (user_id) DO UPDATE
      SET tactics_answers = EXCLUDED.tactics_answers,
          completed_at = now(),
          updated_at = now()
      RETURNING id, user_id, knowledge_answers, tactics_answers, completed_at, updated_at
    `,
    [userId, JSON.stringify(answers)],
  );

  return mapResponses(result.rows[0]);
}

export async function getLessonCompletions(userId: string) {
  const result = await query<CompletionRow>(
    `
      SELECT module_slug, lesson_slug, completed_at
      FROM module_lesson_completions
      WHERE user_id = $1
      ORDER BY completed_at
    `,
    [userId],
  );

  return result.rows.map<ModuleLessonCompletion>((row) => ({
    moduleSlug: row.module_slug,
    lessonSlug: row.lesson_slug,
    completedAt: row.completed_at,
  }));
}

export async function completeLesson(userId: string, moduleSlug: string, lessonSlug: string) {
  const result = await query<CompletionRow>(
    `
      INSERT INTO module_lesson_completions (user_id, module_slug, lesson_slug)
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, module_slug, lesson_slug) DO UPDATE
      SET completed_at = module_lesson_completions.completed_at
      RETURNING module_slug, lesson_slug, completed_at
    `,
    [userId, moduleSlug, lessonSlug],
  );

  const row = result.rows[0];
  return {
    moduleSlug: row.module_slug,
    lessonSlug: row.lesson_slug,
    completedAt: row.completed_at,
  };
}
