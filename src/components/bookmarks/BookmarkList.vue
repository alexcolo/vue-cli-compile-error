<template>
  <v-list nav v-if="bookmarks && bookmarks.length" id="bookmark-list">
    <v-list-item-group>
      <v-list-item
        :key="i"
        :id="bookmark.id"
        v-for="(bookmark, i) in bookmarks"
        @click="applyBookmark(bookmark.id)"
      >
        <v-list-item-icon
          class="mr-1 align-self-center"
          v-if="isStartupBookmark(bookmark)"
        >
          <v-icon small>mdi-rocket-launch</v-icon>
        </v-list-item-icon>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-list-item-content v-on="on">
              <v-list-item-title>
                {{ bookmark.title }}
              </v-list-item-title>
              <v-list-item-subtitle
                v-text="bookmark.description"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>
          <div>
            <span>{{ bookmark.title }}</span>
            <span v-if="isStartupBookmark(bookmark)">
              &nbsp;(Startup Bookmark)
            </span>
            <span v-if="bookmark.description">
              <v-divider />
              {{ bookmark.description }}
            </span>
          </div>
        </v-tooltip>
        <v-list-item-action @click="editBookmark(bookmark)">
          <v-btn
            icon
            :disabled="!!applyingBookmarkId"
            :loading="applyingBookmarkId === bookmark.id"
          >
            <v-icon icon small class="float-right">mdi-pencil</v-icon>
            <template v-slot:loader>
              <v-progress-circular :size="16" :width="2" indeterminate />
            </template>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </v-list>
  <v-card-text v-else class="pt-2">
    <span v-if="bookmarks">
      {{ $t("message.emptyBookmarks") }}
    </span>
    <v-skeleton-loader v-else type="list-item@4" class="mx-auto" />
  </v-card-text>
</template>

<script>
import { getters } from "@/store";
import { applyBookmarkToApp } from "@/services/bookmark-service";

export default {
  name: "BookmarkList",

  data() {
    return {
      applyingBookmarkId: ""
    };
  },

  computed: {
    startupBookmark: function() {
      return getters.getStartupBookmark(this.currentApp);
    },
    currentApp: function() {
      return getters.qlikCurrentApp();
    },
    bookmarks: function() {
      return getters.getAppBookmarks(this.currentApp);
    }
  },

  methods: {
    applyBookmark: async function(bookmarkId) {
      this.applyingBookmarkId = bookmarkId;
      await applyBookmarkToApp(this.currentApp, bookmarkId);
      this.applyingBookmarkId = "";
      this.$emit("close-bookmarks");
    },
    editBookmark: function(bookmark) {
      this.$emit("edit-bookmark", bookmark);
    },
    isStartupBookmark: function(bookmark) {
      return bookmark.id === this.startupBookmark;
    }
  }
};
</script>

<style lang="scss">
#bookmark-list .v-list-item {
  border-left: 0 solid var(--v-primary);
  padding-left: 5px !important;
  transition: 0.3s all;

  &:hover,
  &.v-item--active {
    border-left: 5px solid var(--v-primary-base);
  }
}
</style>
