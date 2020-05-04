var n=0;
var swidth=screen.availWidth;
var sheight=screen.availHeight;
var iheight=window.innerHeight;
iheight = parseInt(iheight);
var iwidth=window.innerWidth;
iwidth = parseInt(iwidth);
if( swidth < sheight || swidth < 600 ){
	$( "#sorry" ).css("display", "block" );
}

//LOADING
  function init( ) {
    // .... 其他指令
    _oTag = document.getElementById("divLoading");
    _oTag.style.display = "none";  // hide it.
	$('.d1bg2').animate({opacity: "1" },1000,"swing",function(){});
  }

  if (window.attachEvent) {
    window.attachEvent('onload', init);
  } else {
    window.addEventListener('load', init, false);
  }

//預執行
$( "#scene1" ).css("display", "block" );
$( "#scene2" ).css("display", "none" );
//$( "#scene1" ).css("display", "none" );
//$( "#scene2" ).css("display", "block" );
//
$("#gogo").click(function(){
$( "#scene1" ).css("display", "none" );
$( "#scene2" ).css("display", "block" );
$( "body" ).css("overflow", "hidden" );
$( ".d1bg2" ).css("opacity", "0" );
});
$("#boat").mouseenter(function() {
  $( this ).stop(true,false).animate({left:"5px"},1000);
});
$("#boat").mouseleave(function() {
  $( this ).stop(true,false).animate({left:"50px"},1000);
});
$("#boat").click(function(){
$( "#scene2" ).css("display", "none" );
$( "#scene1" ).css("display", "block" );
$( "body" ).css("overflow", "auto" );
$('.d1bg2').animate({opacity: "1" },1000,"swing",function(){});
});

$("#btn1").click(function(){
	$('#map').animate({marginTop: "-100%" },"slow","swing",function(){});
	$( ".stage" ).css("display", "none" );
	$( "#stage1" ).css("display", "block" );
});
$("#btn2").click(function(){
	$('#map').animate({marginTop: "-100%" },"slow","swing",function(){});
	$( ".stage" ).css("display", "none" );
	$( "#stage2" ).css("display", "block" );
});
$("#btn3").click(function(){
	$('#map').animate({marginTop: "-100%" },"slow","swing",function(){});
	$( ".stage" ).css("display", "none" );
	$( "#stage3" ).css("display", "block" );
});
$("#btn4").click(function(){
	$('#map').animate({marginTop: "-100%" },"slow","swing",function(){});
	$( ".stage" ).css("display", "none" );
	$( "#stage4" ).css("display", "block" );
});
$("#btn5").click(function(){
	$('#map').animate({marginTop: "-100%" },"slow","swing",function(){});
	$( ".stage" ).css("display", "none" );
	$( "#stage5" ).css("display", "block" );
});
$(".fly").click(function(){
	$('#map').animate({marginTop: "0" },"slow","swing",function(){});
});

//對話框點一下就消失，飛走後全部又歸位出現
$("#stage1 .serif,#stage2 .serif,#stage3 .serif,#stage5 .serif,.ballShadow,.newszone").click(function(){
	$( ".serif").css("display", "none" );
	$( ".dotmore").stop(true,false).animate({bottom: "20px" },"fast","swing",function(){}).removeClass("on").addClass("off");
});
$(".dotmore").click(function(){
	$( ".serif" ).css("display", "block" );
	$( ".dotmore").stop(true,false).animate({bottom: "0" },"fast","swing",function(){});
	setTimeout('$( ".dotmore").removeClass("off").addClass("on");', 100 );
});
$(".btn").click(function(){
	$( ".serif" ).css("display", "block" );
	$( ".dotmore").css({bottom: "0" });
	$( ".dotmore").removeClass("off").addClass("on");
	rsnowpage=0;
	$( "#stage4 .serif p").css("display", "none" );
	$( "#stage4 .serif .s4-0").css("display", "block" );
});
//老番癲吵架串聯
$( "#stage4 .serif p").css("display", "none" );
$( "#stage4 .serif p.s4-1").css("display", "block" );
$( "#stage4 .serif").css("height", "200px" );
var rsnowpage=0;

$("#stage4 .serif .wordbox").click(function(){
	rsnowpage++;
	rsnowpage = (rsnowpage%9);
	$( "#stage4 .serif p").css("display", "none" );
	$( "#stage4 .serif .s4-" + rsnowpage ).css("display", "block" );
});

//飛天鈕邊框放大動畫
$(".fly").mouseenter(function() {
  $( this ).stop(true,false).animate({borderLeftWidth:"7px",borderBottomWidth:"7px"},200);
});
$(".fly").mouseleave(function() {
  $( this ).stop(true,false).animate({borderLeftWidth:"0px",borderBottomWidth:"0px"},200);
});

