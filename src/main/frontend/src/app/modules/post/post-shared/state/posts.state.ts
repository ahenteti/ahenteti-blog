import { Injectable } from "@angular/core";
import { ALL_TAGS } from "../../../shared/services/constants.utils";
import {
  PostsGroups,
  PostGroupByStrategies,
  PostsSummaries,
  PostSummary,
  PostsGroup,
  PostGroupByStrategy,
} from "../models/post.internal.models";
import { BehaviorSubject } from "rxjs";
import { PostConverter } from "../services/post.converter";
import { PostHttpServices } from "../services/post.http.services";
import { AlertService } from "src/app/modules/alert/alert.service";
import { GetPostsGroupsApiRequest } from "../models/post.external.models";
import { SetUtils } from "src/app/modules/shared/services/set.utils";
import { NoMoreResourceToLoadError } from "src/app/modules/error/no-more-resources-load.exception";

@Injectable({
  providedIn: "root",
})
export class PostsState {
  private allTags = new BehaviorSubject<Set<string>>(new Set<string>(ALL_TAGS));
  public allTags$ = this.allTags.asObservable();

  private selectedTag = new BehaviorSubject<string>(ALL_TAGS);
  public selectedTag$ = this.selectedTag.asObservable();

  // prettier-ignore
  private loadedPostsGroups = new BehaviorSubject<PostsGroups>(new PostsGroups());
  public loadedPostsGroups$ = this.loadedPostsGroups.asObservable();

  // prettier-ignore
  private displayedPostsGroups = new BehaviorSubject<PostsGroups>(new PostsGroups());
  public displayedPostsGroups$ = this.displayedPostsGroups.asObservable();

  // prettier-ignore
  private postGroupByStrategies = new BehaviorSubject<PostGroupByStrategies>(new PostGroupByStrategies());
  public postGroupByStrategies$ = this.postGroupByStrategies.asObservable();

  private searchText: string = "";
  private selectedGroupByStrategy: PostGroupByStrategy;
  private supportedGroupByStrategiesName = ["category", "author"];
  private defaultGroupByStrategyName = "category";

  private noMorePostsToLoad = false;
  private loadPostsInProgress = false;

  constructor(
    private postConverter: PostConverter,
    private postHttpServices: PostHttpServices,
    private alertService: AlertService
  ) {
    this.init();
  }

  // prettier-ignore
  init(): void {
    const request = this.postConverter.toGetPostGroupByStrategiesApiRequest();
    this.postHttpServices
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
  loadMorePosts(init = false) {
    if (this.noMorePostsToLoad || this.loadPostsInProgress) return;
    try {
      this.loadPostsInProgress = true;
      const getPostsGroupsApiRequest = this.calculateGetPostsGroupsApiRequest();
      this.postHttpServices
        .getPostsGroups(getPostsGroupsApiRequest)
        .then((postsGroups) => this.handleGetPostsGroupsSuccessEvent(postsGroups))
        .catch((error) => this.handleGetPostsGroupsErrorEvent(error))
        .finally(() => this.loadPostsInProgress = false);
    } catch (e) {
      this.handleLoadMorePostsError(e, init);
    }
  }

  addPost(post: PostSummary) {}

  updatePost(post: PostSummary) {}

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
    this.loadMorePosts(true);
  }

  // prettier-ignore
  calculateSelectedGroupByStrategy(): PostGroupByStrategy {
    let groupByStrategy = this.postGroupByStrategies.getValue().find(s => s.name == this.defaultGroupByStrategyName);
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
  private handleGetPostsGroupsSuccessEvent(postsGroups: PostsGroups): any {
    this.loadedPostsGroups.next([...this.loadedPostsGroups.getValue(), ...postsGroups]);
    this.displayedPostsGroups.next(this.loadedPostsGroups.getValue());
    this.recalculateAllTags();
  }

  // prettier-ignore
  private recalculateAllTags() {
    const tags = new Set<string>();
    let loadedPosts = new PostsSummaries();
    this.loadedPostsGroups.getValue().forEach(group => loadedPosts = loadedPosts.concat(group.posts));
    loadedPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    this.allTags.next(new Set([ALL_TAGS, ...SetUtils.sort(tags)]))
  }

  // prettier-ignore
  private calculateGetPostsGroupsApiRequest(): GetPostsGroupsApiRequest {
    const groups = this.calculateNextGroupsToLoad(this.selectedGroupByStrategy.values);
    if (groups.length == 0) throw new NoMoreResourceToLoadError();
    return this.postConverter.toGetPostsGroupsApiRequest(this.selectedGroupByStrategy.name, groups);
  }

  // prettier-ignore
  private calculateNextGroupsToLoad(groupByStrategyValues: Array<string>): Array<string> {
    const loadedGroups = this.loadedPostsGroups.getValue().map(p => p.name);
    let notYetLoadedGroups = groupByStrategyValues.filter(group => loadedGroups.indexOf(group) == -1);
    notYetLoadedGroups = notYetLoadedGroups.sort();
    return notYetLoadedGroups.slice(0, 1);
  }

  // prettier-ignore
  private handleLoadMorePostsError(e: any, init: boolean) {
    if (e instanceof NoMoreResourceToLoadError) {
      this.noMorePostsToLoad = true;
      if (init) {
        this.alertService.info("No posts has been created yet. <br/>Be the first to create the first blog on this website :)");
      }
      else {
        this.alertService.info("No more posts to load");
      }
    }
    else {
      throw e;
    }
  }
}
