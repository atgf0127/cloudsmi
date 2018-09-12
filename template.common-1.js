/**
这里放模板各自的javascript
**/

//页面初始化
function ClientPageInit(){
	update_myaccount_panel();
	update_mycart();
}
function Detail_Init(){
	var $fs = OpenWBS.$id("fontSmall");
	var $fb = OpenWBS.$id("fontBig");
	var $c  = OpenWBS.$id("artcontent");
	if(objExist($fs)){
		$fs.onclick = function(){ $c.style.fontSize=14+"px"; this.className="small current"; $fb.className="big";}
	}
	if(objExist($fb)){
		$fb.onclick = function(){ $c.style.fontSize=16+"px"; this.className="big current"; $fs.className="small";}
	}
	OpenWBS.C.Content.Detail_Init();
	//SyntaxHighlighter代码处理
	if($("#artcontent pre").length>0){
		$("body").after('<link rel="stylesheet" type="text/css" href="shCoreDefault.css"/*tpa=http://www.cloudsmi.com/plugins/ueditor/third-party/SyntaxHighlighter/shCoreDefault.css*/>')
		$("body").after('<script type="text/javascript" src="shCore.js"/*tpa=http://www.cloudsmi.com/plugins/ueditor/third-party/SyntaxHighlighter/shCore.js*/></script>')
		window.onload = function(){
			SyntaxHighlighter.highlight();
			setTimeout(function(){
				for(var i=0,di;di=SyntaxHighlighter.highlightContainers[i++];){
					var tds = di.getElementsByTagName("td");
					for(var j=0,li,ri;li=tds[0].childNodes[j];j++){
						ri = tds[1].firstChild.childNodes[j];
						ri.style.height = li.style.height = ri.offsetHeight + "px";
					}
				}
			},100);
			$(".code .container").wrapInner("<ol></ol>");
			$(".code -1.line.htm"/*tpa=http://www.cloudsmi.com/company/template/default_widescreen/js/.code .line*/).wrap("<li></li>");
		}
	}
}
//更新用户账号状态
function update_myaccount_panel(){
	var obj=OpenWBS.$id("header_user_pannel");
	if(objExist(obj)){
		var userid   = OpenWBS.Cookie.GetCookie("my:id");
		var username = OpenWBS.Cookie.GetCookie("my:name");
		if(!(OpenWBS.IsNull(userid) || OpenWBS.IsNull(username))){
			obj.innerHTML="<a href=\"?myhome"+filesuffix+"\" target=\"_blank\"><b>"+username+"</b></a><a href=\"?login/out"+filesuffix+"\" target=\"_self\">"+ Lang_Js_Logout +"</a>|";
		}
	}
}
//更新购物车商品数量
function update_mycart(){
	var obj=OpenWBS.$id("cart_goods_num");
	if(objExist(obj)){
		var MyCart = OpenWBS.Cookie.GetCookie("mycart");
		if(!OpenWBS.IsNull(MyCart)){
			var Fn_JSON = OpenWBS.JSON.parseJSON(MyCart);//把json字符串转化为json数据
			var theskus    = Fn_JSON.theskus;
			var thepacks   = Fn_JSON.thepacks;
			var goodsnum   = 0;
			for(var ii=0;ii<theskus.length;ii++){goodsnum = goodsnum + parseInt(theskus[ii].num);}
			for(var ii=0;ii<thepacks.length;ii++){goodsnum = goodsnum + parseInt(thepacks[ii].num);}
			obj.innerHTML=goodsnum;
		}
	}
}
//显示内容系统评论
function PrintContentComment(PrintArea,GlobalCommentSet,ContentCommentSet,SubSystem,ContentID,Lang,ToComment){
	var html = '<div class="heading"><span class="heading_title">'+Lang[0]+'</span></div>'+
	'<div id="tiearea"></div>'+
	'<div class="send" id="sendcomment">'+
	'<div class="cue">'+Lang[1]+'</div>'+
	'<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
	'<tr><td class="td01"><div>'+Lang[2]+'</div></td>'+
	'<td class="td02"><div><textarea class="text" name="commenttextarea" id="commenttextarea" style="width:485px; height:86px;"></textarea></div></td>'+
	'</tr>'+
	'<tr><td class="td01"><div></div></td><td class="td02"><div id="submitBtn"><input type="submit" class="btn btn_sendcomment" onclick=OpenWBS.C.Tie.Post(this,"'+SubSystem+'","'+ContentID+'") value="" /><input type="hidden" name="contentcommentcheck" id="contentcommentcheck" value="{openwbs:iscontentcommentcheck}" /></div></td></tr>'+
	'</table>'+
	'</div>';
	var $area   = OpenWBS.$id(PrintArea);
	var $toComm = OpenWBS.$id(ToComment[0]);
	if(objExist($area)){
		if(parseInt(GlobalCommentSet)!=1 && parseInt(ContentCommentSet)!=1){
			$area.innerHTML=html;
			OpenWBS.C.Tie.Show(subsystem,id);
			if(objExist($toComm)){$toComm.innerHTML='<a href="#sendcomment">'+ToComment[1]+'(<em class="comment-num">'+ToComment[2]+'</em>)</a>';}
		}
	}
}
//显示搜索
function PrintSearchHTML(PrintArea,SearchSystem){
	var $area = OpenWBS.$id(PrintArea);
	if(objExist($area)){
		var temp,option;
		for(var i=0;i<SearchSystem.length;i++){
			temp = SearchSystem[i].split(":");
			option = option +'<option value="'+temp[0]+'">'+temp[1]+'</option>';
		}
		var html = '<form action="index-1.asp-ctl=search.htm"/*tpa=http://www.cloudsmi.com/company/template/default_widescreen/js/index.asp?ctl=search*/ method="post">'+
		'<table cellspacing="0" cellpadding="0" border="0"><tr>'+
		'<td><select name="subsys">'+ option +'</select></td>'+
		'<td class="pl3"><input type="text" name="keywords" class="text" value="" /></td>'+
		'<td class="pl3"><input type="submit" class="btn btn_search" value="" /></td>'+
		'</tr></table>'+
		'</form>';
		$area.innerHTML=html;
	}
}

