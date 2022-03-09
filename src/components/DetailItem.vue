<template>
  <div class="onTop" @click.self="close">
        <div class="item card shadow-sm">
            <button @click="close" class="btn btn-close closeBtn"></button>
            <div class="card-body row">
                <div class="col image">
                    <img :src="item.image" alt="" />
                </div>
                <div class="col text d-flex flex-column justify-content-between">
                    <div>
                        <h3 class="name">{{ item.name }}</h3>
                        <h5 class="categories">{{ getCategoryName(item.category) }} - {{ getSubcategoryName(item.category, item.subCategory) }}</h5>
                    </div>
                    <div class="card-text">{{ item.description }}</div>
                    <div class="flex-bottom row">
                        <div class="col">
                            <h4>
                                {{ getPriceInEth(item.price) }} 
                                <font-awesome-icon :icon="['fa-brands', 'ethereum']" />
                            </h4>
                        </div>
                        <div class="col">
                            <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import CatalogItem from "../models/CatalogItem";
import { categories } from "@/assets/categories";
import { getPriceInEth } from "@/integration/etherUtilities";

export default {
    props: {
        item: CatalogItem,
    },
    data() {
        return {
            categoriesArray: categories,
        }
    },
    methods: {
        addToCart() {
            this.$emit("add-to-cart", this.item);
            this.$emit("close");
        },
        close() {
            this.$emit("close");
        },
        dontclose() {
            return false;
        },
        getCategoryName(category: number) : string {
            return categories[category-1].name;
        },
        getSubcategoryName(category: number, subcategory: number) : string {
            return categories[category-1].subCategories[subcategory-1].name;
        },
        getPriceInEth(price: number) {
            return getPriceInEth(price);
        },
    },
}
</script>

<style lang="scss">
    .onTop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: #000000aa;
        width: 100%;
        height: 100%;
        display: flex;
        z-index: 10;
    }
    .item {
        width: 40rem;
        margin: auto;
        align-self: center;
    }
    .closeBtn{
        position: absolute;
        top: .3rem;
        right: .3rem;
    }
    .image img {
        width: 100%;
    }
</style>