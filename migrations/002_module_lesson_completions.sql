CREATE TABLE IF NOT EXISTS module_lesson_completions (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_slug text NOT NULL,
  lesson_slug text NOT NULL,
  completed_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, module_slug, lesson_slug)
);
