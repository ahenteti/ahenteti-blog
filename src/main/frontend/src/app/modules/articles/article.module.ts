import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ArticleDashboardPage } from "./pages/article-dashboard/article-dashboard.page";
import { ArticleSummaryComponent } from "./components/article-summary/article-summary.component";
import { ArticlesByCategoryComponent } from "./components/articles-by-category/articles-by-category.component";
import { SearchArticlesComponent } from "./components/search-articles/search-articles.component";
import { ArticlesWelcomeMessageComponent } from "./components/articles-welcome-message/articles-welcome-message.component";
import { Routes, RouterModule } from "@angular/router";
import { ArticleHttpServicesMock } from "./services/article.http.services.mock";
import { ArticleConverter } from "./converters/article.converter";
import { ConsultArticlePage } from "./pages/consult-article/consult-article.page";
import { TagComponent } from "./components/tag/tag.component";
import { TagListComponent } from "./components/tag/tag-list.component";
import { ArticleHttpServices } from "./services/article.http.services";
import { ArticleLayoutComponent } from "./components/article-layout/article-layout.component";
import { ArticleTitleComponent } from "./components/article-title/article-title.component";
import { ArticleContentComponent } from "./components/article-content/article-content.component";

const routes: Routes = [
  { path: "", component: ArticleDashboardPage },
  { path: "consult-article/:id", component: ConsultArticlePage },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    TagComponent,
    TagListComponent,
    ArticleSummaryComponent,
    ArticlesByCategoryComponent,
    SearchArticlesComponent,
    ArticlesWelcomeMessageComponent,
    ArticleLayoutComponent,
    ArticleTitleComponent,
    ArticleContentComponent,
    ArticleDashboardPage,
    ConsultArticlePage,
  ],
  exports: [RouterModule],
  providers: [
    { provide: ArticleHttpServices, useClass: ArticleHttpServicesMock },
    ArticleConverter,
  ],
})
export class ArticleModule {}
