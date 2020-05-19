
var fmSave = document.userInfo;
var nameSave = document.getElementById('name');				// 이름
var sexSave = document.getElementsByName('sex');			// 성별
var idSave = document.getElementById('id');					// 아이디
var overLapId = document.getElementById('overLap');			// 중복 아이디(더미)
var passSave = document.getElementById('pass1');			// 비밀번호1
var pass2Save = document.getElementById('pass2');			// 비밀번호 2
var emailSave = document.getElementById('email');			// 이메일 앞
var email2Save = document.getElementById('email2');			// 이메일 뒤
var telSave = document.getElementById('tel');				// 전화번호
var yearSave = document.getElementById('year');				// 생년월일(년)
var monthSave = document.getElementById('month');			// 생년월일(월)
var daySave = document.getElementById('day');				// 생년월일(일)

var idCheckNum = 1; 		// 아이디 체크 후 수정 여부를 확인하는 변수
var tmpIdSave = ""; 			// 아이디 체크 후 아이디 임시 저장
var passCheckNum = 1;		// 위와 동일(비밀번호)
var tmpPassSave = ""; 
var tmpPass2Save = "";

var pat1 = /[가-힣]/;
var pat2 = /[~!@#$%^&*()_+|<>?:{}]/;
var pat3 = /[0-9]/;
var pat4 = /[a-zA-Z]/;
var pat5 = /[ㄱ-ㅎ|ㅏ-ㅣ]/;

function checkSpace(tmp) { 
	if(tmp.search(/\s/) != -1) 	{ 
		return true; 
	} else { 
		return false;
	}
}

function checkName() {
	
	if (!nameSave.value) {
		alert("이름을 입력해주세요");
		nameSave.focus();
		return 1;
	} else if (checkSpace(nameSave.value)) {
		alert("이름에 공백이 포함되어있습니다");
		nameSave.focus();
		return 1;
	} else if(!pat1.test(nameSave.value) || pat2.test(nameSave.value) || pat3.test(nameSave.value) || pat4.test(nameSave.value)) {
		alert("이름은 한글만 입력해주세요");
		nameSave.focus();
		return 1;
	}	
}

function checkSex(sexParm) {
	
	for (var i = 0; i < sexSave.length; i++) {
		if (sexSave[i] != sexParm) {
			sexSave[i].checked = false;
		}
	}
}

function checkSex2() {
	
	if (sexSave[0].checked == false && sexSave[1].checked == false) {
		alert("성별을 선택해주세요");
		return 1;
	}
}

function checkId() {
	
	if (!idSave.value) {
		alert("아이디를 입력해주세요");
		idCheckNum = 1;
		idSave.focus();
		return 1;
	} else if (checkSpace(idSave.value)) {
		alert("아이디에 공백이 포함되어있습니다");
		idCheckNum = 1;
		idSave.focus();
		return 1;
	} else if (idSave.value === overLapId.value) {
		alert("중복된 아이디입니다");
		idCheckNum = 1;
		idSave.focus();
		return 1;
	} else if (pat2.test(idSave.value) || idSave.value.length >= 10) {
		alert("아이디에 특수문자가 포함되어 있거나 10글자 이상입니다");
		idCheckNum = 1;
		idSave.focus();
		return 1;
	} else if (pat5.test(idSave.value)) {
		alert("아이디에 한글 자음, 모음이 들어갈 수 없습니다");
		idCheckNum = 1;
		idSave.focus();
		return 1;
	} 
	else {
		alert("확인 완료");
		tmpIdSave = idSave.value;
		idCheckNum = 0;
	}
}

function checkPass() {
	
	if (!passSave.value) {
		alert("비밀번호를 입력해주세요");
		passCheckNum = 1;
		passSave.focus();
		return 1;
	} else if (!pass2Save.value) {
		alert("비밀번호를 입력해주세요");
		passCheckNum = 1;
		pass2Save.focus();
		return 1;
	} else if (checkSpace(passSave.value)) {
		alert("비밀번호에 공백이 포함되어있습니다");
		passCheckNum = 1;
		pass2Save.focus();
		return 1;
	} else if (!pat2.test(passSave.value) || !pat3.test(passSave.value) || passSave.value.length >= 10) {
		alert("특수문자와 숫자가 포함되지 않았거나 10글자 이상입니다");
		passCheckNum = 1;
		pass2Save.focus();
		return 1;
	} else if (passSave.value !== pass2Save.value) {
		alert("비밀번호가 일치하지 않습니다");
		passCheckNum = 1;
		pass2Save.focus();
		return 1;
	} else {
		alert("확인 완료");
		tmpPassSave = passSave.value;
		tmpPass2Save = pass2Save.value;
		passCheckNum = 0;
	}
}

function setEmail(selValue) {
	var email2Dir = selValue[selValue.selectedIndex].value;		// 이메일 뒤 직접입력 시
	var emailTmp = 1;
	
	if (email2Dir == "dir") {
		email2Dir = "";
		emailTmp = 0;
	}
	
	fmSave.email2.value = email2Dir;
	fmSave.email2.disabled = emailTmp;
}

function checkEmail() {
	
	if (!emailSave.value || !email2Save.value) {
		alert("이메일을 입력해주세요");
		emailSave.focus();
		return 1;
	} else if (checkSpace(emailSave.value) || checkSpace(email2Save.value)) {
		alert("이메일에 공백이 포함되어있습니다");
		emailSave.focus();
		return 1;
	}
}

function autoHypenPhone(str){
    str = str.replace(/[^0-9]/g, '');
    var tmp = '';
    if (str.length < 4) {
        return str;
    } else if (str.length < 7) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    } else if (str.length < 11) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    } else {              
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }
    return str;
}

