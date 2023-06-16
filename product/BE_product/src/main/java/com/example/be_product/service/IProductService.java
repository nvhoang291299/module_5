package com.example.be_product.service;

import com.example.be_product.model.Product;


import java.util.List;

public interface IProductService {


    Product findById(long id);

//    Product save(Product product);

    void deleteById(long id);

    List<Product> findAll();
    List<Product> search(String nameProduct, long typeId);

    Product save(String code, String dateAdded, String desc, String nameProduct, long price, int quantity, long idType);
}
