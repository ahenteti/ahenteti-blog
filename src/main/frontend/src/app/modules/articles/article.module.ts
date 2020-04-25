import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ArticleDashboardPage } from "./pages/article-dashboard/article-dashboard.page";
import { ArticleSummaryComponent } from "./pages/article-dashboard/article-summary/article-summary.component";
import { ArticlesByCategoryComponent } from "./pages/article-dashboard/articles-by-category/articles-by-category.component";
import { SearchArticlesComponent } from "./pages/article-dashboard/search-articles/search-articles.component";
import { ArticlesWelcomeMessageComponent } from "./pages/article-dashboard/articles-welcome-message/articles-welcome-message.component";
import { Routes, RouterModule } from "@angular/router";
import { ArticleHttpServices } from "./article.http.services";
import { ArticleConverter } from "./article.converter";

const routes: Routes = [{ path: "", component: ArticleDashboardPage }];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    ArticleSummaryComponent,
    ArticlesByCategoryComponent,
    SearchArticlesComponent,
    ArticlesWelcomeMessageComponent,
    ArticleDashboardPage,
  ],
  exports: [RouterModule, ArticleDashboardPage],
  providers: [ArticleHttpServices, ArticleConverter],
})
export class ArticleModule {}
