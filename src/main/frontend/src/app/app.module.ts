import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LogoLinkComponent } from "./components/logo/logo-link.component";
import { NavBarComponent } from "./components/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TooltipDirective } from "src/app/components/tooltip/tooltip.directive";
import { IThemeService } from "src/app/services/theme/theme.service";
import { ConsultArticlePage } from "src/app/pages/consult-article/consult-article.page";
import { HomePage } from "src/app/pages/home/home.page";
import { ThemeServiceImpl } from "src/app/services/theme/theme.service.impl";
import { WelcomeMessageComponent } from "src/app/pages/home/welcome-message/welcome-message.component";
import { SelectComponent } from "src/app/components/select/select.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { TooltipComponent } from "src/app/components/tooltip/tooltip.component";
import { SelectOptionComponent } from "src/app/components/select/select-option/select-option.component";
import { SearchArticlesComponent } from "src/app/pages/home/search-articles/search-articles.component";
import { SelectDropdownComponent } from "src/app/components/select/select-dropdown/select-dropdown.component";
import { IArticleService } from "src/app/services/article/article.service";
import { ArticleServiceMock } from "src/app/services/article/article.service.mock";
import { FancyTitleComponent } from "src/app/components/fancy-title/fancy-title.component";
import { ArticlesByCategoryComponent } from "src/app/pages/home/articles-by-category/articles-by-category.component";
import { ArticleSummaryComponent } from "src/app/components/article-summary/article-summary.component";
import { TagsComponent } from "src/app/components/tag/tags.component";
import { SlideInDirective } from "src/app/components/slidein/slidein.directive";
import { ArticleSummaryConverter } from "src/app/converters/article-summary.converter";
import { TagComponent } from "src/app/components/tag/tag.component";

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
    TagComponent,
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
