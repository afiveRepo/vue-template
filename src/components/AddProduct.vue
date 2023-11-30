<template>
    <div class="add-product">
        <form>
            <div class="mb-3">
                <label for="product_name" class="form-label">Name</label>
                <input type="text" class="form-control" id="product_name">
            </div>
            <div class="mb-3">
                <label for="product_price" class="form-label">Price</label>
                <input type="text" class="form-control" id="product_price">
            </div>
            <div class="mb-3">
                <label for="product_stok" class="form-label">Stok</label>
                <input type="number" class="form-control" id="product_stok">
            </div>
            <div class="mb-3">
                <label for="product_information" class="form-label">Description</label>
                <input type="text" class="form-control" id="product_information">
            </div>

            <button @click="saveProducts" type="submit" class="btn btn-primary">Submit</button>
            <button @click="$router.push('/home')" class="btn btn-close-white">Back</button>
        </form>
    </div>
</template>

<script>

import ProductService from "../services/ProductService";

export default {
    name: "Product-page",
    data() {
        return {
            products: [],
        };
    },
    methods: {
        saveProducts() {
            var data = {
                product_name: this.product_name,
                product_price: this.product_price,
                product_stok: this.product_stok,
                product_information: this.product_information,
            }
            ProductService.AddProduct(data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
    }
};
</script>