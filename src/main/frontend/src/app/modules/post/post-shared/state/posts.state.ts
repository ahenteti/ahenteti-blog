import { Injectable } from "@angular/core";
import { ALL_TAGS } from "../../../shared/services/constants.utils";
import {
  PostsGroups,
  PostGroupByStrategies,
  PostsSummaries,
  PostSummary,
  PostsGroup,
  PostGroupByStrategy,
  PostsPage,
} from "../models/post.internal.models";
import { BehaviorSubject } from "rxjs";
import { PostConverter } from "../services/post.converter";
import { PostHttpClient } from "../services/post.http-client";
import { AlertService } from "src/app/modules/alert/alert.service";
import { GetPostsGroupsApiRequest } from "../models/post.external.models";
import { SetUtils } from "src/app/modules/shared/services/set.utils";
import { WindowService } from "src/app/modules/shared/services/window.service";
import { NoPostsGroupsToLoadError } from "src/app/modules/shared/models/no-posts-groups-to-load.error";

const GROUP_BY_POST_CATEGORY = "category";
const GROUP_BY_POST_AUTHOR = "author";

@Injectable({
  providedIn: "root",
})
export class PostsState {
  // prettier-ignore
  private allTags = new BehaviorSubject<Set<string>>(new Set<string>([ALL_TAGS]));
  public allTags$ = this.allTags.asObservable();

  private selectedTag = new BehaviorSubject<string>(ALL_TAGS);
  public selectedTag$ = this.selectedTag.asObservable();

  // prettier-ignore
  private loadedPostsGroups = new BehaviorSubject<PostsGroups>(new PostsGroups());
  public loadedPostsGroups$ = this.loadedPostsGroups.asObservable();
  private noMorePosts = new BehaviorSubject<boolean>(false);
  public noMorePosts$ = this.noMorePosts.asObservable();
  private loadPostsInProgress = false;

  // prettier-ignore
  private displayedPostsGroups = new BehaviorSubject<PostsGroups>(new PostsGroups());
  public displayedPostsGroups$ = this.displayedPostsGroups.asObservable();

  // prettier-ignore
  private postGroupByStrategies = new BehaviorSubject<PostGroupByStrategies>(new PostGroupByStrategies());
  public postGroupByStrategies$ = this.postGroupByStrategies.asObservable();

  private searchText: string = "";
  private selectedGroupByStrategy: PostGroupByStrategy;
  private supportedGroupByStrategiesName = ["category", "author"];

  private initialPostsLoad = true;
  private postGroupsToLoadNumber = 2;

  // prettier-ignore
  private userPostsPage = new BehaviorSubject<PostsPage>(new PostsPage());

  constructor(
    private postConverter: PostConverter,
    private postHttpClient: PostHttpClient,
    private alertService: AlertService,
    private windowService: WindowService
  ) {
    this.init();
  }

  // prettier-ignore
  init() {
    const request = this.postConverter.toGetPostGroupByStrategiesApiRequest();
    this.postHttpClient
      .getPostGroupByStrategies(request)
      .then((strategies) => this.handleGetPostGroupByStrategiesSuccessEvent(strategies))
      .catch((error) => this.handleGetPostGroupByStrategiesErrorEvent(error));
  }

  setSearchText(searchText: string) {
    this.searchText = searchText;
    this.calculateDisplayedPostsGroups();
  }

  resetFilters() {
    this.selectedTag.next(ALL_TAGS);
    this.searchText = "";
    this.calculateDisplayedPostsGroups();
  }

  selectTag(tag: string) {
    this.selectedTag.next(tag);
    this.calculateDisplayedPostsGroups();
  }

