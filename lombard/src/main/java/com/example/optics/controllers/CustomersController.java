package com.example.optics.controllers;


import com.example.optics.models.Customer;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/customers")
public class CustomersController {

    private List<Customer> CUSTOMERS = Stream.of(
            new Customer(1,"Alex","Tolstov"),
            new Customer(2,"Leo","Lukyan"),
            new Customer(3,"Jacob","Pods")
    ).collect(Collectors.toList());

    @GetMapping
    public List<Customer> getCUSTOMERS() {
        return CUSTOMERS;
    }

    @GetMapping("/{id}")
    public Customer getById(@PathVariable int id){
        return CUSTOMERS.stream().filter(customer -> customer.getId() == id)
                .findFirst().orElse(null);
    }

    @PostMapping("/add")
    public Customer create(@RequestBody Customer customer) {
        this.CUSTOMERS.add(customer);
        return customer;
    }

    @DeleteMapping("/del/{id}")
    public void deleteById(@PathVariable int id) {
        this.CUSTOMERS.removeIf(customer -> customer.getId() == id);
    }
}
