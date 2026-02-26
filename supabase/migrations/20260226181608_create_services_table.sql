create table services (
   id             uuid primary key default gen_random_uuid(),
   title_pt       text not null,
   title_en       text not null,
   description_pt text,
   description_en text,
   stacks         text,
   created_at     timestamp with time zone default current_timestamp
)

create table services_request (
   id         uuid primary key default gen_random_uuid(),
   service_id uuid not null
      references services ( id )
         on delete cascade,
   name       text not null,
   email      text not null,
   message    text,
   created_at timestamp with time zone default current_timestamp
)