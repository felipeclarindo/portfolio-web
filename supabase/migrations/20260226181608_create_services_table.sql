-- EXTENSIONS
create extension if not exists "pgcrypto";

-------------------------------------------------
-- ENUM STATUS
-------------------------------------------------

create type request_status as enum (
   'new',
   'reviewing',
   'accepted',
   'rejected'
);

-------------------------------------------------
-- SERVICES
-------------------------------------------------

create table services (
   id uuid primary key default gen_random_uuid(),

   slug text unique not null,

   title_pt text not null,
   title_en text not null,

   description_pt text,
   description_en text,

   stacks text[],

   is_active boolean default true,

   order_position integer default 0,

   metadata jsonb,

   created_at timestamptz default now(),
   updated_at timestamptz default now()
);

create index idx_services_slug
on services(slug);

create index idx_services_order
on services(order_position);

create index idx_services_active
on services(is_active);

-------------------------------------------------
-- SERVICES REQUEST
-------------------------------------------------

create table services_request (
   id uuid primary key default gen_random_uuid(),

   service_id uuid not null
      references services(id)
      on delete cascade,

   name text not null,
   email text not null,
   company text,
   message text,

   status request_status default 'new',

   metadata jsonb,

   created_at timestamptz default now(),
   updated_at timestamptz default now()
);

create index idx_request_service
on services_request(service_id);

create index idx_request_status
on services_request(status);

create index idx_request_created
on services_request(created_at desc);

-------------------------------------------------
-- TRIGGER updated_at
-------------------------------------------------

create or replace function update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
   new.updated_at = now();
   return new;
end;
$$;

create trigger trg_services_updated
before update on services
for each row
execute procedure update_updated_at_column();

create trigger trg_services_request_updated
before update on services_request
for each row
execute procedure update_updated_at_column();

-------------------------------------------------
-- RLS
-------------------------------------------------

alter table services enable row level security;
alter table services_request enable row level security;

-------------------------------------------------
-- SERVICES POLICIES
-------------------------------------------------

create policy "Public read services"
on services
for select
to anon
using (is_active = true);

create policy "Admin full access services"
on services
for all
to authenticated
using (true)
with check (true);

-------------------------------------------------
-- REQUEST POLICIES
-------------------------------------------------

create policy "Public insert request"
on services_request
for insert
to anon
with check (true);

create policy "Admin manage requests"
on services_request
for all
to authenticated
using (true)
with check (true);