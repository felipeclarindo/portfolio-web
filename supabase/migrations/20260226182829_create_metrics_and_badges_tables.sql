create table badges (
   id             serial primary key,
   name_pt        varchar(255) not null,
   name_en        varchar(255) not null,
   description_pt text,
   description_en text,
   image_url      varchar(255),
   created_at     timestamp with time zone default current_timestamp
);

create table metrics (
   id         serial primary key,
   name_pt    varchar(255) not null,
   name_en    varchar(255) not null,
   value      text,
   created_at timestamp with time zone default current_timestamp
)