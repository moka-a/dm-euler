/*
피보나치 수열의 각 항은 바로 앞의 항 두 개를 더한 것이 됩니다. 1과 2로 시작하는 경우 이 수열은 아래와 같습니다.

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
짝수이면서 4백만 이하인 모든 항을 더하면 얼마가 됩니까?
*/

var array =[];

function fac(n) {

    if ( n == 1 ) return 1;
    if ( n == 2 ) return 2;
    return fac(n-2) + fac(n-1);
}

console.log(fac(5) + " ,      8");
console.log(fac(10) + " , 89");

var res = 0;
function result() {

    var n =1;
    while (true) {

        if ( fac(n) % 2 == 0 )
            res += fac(n);

        if (fac(n) > 4000000)
            break;

        n++;
    }
    console.log(res);
}

result();
