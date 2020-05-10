insert into t_users (id, username, avatar) values (1, 'ahenteti', 'https://avatars3.githubusercontent.com/u/16677361?v=4');

insert into t_post_bodies (id, value) values (1, 'IyMgRGVmaW5pdGlvbg0KPkFuIGlubmVyIGZ1bmN0aW9uIGFsd2F5cyBoYXMgYWNjZXNzIHRvIHRoZSB2YXJzIGFuZCBwYXJhbWV0ZXJzIG9mIGl0cyBvdXRlciBmdW5jdGlvbiwgZXZlbiBhZnRlciB0aGUgb3V0ZXIgZnVuY3Rpb24gaGFzIHJldHVybmVkW0RvdWdsYXMgQ3JvY2tmb3JkXQ0KDQojIyBDbG9zdXJlIGZ1bmN0aW9uDQpgYGBqYXZhc2NyaXB0DQpmdW5jdGlvbiBjbG9zdXJlRnVuY3Rpb24oKSB7DQogICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpOw0KICAgIHJldHVybiBmdW5jdGlvbigpIHsNCiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7DQogICAgfQ0KfQ0KYGBgDQojIyBOb24tY2xvc3VyZSBmdW5jdGlvbg0KYGBgamF2YXNjcmlwdA0KZnVuY3Rpb24gbm9uQ2xvc3VyZUZ1bmN0aW9uKCkgew0KICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTsNCiAgICByZXR1cm4gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTsNCn0NCmBgYA0KDQo=');
insert into t_posts ( 
  id,
  title, 
  category, 
  tags, 
  created_at, 
  last_updated_at, 
  author_id, 
  body_id 
)
values (
  1,
  'Closure functions in Javascript', 
  'javascript', 
  'javascript|closure', 
  '2019-06-23 19:10:25',
  null,
  1,
  1
);
insert into t_post_comments (
  created_at,
  value,
  author_id,
  post_id
)
values (
  '2019-07-10 10:07:25',
  'loremEa veniam tempor aliquip mollit cillum veniam culpa. Occaecat excepteur tempor sint anim et cillum id sint exercitation. Id deserunt ea culpa sunt laboris magna sint nulla magna Lorem ex consequat anim in. Elit sunt qui eiusmod duis adipisicing adipisicing et ea do consequat enim. Sit fugiat irure proident in mollit tempor deserunt ipsum minim consectetur amet ex eu.',
  1,
  1
);
insert into t_post_comments (
  created_at,
  value,
  author_id,
  post_id
)
values (
  '2019-08-10 10:07:25',
  'Incididunt veniam fugiat deserunt sint dolor anim voluptate sit eiusmod esse sunt ex aute. Culpa voluptate non ex dolor eu ea sit proident ea anim quis occaecat. Est qui id ullamco duis. Magna dolore Lorem ex mollit.',
  1,
  1
)
