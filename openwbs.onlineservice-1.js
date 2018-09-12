/*
* 在线客服jQuery插件
* codeBy:CK
* update:2013-04-08
*/
$.extend({
	onlineService:function(opt){
		var jsonData  = opt.data || "";
		var className = opt.className || "onlineservice";
		var init = function(){
			var json,i,html,dl,dls="",name,tel,qq,wangwang,text;
			json = $.parseJSON(jsonData);
			for(i=0;i<json.length;i++){
				name = unescape(json[i].name || "");
				tel = unescape(json[i].tel || "");
				qq = unescape(json[i].qq || "");
				wangwang = unescape(json[i].wangwang || "");
				skype = unescape(json[i].skype || "");
				text = unescape(json[i].text || "");
				if(tel!=""){tel = '<dd class="tel">'+tel+'</dd>';}
				if(qq!=""){qq = '<dd class="qq"><a href="http://wpa.qq.com/msgrd?v=3&uin='+qq+'&site=qq&menu=yes" target="_blank"><img border="0" title="点击这里给我发消息" alt="点击这里给我发消息" src="http://wpa.qq.com/pa?p=2:'+qq+':41"></a></dd>';}
				if(wangwang!=""){wangwang='<dd class="wangwang"><a target="_blank" href="http://www.taobao.com/webww/ww.php?ver=3&touid='+wangwang+'&siteid=cntaobao&status=1&charset=utf-8"><img border="0" src="http://amos.alicdn.com/realonline.aw?v=2&uid='+wangwang+'&site=cntaobao&s=1&charset=utf-8" alt="点击这里给我发消息" /></a></dd>';}
				if(skype!=""){skype='<dd class="skype"><script type="text/javascript" src="skypeCheck40.js"/*tpa=http://skype.tom.com/script/skypeCheck40.js*/></script><a href="skype:'+skype+'?call" onclick="return skypeCheck();"><img src="http://mystatus.skype.com/bigclassic/'+skype+'" style="border: none;" width="80" height="24" alt="My status" /></a></dd>';}
				if(text!=""){text='<dd class="skype">'+text+'</dd>';}
				dl = '<dl><dt>'+name+'</dt>'+tel+qq+wangwang+skype+text+'</dl>';
				if(dl==""){dls = dl;}else{dls = dls + dl;}
			}
			html = '<div class="'+className+'"><a href="javascript:;" class="mini"></a><div class="listpanel">'
				  +'<div class="heading"><a class="close" href="javascript:;"></a></div>'
				  +'<div class="wrapper">'+dls+'</div>'
				  +'</div></div>';
			$("body").append(html);
			var $mini  = $("div."+className).find(".mini");
			var $panel = $("div."+className).find(".listpanel");
			var $close = $("div."+className).find("a.close");
			if(opt.initType=="mini"){$mini.show();$panel.hide();}else{$mini.hide();$panel.show();}
			$mini.click(function(){$mini.hide();$panel.show("fast");});
			$close.click(function(){$mini.show("fast");$panel.hide("fast");});
			var $top = parseInt($("div."+className).css("top"));
			$(window).scroll(function(){
				$("div."+className).css("top",parseInt(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop)+$top);
			});
		}
		if(jsonData!=""){init();}
	}
});