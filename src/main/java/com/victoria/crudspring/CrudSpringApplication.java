package com.victoria.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.victoria.crudspring.model.Course;
import com.victoria.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}
	
	@Bean
	CommandLineRunner initDatabase(CourseRepository course) {
		return args -> {
			course.deleteAll();
			
			Course c = new Course();
			c.setNome("Angular com Spring");
			c.setCategoria("front-End");
			
			
			course.save(c);
		};
	}
}
