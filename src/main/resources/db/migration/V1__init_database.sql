create sequence t_comments_id_seq
start 1 increment 1;

create sequence t_posts_bodies_id_seq
start 1 increment 1;

create sequence t_posts_id_seq
start 1 increment 1;

create sequence t_users_id_seq
start 1 increment 1;

create table t_comments
(
  id bigint not null default nextval('t_comments_id_seq'),
  created_at timestamp,
  value text not null,
  author_id bigint not null,
  post_id bigint not null,
  primary key (id)
);

create table t_posts
(
  id bigint not null default nextval('t_posts_id_seq'),
  category varchar(255) not null,
  created_at timestamp not null,
  last_updated_at timestamp,
  tags varchar(255) not null,
  title varchar(255) not null,
  author_id bigint not null,
  body_id bigint not null,
  primary key (id)
);

create table t_posts_bodies
(
  id bigint not null default nextval('t_posts_bodies_id_seq'),
  value text not null,
  primary key (id)
);

create table t_users
(
  id bigint not null,
  github_username varchar(255),
  primary key (id)
);

alter table
if exists t_posts
add constraint UK_oy5kuurj0ua601ok5crdsni4q unique (body_id);

alter table
if exists t_comments
add constraint FKhap1hu5fnn0sdipo6hfijsrok foreign key (author_id) references t_users;

alter table
if exists t_comments
add constraint FKn0i8cgtxo6ee64819voiei70o foreign key (post_id) references t_posts;

alter table
if exists t_posts
add constraint FKokccyllx0jvai5gss2lopupm3 foreign key (author_id) references t_users;

alter table
if exists t_posts
add constraint FKrw27s0gpmeikhecl65e10ga2u foreign key (body_id) references t_posts_bodies;

