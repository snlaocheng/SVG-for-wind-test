/**
 * Created by Administrator on 2017/2/22.
 */
/*function  drawFlag() {
 //该函数用于添加新的站点
 var angle=document.getElementById("angle").value;
 if(angle!="") {
 var a = parseInt(angle);
 var newg = document.createElementNS('http://www.w3.org/2000/svg', 'g');//这是因为创建SVG元素需要指定命名空间，就像需要在svg标签上设定xmlns为http://www.w3.org/2000/svg。
 // 正确的构造方式是调用createElentNS()方法，并将”http://www.w3.org/2000/svg”作为第一参数传入。
 var newc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

 newc.setAttribute("cx", "800");
 newc.setAttribute("cy", "100");
 newc.setAttribute("r", "10");
 newc.setAttribute("stroke", "#f57518");
 newc.setAttribute("stroke-width", "2");
 newc.setAttribute("fill", "none");
 newc.setAttribute("transform", "rotate(" + a + ", 800, 200)");
 newg.appendChild(newc);
 var newp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
 var b=90;
 newp.setAttribute("d", "M790 100 L810 100 L830 160 L770 160");
 //newp.setAttribute("d","M"+b+" "+"100 L110 100 L130 160 L70 160");//path中的d其实就是字符串
 newp.style.fill = "#f57518";
 newp.style.opacity = "0.5";
 newp.setAttribute("transform", "rotate(" + a + ", 100, 100)");
 newg.appendChild(newp);
 newg.setAttribute("class","flag");
 document.getElementById("s").appendChild(newg);
 }
 else{
 alert("请输入角度值！");
 }
 }*/

function angleChange(evt){
    var rotatex=null;
    var rotatey=null;
    var translation = null;
    var reg1=/rotate\S+/g;//此正则表达式用于判断是否是平移量
    var reg2 =/\d+/g;//此正则表达式用于分割出字符串
    var angle=document.getElementById("angle").value;
    if(angle!="") {
        var a = parseInt(angle);
        var line1 = document.getElementById("windline1");
        var line2 = document.getElementById("windline2");
        line1.setAttribute("transform", "rotate(" + a + ", 700, 80)");
        line2.setAttribute("transform", "rotate(" + a + ", 700, 80)")//注意，这是常用方法
        var g=document.getElementsByClassName("flag");
        var c=document.getElementsByClassName("cir");
        for(var i=0;i<c.length;i++)
        {     rotatex = c[i].getAttribute("cx");
            rotatey = c[i].getAttribute("cy");
            translation = g[i].getAttribute("transform");

            if (translation == null || reg1.test(translation)) {

                g[i].setAttribute("transform", "rotate(" + a + ", " + rotatex + "," + rotatey + ")");
            }
            else{
                var shu=translation.match(reg2);
                var xstr=shu[0];
                var xoff=parseInt(xstr);
                var ystr=shu[1];
                var yoff=parseInt(ystr);
                newx=parseInt(rotatex)+xoff;
                newy=parseInt(rotatey)+yoff;
                g[i].setAttribute("transform", "rotate(" + a+ ", " + newx+ "," + newy + ")");
            }
        }
    }
    else{
        alert("请输入角度值！");
    }
}

function incre(evt) {
    var rotatex = null;
    var rotatey = null;
    var angle = document.getElementById("angle");
    var anglevalue = angle.value;
    var translation = null;
    var reg1=/rotate\S+/g;//此正则表达式用于判断是否是平移量
    var reg2 =/\d+/g;//此正则表达式用于分割出字符串
    if (anglevalue != " ") {
        var a = parseInt(anglevalue);

        var b = a + 1;
        angle.value = b;
        var line1 = document.getElementById("windline1");
        var line2 = document.getElementById("windline2");
        line1.setAttribute("transform", "rotate(" + b + ", 700, 80)");
        line2.setAttribute("transform", "rotate(" + b + ", 700, 80)")//注意，这是常用方法
        var g = document.getElementsByClassName("flag");
        var c = document.getElementsByClassName("cir");
        for (var i = 0; i < c.length; i++) {
            rotatex = c[i].getAttribute("cx");
            rotatey = c[i].getAttribute("cy");
            translation = g[i].getAttribute("transform");

            if (translation == null || reg1.test(translation)) {

                g[i].setAttribute("transform", "rotate(" + b + ", " + rotatex + "," + rotatey + ")");
            }
            else{
                var shu=translation.match(reg2);
                var xstr=shu[0];
                var xoff=parseInt(xstr);
                var ystr=shu[1];
                var yoff=parseInt(ystr);
                newx=parseInt(rotatex)+xoff;
                newy=parseInt(rotatey)+yoff;
                g[i].setAttribute("transform", "rotate(" + b + ", " + newx+ "," + newy + ")");
            }
        }
    }
    else
    {
        alert("请输入角度值!");
    }


}

