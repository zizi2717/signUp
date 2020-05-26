<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="./resources/css/bootstrap.min.css">
	<link rel="stylesheet" href="./resources/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="./resources/css/mStyle.css">
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	
	<link rel="shortcut icon" href="#">
</head>    
<body>
 	<div class="container">
	<div class="row">
	<div class="col-sm-12 text-center" >
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
    <h2>회원가입</h2>
    	<form name="userInfo">
        <table class="table table-boardered">
			<tr>
                <th>이름</th>
                <td colspan="2"><input type="text" class="form-control" id="name" onfocusout="checkName();" placeholder="한국어만 입력하세요"></td>
                <td></td>
            </tr>
            <tr>
            	<th id='thWan'></th>
            	<td colspan="2" id='tdWan'><p><font id="nameWarning"></font></p></td>
            </tr>
            <tr>
                <th>성별</th>
                <td colspan="2">
	                <label><input type="checkbox" name="sex" value="남" onclick="checkSex(this);">남성</label>
	                &nbsp;&nbsp;&nbsp;
	     			<label><input type="checkbox" name="sex" value="여" onclick="checkSex(this);">여성</label>
     			</td>
            </tr>
            <tr>
            	<th id='thWan'></th>
            	<td colspan="2" id='tdWan'><p><font id="sexWarning"></font></p></td>
            </tr>
            <tr>
                <th>아이디</th>
                <td colspan="2"><input type="text" class="form-control" id="id" onfocusout="checkId();"></td>
            </tr>
            <tr>
            	<th id='thWan'></th>
            	<td colspan="2" id='tdWan'><p><font id="idWarning"></font></p></td>
            </tr>
            <tr>
                <th>비밀번호</th>
                <td colspan="2"><input type="password" class="form-control" id="pass1" onfocusout="checkPass1();" placeholder="숫자, 문자 포함"></td>
                <td></td>
            </tr>
            <tr>
            	<th id='thWan'></th>
            	<td colspan="2" id='tdWan'><p><font id="passWarning"></font></p></td>
            </tr>
            <tr>
                <th>비밀번호 확인</th>
                <td colspan="2"><input type="password" class="form-control" id="pass2" onfocusout="checkPass2();" placeholder="비밀번호 재입력"></td>  
                <td></td>
            </tr>
            <tr>
            	<th id='thWan'></th>
            	<td colspan="2" id='tdWan'><p><font id="pass2Warning"></font></p></td>
            </tr>
            <tr>
                <th>이메일</th>
                <td><input type="text" class="form-control" id="email" onfocusout="checkEmail();"></td>
                <td>
                	<input type="text" class="form-control" id="email2" onfocusout="checkEmail();" disabled>
                </td>
                <td>
              		<select class="form-control" onClick="checkEmail2(this);" onchange="setEmail(this);">
                		<option id="a" value="">선택</option>
                		<option id="b" value="naver.com">naver.com</option>
                		<option id="c" value="daum.net">daum.net</option>
                		<option id="d" value="dir">직접입력</option>
                	</select>
                </td>
            <tr>
            	<th id='thWan'></th>
                <td colspan="2" id='tdWan'><p><font id="emailWarning"></font></p></td>
            </tr>
            </tr>
            <tr>
                <th>휴대전화</th>
                <td colspan="2"><input type="tel" class="form-control" id="tel" onfocusout="checkTel();" placeholder="-제외하고 입력"></td>
            </tr>
            <tr>
            	<th id='thWan'></th>
            	<td colspan="2" id='tdWan'><p><font id="telWarning"></font></p></td>
            </tr>
            <tr>
				<th rowspan="2">주소</th>
                <td>
                	<input type="text" class="form-control" id="zip" placeholder="우편번호" readonly> 	
                </td>
                <td>
                	<input type="text" class="form-control" id="addr1" placeholder="기본주소" readonly>
                </td>
                <td rowspan="2" text-align="left">
                	<input type="button" class="btn btn-default" value="주소검색" onclick="execDaumPostcode();">
                </td>
            </tr>
            <tr>
            	<td colspan="2">
            		<input type="text" class="form-control" id="addr2" onfocusout="checkAddr();" placeholder="상세주소">
            	</td>
            </tr>
            <tr>
            	<th id='thWan'></th>
            	<td colspan="2" id='tdWan'><p><font id="addrWarning"></font></p></td>
            </tr>
            <tr>
                <th>생년월일</th>
                <td>
                	<select class="form-control" id="year" onchange="setMonth();">
                		<option value="yearTmp">년도 선택</option>
                	</select>
                </td>
                <td>
               		<select class="form-control" id="month" onchange="setDay();">
                		<option value="monthTmp">월 선택</option>
                	</select>
                </td>
                <td>
                	<select class="form-control" id="day">
                		<option value="dayTmp">일 선택</option>
                	</select>
                </td>
            </tr>
            <tr>
            	<th id='thWan'></th>
            	<td colspan="2" id='tdWan'><p><font id="birWarning"></font></p></td>            	
            </tr>
            <tr>
                <td></td>
                <td colspan="2" >
	                <input type="button" class="btn btn-primary" value="가입" onclick="checkAll();">
	                <input type="reset" class="btn btn-danger" value="취소" onclick="location.href='http://localhost:8080/signup/';">
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