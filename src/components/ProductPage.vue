<template>
    <div class="Product">
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
                <tr v-for="(product, index) in products">
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
import Products from "../services/ProductService";

export default {
    name: "Home-page",
    data() {
        return {
            products: [],
        };
    },
    methods: {
        retrieveProducts() {
            Products.GetProduct()
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