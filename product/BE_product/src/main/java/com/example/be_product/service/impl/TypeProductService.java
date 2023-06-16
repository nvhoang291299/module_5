package com.example.be_product.service.impl;

import com.example.be_product.model.TypeProduct;
import com.example.be_product.repository.TypeProductRepository;
import com.example.be_product.service.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TypeProductService implements ITypeProductService {
    @Autowired
    private TypeProductRepository typeProductRepository;

    @Override
    public List<TypeProduct> findAll() {
        return typeProductRepository.getListType();
    }
}
