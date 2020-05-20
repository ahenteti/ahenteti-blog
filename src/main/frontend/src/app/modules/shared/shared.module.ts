import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionTitleComponent } from "./components/text/section-title/section-title.component";
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
import { TextWithIconComponent } from "./components/text/text-with-icon/text-with-icon.component";
import { QuoteComponent } from "./components/text/text-with-icon/quote.component";
import { ErrorComponent } from "./components/text/text-with-icon/error.component";
import { WarnComponent } from "./components/text/text-with-icon/warn.component";
import { InfoComponent } from "./components/text/text-with-icon/info.component";
import { MarkdownComponent } from "./components/markdown/markdown.component";
import { FirstLetterPipe } from "./pipes/first-letter.pipe";
import { TimeAgoPipe } from "time-ago-pipe";
import { MatMenuModule } from "@angular/material/menu";
import { TextareaAutoGrowDirective } from "./directives/textarea-auto-grow.directive";
import { TextareaDisableSpellCheckDirective } from "./directives/textarea-disable-spellcheck.directive";
import { LoginWithGithubComponent } from "./components/login-with-github/login-with-github.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { RouterLinkComponent } from "./components/router-link/router-link.component";
import { NewButtonComponent } from "./components/buttons/new-button/new-button.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PageTitleComponent } from "./components/text/page-title/page-title.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { EditButtonComponent } from "./components/buttons/edit-button/edit-button.component";
import { ConsultButtonComponent } from "./components/buttons/consult-button/consult-button.component";
import { SimplemdeModule } from "ng2-simplemde";
import { EditButtonLinkComponent } from "./components/buttons/edit-button/edit-button-link.component";
import { ConsultButtonLinkComponent } from "./components/buttons/consult-button/consult-button-link.component";
import { DeleteButtonComponent } from "./components/buttons/delete-button/delete-button.component";
import { InputDisableAutoCompleteDirective } from "./directives/input-disable-autocomplete.directive";
import { PreviousButtonComponent } from "./components/buttons/previous-button/previous-button.component";
import { NextButtonComponent } from "./components/buttons/next-button/next-button.component";
import { LoadMoreButtonComponent } from "./components/buttons/load-more-button/load-more-button.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "./components/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  entryComponents: [
    TooltipComponent,
    QuoteComponent,
    ConfirmationDialogComponent,
  ],
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
    MatDialogModule,
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
    RouterLinkComponent,
    NewButtonComponent,
    PageTitleComponent,
    EditButtonComponent,
    ConsultButtonComponent,
    EditButtonLinkComponent,
    ConsultButtonLinkComponent,
    DeleteButtonComponent,
    InputDisableAutoCompleteDirective,
    PreviousButtonComponent,
    NextButtonComponent,
    LoadMoreButtonComponent,
    ConfirmationDialogComponent,
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
    MatDialogModule,

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
    RouterLinkComponent,
    NewButtonComponent,
    PageTitleComponent,
    EditButtonComponent,
    ConsultButtonComponent,
    EditButtonLinkComponent,
    ConsultButtonLinkComponent,
    DeleteButtonComponent,
    InputDisableAutoCompleteDirective,
    PreviousButtonComponent,
    NextButtonComponent,
    LoadMoreButtonComponent,
    ConfirmationDialogComponent,
  ],
})
export class SharedModule {}
