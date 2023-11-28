import http from "../http-common";

class ProductService{
    GetProducts(){
        return http.get("/product");
    }
    GetProductByID(id){
        return http.get(`/product/${id}`);
    }
    AddProduct(data){
        return http.post("/product/",data);
    }
    UpdateProduct(id,data){
        return http.put(`/product/${id}`,data);
    }
}
export default new ProductService();