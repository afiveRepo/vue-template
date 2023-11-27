import http from "../http-common";

class ProductService{
    GetProduct(){
        return http.get("/product");
    }
    GetProductByID(){
        return http.get(`/product/${id}`);
    }
    AddProduct(data){
        return http.post("/product/",data);
    }
    UpdateProduct(id,data){
        return http.put(`/product/${id}`,data);
    }
}