package com.victoria.crudspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
