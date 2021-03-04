//제로초 js 강의
var first="아오이에우";
console.log('끝말잇기 시작')
while(true){
    answer = prompt("제시어:" + first);
    if(first[first.length - 1] === answer[0]) {
        console.log("정답")
        first = answer;
    }
    else{
        console.warn("떙")
        break
    }
}
 