/*
�Ǻ���ġ ������ �� ���� �ٷ� ���� �� �� ���� ���� ���� �˴ϴ�. 1�� 2�� �����ϴ� ��� �� ������ �Ʒ��� �����ϴ�.

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
¦���̸鼭 4�鸸 ������ ��� ���� ���ϸ� �󸶰� �˴ϱ�?
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
