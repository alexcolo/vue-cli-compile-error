<template>
  <v-card-text>
    <v-form onSubmit="return false;" ref="bookmarkForm">
      <v-text-field
        v-model="bookmark.title"
        :label="$t('label.title')"
        :rules="[v => !!v || $t('message.titleRequired')]"
        required
        outlined
        dense
        autofocus
      ></v-text-field>
      <v-textarea
        v-model="bookmark.description"
        :label="$t('label.bookmarks.description')"
        outlined
        dense
      ></v-textarea>
      <v-switch
        v-model="isStartup"
        :label="$t('label.bookmarks.startUp')"
        :hint="$t('label.bookmarks.startUpHint')"
        persistent-hint
        inset
        dense
      ></v-switch>
      <v-btn
        icon
        @click="removeBookmark"
        v-if="mode === 'update'"
        class="mt-4 error--text"
        :loading="isBookmarkDeleting"
        :disabled="isBookmarkDeleting"
      >
        <v-icon>mdi-delete</v-icon>
        <template v-slot:loader>
          <v-progress-circular :size="16" :width="2" indeterminate />
        </template>
      </v-btn>
      <!-- Add this p for correct alignment of next btn when mode is add-->
      <p v-if="mode === 'add'" style="display: inline-flex"></p>
      <v-btn
        @click="upsertBookmark"
        :loading="isBookmarkUpserting"
        :disabled="isBookmarkUpserting"
        class="mt-4 primary float-right"
      >
        {{ $t("label.bookmarks." + mode) }}
        <template v-slot:loader>
          <v-progress-circular :size="16" :width="2" indeterminate />
        </template>
      </v-btn>
    </v-form>
  </v-card-text>
</template>

<script>
import { getters } from "@/store";
import {
  addBookmark,
  removeBookmark,
  updateBookmark
} from "@/services/bookmark-service";

export default {
  name: "UpsertBookmark",

  props: {
    mode: String,
    bookmarkForUpdate: Object
  },

  data: () => ({
    bookmark: {},
    setToStartup: false,
    isBookmarkUpserting: false,
    isBookmarkDeleting: false
  }),

  computed: {
    isStartup: {
      get() {
        return (
          getters.getStartupBookmark(this.currentApp) === this.bookmark.id &&
          this.bookmark.id !== undefined
        );
      },
      set(newValue) {
        this.setToStartup = newValue;
      }
    },
    currentApp: function() {
      return getters.qlikCurrentApp();
    }
  },

  watch: {
    bookmarkForUpdate: {
      immediate: true,
      handler: function() {
        if (this.bookmarkForUpdate) {
          this.bookmark = { ...this.bookmarkForUpdate };
          this.setToStartup = this.isStartup;
        }
      }
    }
  },

  methods: {
    generateBookmarkId: function() {
      return `${this.currentApp}_Bookmark_${Date.now()}`;
    },
    upsertBookmark: async function() {
      if (this.$refs.bookmarkForm.validate()) {
        this.isBookmarkUpserting = true;

        if (this.mode === "add") {
          this.$set(this.bookmark, "id", this.generateBookmarkId());
          await addBookmark(this.bookmark, this.setToStartup);
        } else if (this.mode === "update") {
          await updateBookmark(this.bookmark, this.setToStartup);
        }

        this.isBookmarkUpserting = false;
        this.$emit("bookmark-updated");
      }
    },
    removeBookmark: async function() {
      this.isBookmarkDeleting = true;
      await removeBookmark(this.bookmark.id, this.isStartup);
      this.isBookmarkDeleting = false;
      this.$emit("bookmark-updated");
    }
  }
};
</script>

<style lang="scss"></style>
