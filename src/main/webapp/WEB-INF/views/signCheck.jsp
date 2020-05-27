<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="./resources/css/bootstrap.min.css">
	<link rel="stylesheet" href="./resources/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="./resources/css/mStyle.css">
	
	<link rel="shortcut icon" href="#">
</head>    
<body>
 	<div class="container">
	<div class="row">
	<div class="col-sm-12 text-center" >
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
    <h2>환영합니다!</h2>
    	<form name="userInfo" method="post">
        <table class="table table-boardered">
			<tr>
                <th>이름</th>
                <td colspan="2">
                	<input type="text" class="form-control" name="name">
                </td>
            </tr>
            <tr>
                <th>성별</th>
                <td colspan="2">
                	<input type="text" class="form-control" name="gend">
     			</td>
            </tr>
            <tr>
                <th>아이디</th>
                <td colspan="2">
                	<input type="text" class="form-control" name="id">
                </td>
            </tr>
            <tr>
                <th>비밀번호</th>
                	<td colspan="2"><input type="password" class="form-control" name="pwd"></td>
                <td></td>
            </tr>
            <tr>
                <th>이메일</th>
                <td colspan="2">
                	<input type="text" class="form-control" name="email">
                </td>
            </tr>
            <tr>
                <th>휴대전화</th>
                <td colspan="2">
                	<input type="text" class="form-control" name="tel">
                </td>
            </tr>
            <tr>
				<th>주소</th>
               	<td colspan="2">
            		<input type="text" class="form-control" name="addr">
            	</td>
            </tr>
            <tr>
                <th>생년월일</th>
                <td colspan="2">
                	<input type="text" class="form-control" name="birth">
                </td>
            </tr>
		</table>
		</form>
    </div>
    </div>
    </div>
	</div>
	<script src="./resources/js/check.js?ver=1"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</body>
</html>