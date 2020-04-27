function checkSpace(tmp) { 
	if(tmp.search(/\s/) != -1) 	{ 
		return true; 
	} else { 
		return false; 
	} 
}

function checkName() {
	var name = document.getElementById('name');
	var tmp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
	
	if (!checkSpace(name)) {
		console.log("이름 공백");
	}
	
	if(!tmp.test(name)) {
		console.log("이름 한국어 아님");
	}
}

function checkSex(tmp) {
	var sex = document.getElementsByName('sex');
	
	for (var i = 0; i < sex.length; i++) {
		if (sex[i] != tmp) {
			sex[i].checked = false;
		}
	}
}