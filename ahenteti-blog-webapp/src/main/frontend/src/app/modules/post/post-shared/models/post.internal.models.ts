import { Author } from "../../../user/models/user.internal.models";
import { Page } from "src/app/modules/shared/models/page.model";

export class PostSummary {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  createdAt: Date;
  lastUpdatedAt: Date;
  searchKey: string;
  author: Author;
}

export class Post extends PostSummary {
  bodyMarkdown: string;
}

export class PostsGroup {
  name: string;
  posts: Array<PostSummary> = [];
}

export class PostGroupByStrategy {
  name: string;
  values: Array<string> = [];
}

export class DefaultPost implements Post {
  id = undefined;
  slug = "";
  title = "";
  category = "";
  tags = [];
  createdAt = new Date();
  lastUpdatedAt = new Date();
  searchKey = "";
  author = undefined;
  bodyMarkdown = "";
}

export class OfflinePost implements Post {
  id = undefined;
  slug = "post-title";
  title = "post title";
  category = "post category";
  tags = ["port-tag"];
  createdAt = new Date();
  lastUpdatedAt = new Date();
  searchKey = "";
  author = undefined;
  bodyMarkdown =
    "lorem content: Do amet eu tempor dolor cillum ullamco mollit nulla consectetur anim ut eiusmod aliquip occaecat. Ut sint adipisicing irure ex. Laboris magna excepteur ipsum et proident excepteur ipsum amet. Aliqua cupidatat cupidatat velit velit adipisicing nostrud sit aliqua nisi enim aliqua laboris.";
}

export class PostsByCategory extends Map<string, PostSummary[]> {}
export class PostsSummaries extends Array<PostSummary> {}
export class PostsPage extends Page<PostSummary> {}
export class PostsGroups extends Array<PostsGroup> {}
export class PostGroupByStrategies extends Array<PostGroupByStrategy> {}
