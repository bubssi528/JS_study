//js 별찍기 문제 연습
//1. 별을 1부터 5까지 계단모양으로
for(var star = 1; star <= 5; star +=1){
    console.log("*".repeat(star))
}
//1번 while문으로 구현
var star = 1;
while(true){
    console.log("*".repeat(star))
    star = star + 1;
    if (star > 5){
        break;
    }
}
//2. 별찍기1 거꾸로
for(var star = 5; star >=1 ; star = star - 1){
    console.log("*".repeat(star))
}

//별찍기2 while문으로 구현
var star = 5;
while(true){
    console.log("*".repeat(star))
    star = star - 1;
    if (star < 1){
        break;
    }
}
for(var star = 10; star >=2 ; star = star - 2){
    console.log("*".repeat(star))
}
//마름모
for(var star = 1 ; star <=16 ; star = star *2){
    console.log("*".repeat(star))
}