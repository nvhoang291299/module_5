package com.example.be_product.controller;

import com.example.be_product.model.TypeProduct;
import com.example.be_product.service.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/typeProduct")
@CrossOrigin("*")
public class TypeProductController {

    @Autowired
    private ITypeProductService typeProductService;

    @GetMapping
    public ResponseEntity<List<TypeProduct>> getAll(){
        List<TypeProduct> typeProducts = typeProductService.findAll();
        if (typeProducts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeProducts, HttpStatus.OK);
    }
}