//推荐商品-鼠标经过展开
function ListOverExpand(id){
	var ul=OpenWBS.$id(id);
	if(ul!=null){
		var $li=ul.getElementsByTagName("li");
		for(var i=0; i<$li.length; i++){
			$li[i].onmouseover=function(){
				var menu_list=ul.getElementsByTagName("li");
				for(var j=0; j<menu_list.length; j++){menu_list[j].className="normal";}
				this.className="current";
			}
		}
	}
}
//标签内容切换 href="javascript:TabSwitch('J_TabBar','TabBar_',1)"
function TabSwitch(TagsId,idpre,id){
	var divs,TabsMenu=OpenWBS.$id(TagsId);
	var $li=TabsMenu.getElementsByTagName("li");
	for(var i=1;i<$li.length+1;i++){
		divs=OpenWBS.$id(idpre+i);
		if(divs!=null){
			if(i==id){
				$li[i-1].className="current";divs.style.display="block";
			}else{
				$li[i-1].className="";divs.style.display="none";
			}
		}
	}
}
//$:展开或者收缩(多个对象之间用","隔开) ExpandShrink(this,'SendGuestbook,MyGuestbookList');
function ExpandShrink(thisobj,id){
	var ids=id.split(",");
	if(thisobj.className=='shrink'){
		for(var i=0;i<ids.length;i++){if(OpenWBS.$id(ids[i])!=null){OpenWBS.$id(ids[i]).style.display="";}}
		thisobj.className="expand";
	}else{
		for(var i=0;i<ids.length;i++){if(OpenWBS.$id(ids[i])!=null){OpenWBS.$id(ids[i]).style.display="none";}}
		thisobj.className="shrink";
	}
}
//$:广告js
function OpenWBS_ChangeImg(pre,n) {
	if(n>0){
		eval(''+pre+'Slider_nn = n');
		window.clearInterval(eval(''+pre+'Slider_tt'));
	}
	eval('OpenWBS.$id("'+pre+'Sliderpic").src='+pre+'Slider_img['+ eval(''+pre+'Slider_nn') +']');
	eval('OpenWBS.$id("'+pre+'url").href='+pre+'Slider_url['+ eval(''+pre+'Slider_nn') +']');
	eval('OpenWBS.$id("'+pre+'Sliderpic").alt='+pre+'Slider_alt['+ eval(''+pre+'Slider_nn') +']');
	if (eval(''+pre+'Slider_nn') == 1) {
		OpenWBS.$id(""+pre+"url").target = "_blank";
		OpenWBS.$id(""+pre+"url").style.cursor = "pointer";
	} else {
		OpenWBS.$id(""+pre+"url").target = "_blank"
		OpenWBS.$id(""+pre+"url").style.cursor = "pointer"
	}
	for ( var i = 1; i <= eval(''+pre+'Slider_counts'); i++) {
		OpenWBS.$id(""+pre+"xxjdjj" + i).className = 'axx';
	}
	OpenWBS.$id(pre+"xxjdjj"+eval(''+pre+'Slider_nn')).className = "current";
	eval(''+pre+'Slider_nn++');
	if(eval(''+pre+'Slider_nn') > eval(''+pre+'Slider_counts')) {
		eval(''+pre+'Slider_nn = 1');
	}
	eval(''+pre+'Slider_tt = setTimeout("OpenWBS_ChangeImg(\''+pre+'\',0)", 7000)');
}
//$:广告js
function ImageShow(pre,width,height) {
	var html = '<style type="text/css">'+
	'.'+pre+'picshow_main { background:#AABCD2; height:'+height+'px; width:'+width+'px; overflow:hidden; position:relative; z-index:2; }'+
	'.'+pre+'picshow_main .imgbig { height:'+height+'px; width:'+width+'px; }'+
	'.'+pre+'picshow_change { position:absolute; text-align:left; bottom:12px; right:15px; z-index:3;}'+
	'.'+pre+'picshow_change a { background:#000; color:#FFF; display:inline-block; font-size:10px; font-family:Arial, Helvetica, sans-serif; font-weight:bold; height:18px; line-height:18px; margin:0px 1px 0px 0px; width:18px; text-align:center; }'+
	'.'+pre+'picshow_change a:hover{ background:#000; text-decoration:none; color:#FFF;}'+
	'.'+pre+'picshow_change a.axx { filter:alpha(opacity=30); opacity:0.3; -moz-opacity:0.3;}'+
	'.'+pre+'picshow_change a.axx:hover { filter:alpha(opacity=100); opacity:1.0; -moz-opacity:1.0; }'+
	'.'+pre+'picshow_change a.current { background:#000; color:#FFF;}'+
	'</style>'+
	'<div class="'+pre+'picshow_main">'+
	'<div><a id="'+pre+'url"><img id="'+pre+'Sliderpic" class="imgbig" /></a></div>'+
	'<div class="'+pre+'picshow_change">';
	for ( var i = 0; i < eval(''+pre+'Slider_counts'); i++) {
		html = html+'<a href="javascript:OpenWBS_ChangeImg(\''+pre+'\','+(i+1)+')" id="'+pre+'xxjdjj'+(i+1)+'" class="axx" target="_self">'+(i+1)+'</a>';
	}
	html = html+'</div></div>';
	document.writeln(html);
	OpenWBS_ChangeImg(pre,0);
}
//$:广告js 商城购物版
function ImageShow_shop(pre,width,height) {
	var html = '<style type="text/css">'+
	'.'+pre+'picshow_main { background:#AABCD2; height:'+height+'px; width:'+width+'px; overflow:hidden; position:relative; z-index:2; }'+
	'.'+pre+'picshow_main .imgbig { height:'+height+'px; width:'+width+'px; }'+
	'.'+pre+'picshow_change { background:#eee; height:26px; position:absolute; bottom:0px; left:0px; text-align:left; width:'+(width)+'px; z-index:3; overflow:hidden; font-family:Arial, Helvetica, sans-serif; filter:alpha(opacity=50); opacity:0.5; -moz-opacity:0.5;}'+
	'.'+pre+'picshow_change a { border-right:1px solid #fff; border-left:1px solid #DFDFDF; color:#333; display:inline-block; font-size:12px; height:22px; line-height:22px; padding:2px 10px 0px 10px; text-align:center; }'+
	'.'+pre+'picshow_change a:hover{ text-decoration:none; color:#000;}'+
	'.'+pre+'picshow_change a.current { border-bottom:2px solid #000; color:#000;}'+
	'</style>'+
	'<div class="'+pre+'picshow_main">'+
	'<div><a id="'+pre+'url"><img id="'+pre+'Sliderpic" class="imgbig" /></a></div>'+
	'<div class="'+pre+'picshow_change">';
	for ( var i = 0; i < eval(''+pre+'Slider_counts'); i++) {
		html = html+'<a href="javascript:OpenWBS_ChangeImg(\''+pre+'\','+(i+1)+')" id="'+pre+'xxjdjj'+(i+1)+'" class="axx" target="_self">' + eval(''+pre+'Slider_alt[('+i+' + 1)]') + '</a>';
	}
	html = html+'</div></div>';
	document.writeln(html);
	OpenWBS_ChangeImg(pre,0);
}
//点击左右滚动显示图片
var gallery = new class_gallery()
function class_gallery(){
	//script by linx 2013-02-09 10:30:00
	var $ul,$li,_this = this;
	this.areaid = "";
	this.sWidth = 84;//滚动一个单位宽度
	this.$uW  = 0;
	this.init = function(aid,swidth,gid,vobj){
		_this.areaid  = aid;
		_this.sWidth  = swidth;
		_this.btnPre  = $("#"+aid+" .pre");
		_this.btnNext = $("#"+aid+" .next");
		if(objExist($("#"+gid+""))&&objExist($("#"+vobj+""))){
			$("#"+gid+" a").each(function(){
				var url = $(this).attr("href");
				$(this).attr('bigimg',url);
				$(this).attr("href","javascript:;");
				$(this).click(function(){
					$("#"+vobj+"").html('<img class="view" src="'+$(this).attr("bigimg")+'" />');
					var $a=$("#"+gid+" a");
					for(var i=0; i<$a.length; i++){$a[i].parentNode.className="normal";}
					$(this).parent().attr("class","current");
				});
			});
			$ul = $("#"+gid+" ul");$li = $("#"+gid+" li");
			_this.$uW = $li.length*_this.sWidth;
			var $r  = parseInt($("#"+gid).css("width"))-_this.$uW;
			$ul.css({"left":"0px","right":$r+"px","width":_this.$uW});
			$(_this.btnPre).addClass("pre_disable");
			if($r>0){
				$(_this.btnNext).addClass("next_disable");
			}
		}
	}
	this.preScroll = function (){
		var $left  = parseInt($ul.css("left"))+4*_this.sWidth;
		var $right = parseInt($ul.css("right"))-4*_this.sWidth;
		if(parseInt($ul.css("left"))<0){
			$ul.animate({left:$left+"px",right:$right+"px"},600);
			$(_this.btnNext).removeClass("next_disable");
		}
		if($left>=0){
			$(_this.btnPre).addClass("pre_disable");
		}
	}
	this.nextScroll = function (){
		var $left  = parseInt($ul.css("left"))-4*_this.sWidth;
		var $right = parseInt($ul.css("right"))+4*_this.sWidth;
		if(parseInt($ul.css("right"))<0){
			$ul.animate({left:$left+"px",right:$right+"px"},600);
			$(_this.btnPre).removeClass("pre_disable");
		}
		if($right>=0){
			$(_this.btnNext).addClass("next_disable");
		}
	}
    this.pre = function(){this.preScroll();}
    this.next = function(){this.nextScroll();}
}