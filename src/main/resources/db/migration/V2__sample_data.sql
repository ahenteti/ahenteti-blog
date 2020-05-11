insert into t_users (id, username, avatar) values (1, 'ahenteti', 'https://avatars3.githubusercontent.com/u/16677361?v=4');
insert into t_users (id, username, avatar) values (2, 'bob', 'https://avatars3.githubusercontent.com/u/16677361?v=4');

insert into t_post_bodies (id, value) values (1, 'IyMgRGVmaW5pdGlvbg0KPkFuIGlubmVyIGZ1bmN0aW9uIGFsd2F5cyBoYXMgYWNjZXNzIHRvIHRoZSB2YXJzIGFuZCBwYXJhbWV0ZXJzIG9mIGl0cyBvdXRlciBmdW5jdGlvbiwgZXZlbiBhZnRlciB0aGUgb3V0ZXIgZnVuY3Rpb24gaGFzIHJldHVybmVkW0RvdWdsYXMgQ3JvY2tmb3JkXQ0KDQojIyBDbG9zdXJlIGZ1bmN0aW9uDQpgYGBqYXZhc2NyaXB0DQpmdW5jdGlvbiBjbG9zdXJlRnVuY3Rpb24oKSB7DQogICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpOw0KICAgIHJldHVybiBmdW5jdGlvbigpIHsNCiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7DQogICAgfQ0KfQ0KYGBgDQojIyBOb24tY2xvc3VyZSBmdW5jdGlvbg0KYGBgamF2YXNjcmlwdA0KZnVuY3Rpb24gbm9uQ2xvc3VyZUZ1bmN0aW9uKCkgew0KICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTsNCiAgICByZXR1cm4gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTsNCn0NCmBgYA0KDQo=');
insert into t_posts ( 
  title, 
  category, 
  tags, 
  created_at, 
  last_updated_at, 
  author_id, 
  body_id 
)
values (
  'Closure functions in Javascript', 
  'javascript', 
  'javascript|closure', 
  '2019-06-23 19:10:25',
  null,
  1,
  1
);

insert into t_post_bodies (id, value) values (2, 'IyMgRGVmaW5pdGlvbg0KPkFuIGlubmVyIGZ1bmN0aW9uIGFsd2F5cyBoYXMgYWNjZXNzIHRvIHRoZSB2YXJzIGFuZCBwYXJhbWV0ZXJzIG9mIGl0cyBvdXRlciBmdW5jdGlvbiwgZXZlbiBhZnRlciB0aGUgb3V0ZXIgZnVuY3Rpb24gaGFzIHJldHVybmVkW0RvdWdsYXMgQ3JvY2tmb3JkXQ0KDQojIyBDbG9zdXJlIGZ1bmN0aW9uDQpgYGBqYXZhc2NyaXB0DQpmdW5jdGlvbiBjbG9zdXJlRnVuY3Rpb24oKSB7DQogICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpOw0KICAgIHJldHVybiBmdW5jdGlvbigpIHsNCiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7DQogICAgfQ0KfQ0KYGBgDQojIyBOb24tY2xvc3VyZSBmdW5jdGlvbg0KYGBgamF2YXNjcmlwdA0KZnVuY3Rpb24gbm9uQ2xvc3VyZUZ1bmN0aW9uKCkgew0KICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTsNCiAgICByZXR1cm4gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTsNCn0NCmBgYA0KDQo=');
insert into t_posts ( 
  title, 
  category, 
  tags, 
  created_at, 
  last_updated_at, 
  author_id, 
  body_id 
)
values (
  'How to build Graph structure in java', 
  'java', 
  'java|graph', 
  '2019-09-17 10:10:25',
  null,
  1,
  2
);

insert into t_post_bodies (id, value) values (3, 'IyMgRGVmaW5pdGlvbg0KPkFuIGlubmVyIGZ1bmN0aW9uIGFsd2F5cyBoYXMgYWNjZXNzIHRvIHRoZSB2YXJzIGFuZCBwYXJhbWV0ZXJzIG9mIGl0cyBvdXRlciBmdW5jdGlvbiwgZXZlbiBhZnRlciB0aGUgb3V0ZXIgZnVuY3Rpb24gaGFzIHJldHVybmVkW0RvdWdsYXMgQ3JvY2tmb3JkXQ0KDQojIyBDbG9zdXJlIGZ1bmN0aW9uDQpgYGBqYXZhc2NyaXB0DQpmdW5jdGlvbiBjbG9zdXJlRnVuY3Rpb24oKSB7DQogICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpOw0KICAgIHJldHVybiBmdW5jdGlvbigpIHsNCiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7DQogICAgfQ0KfQ0KYGBgDQojIyBOb24tY2xvc3VyZSBmdW5jdGlvbg0KYGBgamF2YXNjcmlwdA0KZnVuY3Rpb24gbm9uQ2xvc3VyZUZ1bmN0aW9uKCkgew0KICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTsNCiAgICByZXR1cm4gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTsNCn0NCmBgYA0KDQo=');
insert into t_posts ( 
  title, 
  category, 
  tags, 
  created_at, 
  last_updated_at, 
  author_id, 
  body_id 
)
values (
  'How to run a jar file from command line', 
  'java', 
  'java|jar', 
  '2020-03-02 14:37:25',
  null,
  2,
  3
);
