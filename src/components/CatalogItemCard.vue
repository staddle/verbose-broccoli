<template>
    <div class="card shadow-sm">
        <img :src="this.item.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ this.item.name }}</h5>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="openDetailView()"> {{ this.item.price}} $ </button>
                </div>
                <small class="text-muted">{{getElapsedTime(this.item.timestamp)}}</small>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import CatalogItem from "../models/CatalogItem";

export default {
  props: {
    item: CatalogItem,
  },
  methods: {
    getElapsedTime(date: Date) {
      const now = new Date();
      const diff = now.getTime() - date.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor(diff / 1000);
      if (days > 0) {
        return `${days} days ago`;
      } else if (hours > 0) {
        return `${hours} hours ago`;
      } else if (minutes > 0) {
        return `${minutes} minutes ago`;
      } else {
        return `${seconds} seconds ago`;
      }
    },
    openDetailView() {
      this.$emit("open-detail-view", this.item);
    },
  },
};
</script>

<style>
.fs-7 {
  font-size: .9rem;
}
</style>
