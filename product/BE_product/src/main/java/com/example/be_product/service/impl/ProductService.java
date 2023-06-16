package com.example.be_product.service.impl;

import com.example.be_product.model.Product;
import com.example.be_product.repository.ProductRepository;
import com.example.be_product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product findById(long id) {
        return null;
    }

//    @Override
//    public Product save(Product product) {
//        return productRepository.create(product);
//    }

    @Override
    public void deleteById(long id) {
        productRepository.delete(id);
    }

    @Override
    public List<Product> findAll() {
        return productRepository.getList();
    }

    @Override
    public List<Product> search(String nameProduct, long typeId) {
        return productRepository.search(nameProduct, typeId);
    }

    @Override
    public Product save(String code, String dateAdded, String desc, String nameProduct, long price, int quantity, long idType) {
        return productRepository.create(code, dateAdded, desc, nameProduct, price, quantity, idType);
    }
}
