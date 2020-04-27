<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>    
 <body>
 	<div class="container">
	<div class="row">
	<div class="col-sm-12 text-center" >
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
    <h2>회원가입</h2>
        <table class="table table-boardered">
			<tr>
                <th>이름</th>
                <td><input type="text" class="form-control" name="name" placeholder="한국어"></td>        
            </tr>
            <tr>
                <th>성별</th>
                <td>
	                <label><input type="checkbox" name="sex" value="남">남성</label>
	                &nbsp;&nbsp;&nbsp;
	     			<label><input type="checkbox" name="sex" value="여">여성</label>
     			</td>      
            </tr>
            <tr>
                <th>아이디</th>
                <td><input type="text" class="form-control" name="id"></td>        
            </tr>
            <tr>
                <th>패스워드</th>
                <td><input type="password" class="form-control" name="pass1" placeholder="숫자, 문자 포함"></td>      
            </tr>
            <tr>
                <th>패스워드확인</th>
                <td><input type="password" class="form-control" name="pass2"></td>        
            </tr>
            <tr>
                <th>이메일</th>
                <td><input type="email" class="form-control" name="email"></td>       
            </tr>
            <tr>
                <th>전화번호</th>
                <td><input type="tel" class="form-control" name="tel" placeholder="-제외하고 입력"></td>       
            </tr>
            <tr>
                <th>주소</th>
                <td><input type="text" class="form-control" name="address"></td>      
            </tr>
            <tr>
                <th>생년월일</th>
                <td><input type="text" class="form-control" name="birth"></td>      
            </tr>
            <tr>
                <td colspan="2">
              	  <input type="submit" class="btn btn-primary" value="가입">
              	  <input type="reset" class="btn btn-danger" value="취소">
                </td>
			</tr>
		</table>
    </div>
    </div>
    </div>
</div>
</body>
</html>