create table projects (
   id             uuid primary key default gen_random_uuid(),
   title_pt       text not null,
   title_en       text not null,
   description_pt text,
   description_en text,
   github_url     text,
   host_url       text,
   created_at     timestamp with time zone default current_timestamp
);

create table projects_demonstrations (
   id         uuid primary key default gen_random_uuid(),
   project_id uuid not null
      references projects ( id )
         on delete cascade,
   url        text not null,
   created_at timestamp with time zone default current_timestamp
);

create table stacks (
   id         uuid primary key default gen_random_uuid(),
   name       text not null,
   created_at timestamp with time zone default current_timestamp
);

create table project_stacks (
   project_id uuid
      references projects ( id )
         on delete cascade,
   stack_id   uuid
      references stacks ( id )
         on delete cascade,
   primary key ( project_id,
                 stack_id )
);