  // prettier-ignore
  loadMorePosts() {
    if (this.noMorePosts.getValue() || this.loadPostsInProgress) return;
    try {
      this.loadPostsInProgress = true;
      const getPostsGroupsApiRequest = this.calculateGetPostsGroupsApiRequest();
      this.postHttpClient
        .getPostsGroups(getPostsGroupsApiRequest)
        .then((postsGroups) => this.handleGetPostsGroupsSuccessEvent(postsGroups))
        .catch((error) => this.handleGetPostsGroupsErrorEvent(error));
    } catch (e) {
      if (e instanceof NoPostsGroupsToLoadError) {
        console.log('no posts groups to load');
      } else {
        throw e;
      }
    } finally {
      this.loadPostsInProgress = false;
    }
  }

  addPost(post: PostSummary) {
    const postGroup = this.calculatePostGroup(post);
    const postsGroups = new PostsGroups();
    let alreadyExistingGroup = false;
    this.loadedPostsGroups.getValue().forEach((group) => {
      if (group.name === postGroup) {
        const updatedPostsGroup = new PostsGroup();
        updatedPostsGroup.name = group.name;
        updatedPostsGroup.posts = group.posts;
        updatedPostsGroup.posts.push(post);
        postsGroups.push(updatedPostsGroup);
        alreadyExistingGroup = true;
      } else {
        postsGroups.push(group);
      }
    });
    if (!alreadyExistingGroup) {
      const newPostsGroup = new PostsGroup();
      newPostsGroup.name = postGroup;
      newPostsGroup.posts.push(post);
      postsGroups.unshift(newPostsGroup);
    }
    this.loadedPostsGroups.next(postsGroups);
    this.displayedPostsGroups.next(postsGroups);
    this.calculateAllTags();
  }

  updatePost(post: PostSummary) {
    const postsGroups = new PostsGroups();
    this.loadedPostsGroups.getValue().forEach((group) => {
      const postsGroup = new PostsGroup();
      postsGroup.name = group.name;
      group.posts.forEach((originalPost) => {
        if (originalPost.id === post.id) {
          postsGroup.posts.push(post);
        } else {
          postsGroup.posts.push(originalPost);
        }
      });
      postsGroups.push(postsGroup);
    });
    this.loadedPostsGroups.next(postsGroups);
    this.displayedPostsGroups.next(postsGroups);
    this.calculateAllTags();
  }

  deletePost(postId: number) {
    const postsGroupsToKeep = new PostsGroups();
    this.loadedPostsGroups.getValue().forEach((group) => {
      let posts = group.posts.filter((post) => post.id !== postId);
      if (posts.length > 0) {
        let postsGroup = new PostsGroup();
        postsGroup.name = group.name;
        postsGroup.posts = posts;
        postsGroupsToKeep.push(postsGroup);
      }
    });
    this.loadedPostsGroups.next(postsGroupsToKeep);
    this.displayedPostsGroups.next(postsGroupsToKeep);
    this.calculateAllTags();
  }

  private calculateDisplayedPostsGroups() {
    const displayedPostsGroups = new PostsGroups();
    this.loadedPostsGroups.getValue().forEach((group) => {
      let posts = group.posts.filter((post) => this.keepPost(post));
      if (posts.length > 0) {
        let postsGroup = new PostsGroup();
        postsGroup.name = group.name;
        postsGroup.posts = posts;
        displayedPostsGroups.push(postsGroup);
      }
    });
    this.displayedPostsGroups.next(displayedPostsGroups);
  }

  // prettier-ignore
  private keepPost(post: PostSummary): boolean {
    const selectedTag = this.selectedTag.getValue();
    if (selectedTag == ALL_TAGS) {
      if (!this.searchText) {
        return true;
      } else {
        for (let searchWord of this.searchText.split(" ")) {
          if (post.searchKey.toLowerCase().indexOf(searchWord.toLowerCase()) > -1) return true;
        }
        return false;
      }
    } else {
      if (!this.searchText) {
        return post.tags.includes(selectedTag);
      } else {
        for (let searchWord of this.searchText.split(" ")) {
          if (
            post.searchKey.toLowerCase().indexOf(searchWord.toLowerCase()) > -1 &&
            post.tags.includes(selectedTag)
          ) return true;
        }
        return false;
      }
    }
  }

