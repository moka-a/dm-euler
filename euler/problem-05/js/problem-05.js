// 1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.
// 그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?

var max = 20;
var i=1;
while(true){

	var flag = true;
	for(var a=1; a<=max; a++){
		if(i%a!=0){
			flag = false;
		}
	}

	if ( flag )
		break;

	i++;
}

console.log(i);