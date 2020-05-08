
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
		
	if (!nameSave.value) {
		alert("이름을 입력해주세요");
	} else if (checkSpace(nameSave.value)) {
		alert("이름에 공백이 포함되어있습니다");
		nameSave.focus();
	} else if(!pat1.test(nameSave.value) || pat2.test(nameSave.value) || pat3.test(nameSave.value) || pat4.test(nameSave.value)) {
		alert("이름은 한글만 입력해주세요");
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

function checkSex2() {
	var sexSave2 = document.getElementsByName('sex');
	
	if (sexSave2[0].checked == false && sexSave2[1].checked == false) {
		alert("성별을 선택해주세요");
	}
}

var idCheckNum;
var tmpIdSave;
function checkId() {
	var idSave = document.getElementById('id');
	var overLap = document.getElementById('tmpId');
	
	if (!idSave.value) {
		alert("아이디를 입력해주세요");
		idCheckNum = 1;
	} else if (checkSpace(idSave.value)) {
		alert("아이디에 공백이 포함되어있습니다");
		idCheckNum = 1;
	} else if (idSave.value === overLap.value) {
		alert("중복된 아이디입니다");
		idCheckNum = 1;
	} else if (pat2.test(idSave.value) || idSave.value.length >= 10) {
		alert("아이디에 특수문자가 포함되어 있거나 10글자 이상입니다");
		idCheckNum = 1;
	} else {
		alert("확인 완료");
		tmpIdSave = idSave.value;
		idCheckNum = 0;
	}
}

var passCheckNum;
var tmpPassSave, tmpPass2Save;
function checkPass() {
	var passSave = document.getElementById('pass1');
	var pass2Save = document.getElementById('pass2');
	
	if (!passSave.value || !pass2Save.value) {
		alert("비밀번호를 입력해주세요");
		passCheckNum = 1;
	} else if (checkSpace(passSave.value)) {
		alert("비밀번호에 공백이 포함되어있습니다");
		passCheckNum = 1;
	} else if (!pat2.test(passSave.value) || !pat3.test(passSave.value) || passSave.value.length >= 10) {
		alert("특수문자와 숫자가 포함되지 않았거나 10글자 이상입니다");
		passCheckNum = 1;
	} else if (passSave.value !== pass2Save.value) {
		alert("비밀번호가 일치하지 않습니다");
		passCheckNum = 1;
	} else {
		alert("확인 완료");
		tmpPassSave = passSave.value;
		tmpPass2Save = pass2Save.value;
		passCheckNum = 0;
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

function checkEmail() {
	var emailSave = document.getElementById('email').value;
	var email2Save = document.getElementById('email2').value;
	
	if (!emailSave || !email2Save) {
		alert("이메일을 입력해주세요");
	} else if (checkSpace(emailSave) || checkSpace(email2Save)) {
		alert("이메일에 공백이 포함되어있습니다");
	}
}

function checkTel() {
	var telSave = document.getElementById('tel').value.split("");
	var telSave2 = document.getElementById('tel').value;
	var idNumber = telSave[0];
	var pullNumber = telSave[0];
	var i;
	
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
	
	if (!telSave) {
		alert("전화번호를 입력해주세요");
	} else if (checkSpace(telSave2)) {
		alert("전화번호에 공백이 포함되어있습니다");
	} else if (!pat3.test(telSave2)) {
		alert("전화번호는 숫자만 입력해주세요");
	} else if (idNumber !== "010") {
		alert("전화번호의 식별번호(010)가 올바르지 않습니다");
	} else if (telSave.length != 11) {
		alert("전화번호가 짧거나 깁니다");
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

function checkAddr() {
	var addr2Save = document.getElementById('addr2').value;
	
	if (!addr2Save) {
		alert("상세주소를 입력해주세요");
	}
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
	
	if (yearSave == 'yearTmp') {
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

function checkBirth() {
	var yearSave = document.getElementById('year').value;
	var monthSave = document.getElementById('month').value;
	var daySave = document.getElementById('day').value;
	
	if (yearSave == "yearTmp") {
		alert("생년월일(년) 입력이 필요합니다");
	} else if (monthSave == "monthTmp") {
		alert("생년월일(월) 입력이 필요합니다");
	} else if (daySave == "dayTmp") {
		alert("생년월일(일) 입력이 필요합니다");
	}
}

function checkAll() {
	var chkId = document.getElementById('id');
	var chkPass = document.getElementById('pass1');
	var chkPass2 = document.getElementById('pass2');
	
	checkName();
	checkSex2();
	if (idCheckNum != 0) {
		alert("아이디 확인이 필요합니다");
		chkId.focus();
	} else if (tmpIdSave !== chkId.value) {
		alert("입력된 아이디와 확인된 아이디가 다릅니다");
		chkId.focus();
	}
	if (passCheckNum != 0) {
		alert("비밀번호 확인이 필요합니다");
		chkPass.focus();
	} else if (tmpPassSave !== chkPass.value) {
		alert("입력된 비밀번호와 확인된 비밀번호가 다릅니다");
		chkPass.focus();
	} else if (tmpPass2Save !== chkPass2.value) {
		alert("입력된 비밀번호 확인과 확인된 비밀번호 확인이 다릅니다");
		chkPass2.focus();
	}
	checkEmail();
	checkTel();
	checkAddr();
	checkBirth();
}




