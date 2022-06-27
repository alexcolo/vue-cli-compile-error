<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          plain
          v-bind="attrs"
          v-on="on"
          height="36"
          width="36"
          style="margin-right: 10px"
          @click="resetBookmarksStyle"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-bookmark</v-icon>
            </template>
            <span>{{ $t("label.bookmarks.pop-up") }}</span>
          </v-tooltip>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">{{ $t("label.bookmarks.title") }}</span>
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="toggleUpsertMode(upsertMode ? upsertMode : 'add')"
          >
            <v-icon>{{ upsertMode ? "mdi-close" : "mdi-plus" }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <upsert-bookmark
              class="pt-4 mt-12"
              v-if="upsertMode"
              :mode="upsertMode"
              :bookmark-for-update="bookmarkForUpdate"
              @bookmark-updated="toggleUpsertMode('')"
            />
            <bookmark-list
              v-else
              @edit-bookmark="editBookmark"
              @close-bookmarks="closeBookmarks"
            />
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="
              dialog = false;
              upsertMode = '';
            "
          >
            {{ $t("label.close") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getters } from "@/store";

import BookmarkList from "@/components/bookmarks/BookmarkList";
import UpsertBookmark from "@/components/bookmarks/UpsertBookmark";

export default {
  name: "Bookmarks",

  components: {
    BookmarkList,
    UpsertBookmark
  },

  data: () => ({
    dialog: false,
    upsertMode: "",
    bookmarkForUpdate: null
  }),

  computed: {
    currentApp: function() {
      return getters.qlikCurrentApp();
    },
    startupBookmark: function() {
      return getters.getStartupBookmark(this.currentApp);
    },
    bookmarks: function() {
      return getters.getAppBookmarks(this.currentApp);
    }
  },

  methods: {
    toggleUpsertMode: function(mode) {
      this.bookmarkForUpdate = null;
      this.upsertMode = !mode || this.upsertMode === mode ? "" : mode;
    },
    editBookmark: function(bookmark) {
      this.toggleUpsertMode("update");
      this.bookmarkForUpdate = bookmark;
    },
    resetBookmarksStyle: function() {
      const activeBookmark = document.querySelector(".v-list-item--active");
      if (activeBookmark)
        activeBookmark.classList.remove(
          "v-list-item--active",
          "v-item--active"
        );
    },
    closeBookmarks: function() {
      this.dialog = false;
    }
  }
};
</script>