function decre(evt){

    var rotatex=null;
    var rotatey=null;
    var translation = null;
    var reg1=/rotate\S+/g;//此正则表达式用于判断是否是平移量
    var reg2 =/\d+/g;//此正则表达式用于分割出字符串
    var angle=document.getElementById("angle");
    var anglevalue=angle.value;
    if(anglevalue!=" ") {
        var a = parseInt(anglevalue);

        var b = a - 1;
        angle.value = b;
        var line1 = document.getElementById("windline1");
        var line2 = document.getElementById("windline2");
        line1.setAttribute("transform", "rotate(" + b + ", 700, 80)");
        line2.setAttribute("transform", "rotate(" + b + ", 700, 80)")//注意，这是常用方法
        var g=document.getElementsByClassName("flag");
        var c=document.getElementsByClassName("cir");
        for(var i=0;i<c.length;i++)
        {  rotatex = c[i].getAttribute("cx");
            rotatey = c[i].getAttribute("cy");
            translation = g[i].getAttribute("transform");

            if (translation == null || reg1.test(translation)) {

                g[i].setAttribute("transform", "rotate(" + b + ", " + rotatex + "," + rotatey + ")");
            }
            else{
                var shu=translation.match(reg2);
                var xstr=shu[0];
                var xoff=parseInt(xstr);
                var ystr=shu[1];
                var yoff=parseInt(ystr);
                newx=parseInt(rotatex)+xoff;
                newy=parseInt(rotatey)+yoff;
                g[i].setAttribute("transform", "rotate(" + b + ", " + newx+ "," + newy + ")");
            }
        }
    }
    else {
        alert("请输入角度值");
    }
}
function onBlur(){
    angleChange();
}
//通过双击鼠标可添加新的站点
function clickaddFlag(evt){


    var newX = evt.clientX;
    var newY = evt.clientY;
    var x1 = newX - 10;
    var x2 = newX + 10;
    var x3 = newX - 30;
    var x4 = newX + 30;
    var y34 = newY + 60;
    var angle = document.getElementById("angle").value;
    if (angle != "") {
        var a = parseInt(angle);
        var newg = document.createElementNS('http://www.w3.org/2000/svg', 'g');//这是因为创建SVG元素需要指定命名空间，就像需要在svg标签上设定xmlns为http://www.w3.org/2000/svg。
        // 正确的构造方式是调用createElentNS()方法，并将”http://www.w3.org/2000/svg”作为第一参数传入。
        var newc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        newc.setAttribute("class", "cir");
        newc.setAttribute("cx", newX);
        newc.setAttribute("cy", newY);
        newc.setAttribute("r", "10");
        newc.setAttribute("stroke", "#f57518");
        newc.setAttribute("stroke-width", "2");
        newc.setAttribute("fill", "none");
        newc.setAttribute("transform", "rotate(" + a + ", " + newX + ", " + newY + ")");
        newg.appendChild(newc);
        var newp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        newp.setAttribute("d", "M" + x1 + " " + newY + " " + "L" + x2 + " " + newY + " " + "L" + x4 + " " + y34 + " " + "L" + x3 + " " + y34);
        newp.style.fill = "#f57518";
        newp.style.opacity = "0.5";
        // newp.setAttribute("transform", "rotate(" + a + ", "+newX+", "+newY+")");
        newg.appendChild(newp);
        newg.setAttribute("class", "flag");
        document.getElementById("s").appendChild(newg);
    }
    else {
        alert("请输入角度值！");
    }

}
//鼠标右击事件
function right(evt){
    var targetElement=null;
    if( evt.button=="2")
    {targetElement=evt.target;
        if(targetElement.nodeName=="circle"||targetElement.nodeName=="path") {
            var con = confirm("是否删除该站点？");
            if (con == true) {
                //这段代码用来删除添加的图形
                targetElement = evt.target;
                targetElement.parentNode.parentNode.removeChild(targetElement.parentNode);

            }
        }
    }
    evt.preventDefault();
}
