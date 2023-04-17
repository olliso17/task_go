
CREATE TABLE IF NOT EXISTS public.tasks
(
    id text COLLATE pg_catalog."default",
    title text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    status boolean,
    priority boolean,
    list_id text COLLATE pg_catalog."default",
    created_at text COLLATE pg_catalog."default",
    updated_at text COLLATE pg_catalog."default",
    deleted_at text COLLATE pg_catalog."default",
    isDeleted boolean,
    time_select text COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tasks
    OWNER to root;


CREATE TABLE IF NOT EXISTS public.lists
(
    id text COLLATE pg_catalog."default",
    name text COLLATE pg_catalog."default",
    user_id text COLLATE pg_catalog."default",
    type_task text COLLATE pg_catalog."default",
    created_at text COLLATE pg_catalog."default",
    updated_at text COLLATE pg_catalog."default",
    deleted_at text COLLATE pg_catalog."default",
    isDeleted boolean
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.lists
    OWNER to root;


CREATE TABLE IF NOT EXISTS public.users
(
    id text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    name text COLLATE pg_catalog."default",
    password text COLLATE pg_catalog."default",
    is_Admin boolean,
    created_at text COLLATE pg_catalog."default",
    updated_at text COLLATE pg_catalog."default",
    deleted_at text COLLATE pg_catalog."default",
    is_deleted boolean
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to root;


CREATE TABLE IF NOT EXISTS public.logins
(
    id text COLLATE pg_catalog."default" NOT NULL,
    user_id text COLLATE pg_catalog."default",
    created_at date,
    expired_at date,
    is_expired boolean,
    CONSTRAINT logins_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.logins
    OWNER to root;



