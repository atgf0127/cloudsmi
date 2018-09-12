/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);

//导航下拉菜单，商品分类菜单
$(document).ready(function() {
	function megaHoverOver() {$(this).find(".sub1").stop().fadeTo('fast',1).show();}
	function megaHoverOut()  {$(this).find(".sub1").stop().fadeTo('fast',0,function(){$(this).hide();});}
	function mega2HoverOver(){$(this).find(".sub2").stop().fadeTo('fast',1).show();}
	function mega2HoverOut() {$(this).find(".sub2").stop().fadeTo('fast',0,function(){$(this).hide();});}
	var config = {    
		 sensitivity:2,
		 interval:20,
		 over:megaHoverOver,
		 timeout:150,
		 out:megaHoverOut
	};
	var config2 = {    
		 sensitivity:2,
		 interval:20,
		 over:mega2HoverOver, 
		 timeout:150,
		 out:mega2HoverOut  
	};
	$("ul.htm#mainnav li .sub1"/*tpa=http://www.cloudsmi.com/template/default_widescreen/js/ul#mainnav li .sub1*/).css({'opacity':'0'});
	$("ul#mainnav li").hoverIntent(config);
	$("ul.htm#mainnav li .sub2"/*tpa=http://www.cloudsmi.com/template/default_widescreen/js/ul#mainnav li .sub2*/).css({'opacity':'0'});
	$("ul#mainnav li li").hoverIntent(config2);

	$("ul.htm#shopcate li.m .sub1"/*tpa=http://www.cloudsmi.com/template/default_widescreen/js/ul#shopcate li.m .sub1*/).css({'opacity':'0'});
	$("ul#shopcate li.m").hoverIntent(config);

	$("ul.htm#myhome_topnav li.m .sub1"/*tpa=http://www.cloudsmi.com/template/default_widescreen/js/ul#myhome_topnav li.m .sub1*/).css({'opacity':'0'});
	$("ul#myhome_topnav li.m").hoverIntent(config);
});