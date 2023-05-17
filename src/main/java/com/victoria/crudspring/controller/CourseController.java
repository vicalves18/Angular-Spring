package com.victoria.crudspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.victoria.crudspring.model.Course;
import com.victoria.crudspring.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {
	
	@Autowired
	private CourseRepository courseRepository;
	
	
	@GetMapping
	public List<Course> listar(){
		return courseRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Course> findById(@PathVariable Long id) {
		return courseRepository.findById(id)
				.map(result -> ResponseEntity.ok().body(result))
				.orElse( ResponseEntity.notFound().build());
	}
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Course salvar(@RequestBody Course course) {
		return courseRepository.save(course);
//		return ResponseEntity.status(HttpStatus.CREATED)
//				.body(courseRepository.save(course));    ---melhor usado quando precisa enviar uma mensagem personalizada
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Course> atualizar(@PathVariable Long id , @RequestBody Course course) {
		return courseRepository.findById(id)
				.map(result -> { 
					result.setNome(course.getNome());
					result.setCategoria(course.getCategoria());
					Course atualiza = courseRepository.save(result);
					return ResponseEntity.ok().body(atualiza);
				})
				.orElse( ResponseEntity.notFound().build());
	}
}
