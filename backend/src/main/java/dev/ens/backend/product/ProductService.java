package dev.ens.backend.product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepo productRepo;

    public List<Product> getProducts() {
        return productRepo.findAll();
    }

    public Product addProduct(Product product) {
        return productRepo.save(product);
    }

    public Product getProductById(String id) {
        return productRepo.findById(id)
                .orElseThrow();
    }

    public void deleteProduct(String id) {
        productRepo.deleteById(id);
    }

    public Product updateProduct(String id, ProductDTO product){
        Product productToUpdate = new Product(id, product.title(), product.amount());
        return productRepo.save(productToUpdate);
    }
}
