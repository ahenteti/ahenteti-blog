import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FancyTitleComponent } from "./components/fancy-title/fancy-title.component";
import { LogoLinkComponent } from "./components/logo/logo-link.component";
import { NavBarComponent } from "./components/navbar/navbar.component";
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
import { HttpClientModule } from "@angular/common/http";
import { UserHttpServices } from "./services/user.http.services";
import { UserState } from "./state/user.state";
import { UserConverter } from "./converter/user.converter";
import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
import { MatMenuModule } from "@angular/material/menu";
import { TextareaAutoGrowDirective } from "./directives/textarea-auto-grow.directive";
import { TextareaDisableSpellCheckDirective } from "./directives/textarea-disable-spellcheck.directive";
import { LoginWithGithubComponent } from "./components/login-with-github/login-with-github.component";
import { UserLoginServices } from "./services/user.login.services";
import { UserObservableService } from "./services/user-observable.service";
import { FormsModule } from "@angular/forms";

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
    NavBarComponent,
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
    UserAvatarComponent,
    TextareaAutoGrowDirective,
    TextareaDisableSpellCheckDirective,
    LoginWithGithubComponent,
  ],
  exports: [
    FancyTitleComponent,
    LogoLinkComponent,
    NavBarComponent,
    SelectComponent,
    SelectOptionComponent,
    SlideInDirective,
    TooltipDirective,
    QuoteComponent,
    OverlayModule,
    PortalModule,
    MatSelectModule,
    RouterModule,
    ErrorComponent,
    WarnComponent,
    InfoComponent,
    MarkdownComponent,
    FirstLetterPipe,
    TimeAgoPipe,
    HttpClientModule,
    UserAvatarComponent,
    MatMenuModule,
    TextareaAutoGrowDirective,
    TextareaDisableSpellCheckDirective,
    LoginWithGithubComponent,
    FormsModule,
  ],
  providers: [
    ThemeLocalStorageServices,
    UserConverter,
    UserHttpServices,
    UserState,
    UserLoginServices,
  ],
})
export class SharedModule {}
