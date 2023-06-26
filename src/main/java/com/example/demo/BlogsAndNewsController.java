package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/blogsandnews")
public class BlogsAndNewsController {
	
	@GetMapping("/test")
	public String test() {
		return "application deployed";
	}
	
	@GetMapping("/getBlogs")
	public String getBlogs() {
		return "Blogs, updating soon...";
	}
	
	@GetMapping("/getNews")
	public String getNews() {
		return "News, updating soon...";
	}

}
