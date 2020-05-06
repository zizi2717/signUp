<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	
	
</head>    
<body>
 	<div class="container">
	<div class="row">
	<div class="col-sm-12 text-center" >
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
    <h2>회원가입</h2>
    	<form name="userInfo" method="POST" action="../signCheck.jsp" >
        <table class="table table-boardered">
			<tr>
                <th>이름</th>
                <td><input type="text" class="form-control" id="name" placeholder="한국어"></td>
            </tr>
            <tr>
                <th>성별</th>
                <td>
	                <label><input type="checkbox" name="sex" value="남" onclick="checkSex(this);">남성</label>
	                &nbsp;&nbsp;&nbsp;
	     			<label><input type="checkbox" name="sex" value="여" onclick="checkSex(this);">여성</label>
     			</td>
            </tr>
            <tr>
                <th>아이디</th>
                <td><input type="text" class="form-control" id="id"></td>
                <td><input type="hidden" class="form-control" id="tmpId" value="zizi2717" ></td>
                <td><input type="button" value="확인" onclick="checkId();"></td>
            </tr>
            <tr>
                <th>패스워드</th>
                <td><input type="password" class="form-control" id="pass1" placeholder="숫자, 문자 포함"></td>      
            </tr>
            <tr>
                <th>패스워드확인</th>
                <td><input type="password" class="form-control" id="pass2"></td>  
                <td></td>
                <td><input type="button" value="확인" onclick="checkPass();"></td>      
            </tr>
            <tr>
                <th>이메일</th>
                <td><input type="text" class="form-control" id="email"></td>
                <td>
                	<input type="text" class="form-control" id="email2" disabled>
                	<select onchange="setEmail(this);">
                		<option value="">선택</option>
                		<option value="naver.com">naver.com</option>
                		<option value="daum.net">daum.net</option>
                		<option value="dir">직접입력</option>
                	</select>
                </td>
            </tr>
            <tr>
                <th>전화번호</th>
                <td><input type="tel" class="form-control" id="tel" placeholder="-제외하고 입력"></td>
            </tr>
            <tr>
                <th>주소</th>
                <td>
                	<input type="text" class="form-control" id="zip" placeholder="우편번호">
                	<input type="text" class="form-control" id="addr2" placeholder="상세주소">
                </td>
                <td><input type="text" class="form-control" id="addr1" placeholder="기본주소"></td>
                <td><input type="button" value="검색" onclick="execDaumPostcode();"></td>
            </tr>
            <tr>
                <th>생년월일</th>
                <td>
                	<select id="year" onchange="setMonth();">
                		<option value="hi">년도 선택</option>
                	</select>
                </td>
                <td>
                	<select id="month" onchange="setDay();">
                		<option value="">월 선택</option>
                	</select>
                </td>
                <td>
                	<select id="day">
                		<option value="">일 선택</option>
                	</select>
                </td> 
            </tr>
            <tr>
                <td colspan="2">
              	  <input type="submit" class="btn btn-primary" value="가입">
              	  <input type="reset" class="btn btn-danger" value="취소">
                </td>
			</tr>
		</table>
		</form>
    </div>
    </div>
    </div>
	</div>
	<script src="./resources/js/check.js?ver=1"></script>
</body>
</html>