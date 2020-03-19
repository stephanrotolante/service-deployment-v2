package com.example.demo.bootstrap;

import com.example.demo.domain.Customer;
import com.example.demo.repositories.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrapData implements CommandLineRunner {

    private final CustomerRepository customerRepository;

    public BootStrapData(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("Loading Customer Data");

        Customer c1 = new Customer();
        c1.setFirstName("Stephan");
        c1.setLastName("Rotolante");
        customerRepository.save(c1);

        Customer c2 = new Customer();
        c2.setFirstName("Jason");
        c2.setLastName("Randolph");
        customerRepository.save(c2);

        Customer c3 = new Customer();
        c3.setFirstName("Alex");
        c3.setLastName("Testa");
        customerRepository.save(c3);

        System.out.println("Customers saved: " + customerRepository.count());

    }
}
