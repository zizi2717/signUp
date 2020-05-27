package com.prac.signup;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
	
	@PostMapping("regUser")
	public String regUser(SignupVO vo) {
//		int result = 0;
		sql.getMapper(com.prac.signup.mapper.SignupMapper.class).insertInfo(vo);
		
//		String msg = (result == 1) ? "회원가입 성공 했습니다." : "회원가입 실패!";
		
//		String resultPage = (result == 1) ? "/signCheck" : "/signUp";
		
		return "/signCheck";
	}
}
