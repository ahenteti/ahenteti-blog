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

@NgModule({
  entryComponents: [TooltipComponent],
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
  ],
  exports: [
    FancyTitleComponent,
    LogoLinkComponent,
    NavBarComponent,
    SelectComponent,
    SelectOptionComponent,
    SlideInDirective,
    TooltipDirective,
    OverlayModule,
    PortalModule,
    MatSelectModule,
    RouterModule,
  ],
  providers: [ThemeLocalStorageServices],
})
export class SharedModule {}
