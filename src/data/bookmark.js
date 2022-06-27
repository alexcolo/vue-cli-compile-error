const BOOKMARK_KEY = "STARTUP_BOOKMARK";

export function getBookmark() {
  return JSON.parse(window.localStorage.getItem(BOOKMARK_KEY));
}

export function setStartupBookmark(bookmarks) {
  window.localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
}

export default {
  get: getBookmark,
  set: setStartupBookmark
};