var cellPhone = document.getElementById('tel');
cellPhone.onkeyup = function(event){
        event = event || window.event;
        var val = this.value.trim();
        this.value = autoHypenPhone(val) ;
}

function checkTel() {
	var telSaveArr = document.getElementById('tel').value.split("");
	var idNumber = telSaveArr[0];
	var i = 0;
	
	for(i = 1; i < 3; i++) {
		idNumber += telSaveArr[i];
	}
	
	if (!telSave.value) {
		alert("전화번호를 입력해주세요");
		telSave.focus();
		return 1;
	} else if (checkSpace(telSave.value)) {
		alert("전화번호에 공백이 포함되어있습니다");
		telSave.focus();
		return 1;
	} else if (!pat3.test(telSave.value)) {
		alert("전화번호는 숫자만 입력해주세요");
		telSave.focus();
		return 1;
	} else if (idNumber !== "010") {
		alert("전화번호의 식별번호(010)가 올바르지 않습니다");
		telSave.focus();
		return 1;
	} else if (telSaveArr.length != 13) {
		alert("전화번호가 짧거나 깁니다");
		telSave.focus();
		return 1;
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
	var addr2Save = document.getElementById('addr2');
	
	if (!addr2Save.value) {
		alert("상세주소를 입력해주세요");
		addr2Save.focus();
		return 1;
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
	
	for(var j = 1; j <= 12; j++) {
		document.getElementById('month').options[j] = new Option(j, j);
	}
	
	if (yearSave.value == 'yearTmp') {
		document.getElementById('month').options.length = 1;
	}
	document.getElementById('day').options.length = 1;
}

function setDay() {
	
	var tmpDate = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  
	if ((yearSave.value % 4 == 0 && yearSave.value % 100 != 0) || yearSave.value % 400 == 0) {
		tmpDate[1] = 29;
	}
	
	if (monthSave.value == 'monthTmp') {
		document.getElementById('day').options.length = 1;
	}
	
	for (var k = 1; k <= tmpDate[monthSave.value - 1]; k++) {
		document.getElementById('day').options.length = k;
		document.getElementById('day').options[k] = new Option(k, k);
	}
}

function checkBirth() {
	
	if (yearSave.value == "yearTmp") {
		alert("생년월일(년) 입력이 필요합니다");
		return 1;
	} else if (monthSave.value == "monthTmp") {
		alert("생년월일(월) 입력이 필요합니다");
		return 1;
	} else if (daySave.value == "dayTmp") {
		alert("생년월일(일) 입력이 필요합니다");
		return 1;
	}
}

function checkAll() {
	
	if(checkName() == 1) {return;}
	if(checkSex2() == 1) {return;}
	if (idCheckNum != 0) {
		alert("아이디 확인이 필요합니다");
		idSave.focus();
		return;
	} else if (tmpIdSave !== idSave.value) {
		alert("입력된 아이디와 확인된 아이디가 다릅니다");
		idSave.focus();
		return;
	}
	if (passCheckNum != 0) {
		alert("비밀번호 확인이 필요합니다");
		pass2Save.focus();
		return;
	} else if (tmpPassSave !== passSave.value) {
		alert("입력된 비밀번호와 확인된 비밀번호가 다릅니다");
		pass2Save.focus();
		return;
	} else if (tmpPass2Save !== pass2Save.value) {
		alert("입력된 비밀번호 확인과 확인된 비밀번호 확인이 다릅니다");
		pass2Save.focus();
		return;
	}
	if(checkEmail() == 1) {return;}
	if(checkTel() == 1) {return;}
	if(checkAddr() == 1) {return;}
	if(checkBirth() == 1) {return;}
}




