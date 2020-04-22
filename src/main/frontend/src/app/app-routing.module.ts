import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePage } from "src/app/pages/home/home.page";
import { ConsultArticlePage } from "src/app/pages/consult-article/consult-article.page";

const routes: Routes = [
  { path: "", component: HomePage },
  { path: "consult-articles/:id", component: ConsultArticlePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
