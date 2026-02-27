-- Projects Tables
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

create table projects_demos (
   id         uuid primary key default gen_random_uuid(),
   project_id uuid not null
      references projects ( id )
         on delete cascade,
   url        text not null,
   created_at timestamp with time zone default current_timestamp
);

create table stacks (
   id         uuid primary key default gen_random_uuid(),
   name       text not null unique,
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

-- Creating Indexes for faster queries

create index idx_projects_demos_project_id on
   projects_demos (
      project_id
   );

create index idx_project_stacks_project_id on
   project_stacks (
      project_id
   );

create index idx_project_stacks_stack_id on
   project_stacks (
      stack_id
   );