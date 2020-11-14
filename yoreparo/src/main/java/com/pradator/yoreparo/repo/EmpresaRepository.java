package com.pradator.yoreparo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpresaRepository extends JpaRepository<Empresa,Long>{

    public Empresa findByNombre(String nombre);
    
}