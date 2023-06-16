package com.example.be_product.controller;

import com.example.be_product.model.Product;

import com.example.be_product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAll(){
        List<Product> products = productService.findAll();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchByCategory(@RequestParam(value = "nameProduct") String nameProduct,
                                                          @RequestParam(value = "typeId") long typeId){
        List<Product> listSearch = productService.search(nameProduct, typeId);
        if (listSearch.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listSearch, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Product> create(@RequestBody Product product) {
         String code = product.getCode();
         String dateAdded = product.getDateAdded();
         String desc = product.getDescriptionProduct();
        String nameProduct = product.getNameProduct();
        long price = product.getPrice();
        int quantity = product.getQuantity();
        long idType = product.getTypeProduct().getId();

        Product product1 = productService.save(code, dateAdded, desc, nameProduct, price, quantity, idType);
        return new ResponseEntity<>(product1, HttpStatus.OK);
    }

//    @PutMapping("/update")
//    public ResponseEntity<Product> update(@RequestParam(value = "id") long id, @RequestBody Product product){
//        Product product1 = productService.findById(id);
//        product1.setCode(product.getCode());
//        product1.setNameProduct(product.getNameProduct());
//        product1.setDescriptionProduct(product.getDescriptionProduct());
//        product1.setPrice(product.getPrice());
//        product1.setQuantity(product.getQuantity());
//        product1.setDateAdded(product.getDateAdded());
//        product1.getTypeProduct().setNameType(product.getTypeProduct().getNameType());
//        return new ResponseEntity<>(productService.save(product), HttpStatus.OK);
//    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Product> delete(@PathVariable long id){
        productService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
