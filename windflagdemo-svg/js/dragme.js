/**
 * Created by Administrator on 2017/2/21.
 */
var svgDoc = null;
var svgRoot = null;
var trueCoords = null;//记录元素在视口中的实际坐标
var grabCoords = null;//表示视图经过缩放或移动后的点在视口中的坐标
var backDrop = null;
var GrabPoint = null;
var DragTarget = null;

function init(evt) {
    svgDoc = evt.target.ownerDocument;
    svgRoot = evt.target;
    //两个不显示的点
    trueCoords = svgRoot.createSVGPoint();
    GrabPoint = svgRoot.createSVGPoint();
    //定义了画布，作为拖动时间的透明背景层使用，接收所有的触发事件
    //这样做主要是为了避免因为拖动鼠标速度太快，而离开了被拖拽的元素，导致鼠标的onmousemove事件无法产生
    //有了这个层，无论被拖拽的元素是否跟得上鼠标的脚步，在这个层都能产生鼠标onmousemove事件
    backDrop = svgDoc.getElementById("BackDrop");
}

//获得当前元素在视口中的坐标位置的函数
function GetTrueCoords(evt) {
    var newScale = svgRoot.currentScale;//currentScale获得当前视图的伸缩比例
    var translation = svgRoot.currentTranslate;//currentTranslate获得当前视图的平移量
    trueCoords.x = (evt.clientX - translation.x) / newScale;
    trueCoords.y = (evt.clientY - translation.y) / newScale;
}

//鼠标按下触发的事件
function Grab(evt) {

    var targetElement = evt.target;//取得要拖动的DOM Object
    GetTrueCoords(evt);
    if ("Box" == targetElement.parentNode.id) {//判断图形是否被拖入黄色框中
        DragTarget = null;//后续的拖动事件取消掉
        return;
    }
    if (backDrop != targetElement) {//不是在拖动背景
        DragTarget = targetElement;
    }

    DragTarget.parentNode.appendChild(DragTarget);//把要拖动的元素加入到它的父节点中，类似于在绘图软件中常见的”至于最上方“的操作

    DragTarget.setAttributeNS(null, "pointer-events", "none");//取消要拖动元素的鼠标接收事件
    //这样可以保证当鼠标释放时所触发的事件的”主人“不是要拖动的元素本身，而是它所覆盖的元素，画布或其他元素

    var Matrix = DragTarget.getCTM();//获取当前SVG的坐标转换矩阵
    GrabPoint.x = trueCoords.x - Number(Matrix.e);//定义元素移动后在视图中的坐标
    GrabPoint.y = trueCoords.y - Number(Matrix.f);
}

//拖动鼠标触发的事件
function Drag(evt) {
    GetTrueCoords(evt);//获取当前元素在视口的实际坐标
    if (DragTarget) { //判断被拖动元素是否存在
        var newX = trueCoords.x - GrabPoint.x;
        var newY = trueCoords.y - GrabPoint.y;
        DragTarget.setAttributeNS(null, "transform", "translate(" + newX + "," + newY + ")");//设置元素的平移变化参数 实际效果就是被拖动的元素随着鼠标不断移动
    }


}

function Drop(evt) {//evt不是要拖动的元素本身，而是它所覆盖的元素，画布或其他元素
    if (DragTarget) {
        var targetElement = evt.target;
        DragTarget.setAttributeNS(null, "pointer-events", "all");//恢复要拖动元素的鼠标接收事件
        if ("Box" == targetElement.parentNode.id) {
            targetElement.parentNode.appendChild(DragTarget);
            alert(DragTarget.id + " 已经被拖入黄色箱子中");
        } else {
            //alert(DragTarget.id + " 已经位于" + targetElement.id + "之上");
        }
        DragTarget = null;
    }
}