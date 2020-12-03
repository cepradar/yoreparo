package com.pradator.yoreparo.repo;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pradator.yoreparo.entities.Usuario;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long>{

public Optional<Usuario> findByUsername(String username);
	
	public Optional<Usuario> findByIdAndPassword(Long id, String password);
}
