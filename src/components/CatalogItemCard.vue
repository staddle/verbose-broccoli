<template>
    <div class="card shadow-sm padding-0 card-interaction" @click="openDetailView()">
        <img :src="item.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <div class="d-flex justify-content-between align-items-center">
                  <span class="fw-bolder"> 
                    {{ getPriceInEth(item.price) }} 
                    <font-awesome-icon :icon="['fa-brands', 'ethereum']" /> 
                  </span>
                <small class="text-muted">{{ getElapsedTime(item.timestamp) }}</small>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import CatalogItem from "../models/CatalogItem";
import { getPriceInEth } from "@/integration/etherUtilities";

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
    getPriceInEth(price: number) {
        return getPriceInEth(price);
    },
  },
};
</script>

<style>
.fs-7 {
  font-size: .9rem;
}
.padding-0 {
  padding: 0 !important;
}
.card-interaction {
  cursor: pointer;
}
.card-interaction:hover::after {
  content: " ";
  z-index: 10;
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
