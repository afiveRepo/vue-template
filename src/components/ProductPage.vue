<template>
    <div class="Product">
        <button @click="$router.push('/addProduct')" class="btn btn-primary mt-2">Add Product</button>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Product Stock</th>
                    <th scope="col">Product Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index">
                    <th scope="row">{{ index }}</th>
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.product_price }}</td>
                    <td>{{ product.product_stok }}</td>
                    <td>{{ product.product_information }}</td>
                    <td><a class="btn btn-danger"></a></td>
                </tr>

            </tbody>
        </table>
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
        retrieveProducts() {
            ProductService.GetProducts()
                .then(response => {
                    this.products = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        refreshList() {
            this.retrieveProducts();
        },
    }
};
</script>