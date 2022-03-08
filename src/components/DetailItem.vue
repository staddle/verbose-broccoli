<template>
  <div class="onTop">
        <div class="item card shadow-sm">
            <button @click="close" class="btn btn-close closeBtn"></button>
            <div class="card-body row">
                <div class="col image">
                    <img :src="item.image" alt="" />
                </div>
                <div class="col text d-flex flex-column justify-content-between">
                    <div>
                        <h3 class="name">{{ item.name }}</h3>
                        <h5 class="categories">{{ item.category}} - {{ item.subCategory }}</h5>
                    </div>
                    <div class="card-text">{{ item.description }}</div>
                    <div class="flex-bottom row">
                        <div class="col">
                            <h4>{{ item.price }} $</h4>
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

export default {
    props: {
        item: CatalogItem,
    },
    methods: {
        addToCart() {
            this.$emit("add-to-cart", this.item);
        },
        close() {
            this.$emit("close");
        }
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