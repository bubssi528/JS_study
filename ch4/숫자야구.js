//제로초 script 실습용
var 바디 = document.body;
var 숫자후보 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
var 숫자배열 = [];

for(var i = 0; i < 4; i +=1){
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)),1)[0];
    숫자배열.push(뽑은것);
}
console.log(숫자배열);

var 결과창 = document.createElement('h1');
document.body.append(결과창);
var 폼 = document.createElement('form')
document.body.append(폼)
var 입력창 =  document.createElement('input');
입력창.type = 'text'
입력창.maxLength = 4;
폼.append(입력창);
var 버튼 = document.createElement('button')
버튼.textContent = '버튼';
폼.append(버튼);

폼.addEventListener('submit',function 비동기(이벤트){
    이벤트.preventDefault();
    // var 숫자배열 = String(숫자배열[0]) + String(숫자배열[1]) + String(숫자배열[2]) + String(숫자배열[3]); 
    console.log(입력창.value, 숫자배열.join(''), 입력창.value === 숫자배열.join(''))
    if(숫자배열.join('') === 입력창.value){ 
        결과창.textContent = '홈런';
        입력창.value = '';
        입력창.focus();
        숫자후보 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
        숫자배열 = [];
        for(var i = 0; i < 4; i +=1){
            var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)),1)[0];
            숫자배열.push(뽑은것);
        }
    }
    else{
        var 스트라이크 = 0;
        var 볼 = 0;
        for(var i = 0; i < 4; i += 1){
            console.log(숫자배열[i] , 입력창.value[i])
            if(String(숫자배열[i]) === 입력창.value[i]){
                console.log("i : " + i,입력창[i])
                스트라이크 += 1;
            } 
            else if(String(숫자배열[i]).indexOf(입력창.value[i])){
                볼+=1;
            }
        }
        결과창.textContent = '스트라이크' + 스트라이크 +'볼'+볼;
    }
    }   
)