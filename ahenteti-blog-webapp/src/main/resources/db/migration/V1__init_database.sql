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
  join_at timestamp,
  primary key (id)
);

create table t_roles 
(
    id bigint not null default nextval('hibernate_sequence'), 
    name varchar(255), 
    primary key (id)
);

create table t_user_role 
(
    user_id bigint not null default nextval('hibernate_sequence'),
    role_id bigint not null default nextval('hibernate_sequence')
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

alter table 
if exists t_user_role
add constraint FKeu3341s63d3junskh7qsnmf39 foreign key (role_id) references t_roles;

alter table 
if exists t_user_role 
add constraint FK3egxedenh4m4v816i0y8tvvd foreign key (user_id) references t_users;

insert into t_roles (id, name) 
values (1, 'ADMIN');

insert into t_roles (id, name) 
values (2, 'USER');

insert into t_users (id, username, avatar, provider, join_at) 
values (3, 'ahenteti', 'https://avatars3.githubusercontent.com/u/16677361?v=4', 'github', '2020-04-19 17:00:00');

insert into t_user_role (user_id, role_id) 
values (3, 1);

alter sequence hibernate_sequence restart with 4;

