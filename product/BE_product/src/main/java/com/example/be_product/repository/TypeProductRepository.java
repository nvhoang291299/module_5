package com.example.be_product.repository;

import com.example.be_product.model.Product;
import com.example.be_product.model.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface TypeProductRepository extends JpaRepository<TypeProduct, Long> {
    @Query(value = "select  * from type_product", nativeQuery = true)
    List<TypeProduct> getListType();

}
