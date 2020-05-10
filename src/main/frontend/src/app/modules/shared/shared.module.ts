import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FancyTitleComponent } from "./components/fancy-title/fancy-title.component";
import { LogoLinkComponent } from "./components/logo/logo-link.component";
import { SelectComponent } from "./components/select/select.component";
import { SelectOptionComponent } from "./components/select/select-option/select-option.component";
import { SelectDropdownComponent } from "./components/select/select-dropdown/select-dropdown.component";
import { SlideInDirective } from "./directives/slidein/slidein.directive";
import { TooltipComponent } from "./directives/tooltip/tooltip.component";
import { TooltipDirective } from "./directives/tooltip/tooltip.directive";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { ThemeLocalStorageServices } from "./services/theme.localstorage.services";
import { TextWithIconComponent } from "./components/text-with-icon/text-with-icon.component";
import { QuoteComponent } from "./components/text-with-icon/quote.component";
import { ErrorComponent } from "./components/text-with-icon/error.component";
import { WarnComponent } from "./components/text-with-icon/warn.component";
import { InfoComponent } from "./components/text-with-icon/info.component";
import { MarkdownComponent } from "./components/markdown/markdown.component";
import { FirstLetterPipe } from "./pipes/first-letter.pipe";
import { TimeAgoPipe } from "time-ago-pipe";
import { MatMenuModule } from "@angular/material/menu";
import { TextareaAutoGrowDirective } from "./directives/textarea-auto-grow.directive";
import { TextareaDisableSpellCheckDirective } from "./directives/textarea-disable-spellcheck.directive";
import { LoginWithGithubComponent } from "./components/login-with-github/login-with-github.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  entryComponents: [TooltipComponent, QuoteComponent],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    PortalModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    FancyTitleComponent,
    LogoLinkComponent,
    SelectComponent,
    SelectOptionComponent,
    SelectDropdownComponent,
    SlideInDirective,
    TooltipComponent,
    TooltipDirective,
    TextWithIconComponent,
    QuoteComponent,
    ErrorComponent,
    WarnComponent,
    InfoComponent,
    MarkdownComponent,
    FirstLetterPipe,
    TimeAgoPipe,
    TextareaAutoGrowDirective,
    TextareaDisableSpellCheckDirective,
    LoginWithGithubComponent,
  ],
  exports: [
    RouterModule,
    OverlayModule,
    PortalModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,

    FancyTitleComponent,
    LogoLinkComponent,
    SelectComponent,
    SelectOptionComponent,
    SlideInDirective,
    TooltipDirective,
    QuoteComponent,
    ErrorComponent,
    WarnComponent,
    InfoComponent,
    MarkdownComponent,
    FirstLetterPipe,
    TimeAgoPipe,
    TextareaAutoGrowDirective,
    TextareaDisableSpellCheckDirective,
    LoginWithGithubComponent,
  ],
  providers: [ThemeLocalStorageServices],
})
export class SharedModule {}
