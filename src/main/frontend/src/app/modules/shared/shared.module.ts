import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionTitleComponent } from "./components/section-title/section-title.component";
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
import { LoaderComponent } from "./components/loader/loader.component";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { RouterLinkComponent } from "./components/router-link/router-link.component";
import { NewButtonComponent } from "./components/new-button/new-button.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PageTitleComponent } from "./components/page-title/page-title.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { EditButtonComponent } from "./components/edit-button/edit-button.component";
import { ConsultButtonComponent } from "./components/consult-button/consult-button.component";
import { SimplemdeModule } from "ng2-simplemde";
import { EditButtonLinkComponent } from "./components/edit-button/edit-button-link.component";
import { ConsultButtonLinkComponent } from "./components/consult-button/consult-button-link.component";
import { DeleteButtonComponent } from "./components/delete-button/delete-button.component";

@NgModule({
  entryComponents: [TooltipComponent, QuoteComponent],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    PortalModule,
    HttpClientModule,
    FormsModule,
    SimplemdeModule.forRoot(),
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
  ],
  declarations: [
    SectionTitleComponent,
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
    LoaderComponent,
    RouterLinkComponent,
    NewButtonComponent,
    PageTitleComponent,
    EditButtonComponent,
    ConsultButtonComponent,
    EditButtonLinkComponent,
    ConsultButtonLinkComponent,
    DeleteButtonComponent,
  ],
  exports: [
    RouterModule,
    OverlayModule,
    PortalModule,
    HttpClientModule,
    FormsModule,
    SimplemdeModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,

    SectionTitleComponent,
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
    LoaderComponent,
    RouterLinkComponent,
    NewButtonComponent,
    PageTitleComponent,
    EditButtonComponent,
    ConsultButtonComponent,
    EditButtonLinkComponent,
    ConsultButtonLinkComponent,
    DeleteButtonComponent,
  ],
})
export class SharedModule {}
