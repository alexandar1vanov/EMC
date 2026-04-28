alter table users add column created_at timestamp not null default now();
alter table users add column updated_at timestamp not null default now();