/**
 * 游戏中心
 */
function Dian(){
	var a=document.getElementById("lie");
    var b=document.getElementById("yu");
    var c=document.getElementById("kai");
    var d=document.getElementById("xin");
    a.onmouseover=function(){
        c.style.display="block";
        d.style.display="none";
        a.style.borderRight="1px solid #E6E6E6";
        a.style.background="#F58120";
        a.style.color="black";
        b.style.color="#6c6c6c";
        b.style.background="white";
    }
    b.onmouseover=function(){
        d.style.display="block";
        c.style.display="none";
        b.style.borderLeft="1px solid #E6E6E6";
        b.style.background="#F58120";
        b.style.color="black";
        a.style.color="#6c6c6c";
        a.style.background="white";
    }
}
Dian();
function biao(){
    var a=document.getElementById("left1"); 
    var b=a.getElementsByTagName("li"); 
    var aLi = document.querySelectorAll('.left2');
	  for(var i=0;i<b.length;i++){ 
		   b[i].index=i; 
		   b[i].onclick=function(){
		    for(var i=0;i<b.length;i++){ 
		     aLi[i].style.display='none';
		    };
		    aLi[this.index].style.display='block'; 
		   };
		  };
}
biao();