// 设置变量（不同的时间传入方式）
var target_time = new Date("2024/11/19");
// var target_time = new Date();
// target_time.setHours(target_time.getHours() + 5);

// 获取需要对应插入数据的节点
// var target_time = new Date(document.getElementById("target").value);
var day_ele = document.getElementById("day");
var hour_ele = document.getElementById("hour");
var min_ele = document.getElementById("min");
var sec_ele = document.getElementById("sec");

// 获取目标时间到当前时间的毫秒数，进行计算并返回结果
function countDown(){
    var reduce_ms = target_time.getTime() - Date.now(); 
    return {
        day : parseInt(reduce_ms / 1000 / 3600 / 24),
        hour : parseInt(reduce_ms / 1000 / 3600 % 24),
        min  : parseInt(reduce_ms / 1000 / 60 % 60 ),
        sec  : Math.round(reduce_ms / 1000 % 60)
    }
}

// 将数据渲染到页面指定节点中
function renderCountDown(){
    var res = countDown();
    day_ele.innerHTML = addZero(res.day);
    hour_ele.innerHTML = addZero(res.hour);
    min_ele.innerHTML  = addZero(res.min);
    sec_ele.innerHTML  = addZero(res.sec);
}

// 封装函数，当数值小于10时在前面加“0”
function addZero( num ){
    if(num < 10){
        return "0" + num;
    }
    return num;
}

// 实现倒计时效果
setTimeout(renderCountDown,1000);
renderCountDown()
setInterval(renderCountDown, 1000);
