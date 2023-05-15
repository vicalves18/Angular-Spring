package com.victoria.crudspring.model;


import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Course {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonProperty("_id")
	private Long id;
	
	@Column(length = 200, nullable = false)
	private String nome;
	
	@Column(length = 50, nullable = false)
	private String categoria;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	 
}
