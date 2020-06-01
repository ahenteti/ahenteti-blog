package io.ahenteti.blog.webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("io.ahenteti.blog")
@EnableJpaRepositories("io.ahenteti.blog.service")
@EntityScan("io.ahenteti.blog.core")
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

}
