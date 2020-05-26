package com.prac.signup;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.prac.signup.vo.SignupVO;

@Controller
public class HomeController {
	
	@Autowired
	private SqlSession sql;
	
	@RequestMapping("/")
	public String home(Model model) {
		
		return "/signUp";
	}
	
	@PostMapping("signup")
	public String signup(SignupVO vo) {
		
		sql.getMapper(com.prac.signup.mapper.SignupMapper.class).insertInfo(vo);

		return "/signUp";
	}
}
