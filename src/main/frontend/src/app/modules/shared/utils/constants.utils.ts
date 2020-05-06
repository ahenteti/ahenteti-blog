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
export const WINDOW_LOCATION_BEFORE_LOGIN = "window-location-before-login";
export const IS_BEFORE_RELOAD_USER_WAS_ALREADY_LOGGED_IN =
  "is-before-reload-user-was-already-logged-in";
