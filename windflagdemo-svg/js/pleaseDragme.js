/**
 * Created by Administrator on 2017/2/22.
 */
var targetElement=null;
var grabX=null;
var grabY=null;
var X=null;
var Y=null;
//鼠标点击拾取元素
function grabElement(evt){
    targetElement=evt.target;
    if(targetElement.nodeName=="circle"||targetElement.nodeName=="path"){
        grabX=evt.clientX;//获取鼠标按下时的坐标
        grabY=evt.clientY;
    }
}
function moveElement(evt) {
    if (targetElement) {
    X = evt.clientX - grabX;//获取xy坐标的平移量
    Y = evt.clientY - grabY;
    var targetG = targetElement.parentNode;//获得整个g标签，也即将获取到的元素加入到父节点中，做一起移动
    targetG.setAttribute("transform", "translate(" + X + "," + Y + ")");//拖动也即平移
}
}

function dropElement(evt) {
    if (targetElement) {

        X = evt.clientX - grabX;//获取xy坐标的平移量
        Y = evt.clientY - grabY;
        var targetG = targetElement.parentNode;//获得整个g标签，也即将获取到的元素加入到父节点中，做一起移动
        targetG.setAttribute("transform", "translate(" + X + "," + Y + ")");
        targetElement=null;
    }
}