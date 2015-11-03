// 앞에서부터 읽을 때나 뒤에서부터 읽을 때나 모양이 같은 수를 대칭수(palindrome)라고 부릅니다.

// 두 자리 수를 곱해 만들 수 있는 대칭수 중 가장 큰 수는 9009 (= 91 × 99) 입니다.

// 세 자리 수를 곱해 만들 수 있는 가장 큰 대칭수는 얼마입니까?


function palindrome(num){
	var stringNum = num.toString();
	var stringNumD = "";
	for(var i=stringNum.length-1; i>=0; i--){
		stringNumD += stringNum.substr(i, 1);
	}

	if ( stringNumD == stringNum )
		return true;
	else
		return false;
}

var stringNum =50105;

console.log(stringNum);
console.log(palindrome(stringNum));


function result(){
	var array = [];
	for(var i = 999 ; i > 0 ; i--) {

		for(var j = 999 ; j > 0 ; j--) {
			var num = i*j;
			if(palindrome(num)){
				array.push(num);
			}
		}
	}
	console.log(array);
	return Math.max.apply(null, array);
}

console.log(result());
