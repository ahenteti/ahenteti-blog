create sequence hibernate_sequence 
start 1 increment 1;

create table t_post_comments
(
  id bigint not null default nextval('hibernate_sequence'),
  created_at timestamp,
  value text not null,
  author_id bigint not null,
  post_id bigint not null,
  primary key (id)
);

create table t_posts
(
  id bigint not null default nextval('hibernate_sequence'),
  category varchar(255) not null,
  created_at timestamp not null,
  last_updated_at timestamp,
  tags varchar(255) not null,
  title varchar(255) not null,
  author_id bigint not null,
  body_id bigint not null,
  primary key (id)
);

create table t_post_bodies
(
  id bigint not null default nextval('hibernate_sequence'),
  value text not null,
  primary key (id)
);

create table t_users
(
  id bigint not null default nextval('hibernate_sequence'),
  username varchar(255),
  avatar varchar(255),
  provider varchar(255),
  primary key (id)
);

alter table
if exists t_posts
add constraint UK_oy5kuurj0ua601ok5crdsni4q unique (body_id);

alter table
if exists t_post_comments
add constraint FKhap1hu5fnn0sdipo6hfijsrok foreign key (author_id) references t_users;

alter table
if exists t_post_comments
add constraint FKn0i8cgtxo6ee64819voiei70o foreign key (post_id) references t_posts;

alter table
if exists t_posts
add constraint FKokccyllx0jvai5gss2lopupm3 foreign key (author_id) references t_users;

alter table
if exists t_posts
add constraint FKrw27s0gpmeikhecl65e10ga2u foreign key (body_id) references t_post_bodies;

insert into t_users (id, username, avatar, provider) 
values (1, 'ahenteti', 'https://avatars3.githubusercontent.com/u/16677361?v=4', 'github');

