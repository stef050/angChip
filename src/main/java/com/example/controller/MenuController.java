package com.example.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {

	/**
	 * Get rest controller to return map and price of menu items
	 * Hard coded for now!
	 * @return
	 */
	@RequestMapping("/menu")
	public Map<String, Map<String, String>> getCurrentMenu(){
		
		
		
		return null;
			
	}
	
}
