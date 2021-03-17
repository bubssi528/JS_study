var tbody = document.querySelector('#table tbody')
var dataset = [];
var 중단플래그 = false;
var 열은칸 = 0
document.querySelector('#exec').addEventListener('click', function(){
    tbody.innerHTML = '';
    dataset = [];
    열은칸 = 0;
    중단플래그 = false
    document.querySelector('#result').textContent = '';
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);

    //지뢰찾기 전체 테이블 만들기 
    for(var i = 0; i < ver; i += 1){
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        //td 생성
        for(var j = 0; j < hor; j += 1){
            arr.push(1);
            var td = document.createElement('td');
            //td에 우클릭하면 작동하는 이벤트 - 깃발달기
            td.addEventListener('contextmenu', function (e){
                e.preventDefault();
                if(중단플래그){
                    return
                }
                //currentTarget - 이벤트리스너가 달린곳
                //Target 실제로 클릭한곳
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget)
                var 줄 =  Array.prototype.indexOf.call(부모tbody.children, 부모tr)
                if(dataset[줄][칸] === 0){
                    return
                }
                if(e.currentTarget.textContent === '!' ){
                    e.currentTarget.textContent = '?';
                    e.currentTarget.classList.remove('flag');
                    e.currentTarget.classList.add('qusetion');
                }
                else if(e.currentTarget.textContent === '?'){
                    if(dataset[줄][칸] === 1){
                        e.currentTarget.classList.remove('qusetion');
                        e.currentTarget.textContent = '';
                    }
                    else{
                        e.currentTarget.classList.remove('qusetion');
                        e.currentTarget.textContent = '';
                    }
                }
                else{
                    e.currentTarget.textContent = '!';
                    e.currentTarget.classList.add('flag');
                }
            })
            //td에 좌클릭하면 작동하는 이벤트 
            td.addEventListener('click', function(e){
                if(중단플래그){
                    console.log('중단플래그 발생')
                    return
                }
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget)
                var 줄 =  Array.prototype.indexOf.call(부모tbody.children, 부모tr)
                if(dataset[줄][칸] === 0){
                    return
                }
                e.currentTarget.classList.add('opened');
                열은칸 += 1
                //지뢰면 결과창에 펑 그리고 게임종료
                if(dataset[줄][칸] === 'x'){
                    e.currentTarget.textContent = '펑';
                    document.querySelector('#result').textContent = '실패'
                    중단플래그 = true
                    
                }
                //지뢰가 아니면 주변지뢰 개수 찾기
                else{
                    dataset[줄][칸] = 0;
                    var 주변 = [dataset[줄][칸-1], dataset[줄][칸+1]]
                   if(dataset[줄-1]){
                       주변 = 주변.concat([dataset[줄-1][칸-1],dataset[줄-1][칸],dataset[줄-1][칸+1]])
                   }
                   if(dataset[줄+1]){
                       주변 = 주변.concat([dataset[줄+1][칸-1],dataset[줄+1][칸],dataset[줄+1][칸+1]])
                   }
                   var 주변지뢰개수 = 주변.filter(function(v){
                    return v === 'x'
                    }).length
                    e.currentTarget.textContent = 주변지뢰개수 || '';
                    // 주변에 지뢰가 없으면 모두 오픈
                    if(주변지뢰개수 === 0){
                        var 주변칸 =[];
                        주변칸 = 주변칸.concat([tbody.children[줄].children[칸-1],tbody.children[줄].children[칸+1]])
                        if(tbody.children[줄-1]){
                            주변칸 = 주변칸.concat([tbody.children[줄-1].children[칸-1],tbody.children[줄-1].children[칸],tbody.children[줄-1].children[칸+1]])
                        }
                        if(tbody.children[줄+1]){
                            주변칸 = 주변칸.concat([tbody.children[줄+1].children[칸-1],tbody.children[줄+1].children[칸],tbody.children[줄+1].children[칸+1]])
                        }
                        주변칸.filter(function(v){
                            return !!v })
                            .forEach(function(다른칸){
                                if(다른칸.classList[0] !== 'opened'){
                                    다른칸.click();
                                }
                            })
                    }
                    if(열은칸 === hor * ver - mine){
                        중단플래그 = true
                        document.querySelector('#result').textContent = '승리'
                    }
                }
            })
            tr.appendChild(td);
        }
        tbody.appendChild(tr)
    }
    //지뢰위치 뽑기 - 피셔예이츠 셔플
    var 후보군 = Array(hor * ver)
    .fill()
    .map(function(요소,인덱스){
        return 인덱스;
    });
    var 셔플 = [];
    while(후보군.length > (hor * ver - mine)){
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0];
    셔플.push(이동값);
    }   

    //지뢰삽입
    for(var k = 0; k<셔플.length; k += 1){
        var 세로 = Math.floor(셔플[k] / hor);
        var 가로 = 셔플[k] % hor;
        dataset[세로][가로] = 'x';
    }
})

