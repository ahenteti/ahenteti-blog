import { ConnectedPosition } from "@angular/cdk/overlay";

export const LOCAL_STORAGE_WEBSITE_THEME_KEY = "website-theme";
export const DARK_THEME = "dark";
export const LIGHT_THEME = "light";
export const DEFAULT_THEME = DARK_THEME;
export const OVERLAY_POSITION_TOP: ConnectedPosition = {
  originX: "center",
  originY: "top",
  overlayX: "center",
  overlayY: "bottom",
};

export const OVERLAY_POSITION_BOTTOM: ConnectedPosition = {
  originX: "center",
  originY: "bottom",
  overlayX: "center",
  overlayY: "top",
};

export const PAGE_CONTENT_READY_EVENT = "page-content-ready-event";
export const ALL_TAGS = "all";
export const URL_BEFORE_LOGIN_COOKIE_NAME = "url_before_login";
export const SIMPLEMDE_CONFIG = {
  spellChecker: false,
  toolbar: [
    "bold",
    "italic",
    "heading",
    "|",
    "quote",
    "unordered-list",
    "ordered-list",
    "|",
    "link",
    "code",
    {
      name: "multiple-file-code",
      action: function customFunction(editor) {
        console.log(editor);
      },
      className: "fa fa-columns",
      title: "multiple file code",
    },
    "table",
    "|",
    {
      name: "info",
      action: function customFunction(editor) {
        console.log(editor);
      },
      className: "fa fa-info",
      title: "Info message",
    },
    {
      name: "warn",
      action: function customFunction(editor) {
        console.log(editor);
      },
      className: "fa fa-exclamation",
      title: "Warn message",
    },
    {
      name: "error",
      action: function customFunction(editor) {
        console.log(editor);
      },
      className: "fa fa-exclamation-triangle",
      title: "Error message",
    },
    "guide",
  ],
};