  private handleGetPostGroupByStrategiesErrorEvent(error: any): any {
    console.error(error);
    this.alertService.error("Error while fetching posts :(");
  }

  // prettier-ignore
  private handleGetPostGroupByStrategiesSuccessEvent(strategies: PostGroupByStrategies): any {
    this.postGroupByStrategies.next(strategies);
    this.selectedGroupByStrategy = this.calculateSelectedGroupByStrategy();
    this.loadMorePosts();
  }

  // prettier-ignore
  calculateSelectedGroupByStrategy(): PostGroupByStrategy {
    let groupByStrategy = this.postGroupByStrategies.getValue().find(s => s.name == GROUP_BY_POST_CATEGORY);
    if (groupByStrategy) return groupByStrategy;
    groupByStrategy = this.postGroupByStrategies.getValue().find(s => this.supportedGroupByStrategiesName.includes(s.name));
    if (groupByStrategy) return groupByStrategy;
    throw new Error("No groupBy strategy is supported by the current Angular frontend app");
  }

  private handleGetPostsGroupsErrorEvent(error: any): any {
    console.error(error);
    this.alertService.error("Error while fetching posts :(");
  }

  // prettier-ignore
  private handleGetPostsGroupsSuccessEvent(postsGroups: PostsGroups) {
    this.loadedPostsGroups.next([...this.loadedPostsGroups.getValue(), ...postsGroups]);
    this.displayedPostsGroups.next(this.loadedPostsGroups.getValue());
    if (this.initialPostsLoad) {
      this.initialPostsLoad = false;
    } else {
      this.windowService.scrollToBottom();
    }
    this.calculateAllTags();
  }

  // prettier-ignore
  private calculateAllTags() {
    const tags = new Set<string>();
    let loadedPosts = new PostsSummaries();
    this.loadedPostsGroups.getValue().forEach(group => loadedPosts = loadedPosts.concat(group.posts));
    loadedPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    this.allTags.next(new Set([ALL_TAGS, ...SetUtils.sort(tags)]))
  }

  // prettier-ignore
  private calculateGetPostsGroupsApiRequest(): GetPostsGroupsApiRequest {
    const groups = this.calculateNextGroupsToLoad(this.selectedGroupByStrategy.values);
    return this.postConverter.toGetPostsGroupsApiRequest(this.selectedGroupByStrategy.name, groups);
  }

  // prettier-ignore
  private calculateNextGroupsToLoad(groupByStrategyValues: Array<string>): Array<string> {
    const loadedGroups = this.loadedPostsGroups.getValue().map(p => p.name);
    let notYetLoadedGroups = groupByStrategyValues.filter(group => loadedGroups.indexOf(group) == -1);
    notYetLoadedGroups = notYetLoadedGroups.sort();
    if (notYetLoadedGroups.length <= this.postGroupsToLoadNumber) this.handleNoMorePostsToLoadEvent(notYetLoadedGroups.length);
    return notYetLoadedGroups.slice(0, this.postGroupsToLoadNumber);
  }

  // prettier-ignore
  private handleNoMorePostsToLoadEvent(notYetLoadedGroupsLength: number) {
    this.noMorePosts.next(true);
    if (this.initialPostsLoad) {
      if (notYetLoadedGroupsLength == 0) {
        this.alertService.info("No posts has been created yet. <br/>Be the first to create the first blog on this website :)");
      }
    } else {
      this.alertService.info("No more posts to load");
    }
    if (notYetLoadedGroupsLength == 0) {
      throw new NoPostsGroupsToLoadError()
    }
  }

  private calculatePostGroup(post: PostSummary) {
    if (this.selectedGroupByStrategy.name == GROUP_BY_POST_CATEGORY) {
      return post.category;
    } else {
      return post.author.username;
    }
  }
}
