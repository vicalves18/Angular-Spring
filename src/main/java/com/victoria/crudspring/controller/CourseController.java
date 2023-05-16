package com.victoria.crudspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	@PostMapping
	public ResponseEntity<Course> salvar(@RequestBody Course course) {
		//return courseRepository.save(course);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(courseRepository.save(course));
	}
}
