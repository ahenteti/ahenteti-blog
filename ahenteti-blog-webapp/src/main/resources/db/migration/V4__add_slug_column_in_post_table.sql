ALTER TABLE t_posts ADD COLUMN slug VARCHAR;
UPDATE t_posts SET slug = LOWER(REGEXP_REPLACE(title, '\s+', '-', 'g'));
ALTER TABLE t_posts ALTER COLUMN slug SET NOT NULL;