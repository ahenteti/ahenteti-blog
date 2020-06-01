create table t_feedback 
(
    id bigint not null default nextval('hibernate_sequence'),
    created_at timestamp not null,
    value text not null,
    author_id bigint not null,
    primary key (id)
);

alter table 
if exists t_feedback add constraint FKlhvnl0hsk3fkmiq5hw1i4ljr4 
foreign key (author_id) references t_users;
