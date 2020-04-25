import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ArticleDashboardPage } from "./pages/article-dashboard/article-dashboard.page";
import { ArticleSummaryComponent } from "./components/article-summary/article-summary.component";
import { ArticlesByCategoryComponent } from "./components/articles-by-category/articles-by-category.component";
import { SearchArticlesComponent } from "./components/search-articles/search-articles.component";
import { ArticlesWelcomeMessageComponent } from "./components/articles-welcome-message/articles-welcome-message.component";
import { Routes, RouterModule } from "@angular/router";
import { ArticleHttpServices } from "./services/article.http.services";
import { ArticleConverter } from "./converters/article.converter";
import { ConsultArticleComponent } from "./pages/consult-article/consult-article.page";
import { TagComponent } from "./components/tag/tag.component";
import { TagListComponent } from "./components/tag/tag-list.component";

const routes: Routes = [
  { path: "", component: ArticleDashboardPage },
  { path: "consult-article/:id", component: ConsultArticleComponent },
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
    ArticleDashboardPage,
    ConsultArticleComponent,
  ],
  exports: [RouterModule],
  providers: [ArticleHttpServices, ArticleConverter],
})
export class ArticleModule {}
