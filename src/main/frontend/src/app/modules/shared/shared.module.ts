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
import { AvatarComponent } from "./components/profile-image/avatar.component";
import { TimeAgoPipe } from "time-ago-pipe";

@NgModule({
  entryComponents: [TooltipComponent, QuoteComponent],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    PortalModule,
    MatSelectModule,
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
    AvatarComponent,
    TimeAgoPipe,
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
    AvatarComponent,
    TimeAgoPipe,
  ],
  providers: [ThemeLocalStorageServices],
})
export class SharedModule {}
