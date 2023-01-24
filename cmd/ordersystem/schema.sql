
CREATE TABLE IF NOT EXISTS public.tasks
(
    id text COLLATE pg_catalog."default",
    title text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    status boolean,
    priority boolean,
    created_at date,
    updated_at date,
    deleted_at date
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tasks
    OWNER to root;