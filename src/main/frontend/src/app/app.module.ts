import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LogoLinkComponent } from "../components/logo/logo-link.component";
import { NavBarComponent } from "../components/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TooltipDirective } from "src/components/tooltip/tooltip.directive";
import { IThemeService } from "src/services/theme/theme.service";
import { ConsultArticlePage } from "src/pages/consult-article/consult-article.page";
import { HomePage } from "src/pages/home/home.page";
import { ThemeServiceImpl } from "src/services/theme/theme.service.impl";
import { WelcomeMessageComponent } from "src/pages/home/components/welcome-message/welcome-message.component";
import { SelectComponent } from "src/components/select/select.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { TooltipComponent } from "src/components/tooltip/tooltip.component";
import { SelectOptionComponent } from "src/components/select/select-option/select-option.component";
import { SearchArticlesComponent } from "src/pages/home/components/search-articles/search-articles.component";
import { SelectDropdownComponent } from "src/components/select/select-dropdown/select-dropdown.component";
import { IArticleService } from "src/services/article/article.service";
import { ArticleServiceMock } from "src/services/article/article.service.mock";
import { FancyTitleComponent } from "src/components/fancy-title/fancy-title.component";
import { ArticlesByCategoryComponent } from "src/pages/home/components/articles-by-category/articles-by-category.component";
import { ArticleSummaryComponent } from "src/components/article-summary/article-summary.component";
import { TagsComponent } from "src/components/tag/tags.component";
import { SlideInDirective } from "src/components/slidein/slidein.directive";
import { ArticleSummaryConverter } from "src/converters/article-summary.converter";

@NgModule({
  entryComponents: [TooltipComponent],
  declarations: [
    AppComponent,
    LogoLinkComponent,
    NavBarComponent,
    TooltipComponent,
    TooltipDirective,
    HomePage,
    ConsultArticlePage,
    WelcomeMessageComponent,
    SelectComponent,
    SelectOptionComponent,
    SearchArticlesComponent,
    SelectDropdownComponent,
    FancyTitleComponent,
    ArticlesByCategoryComponent,
    ArticleSummaryComponent,
    TagsComponent,
    SlideInDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    PortalModule,
    MatSelectModule,
  ],
  providers: [
    { provide: IThemeService, useClass: ThemeServiceImpl },
    { provide: IArticleService, useClass: ArticleServiceMock },
    ArticleSummaryConverter,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
