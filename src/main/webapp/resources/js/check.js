
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

var pat1 = /[가-힣]/;
var pat2 = /[~!@#$%^&*()_+|<>?:{}]/;
var pat3 = /[0-9]/;
var pat4 = /[a-zA-Z]/;
function checkName() {
	var nameSave = document.getElementById('name');
		
	checkNull(nameSave.value, '이름');
	
	if (checkSpace(nameSave.value)) {
		console.log("공백 포함");
		nameSave.focus();
	} else if(!pat1.test(nameSave.value) || pat2.test(nameSave.value) || pat3.test(nameSave.value) || pat4.test(nameSave.value)) {
		console.log("한글만");
		nameSave.focus();
	}	
}

function checkSex(sexParm) {
	var sexSave = document.getElementsByName('sex');
	
	for (var i = 0; i < sexSave.length; i++) {
		if (sexSave[i] != sexParm) {
			sexSave[i].checked = false;
		}
	}
}

function checkId() {
	var idSave = document.getElementById('id').value;
	var tmpIdSave = document.getElementById('tmpId').value;
	
	checkNull(idSave, '아이디');
	
	if (checkSpace(idSave)) {
		console.log("공백 포함");
	} else if (idSave === tmpIdSave) {
		console.log("아이디 중복");
	} else if (pat2.test(idSave) || !idSave.length >= 10) {
		console.log("아이디에 특수문자가 포함되어 있거나 10글자 이상입니다");
	}
}

function checkPass() {
	var passSave = document.getElementById('pass1').value;
	var pass2Save = document.getElementById('pass2').value;
	
	checkNull(passSave, '비밀번호');
	checkNull(pass2Save, '비밀번호확인');
	
	if (checkSpace(passSave)) {
		console.log("공백 포함");
	} else if (!pat2.test(passSave) || !pat3.test(passSave) || passSave.length >= 10) {
		console.log("특수문자와 숫자가 포함되지 않았거나 10글자 이상입니다");
	} else if (passSave !== pass2Save) {
		console.log("비밀번호 불일치")
	}
}

function setEmail(selValue) {
	var fmSave = document.userInfo;
	var email2Save = selValue[selValue.selectedIndex].value;
	var tmp = 1;
	
	if (email2Save == "dir") {
		email2Save = "";
		tmp = 0;
	}
	
	fmSave.email2.value = email2Save;
	fmSave.email2.disabled = tmp;
}

function checkTel() {
	var telSave = document.getElementById('tel').value.split("");
	var telSave2 = document.getElementById('tel').value;
	var idNumber = telSave[0], pullNumber = telSave[0], i;
	
	for(i = 1; i < 3; i++) {
		idNumber += telSave[i];
		pullNumber += telSave[i];
	}
	pullNumber += "-";
	for(i; i < 7; i++) {
		pullNumber += telSave[i];
	}
	pullNumber += "-";
	for(i; i < 11; i++) {
		pullNumber += telSave[i];
	}
	console.log(pullNumber);
	
	checkNull(telSave, '전화번호');
	
	if (!pat3.test(telSave2)) {
		console.log("숫자만 입력");
	} else if (idNumber !== "010") {
		console.log("식별번호 오류");
	} else if (telSave.length != 11) {
		console.log("번호 짧거나 길어");
	}
}

function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 도로명 조합형 주소 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }
            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
            if(fullRoadAddr !== ''){
                fullRoadAddr += extraRoadAddr;
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('zip').value = data.zonecode; //5자리 새우편번호 사용
            document.getElementById('addr1').value = fullRoadAddr;
            document.getElementById('addr2').focus();
        }
    }).open();
}

window.onload = function() {
	var tmp = 1
	for(var i = 1900; i <= 2020; i++) {
		document.getElementById('year').options[tmp] = new Option(i, i);
		tmp++;
	}
}

function setMonth() {
	var yearSave = document.getElementById('year').value;
	
	for(var j = 1; j <= 12; j++) {
		document.getElementById('month').options[j] = new Option(j, j);
	}
	
	if (yearSave == 'hi') {
		document.getElementById('month').options.length = 1;
	}
	document.getElementById('day').options.length = 1;
}

function setDay() {
	var yearSave = document.getElementById('year').value;
	var monthSave = document.getElementById('month').value;
	var tmpDate = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  
	if ((yearSave % 4 == 0 && yearSave % 100 != 0) || yearSave % 400 == 0) {
		tmpDate[1] = 29;
	}
	
	for (var k = 1; k <= tmpDate[monthSave - 1]; k++) {
		document.getElementById('day').options.length = k;
		document.getElementById('day').options[k] = new Option(k, k);
	}
}

function allCheck() {
	
}




