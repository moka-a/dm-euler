

// 어떤 수를 소수의 곱으로만 나타내는 것을 소인수분해라 하고, 이 소수들을 그 수의 소인수라고 합니다.
// 예를 들면 13195의 소인수는 5, 7, 13, 29 입니다.

// 600851475143의 소인수 중에서 가장 큰 수를 구하세요.

// 소인수분해하는 함수
// soin(13195). should = [5,7,13,29]
// soin(6). should = [1,2,3,6]

// 소수인지 팔별하는 함수 
// isSosu(6) = false
// isSosu(7) = true

function isSosu(num) {

	var flag = true;
	for ( i = 2 ; i < num ; i++ ) {

		if ( i % 2 != 0 && num % i == 0 )
			return false;
	}
	return flag;
}

console.log( isSosu(2) + "= true" );
console.log( isSosu(6) + "= false" );
console.log( isSosu(7) + "= true" );
console.log( isSosu(9) + "= false" );
console.log( isSosu(11) + "= true" );

console.log( "****************************" );

function soin(num) {

	result = []

	for ( i = 1 ; i < num / 2 ; i++ ) {

		if ( i % 2 != 0 && num % i == 0 && isSosu(i) ) {
			
			result.push(i);
			result.push(num /i);
		}
	}

	console.log(result);

	return result;
}

// soin(13195);

console.log( "****************************" );

function finalPro(array) {

	// console.log(array[array.length - 1]);

	console.log( Math.max.apply(null,array) );
}

finalPro(soin(13195));

console.log( "****************************" );

var biggest_prime = 1;
var num = 600851475143;

for ( var i = 2; i <= num ; i++ ) {

	while ( num % i == 0 ) {

		num = num / i;

		biggest_prime = i;
	}
}

console.log(biggest_prime);







