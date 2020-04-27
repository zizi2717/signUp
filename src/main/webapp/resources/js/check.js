
function checkSpace(tmp) { 
	if(tmp.search(/\s/) != -1) 	{ 
		return true; 
	} else { 
		return false; 
	}
}

function checkNull(tmp, pa) {
	if( !tmp ) { 
		console.log(pa + "을(를) 입력해주세요"); 
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

function checkId() {
	var idSave = document.getElementById('id').value;
	var tmpIdSave = document.getElementById('tmpId').value;
	
	var pattern = /[~!@#$%^&*()_+|<>?:{}]/;
	
	checkNull(idSave, '아이디');
	
	if (checkSpace(idSave)) {
		console.log("공백 포함");
	}
	
	if (idSave === tmpIdSave) {
		console.log("아이디 중복");
	}
	
	if (!pattern.test(idSave) || idSave.length >= 8) {
		console.log("아이디에 특수문자가 포함되어 있거나 8글자 이상입니다.");
	}
}











