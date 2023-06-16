package com.example.be_product.repository;

import com.example.be_product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "select * from product", nativeQuery = true)
    List<Product> getList();

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM product WHERE id= ?", nativeQuery = true)
    void delete(long id);

    @Query(value = "insert into product (code, date_added, description_product, name_product, price, quantity, id_type) " +
            "values (:code, :dateAdded, :desc, :nameProduct, :price, :quantity, :idType)", nativeQuery = true)
    Product create(@Param("code") String code,
                   @Param("dateAdded") String dateAdded,
                   @Param("desc") String desc,
                   @Param("nameProduct") String nameProduct,
                   @Param("price") long price,
                   @Param("quantity") int quantity,
                   @Param("idType") long idType);

    @Query(value = "select * from product where name_product LIKE CONCAT('%',:nameProduct, '%') and id_type LIKE CONCAT('%',:typeId, '%')", nativeQuery = true)
    List<Product> search(String nameProduct, long typeId);
//    @Query(value = "select b.* from blogs b join categorys c on b.id_category = c.id where name_category = ?1", nativeQuery = true)
//    List<Blog> findBlogsByCategory(String category);
}
