var click=false; // flag to indicate when shape has been clicked
var clickX, clickY; // stores cursor location upon first click
var moveX=0, moveY=0; // keeps track of overall transformation
var lastMoveX=0, lastMoveY=0; // stores previous transformation (move)
var targetElement=null;
function mouseDown(evt){
    targetElement=evt.target;
    if(targetElement.nodeName=="circle"||targetElement.nodeName=="path")
    {
    evt.preventDefault(); // Needed for Firefox to allow dragging correctly
    click = true;
    clickX = evt.clientX;
    clickY = evt.clientY;
}

}

function move(evt){
    if(targetElement) {
        evt.preventDefault();
        if (click) {
            moveX = lastMoveX + (evt.clientX - clickX);
            moveY = lastMoveY + (evt.clientY - clickY);

            var targetG = targetElement.parentNode;//获得整个g标签，也即将获取到的元素加入到父节点中，做一起移动
            targetG.setAttribute("transform", "translate(" + moveX+ "," + moveY+ ")");
            //拖动也即平移


        }
    }
}
function endMove(evt){
    click=false;
    lastMoveX = moveX;
    lastMoveY = moveY;

}