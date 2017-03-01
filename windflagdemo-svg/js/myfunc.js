/**
 * Created by Administrator on 2017/2/20.
 */
var lat=null;
var lon=null;

//角度变化
function angleChange(evt){
    var rotatex=null;
    var rotatey=null;

    var angle=document.getElementById("angle").value;
    if(angle!="") {
        var a = parseInt(angle);
        var line1 = document.getElementById("windline1");
        var line2 = document.getElementById("windline2");
        var line3 = document.getElementById("windline3");
        var line4 = document.getElementById("windline4");
        var line5 = document.getElementById("windline5");
        var line6 = document.getElementById("windline6");
        line1.setAttribute("transform", "rotate(" + a + ", 810, 130)");
        line2.setAttribute("transform", "rotate(" + a + ", 810, 130)");
        line3.setAttribute("transform", "rotate(" + a + ", 810, 130)");
        line4.setAttribute("transform", "rotate(" + a + ", 810, 550)");
        line5.setAttribute("transform", "rotate(" + a + ", 810, 550)");
        line6.setAttribute("transform", "rotate(" + a + ", 810, 550)");
        if((a>-1&&a<90)||(a>269&&a<361)){

            line1.setAttribute("display","block");
            line2.setAttribute("display","block");
            line3.setAttribute("display","block");
            line4.setAttribute("display","none");
            line5.setAttribute("display","none");
            line6.setAttribute("display","none");
        }
        else{
            line1.setAttribute("display","none");
            line2.setAttribute("display","none");
            line3.setAttribute("display","none");
            line4.setAttribute("display","block");
            line5.setAttribute("display","block");
            line6.setAttribute("display","block");
        }


        var g=document.getElementsByClassName("flag");
        var c=document.getElementsByClassName("cir");
        for(var i=0;i<c.length;i++)
        {     rotatex = c[i].getAttribute("cx");
              rotatey = c[i].getAttribute("cy");
             g[i].setAttribute("transform", "rotate(" + a + ", " + rotatex + "," + rotatey + ")");
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

    if (anglevalue != " ") {
        var a = parseInt(anglevalue);

        var b = a + 1;
        angle.value = b;
        var line1 = document.getElementById("windline1");
        var line2 = document.getElementById("windline2");
        var line3 = document.getElementById("windline3");
        var line4 = document.getElementById("windline4");
        var line5 = document.getElementById("windline5");
        var line6 = document.getElementById("windline6");
        line1.setAttribute("transform", "rotate(" + b + ", 810, 130)");
        line2.setAttribute("transform", "rotate(" + b + ", 810, 130)");
        line3.setAttribute("transform", "rotate(" + b + ", 810, 130)");
        line4.setAttribute("transform", "rotate(" + b  + ", 810, 550)");
        line5.setAttribute("transform", "rotate(" + b  + ", 810, 550)");
        line6.setAttribute("transform", "rotate(" + b  + ", 810, 550)");
        if((a>-1&&a<90)||(a>269&&a<361)){

            line1.setAttribute("display","block");
            line2.setAttribute("display","block");
            line3.setAttribute("display","block");
            line4.setAttribute("display","none");
            line5.setAttribute("display","none");
            line6.setAttribute("display","none");
        }
        else{
            line1.setAttribute("display","none");
            line2.setAttribute("display","none");
            line3.setAttribute("display","none");
            line4.setAttribute("display","block");
            line5.setAttribute("display","block");
            line6.setAttribute("display","block");
        }

        var g = document.getElementsByClassName("flag");
        var c = document.getElementsByClassName("cir");
        for (var i = 0; i < c.length; i++) {
            rotatex = c[i].getAttribute("cx");
            rotatey = c[i].getAttribute("cy");
            g[i].setAttribute("transform", "rotate(" + a + ", " + rotatex + "," + rotatey + ")");
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


    var angle=document.getElementById("angle");
    var anglevalue=angle.value;
    if(anglevalue!=" ") {
        var a = parseInt(anglevalue);

        var b = a - 1;
        angle.value = b;
        var line1 = document.getElementById("windline1");
        var line2 = document.getElementById("windline2");
        var line3 = document.getElementById("windline3");

        var line4 = document.getElementById("windline4");
        var line5 = document.getElementById("windline5");
        var line6 = document.getElementById("windline6");
        line1.setAttribute("transform", "rotate(" + b + ", 810, 130)");
        line2.setAttribute("transform", "rotate(" + b + ", 810, 130)");
        line3.setAttribute("transform", "rotate(" + b + ", 810, 130)");
        line4.setAttribute("transform", "rotate(" + b  + ", 810, 550)");
        line5.setAttribute("transform", "rotate(" + b  + ", 810, 550)");
        line6.setAttribute("transform", "rotate(" + b  + ", 810, 550)");
        if((a>-1&&a<90)||(a>269&&a<361)){

            line1.setAttribute("display","block");
            line2.setAttribute("display","block");
            line3.setAttribute("display","block");
            line4.setAttribute("display","none");
            line5.setAttribute("display","none");
            line6.setAttribute("display","none");
        }
        else{
            line1.setAttribute("display","none");
            line2.setAttribute("display","none");
            line3.setAttribute("display","none");
            line4.setAttribute("display","block");
            line5.setAttribute("display","block");
            line6.setAttribute("display","block");
        }

        var g=document.getElementsByClassName("flag");
        var c=document.getElementsByClassName("cir");
        for(var i=0;i<c.length;i++)
        {   rotatex = c[i].getAttribute("cx");
            rotatey = c[i].getAttribute("cy");
            g[i].setAttribute("transform", "rotate(" + a + ", " + rotatex + "," + rotatey + ")");
        }
    }
    else {
        alert("请输入角度值");
    }
}
//功率变化(改变符号的大小)
function zoom(){
    var lonstr=document.getElementById("lon").value;
    var latstr=document.getElementById("lat").value;
    lon=parseInt(lonstr);
    lat=parseInt(latstr);

    var g=document.getElementsByClassName("flag");
    var c=document.getElementsByClassName("cir");
    var p=document.getElementsByClassName("trapezi");
    for(var i=0;i<c.length;i++){
       var cxstr= c[i].getAttribute("cx");
       var cystr=c[i].getAttribute("cy");
        var cx=parseInt(cxstr);
        var cy=parseInt(cystr);
        var x1=cx-10;
        var x2=cx+10;
        var x3=cx-lon;
        var x4=cx+lon;
        var y34=cy+lat;
        //alert(x1+","+cy+","+x2+","+cy+","+x4+","+y34+","+x3+","+y34);
        p[i].setAttribute("d","M" + x1 + " " + cy + " " + "L" + x2 + " " + cy + " " + "L" + x4 + " " + y34 + " " + "L" + x3 + " " + y34)
    }

}
function onBlur(){
   angleChange();
    zoom();
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
            newc.setAttribute("stroke", "black");
            newc.setAttribute("stroke-width", "2");
            newc.setAttribute("fill", "none");
            newc.setAttribute("transform", "rotate(" + a + ", " + newX + ", " + newY + ")");
            newg.appendChild(newc);
            var newp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            newp.setAttribute("class","trapezi")
            newp.setAttribute("d", "M" + x1 + " " + newY + " " + "L" + x2 + " " + newY + " " + "L" + x4 + " " + y34 + " " + "L" + x3 + " " + y34);
            newp.style.fill = "black";
            newp.style.opacity = "0.7";
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

