package com.pradator.yoreparo.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pradator.yoreparo.entities.Rol;

@Repository
public interface RolRepository extends CrudRepository<Rol, Long>{

}
