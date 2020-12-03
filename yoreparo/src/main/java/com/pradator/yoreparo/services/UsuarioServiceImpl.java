package com.pradator.yoreparo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pradator.yoreparo.entities.Usuario;
import com.pradator.yoreparo.repo.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService{

	@Autowired
	UsuarioRepository repo;
	@Override
	public Iterable<Usuario> getAllUsers() {
		return repo.findAll();
	}

	
}
