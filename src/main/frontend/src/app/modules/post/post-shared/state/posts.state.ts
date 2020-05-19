import { Injectable } from "@angular/core";
import { ALL_TAGS } from "../../../shared/services/constants.utils";
import {
  PostsGroups,
  PostGroupByStrategies,
  PostsSummaries,
  PostSummary,
  PostsGroup,
} from "../models/post.internal.models";
import { BehaviorSubject } from "rxjs";
import { PostConverter } from "../services/post.converter";
import { PostHttpServices } from "../services/post.http.services";
import { AlertService } from "src/app/modules/alert/alert.service";
import { GetPostsGroupsApiRequest } from "../models/post.external.models";
import { SetUtils } from "src/app/modules/shared/services/set.utils";

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
    const getPostsGroupsApiRequest = this.calculateGetPostsGroupsApiRequest();
    this.postHttpServices
      .getPostsGroups(getPostsGroupsApiRequest)
      .then((postsGroups) => this.handleGetPostsGroupsSuccessEvent(postsGroups))
      .catch((error) => this.handleGetPostsGroupsErrorEvent(error));
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
    const groupByPostCategory = this.postGroupByStrategies.getValue().find(s => s.name == 'category');
    if (groupByPostCategory) {
      const groups = this.calculateNextGroupsToLoad(groupByPostCategory.values);
      return this.postConverter.toGetPostsGroupsApiRequest(groupByPostCategory.name, groups);
    } else if (this.postGroupByStrategies.getValue().length > 0) {
      const groupByStrategy = this.postGroupByStrategies.getValue()[0];
      const groups = this.calculateNextGroupsToLoad(groupByStrategy.values);
      return this.postConverter.toGetPostsGroupsApiRequest(groupByPostCategory.name, groups);
    } else {
      throw new Error("No post groupBy strategy");
    }
  }

  // prettier-ignore
  private calculateNextGroupsToLoad(groupByStrategyValues: Array<string>): Array<string> {
    const loadedGroups = this.loadedPostsGroups.getValue().map(p => p.name);
    let notYetLoadedGroups = groupByStrategyValues.filter(group => loadedGroups.indexOf(group) == -1);
    notYetLoadedGroups = notYetLoadedGroups.sort();
    return notYetLoadedGroups.slice(0, 2);
  }
}