//寶貝球hover漸變透明度
$(".ballShadow").mouseenter(function() {
  $( this ).stop(true,false).animate({opacity:"1"},200);
});
$(".ballShadow").mouseleave(function() {
  $( this ).stop(true,false).animate({opacity:"0"},200);
});
//操作球展開視窗
$(".ballShadow").click(function(){
	$( ".ballDetail" ).removeClass("off");
	$( ".ballDetail" ).addClass("on");
});
$(".ballDetail").click(function(){
	$( ".ballDetail" ).removeClass("on");
	$( ".ballDetail" ).addClass("off");
});
$(".btn").click(function(){
	$( ".ballDetail" ).removeClass("on");
	$( ".ballDetail" ).addClass("off");
});
$(".ball1").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/1.png)");
});
$(".ball2").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/2.png)");
});
$(".ball3").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/3.png)");
});
$(".ball4").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/4.png)");
});
$(".ball5").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/5.png)");
});
$(".ball6").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/6.png)");
});
$(".ball7").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/7.png)");
});
$(".ball8").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/8.png)");
});
$(".ball9").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/9.png)");
});
$(".ball10").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/10.png)");
});
$(".ball11").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/11.png)");
});
$(".ball12").click(function(){
	$( ".ballDetail" ).css("background-image","url(./images/stage2shadow/detail/12.png)");
});
//操作數獨展開視窗
$(".newszone").click(function(){
	$( ".sudoku" ).removeClass("off");
	$( ".sudoku" ).addClass("on");
});
$(".sudoku").click(function(){
	$( ".sudoku" ).removeClass("on");
	$( ".sudoku" ).addClass("off");
});
$(".btn").click(function(){
	$( ".sudoku" ).removeClass("on");
	$( ".sudoku" ).addClass("off");
});
$("#stage5 .serif").click(function(){
	$( ".newszone" ).addClass("on");
	setTimeout( '$( ".newszone" ).removeClass("on");' , 200 );
	setTimeout( '$( ".newszone" ).addClass("on");' , 400 );
	setTimeout( '$( ".newszone" ).removeClass("on");' , 600 );
	//setTimeout( '$( ".newszone" ).addClass("on");' , 800 );
	//setTimeout( '$( ".newszone" ).removeClass("on");' , 1000 );
});

//手電筒
//把背景填滿
var bodywidth=$( "body" ).css("width" );
	$( "#light,#lightin" ).css("background-size", bodywidth );
//視窗縮小時
window.onresize = function() {
	var bodywidth=$( "body" ).css("width" );
		$( "#light,#lightin" ).css("background-size", bodywidth );
};


// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all?true:false;

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
  if (IE) { // grab the x-y pos.s if browser is IE
    tempX = event.clientX + document.body.scrollLeft;
    tempY = event.clientY + document.body.scrollTop;
  } else {  // grab the x-y pos.s if browser is NS
    tempX = e.pageX;
    tempY = e.pageY;
  }  
  // catch possible negative values in NS4
  if (tempX < 0){tempX = 0};
  if (tempY < 0){tempY = 0}  ;
  // show the position values in the form named Show
  // in the text fields named MouseX and MouseY
	$( "#light,#lightin" ).css({"paddingLeft": tempX-50 +"px"} );
	$( "#light,#lightin" ).css({"paddingTop": tempY-50 +"px"} );
  return true
}

//各種閃爍
function shine(){
$( "#btn3" ).css("background-position", "top" );
$( "#btn1" ).css("background-position", "bottom" );
setTimeout( '$( "#btn1" ).css("background-position", "top" );' , 1000 );
setTimeout( '$( "#btn5" ).css("background-position", "bottom" );' , 1000 );
setTimeout( '$( "#btn5" ).css("background-position", "top" );' , 2000 );
setTimeout( '$( "#btn2" ).css("background-position", "bottom" );' , 2000 );
setTimeout( '$( "#btn2" ).css("background-position", "top" );' , 3000 );
setTimeout( '$( "#btn4" ).css("background-position", "bottom" );' , 3000 );
setTimeout( '$( "#btn4" ).css("background-position", "top" );' , 4000 );
setTimeout( '$( "#btn3" ).css("background-position", "bottom" );' , 4000 );

$('.s4d3').animate({backgroundPositionX: "-200" },2500,"swing",function(){}).animate({backgroundPositionX: "0" },2500,"swing",function(){});
}
setInterval("shine();",5000);

function shineunknown(){
$( "#lightin" ).animate({opacity:"1"}, 1500 ).animate({opacity:"0"}, 1500 );
}
setInterval("shineunknown();",3100);

function shinefayg(){
$( "#mapBtnWrapper:hover" ).css("cursor", "url(./images/fayg.gif),auto" );
$( ".btn:hover" ).css("cursor", "url(./images/faygf.gif),pointer" );
setTimeout( '$( "#mapBtnWrapper:hover" ).css("cursor", "url(./images/fayg2.gif),auto" );' , 500 );
setTimeout( '$( ".btn:hover" ).css("cursor", "url(./images/faygf2.gif),pointer" );' , 500 );
}
setInterval("shinefayg();",1000);


function s4bg(){
$('.s4d2').animate({top: 10 },200,"swing",function(){}).delay(300).animate({top: 0 },200,"swing",function(){}).animate({top: -5 },200,"swing",function(){}).delay(300).animate({top: 0 },100,"swing",function(){});
$('.s4d2').animate({left: 20 },300,"swing",function(){}).animate({left: 0 },150,"swing",function(){});
}

setInterval("s4bg();",2000);

//調整地圖高度至置中
iheight = parseInt(iheight);
iwidth = parseInt(iwidth);
var hh=(iheight - 720 )/2 ;
	if(hh>0){
	$( "#mapBtnWrapper" ).css("top", hh );
	}
	// 視窗縮放時
window.onresize = function() {
	iheight=window.innerHeight;
	iheight = parseInt(iheight);
	var hh=(iheight - 720 )/2 ;
	if(hh>0){
	$( "#mapBtnWrapper" ).css("top", hh );
	}
	
	iwidth = window.innerWidth;
	iwidth = parseInt(iwidth);
	if( iwidth < 600 ){
		$( "#sorry" ).css("display", "block" );
	}
	if( iwidth >= 600 ){
		$( "#sorry" ).css("display", "none" );
	}
	
}

//執行
$(document).ready(function(){
	//操作fix按鈕
	$("#d1logo").click(function(){
		$('body,html').animate({scrollTop: iheight },"slow","swing",function(){});
});
});