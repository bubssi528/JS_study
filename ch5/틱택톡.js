var 바디 = document.body;
var 테이블 = document.createElement('table');
var 칸들 = [];
var 줄들 = [];
var 턴 = 'x';

비동기콜백 = function(이벤트){  
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log('몇줄:',몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log('몇칸:',몇칸);

    if(칸들[몇줄][몇칸].textContent !== ''){ //빈칸인지 아닌지 검사
        console.log("빈칸이 아닙니다");
    }
    else{
        console.log('빈칸입니다')
        칸들[몇줄][몇칸].textContent = 턴;
    }
    //세칸 채웠는지 검사
    var 승리 = false;
    //가로줄검사
    if(칸들[몇줄][0].textContent == 턴 && 
       칸들[몇줄][1].textContent == 턴 && 
       칸들[몇줄][2].textContent == 턴 )
       {
        승리 = true;
       };
    //세로줄 검사
    if(칸들[0][몇칸].textContent == 턴 &&
       칸들[1][몇칸].textContent == 턴 && 
       칸들[2][몇칸].textContent == 턴 )
        {
        승리 = true;
        };
    //대각선 검사 
    if(Math.abs(몇줄-몇칸) ===0 || Math.abs(몇줄-몇칸) ===2)
    {
        if(칸들[0][0].textContent == 턴 &&
           칸들[1][1].textContent == 턴 && 
           칸들[2][2].textContent == 턴 ||
           칸들[2][0].textContent == 턴 &&
           칸들[1][1].textContent == 턴 && 
           칸들[0][2].textContent == 턴)
           {
            승리 = true;
           }
    }
    //3개 채웠으면
    if(승리){
        console.log(턴,"님 WIN");
        //초기화
        턴 = 'x';
        var i =0;
        칸들.forEach(function (줄){
            줄.forEach(function(칸){
                console.log(i)
                i+=1;
            });
        });
    
    }
    else{
        if(턴 === 'x'){
            턴 = 'o';
        }
        else{
            턴 = 'x'
        }
    }

};

for(i = 0; i < 3; i +=1 ){
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for(var j = 0; j < 3; j += 1){
        var 칸 = document.createElement('td');
        칸.addEventListener('click',비동기콜백);
        칸들[i].push(칸);
        줄.appendChild(칸);      
    }
    테이블.appendChild(줄);
}
console.log('줄들:',줄들,'칸들:',칸들);
document.body.appendChild(테이블);

