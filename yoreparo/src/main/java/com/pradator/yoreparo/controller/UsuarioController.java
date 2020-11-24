package com.pradator.yoreparo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.pradator.yoreparo.entities.Usuario;
import com.pradator.yoreparo.repo.RolRepository;
import com.pradator.yoreparo.services.UsuarioService;

@Controller
public class UsuarioController {
	
	@Autowired
	RolRepository roleRepository;
	
	@Autowired
	UsuarioService userService;
	
	@GetMapping({"/","/login"})
	public String index() {
		return "index";
	}
	
	@GetMapping("/userForm")
	public String getUserForm(Model model) {
		model.addAttribute("userForm", new Usuario());
		model.addAttribute("roles",roleRepository.findAll());
		model.addAttribute("userList", userService.getAllUsers());
		model.addAttribute("listTab","active");
		return "user-form/user-view";
	}

}
