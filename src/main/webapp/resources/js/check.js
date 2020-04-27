
function checkNull(tmp, pa) {
	if( !tmp ) { 
		console.log(pa + "을(를) 입력해주세요"); 
	}
}

function checkSpace(tmp) { 
	if(tmp.search(/\s/) != -1) 	{ 
		return true; 
	} else { 
		return false; 
	}
}

function checkName() {
	var nameSave = document.getElementById('name').value;
	var tmp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
	
	checkNull(nameSave, '이름');
	
	if (checkSpace(nameSave)) {
		console.log("공백 포함");
	}
	
	if(!tmp.test(nameSave)) {
		console.log("한글만 입력해주세요");
	}
}

function checkSex(tmp) {
	var sexSave = document.getElementsByName('sex');
	
	for (var i = 0; i < sexSave.length; i++) {
		if (sexSave[i] != tmp) {
			sexSave[i].checked = false;
		}
	}
}

var pattern = /[~!@#$%^&*()_+|<>?:{}]/;
var pattern2 = /[0-9]/;
function checkId() {
	var idSave = document.getElementById('id').value;
	var tmpIdSave = document.getElementById('tmpId').value;
	
	checkNull(idSave, '아이디');
	
	if (checkSpace(idSave)) {
		console.log("공백 포함");
	}
	
	if (idSave === tmpIdSave) {
		console.log("아이디 중복");
	}
	
	if (pattern.test(idSave) || idSave.length >= 8) {
		console.log("아이디에 특수문자가 포함되어 있거나 8글자 이상입니다");
	}
}

function checkPass() {
	var passSave = document.getElementById('pass1').value;
	var pass2Save = document.getElementById('pass2').value;
	
	checkNull(passSave, '비밀번호');
	checkNull(pass2Save, '비밀번호확인');
	
	if (checkSpace(passSave)) {
		console.log("공백 포함");
	}
	
	if (!pattern.test(passSave) || !pattern2.test(passSave) || passSave.length >= 10) {
		console.log("특수문자와 숫자가 포함되지 않았거나 10글자 이상입니다");
	}
}









