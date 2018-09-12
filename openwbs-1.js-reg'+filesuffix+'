//网页可视区域的高度和宽度(不包括滚动条网页区)//
var webScreenHeight=function(){return document.documentElement.clientHeight;}//FF与IE都支持(但计算有点差异);
var webScreenWidth=function(){return document.documentElement.clientWidth;}
//网页正文全文高和宽
var webHeight=function(){return document.body.scrollHeight;}
var webWidth=function(){return document.body.scrollWidth;}
//屏幕可用工作区高度和宽度
var ScreenHeight=function(){return window.screen.availHeight;}
var ScreenWidth=function(){return window.screen.availWidth}
//网页被卷去的高
var ScrollTop=function(){return document.documentElement.scrollTop;}
var ScrollLeft=function(){return document.documentElement.scrollLeft;}
//判断浏览器类型
var isIE=function(){return window.navigator.userAgent.indexOf("IE")>=1?true:false;}
var isFirefox=function(){return window.navigator.userAgent.indexOf("Firefox")>=1?true:false;}
var isChrome=function(){return window.navigator.userAgent.indexOf("Chrome")>=1?true:false;}
var Opera=function(){return window.navigator.userAgent.indexOf("Opera")>=1?true:false;}
//重写javacript:getElementsByClassName方法
document.getElementsByClassName = function(TagName,className){
	var allNode = document.getElementsByTagName(TagName) || document.all;
	var arr = [];
	for(var i=0;i<allNode.length;i++){
		if(document.all){
			if(allNode[i].className==className){arr.push(allNode[i]);}
		}else{
			if(allNode[i].getAttribute("class")==className){arr.push(allNode[i]);}
		}
	}
	return arr;
}
//重写javacript:getElementsByName方法
function getElementsByTagNameAndName(TagName,Name){
	var allNode = document.getElementsByTagName(TagName) || document.all;
	var arr = [];
	for(var i=0;i<allNode.length;i++){
		if(document.all){
			//注意:用allNode[i].name的话在ie9无效
			if(allNode[i].getAttribute("name")==Name){arr.push(allNode[i]);}
		}else{
			if(allNode[i].getAttribute("name")==Name){arr.push(allNode[i]);}
		}
	}
	return arr;
}
function getElementsByClassNameAndAttribute(_this,TagName,ClassName,AttributeName,AttributeValue){
	var allNode = _this.getElementsByTagName(TagName);
	var arr = [];
	for(var i=0;i<allNode.length;i++){
		if(allNode[i].className==ClassName){
			if(allNode[i].getAttribute(AttributeName)==AttributeValue){arr.push(allNode[i]);}
		}
	}
	return arr;
}
function getElementsByTagNameAndAttribute(_this,TagName,AttributeName,AttributeValue){
	var allNode = _this.getElementsByTagName(TagName);
	var arr = [];
	for(var i=0;i<allNode.length;i++){
		if(allNode[i].getAttribute(AttributeName)==AttributeValue){
			arr.push(allNode[i]);
		}
	}
	return arr;
}
/**
* $ 通过TagName,Name,Attribute获得对象集合 AreaGroupID = getElementsByTagNameAndNameAndAttrbute("input","AreaGroupID[]","order:a1")[0];
*/
function getElementsByTagNameAndNameAndAttrbute(TagName,Name,Attribute){
	var allNode = document.getElementsByTagName(TagName) || document.all;
	var arr = [];
	Attribute=Attribute.split(":");
	for(var i=0;i<allNode.length;i++){
		if(document.all){
			if(allNode[i].name==Name && allNode[i].getAttribute(Attribute[0])==Attribute[1]){arr.push(allNode[i]);}
		}else{
			if(allNode[i].getAttribute("name")==Name && allNode[i].getAttribute(Attribute[0])==Attribute[1]){arr.push(allNode[i]);}
		}
	}
	return arr;
}
function ExistInArray(Array_,String_){
	var Check=false;
	for(var i=0; i<Array_.length;i++){
		if(Array_[i]==String_){Check=true;}
	}
	return Check;
}

function objExist(obj){
	if(obj==null){
		return false;
	}else if(obj=='undefined'){
		return false;
	}else{
		return true;
	}
}
//去右端空格
function rtrim(stringObj)
{
	//return stringObj.replace(/(\s*$)/g,"");
	if(stringObj==true || stringObj ==false){
		return stringObj;
	}else{
		if(!(stringObj==null || stringObj=='' || stringObj=='undefined'))
		{
			while(stringObj.charCodeAt(stringObj.length-1) == 32)
			{
				stringObj = stringObj.substring(0,stringObj.length - 1);
			}
			return stringObj;
		}
	}
}
//去左端空格
function ltrim(stringObj) {
	//return stringObj.replace(/(^\s*)/g,"");
	if(stringObj==true || stringObj ==false){
		return stringObj;
	}else{
		if(stringObj!=null && stringObj!="" && stringObj!='undefined')
		{
			while (stringObj.charCodeAt(0) == 32)
			{
				stringObj = stringObj.substring(1,stringObj.length);
			}
			return stringObj; 
		}
	}
}
//去两端空格
function trim(stringObj)
{
	if(stringObj=="" || stringObj==null){
		return "";
	}else{
		stringObj = "r"+stringObj;
		if(stringObj.replace(/(^\s*)|(\s*$)/g,"")=="r"){
			return "";
		}else{
			//return stringObj.replace(/(^\s*)|(\s*$)/g,"");
			return(ltrim(rtrim(stringObj.substring(1))));
		}
	}
}

//**$:返回字符串长度 **//
function sl(st){
    var strLen;
	strLen=0;
	if(st!=null){
		sl1=st.length;
		for(i=0;i<sl1;i++){
			if(st.charCodeAt(i)>255) strLen+=2;
		 else strLen++;
		}
	}
	return strLen;
}

//$:打开新页面
var href = function(url){
	var fn_DialogID = "loadingnewpage";
	var fn_Title    = Lang_Js_OpenNewPage;
	var fn_HTML     = "<div id=\"fixbox\" style=\"padding:25px 4px 5px 10px;\"></div>";
	OpenWBS.CreateDiaWindow(400,130,fn_DialogID,fn_Title,fn_HTML,false,false);
	var CueMsgBox   = OpenWBS.$id("DiaText_"+fn_DialogID);
	var LoadingBar = document.createElement("span");
	LoadingBar.className = "loading_big";
	LoadingBar.style.margin="0px 15px 15px 90px";
	LoadingBar.innerHTML = Lang_Js_LoadingNewPage;
	CueMsgBox.appendChild(LoadingBar);
	window.location.href=url;
}

//显示验证码
function getcheckcodeimg(){
	var tmpstr=parseInt(Math.random()*100000000);
	$("#checkcode_boxer").html("<img id=\"checkcodeimg\" src=\"include/code.asp?s="+tmpstr+"\" style=\"border:1px solid #ccc;vertical-align:top;\" onclick=\"getcheckcodeimg()\" alt=\"验证码\" /><input type=\"hidden\" name=\"checkcode_name\" id=\"checkcode_name\" value=\""+tmpstr+"\" />");
}
//弹出登陆窗口_登陆成功后刷新本页
function locationrefresh(){
	window.location.reload();
}

//**$:弹出窗口可以移动 **//
function MoveDiv(moveArea)
{
	var obj,objStyle,x,y,d;
	obj=moveArea.parentNode.parentNode;
	objStyle = obj.style;
	d = document;
	moveArea.onselectstart = function(){ return false; }; //阻止选择
	moveArea.onmousedown = function(e)
	{
		e = e||event;
		x = e.clientX-obj.offsetLeft;
		y = e.clientY-obj.offsetTop;
		d.onmousemove = function(e)
		{
			e = e||event;
			objStyle.left = e.clientX - x + "px";
			objStyle.top = e.clientY - y + "px";
		}
		d.onmouseup = function(){ d.onmouseup = d.onmousemove = ""; }
	}
}

var http_request;
function getRequest() {
	http_request = false;
	if (window.XMLHttpRequest) {
		//对于Mozilla、Netscape、Safari等浏览器，创建XMLHttpRequest
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			//如果服务器响应的header不是text/xml，可以调用其它方法修改该header
			http_request.overrideMimeType('text/xml');
		}
	} else if (window.ActiveXObject) {
		// 对于Internet Explorer浏览器，创建XMLHttpRequest
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		}catch (e) {
			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}catch (e) {}
		}
	}
	return http_request;
}
//POST 提交数据
function posthttp(str,url){
	http_request=getRequest();
	http_request.open('POST',url,false);
	http_request.setRequestHeader("Content-Length",str.length);
	http_request.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
	http_request.send(str);
	if(http_request.readyState == 4){
		// 收到完整的服务器响应
		if(http_request.status == 200){
			//HTTP服务器响应的值OK
			requestdoc = http_request.responseText;
			//将服务器返回的字符串写到页面中ID为message的区域
			return requestdoc;
		}else{
			//requestdoc = http_request.status;
			return false;
		}
	}
}

//获得Url 的responseText
function getResponseText(url){
	http_request=getRequest();
	http_request.open('GET', url, false);
	http_request.send(null);
	if (http_request.readyState == 4){
		// 收到完整的服务器响应
		if (http_request.status == 200){
			//HTTP服务器响应的值OK
			//requestdoc = "ok";
			requestdoc = http_request.responseText;
			//将服务器返回的字符串写到页面中ID为message的区域
		}else{
			//requestdoc = "error";
			requestdoc = http_request.status;
		}
	}
	if(requestdoc=='404'){requestdoc=false}
	return requestdoc;
}

function Class_OpenWBS(){
	//_OpenWBS = this;
	this.MoneyFloatLen = 4  ; //money类型数值小数点后面的位数
	this.IsUserLogined = "" ;
	this.TempRegion    = "" ;
	this.IsInRegion    = false;
	this.Cookie      = new Class_Cookie();
	this.C           = "";
	this.JSON        = new Class_JSON();
	this.User        = new Class_User();
	this.$id         = function(nodeId){
		if(typeof nodeId=='string'){
    		return document.getElementById(nodeId);
    	}else if(typeof nodeId=='object'){
    		return nodeId;
    	}else{
			return false;
		}
	}
	this.CreateID = function(){
		var date = new Date();
		var id = date.getHours() +"-"+ date.getMinutes() +"-"+ date.getSeconds() +"-"+ date.getMilliseconds() +"-"+ parseInt(Math.random()*100000);
		return id;
	}
	this.IsNull = function(value){
		var s_value = trim(value);
		if(s_value==null){return true;}
		else if(s_value=='undefined'){return true;}
		else if(s_value==''){
			if(s_value===false || s_value===true){
				return false;
			}else{
				return true;
			}
		}else{return false;}
	}
	this.URLDecode = function(string){
		var url = unescape(string)
		return url;
	}
	this.GetDateTime = function(type,time){
		var md=time.split(" ")[0].split("-");
		if(md.length<3){
			 md=time.split(" ")[0].split("/");
		}
		var hm=time.split(" ")[1].split(":");
		if(type=="year"){
			return md[0]
		}else if(type=="month"){
			return md[1]
		}else if(type=="day"){
			return md[2]
		}else if(type=="hour"){
			return hm[0]
		}else if(type=="minutes"){
			return hm[1]
		}else if(type=="second"){
			return hm[2]
		}
	}
	//$:鼠标聚焦时事件
	this.onfocus = function(me,type){
		//示例 onfocus="OpenWBS.onfocus(this,'int')" 过滤非整数
		//     onfocus="OpenWBS.onfocus(this,'maxLength:20')" 截取前20个字符
		var tempValue;
		if(type=="int"){
			function onKeyboardPress(evt)
			{
				var KeyCode;
				evt = evt ? evt : (window.event ? window.event : null);
				var KeyCode = evt.keyCode?evt.keyCode:evt.which;
				if(!((KeyCode > 48 && KeyCode < 57)||(KeyCode > 96 && KeyCode < 105))){
					tempValue=me.value;
					me.value=RepalceNoInt(tempValue);
				}
			}
			document.onkeydown=onKeyboardPress;
		}else if(type.indexOf("maxLength")>-1){
			var maxLength=type.split(":")[1];
			tempValue=me.value;
			me.value=tempValue.substring(0,maxLength);
		}
	}
	/**$:鼠标移出时事件**/
	this.onblur = function(me,type){
		//示例 onblur="OpenWBS.onblur(this,'int')" 过滤非整数
		//     onblur="OpenWBS.onblur(this,'letter')" 过滤非字母
		//     onblur="OpenWBS.onblur(this,'maxLength:20')" 截取前20个字符
		//     onblur="OpenWBS.onblur(this,Array('replace','/[^0-9a-zA-Z]*/g'))"
		//     onblur="OpenWBS.onblur(this,Array('replace','/[^0-9a-zA-Z]*/g','maxLength:20'))"
		var tempValue=me.value;
		if(type.constructor != window.Array){
			if(type=="int"){
				me.value=RepalceNoInt(tempValue);
			}else if(type=="letter"){//过滤非字母
				me.value=RepalceNoLetter(tempValue);
			}else if(type.indexOf("maxLength")>-1){
				var maxLength=type.split(":")[1];
				me.value=tempValue.substring(0,maxLength);
			}
		}else{
		//onblur="OpenWBS.onblur(this,Array('replace','/[^0-9a-zA-Z]*/g','maxLength:20'))"
			if(type[0]=="replace"){
				me.value = tempValue.replace(eval(type[1]),"");
				if(objExist(type[2])){
					var maxLength=type[2].split(":")[1];
					tempValue=me.value;
					me.value=tempValue.substring(0,maxLength);
				}
			}
		}
	}
	/**$:正在加载数据......**/
	this.DataLoading = function(obj){
		var LoadingBar = document.createElement("span");
		LoadingBar.className = "loading_big";
		LoadingBar.id        = "ImgLoading";
		LoadingBar.innerHTML = Lang_Js_Cue_DataLoading;
		obj.appendChild(LoadingBar);
	}
	/**$:正在提交数据......**/
	this.DataSending = function(obj){
		var LoadingBar = document.createElement("span");
		var id         = OpenWBS.CreateID();
		LoadingBar.className = "loading_big";
		LoadingBar.id        = id;
		LoadingBar.innerHTML = Lang_Js_Cue_DataSending;
		obj.appendChild(LoadingBar);
		return id;
	}
	/**$:正在执行操作......**/
	this.Processing = function(obj){
		var LoadingBar = document.createElement("span");
		var id         = OpenWBS.CreateID();
		LoadingBar.className = "loading_big";
		LoadingBar.id        = id;
		LoadingBar.innerHTML = Lang_Js_Cue_Processing;
		obj.appendChild(LoadingBar);
		return id;
	}
	/**$:检测中，请稍候......**/
	this.Checking = function(obj){
		obj.className = "d_loading";
		obj.innerHTML = Lang_Js_Cue_Checking;
	}
	/**$:弹出“正在执行操作,请稍后...”的信息提示界面**/
	this.DoingDiaWindow = function(){
		var fn_DialogID = OpenWBS.CreateID();
		var fn_Title    = Lang_Js_DiaTitle[0];
		var fn_HTML     = "<div style=\"padding:10px 4px 5px 12px;\">"+Lang_Js_DiaText[0]+"</div>";
		OpenWBS.CreateDiaWindow(320,100,fn_DialogID,fn_Title,fn_HTML,true,false);
		return fn_DialogID;
	}
	/**$:[弹出窗]正在XX......**/
	this.DiaDoing = function(text,IsCreateShadow,IsCloseExist){
		if(text==""){text=Lang_Js_DiaText[0]}
		var fn_DialogID = OpenWBS.CreateID();
		var fn_Title    = Lang_Js_DiaTitle[0];
		var fn_HTML     = "<div id=\"divin_"+fn_DialogID+"\" class=\"loading_box\" style=\"padding:18px 4px 5px 12px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin:auto;\"><tr><td><div class=\"loading_big\">"+ text +"</div></td></tr></table>";
		var fn_Btn      = "";
		OpenWBS.CreateDiaWindow(400,108,fn_DialogID,fn_Title,fn_HTML,IsCreateShadow,IsCloseExist);
		return fn_DialogID;
	}
	/**$:弹出信息提示**/
	this.Seconds = 0 ;
	this.DiaWindowDialogID = "";
    //OpenWBS.DiaWindowCueMessage("操作完成",4,600,200);
	this.DiaWindowCueMessage = function(Message){
		var args = OpenWBS.DiaWindowCueMessage.arguments;
		var argc = OpenWBS.DiaWindowCueMessage.arguments.length;
		var time  = 5 ;
		var width =400;
		var height=128;
		if(argc > 1){time=args[1]}
		if(argc > 2){width =args[2]}
		if(argc > 3){height=args[3]}
		
		OpenWBS.DiaWindowDialogID = OpenWBS.CreateID();
		var fn_Title    = Lang_Js_DiaTitle[0];
		var fn_HTML     = "<div id=\"divin_"+OpenWBS.DiaWindowDialogID+"\" class=\"loading_box\" style=\"padding:26px 4px 0px 12px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin:auto;\"><tr><td><div style='font-size:14px; line-height:180%; text-align:left;'>"+ Message +"</div><div style='padding:4px 0px 0px 0px; color:#888; text-align:left;'>"+Lang_Js_DiaText[1].replace('{tpl:time}','<span id="closedtimes">'+time+'</span>')+"</div></td></tr></table></div>";
		OpenWBS.CreateDiaWindow(width,height,OpenWBS.DiaWindowDialogID,fn_Title,fn_HTML,true,false);
		OpenWBS.Seconds = time;
		OpenWBS.DiaWindowCueMessageClose();
	}
	this.DiaWindowCueMessageClose = function(){
		if(OpenWBS.Seconds < 0){return;}
		OpenWBS.Seconds = OpenWBS.Seconds - 1 ;
		OpenWBS.$id("closedtimes").innerHTML = OpenWBS.Seconds;
		if(OpenWBS.Seconds > 0){window.setTimeout(function(){OpenWBS.DiaWindowCueMessageClose()},1000);}else{OpenWBS.DiaWindowCloseByID(OpenWBS.DiaWindowDialogID)};
	}
	/**$:重试**/
	this.ReTry = function(_event){
		var html = "<span class=\"blue_a ml5\"><a href=\"javascript:;\" onclick=\""+ _event +"\">"+ Lang_Js_Btn_ReTry +"</a></span>";
		return html;
	}
	/**$:重试**/
	this.LoadingFailAndReloadAgain = function(_event){
		var html = Lang_Js_Cue_LoadingFail + "<span class=\"blue_a ml5\"><a href=\"javascript:;\" onclick=\""+ _event +"\">"+ Lang_Js_Btn_ReloadAgain +"</a></span>";
		return html;
	}
	/*$设置提交重置等按钮状态为Disabled或是解除Disabled*/
	this.SetSubmitButtomsDisabled = function(Type,SubmitButtomsAreaId){
		var ButtomsArea=document.getElementById(SubmitButtomsAreaId);
		if(ButtomsArea!=null){
			var Buttoms=ButtomsArea.getElementsByTagName("button");
			if(!(Buttoms.length>0)){Buttoms=ButtomsArea.getElementsByTagName("input");}
			if(Buttoms.length>0){
				for(var i=0; i<Buttoms.length; i++){
					if(Type==true){ Buttoms[i].disabled=true;} else { Buttoms[i].disabled=false;}
				}
			}
		}
	}
	this.RemoveElementByID = function(id){
		var Element = document.getElementById(id);
		if(objExist(Element)){Element.parentNode.removeChild(Element);}
	}
	//$:检查函数,objID的value为空则在msgboxID提示错误信息(errMsg)
	this.CheckItem = function(objID,msgBoxID,ok_ClassName_Msg,err_ClassName_Msg){
		var obj,obj_ID = objID.split("|");
		var str="";
		var Check=true;
		var msgbox=OpenWBS.$id(msgBoxID);
		for(var i=0 ; i < obj_ID.length ; i++){
			var inputs; inputs=document.getElementsByName(obj_ID[i]);//检测是否有多个name相同的元素
			if(inputs.length >= 1){
				for(var j=0; j<inputs.length ; j++){
					obj=inputs[j];
					if(obj!=null){str = [str,trim(obj.value)].join('');}
				}
				
			}else{
				obj=document.getElementById(obj_ID[i]);
				if(obj!=null){str = [str,trim(obj.value)].join('');}
			}
		}
		if(msgbox!=null){
			if(str==""){
				Check=false;
				if(err_ClassName_Msg.constructor == window.Array ){
					msgbox.className=err_ClassName_Msg[0];
					msgbox.innerHTML=err_ClassName_Msg[1];
				}else{
					msgbox.className="d_err";
					msgbox.innerHTML=err_ClassName_Msg;
				}
			}else{
				Check=true;
				if(ok_ClassName_Msg.constructor == window.Array ){
					msgbox.className=ok_ClassName_Msg[0];
					msgbox.innerHTML=ok_ClassName_Msg[1];
				}else{
					msgbox.className="d_ok";
					msgbox.innerHTML=okMsg;
				}
			}
		}
		return Check;
	}
	//判断是否选择地区
	this.CheckSelectArea = function(objName,msgBoxID,ok_ClassName_Msg,err_ClassName_Msg){
		var obj;
		var str    = "";
		var Check  = true;
		var msgbox = OpenWBS.$id(msgBoxID);
		//var Selects;Selects=document.getElementsByName(objName);
		var Selects;Selects=getElementsByTagNameAndName("select",objName)
		//alert("objName:"+ objName +"::"+Selects.length);
		for(var j=0 ; j < Selects.length ; j++){
			str = Selects[j].value;
			if(OpenWBS.IsNull(str)){Check = false;}
		}
		if(msgbox!=null){
			if(Check==false){
				if(err_ClassName_Msg.constructor == window.Array ){
					msgbox.className=err_ClassName_Msg[0];
					msgbox.innerHTML=err_ClassName_Msg[1];
				}else{
					msgbox.className="d_err";
					msgbox.innerHTML=err_ClassName_Msg;
				}
			}else{
				if(ok_ClassName_Msg.constructor == window.Array ){
					msgbox.className=ok_ClassName_Msg[0];
					msgbox.innerHTML=ok_ClassName_Msg[1];
				}else{
					msgbox.className="d_ok";
					msgbox.innerHTML=okMsg;
				}
			}
		}
		return Check;
	}
	this.RegMatch = function(Rule,_String){
		if(_String=="" || _String===true || _String===false){
			return "";
		}else{
			var regex = Rule;
			var array = regex.exec(_String);//document.write(array+"<br>");
			if(array==null){return "";}else{return RegExp.$1;}
		}
	}
	this.Substr = function(_String,Start,Length){
		if(_String=="" || _String===true || _String===false){
			return "";
		}else{
			var fn_String=_String.substr(Start,Length);
			if(_String.substr(Start).length>fn_String.length){
				return fn_String+"...";
			}else{
				return fn_String
			}
		}
	}
	this.ParseData = function(data,type){
		var _data="";var year="";var month="";var day="";
		if(!OpenWBS.IsNull(data)){
			if(type=="ymd"){
			var ymd=data.split(" ")[0].split("-");
			if(!OpenWBS.IsNull(ymd[0])){  _data = ymd[0]+" "+Lang_Js_Year+" "; }
			if(!OpenWBS.IsNull(ymd[1])){  _data = _data+ymd[1]+" "+Lang_Js_Month+" "; }
			if(!OpenWBS.IsNull(ymd[2])){  _data = _data+ymd[2]+" "+Lang_Js_Day+" "; }
			}
		}
		return _data;
	}
	this.GetDataInDefault = function(optionsValue,SelectedValue){
		var _string="";
		var arrayOption = optionsValue.split(";");
		for(var i=0;i<arrayOption.length;i++){
			_array=arrayOption[i].split(":");
			if(trim(SelectedValue)==trim(_array[0])){_string=_array[1];}
		}
		return _string;
	}
	this.GetCodeImg = function(){
		var obj=document.getElementById("checkcode_boxer");
		if(!objExist(obj)){
			alert("function OpenWBS.GetCodeImg : Can't get objID="+objID);
		}else{
            var args = OpenWBS.GetCodeImg.arguments;
			var argc = OpenWBS.GetCodeImg.arguments.length;
			var path = "";
			if(argc>0){path=args[0]}
			var tmpstr=parseInt(Math.random()*100000);
			obj.innerHTML="<img id=\"checkcodeimg\" src=\""+ path +"include/code.asp?s="+tmpstr+"\" style=\"border:1px solid #ccc;vertical-align:top;\" onclick=\"OpenWBS.GetCodeImg('"+ path +"')\" alt=\""+ Lang_Js_ChangeCheckcodeTip +"\" /><input type=\"hidden\" name=\"checkcode_name\" id=\"checkcode_name\" value=\""+tmpstr+"\" /><label class=\"changecheckcode\">"+ Lang_Js_ChangeCheckcodeTipPre +"<a href=\"javascript:OpenWBS.GetCodeImg('"+path+"');\">"+ Lang_Js_ChangeCheckcodeTipSub +"</a></label>";
		}
	}
	this.GetCodeImg2 = function(){
		var obj=document.getElementById("checkcode_boxer2");
		if(!objExist(obj)){
			alert("function OpenWBS.GetCodeImg : Can't get objID="+objID);
		}else{
            var args = OpenWBS.GetCodeImg2.arguments;
			var argc = OpenWBS.GetCodeImg2.arguments.length;
			var path = "";
			if(argc>0){path=args[0]}
			var tmpstr=parseInt(Math.random()*100000);
			obj.innerHTML="<img id=\"checkcodeimg2\" src=\""+ path +"include/code.asp?s="+tmpstr+"\" style=\"border:1px solid #ccc;vertical-align:top;\" onclick=\"OpenWBS.GetCodeImg2('"+ path +"')\" alt=\""+ Lang_Js_ChangeCheckcodeTip +"\" /><input type=\"hidden\" name=\"checkcode_name2\" id=\"checkcode_name2\" value=\""+tmpstr+"\" /><label class=\"changecheckcode\">"+ Lang_Js_ChangeCheckcodeTipPre +"<a href=\"javascript:OpenWBS.GetCodeImg2('"+path+"');\">"+ Lang_Js_ChangeCheckcodeTipSub +"</a></label>";
		}
	}
	//根据路径Region_Path获取地区JSON中其对应的子地区
	this.GetRegion = function(Region_Path,BV_Region){
		OpenWBS.TempRegion = "";
		if(Region_Path=="," || Region_Path==""){
			OpenWBS.TempRegion=BV_Region;//一级地区
		}else{
			if(BV_Region.length>0){
				var fn_Array = Region_Path.split(",");
				var fn_Grade = fn_Array.length - 2 ;
				for(var kk=0;kk<BV_Region.length;kk++){
					if(BV_Region[kk].p==Region_Path){
						OpenWBS.TempRegion=BV_Region[kk].c;
						break;
					}else{
						if(Region_Path.indexOf(BV_Region[kk].p)>=0){OpenWBS.GetRegion(Region_Path,BV_Region[kk].c);}
					}
				}
			}else{
				OpenWBS.TempRegion = "";
			}
		}
	}
	this.CheckIsInRegion = function(Region_Path,BV_Region){
		if(Region_Path=="," || Region_Path==""){
			OpenWBS.IsInRegion=false;
			alert("Error: RegionPath is null In OpenWBS.IsInRegion()!");
		}else{
			if(BV_Region.length>0){
				for(var kk=0;kk<BV_Region.length;kk++){
					if(BV_Region[kk].p==Region_Path){
						OpenWBS.IsInRegion=true;
						break;
					}else{
						if(Region_Path.indexOf(BV_Region[kk].p)>=0){
							OpenWBS.CheckIsInRegion(Region_Path,BV_Region[kk].c);
						}
					}
				}
			}else{
				OpenWBS.IsInRegion=false;
			}
		}
	}
	this.XML = function(string){
		if(window.DOMParser){ //firefox内核的浏览器
			var p = new DOMParser();
			return p.parseFromString(string,"text/xml");
		}else if( window.ActiveXObject ){//ie内核的浏览器
			var doc = new ActiveXObject( "Msxml2.DOMDocument" );
			doc.loadXML(string);
			return doc;
		}else{
			return false;
		}
	}
	//设置数量 加1 减1
	this.NumSet = function(type,id){
		var input=OpenWBS.$id(id);
		var num  =parseInt(input.value);
		if(!(num>0)){num=1;}
		if(type=="add"){input.value=num+1;}else if(type=="del"){if(num>1){input.value=num-1;}}else{return false;}
	}
	//返回money类型的数值,保留小数点后面len位小数,返回的是float型
	this.parseMoney = function(string){
		string = string.toString();
		var len    = parseInt(OpenWBS.MoneyFloatLen);
		var tempstring = string;
		if(string.indexOf(".")>=0){
			var array = string.split(".");
			var float;
			if(array.length>1){
				float = array[1].substr(0,len);
				if(array[1].substr(len,1)>5){ float = parseInt(float)+1}
				tempstring = parseFloat(array[0] +"."+ float);
			}
		}else{
			tempstring = parseFloat(tempstring +".00")
		}
		return tempstring;
	}
	//保留两位小数,返回的是字符串型而不是float型
	this.FormatCurrency = function(string){
		var tempstring = "";
		//alert("string="+string);
		if(string=="" || string==undefined || string===false || string===true){
			return "0-1.00.htm"/*tpa=http://www.cloudsmi.com/company/include/javascript/0.00*/;
		}else{
			string = string.toString();
			var len    = 2 ; //保留2位小数
			if(string.indexOf(".")>=0){
				var array = string.split(".");
				var float = "";
				if(array[1].length>2){
					float = array[1].substr(0,len);
					//小数点后面两位四舍五入
					if(float.substr(0,1)=="0" || float.substr(0,1)==0){
						float = parseInt(float);
						if(array[1].substr(len,1)>=5){ float = float+1}
						float = float.toString()
						//没有进位则前面补个0
						if(float.length==1){float= "0" + float;}
						
					}else{
						if(array[1].substr(len,1)>5){ float = parseInt(float)+1}
						float = float.toString()
						//进位了则在个位数加1
						if(float.length==3){
							array[0] = parseInt(array[0])+1;
							float = float.substr(1,len);
						}
					}
				}else if(array[1].length==2){
					float = array[1].substr(0,2);
				}else if(array[1].length==1){
					float = array[1].substr(0,1) + "0";
				}else{
					float = "00"
				}
				//if(OpenWBS.IsNull(array[0])){array[0]="0";}
				if(!(parseFloat(array[0])>0 || parseFloat(array[0])<0)){tempstring="0."+ float;}else{tempstring = array[0] +"."+ float;}
			}else{
				if(!(parseFloat(string)>0 || parseFloat(string)<0)){tempstring="0-1.00.htm"/*tpa=http://www.cloudsmi.com/company/include/javascript/0.00*/}else{tempstring = string + ".00"}
			}
			return tempstring;
		}
	}
	//判断前台用户是否已经登陆
	this.CheckIsLogined = function(){
		var fn_DialogID = OpenWBS.CreateID();
		OpenWBS.CreateDiaWindow(320,100,fn_DialogID,Lang_Js_DiaTitle[0],"<div id=\"dia_checkuserlogined\" style=\"padding:10px 4px 5px 12px;\"><span class=\"loading_big\">"+ Lang_Js_Cue_IsUserLoginedChecking +"<span></div>",false,true);
		var ajaxString  = "";
		var ajaxUrl     = "include/module/ajax/ajax.asp?ctl=checkislogined&r="+parseInt(Math.random()*1000);
		var ajaxStatus  = posthttp(ajaxString,ajaxUrl);//window.open(ajaxUrl);
		if(ajaxStatus=="ok"){OpenWBS.IsUserLogined=true;}else{OpenWBS.IsUserLogined=false;}
		OpenWBS.DiaWindowCloseByID(fn_DialogID);
	}
	//返回上一页
	this.GoBack = function(){
		history.go(-1);
	}
	this.LoginGoBack = function(){
		var url = unescape(OpenWBS.Cookie.GetCookie("lasturl"));
		if(OpenWBS.IsNull(url) || url=='null'){url="index-1.asp.htm"/*tpa=http://www.cloudsmi.com/company/include/javascript/index.asp*/}
		if(url.indexOf("login")>0 || url.indexOf("reg")>0){url = "index-1.asp.htm"/*tpa=http://www.cloudsmi.com/company/include/javascript/index.asp*/}
		OpenWBS.href(url);
	}
	this.RegGoBack = function(){
		var url = unescape(OpenWBS.Cookie.GetCookie("lasturl"));
		if(OpenWBS.IsNull(url) || url=='null'){url="index-1.asp.htm"/*tpa=http://www.cloudsmi.com/company/include/javascript/index.asp*/}
		OpenWBS.href(url);
	}
	this.href = function(url){
		window.location.href=url;
	}
	//展开或收缩
	this.ExpandShrink = function(_this,areaid,defaultHTML,BeDoHTML){
		var obj=OpenWBS.$id(areaid);
		if(obj.style.display=="none"){
			obj.style.display="";
			_this.innerHTML=defaultHTML;
		}else{
			obj.style.display="none";
			_this.innerHTML=BeDoHTML;
		}
	}
	//设置下拉框的第IndexNum个选项为粗体
	this.SetSelectIndexNumFontWeight = function(IndexNum,Select){
		if(objExist(Select)){Select.options[IndexNum].style.fontWeight="900";}
	}
	/**
	* $ 创建弹出窗口 并根据页面可视大小居中
		DiaWindowID  : 弹出窗ID(必须唯一)
		title        : 弹出窗标题
		contentHTML  : 弹出窗内容,可为数组形式：Array(fn_HTML,fn_Btn) fn_HTML是内容部分 fn_Btn是操作按钮部分
		CreateShadow : 是否出现半透明遮照层 true | false
		CloseExist   : 右上角是否出现关闭按钮 true:存在按钮  false:无关闭按钮
		
		var fn_DialogID = OpenWBS.CreateID();
		var fn_Title    = Lang_Js_DiaTitle[0];
		var fn_HTML     = "<div id=\"fixbox\" style=\"padding:10px 4px 5px 12px;\"></div>";
		var fn_Btn      = "<input type=\"button\" class=\"sysBtn ml5\" onclick=\"href('?myhome/delivery/')\" value="+Lang_Js_Btn_Confirm+">";
		OpenWBS.CreateDiaWindow(400,180,fn_DialogID,fn_Title,Array(fn_HTML,fn_Btn),true,true);
	*/
	this.CreateDiaWindow = function(width,height,DiaWindowID,title,contentHTML,CreateShadow,CloseExist){
		//OpenWBS.com
		var fn_CloseExist=true;
		if(!OpenWBS.IsNull(CloseExist)){if(!CloseExist){fn_CloseExist=false;}}
		if(document.getElementById(DiaWindowID)==null){
			var zIndex;
			var MaxInputValue=6500;
			var DiaWindows=document.getElementsByClassName("div","DialogWindow");
			if(DiaWindows.length>0){
				for(i=0; i < DiaWindows.length; i++)
				{   //获取所有弹出窗口中最大的z-index值;
					if(parseInt(MaxInputValue) < parseInt(DiaWindows[i].style.zIndex)){ MaxInputValue=parseInt(DiaWindows[i].style.zIndex); }
				}
			}
			zIndex=parseInt(MaxInputValue)+2;
			var DiaWindow=document.createElement("div");
			DiaWindow.className="DialogWindow";
			DiaWindow.id=DiaWindowID;
			DiaWindow.style.width=parseInt(width)+"px";
			DiaWindow.style.height=parseInt(height)+"px";
			DiaWindow.style.zIndex=zIndex;
			var DiaWindowin=document.createElement("div");
			DiaWindowin.className="DialogWindowin";
			var input=document.createElement("input");
			input.type="hidden";
			input.name="DwInput";
			input.value=zIndex;
			var DiaTitle=document.createElement("div");
			DiaTitle.className="DialogTitle";//DiaTitle.id="DialogTitle";
			if(fn_CloseExist){
				DiaTitle.innerHTML="<span class=\"close\"><a href=\"javascript:;\" onclick=\"OpenWBS.DiaWindowClose(this)\" class=\"icon icon_close\" title=\"关闭\"></a></span>"+ title;
			}else{
				DiaTitle.innerHTML=title;
			}
			var DiaText=document.createElement("div");
			DiaText.className="DialogText";
			DiaText.id="DiaText_"+DiaWindowID;
			
			var DiaBottom=document.createElement("div");
			DiaBottom.className="actline";
			DiaBottom.id="DiaBottom_"+DiaWindowID;
			
			DiaWindowin.appendChild(input);
			DiaWindowin.appendChild(DiaTitle);
			DiaWindowin.appendChild(DiaText);
			if(contentHTML.constructor == window.Array ){
				DiaWindowin.appendChild(DiaBottom);
				DiaBottom.innerHTML=contentHTML[1];
				DiaText.style.height=(parseInt(height)-64)+"px";
				DiaText.innerHTML=contentHTML[0];
			}
			else{
				DiaText.style.height=(parseInt(height)-30)+"px";
				DiaText.innerHTML=contentHTML;
			}
			DiaWindow.appendChild(DiaWindowin);
			document.body.appendChild(DiaWindow);
			//居中
			var DiaWindowWidth=DiaWindow.style.width;
			var DiaWindowHeight=DiaWindow.style.height;
			var left=((parseInt(webScreenWidth()) - parseInt(DiaWindowWidth))/2);
			if(left<10){left=10}
			//var top=((parseInt(webScreenHeight()) - parseInt(DiaWindowHeight))/2);
			var top=parseInt(document.documentElement.scrollTop)+((parseInt(webScreenHeight()) - parseInt(DiaWindowHeight))/2);
			if(top<10){top=10}
			DiaWindow.style.left=left+"px";
			DiaWindow.style.top=top+"px";//document.body.scrollTop+document.body.offsetHeight/2-76;
			DiaWindow.style.display="";
			MoveDiv(DiaTitle);//可移动
			//如果CreateShadow==true则创建半透明遮照层
			if(CreateShadow){OpenWBS.CreateShadowDiv(DiaWindowID,zIndex);}
		}
	}
	//**$ 创建弹出窗口出现时的半透明遮照层
	this.CreateShadowDiv = function(DiaWindowID,zIndex){
		//OpenWBS.com
		var ShadowWidth=parseInt(webWidth());
		var ShadowHeight=parseInt(webHeight());
		if(parseInt(webWidth()) < parseInt(ScreenWidth())){ShadowWidth=parseInt(ScreenWidth())}//如果网页正文全文宽小于屏幕可用工作区宽度 则 遮照层的宽等于屏幕可用工作区宽度
		if(parseInt(webHeight()) < parseInt(ScreenHeight())){ShadowHeight=parseInt(ScreenHeight())}//如果网页正文全文高小于屏幕可用工作区高度 则 遮照层的高等于屏幕可用工作区高度
		var Shadow=document.createElement("div");//创建遮照层
		Shadow.className="ShadowDiv";
		Shadow.id="ShadowDiv_"+DiaWindowID;
		Shadow.style.zIndex=parseInt(zIndex)-1;
		Shadow.style.height=ShadowHeight+"px";//注意firefox下没加"px"是不起作用的.
		Shadow.style.width =parseInt(ShadowWidth-24)+"px";
		if(isIE){
			var Shadow_iframe=document.createElement("iframe");
			Shadow_iframe.style.height= ShadowHeight+"px";
			Shadow_iframe.style.width = parseInt(ShadowWidth-24)+"px";
			Shadow.appendChild(Shadow_iframe);
		}
		document.body.appendChild(Shadow);
	}
	//**$ 关闭弹出窗口和移除遮照层
	this.DiaWindowClose = function(obj){
		//OpenWBS.com
		var DialogWindow=obj.parentNode.parentNode.parentNode.parentNode;
		if(DialogWindow != undefined){
			document.body.removeChild(DialogWindow);
		}
		var ShadowDiv=document.getElementById("ShadowDiv_"+DialogWindow.id);
		if(ShadowDiv != undefined){
			document.body.removeChild(ShadowDiv);//移除遮照层
		}
	}
	//**$ 关闭弹出窗口和移除遮照层
	this.DiaWindowCloseByID = function(DiaWindowID){
		//OpenWBS.com
		var DialogWindow=document.getElementById(DiaWindowID);
		if(objExist(DialogWindow)){
			document.body.removeChild(DialogWindow);
		}
		var ShadowDiv=document.getElementById("ShadowDiv_"+DiaWindowID);
		if(objExist(ShadowDiv)){
			document.body.removeChild(ShadowDiv);//移除遮照层
		}
	}
	//弹出会员登陆窗口
	this.LoginDiaWindow = function(){
		var url=window.location.href;
		var HTML = '<div style="padding:25px 25px;"><form name="LoginForm" action="index-1.htm"/*tpa=http://www.cloudsmi.com/company/include/javascript/index.asp?login/result/*/ method="post">'+
        '<table border="0" cellpadding="5" cellspacing="0">'+
        '<tr><td class="font14" align="right">'+Lang_Js_User[32]+':</td>'+
        '<td class="td02"><div><input type="text" class="text" name="username" style="width:200px;" value="" /></div></td></tr>'+
        '<tr><td class="font14" align="right">'+Lang_Js_User[33]+':</td>'+
        '<td class="td02">'+
        '<div><input type="password" class="text" name="password" style="width:200px;" value="" /></div>'+
        '</td></tr>'+
        '<tr><td class="font14" align="right">'+Lang_Js_User[34]+':</td>'+
        '<td class="td02">'+
		'<input type="text" class="text" id="checkcode_value" name="checkcode_value" maxlength="5" value="" style=" font-size:14px; font-family:Arial, Helvetica, sans-serif; font-weight:bold; width:110px;" /><span id="checkcode_boxer" style="padding:0px 0px 0px 4px;"></span><label class="Normal" id="d_checkcode"></label>'+
        '</td></tr>'+
        '<tr><td class="td01"><div></div></td>'+
        '<td class="td02"><input type="button" class="btn btn_login" onclick="OpenWBS.User.DiaLogin(\'LoginForm\')" value=""/><span class="ml15"><a href="javascript:OpenWBS.C.User.ForgetPassword();">'+Lang_ForgetPassword+'</a><span><span class="ml25"><a href="openwbs-1.js-reg'+filesuffix+'"/*tpa=http://www.cloudsmi.com/company/include/javascript/openwbs.js?reg'+filesuffix+'*/ target="_blank">'+Lang_Js_Register+'</a></span></td></tr>'+
        '</table>'+
        '<div class="mt5 mb5 ml10 mr10" id="loginingmsgbox"></div></form></div>';
		OpenWBS.CreateDiaWindow(520,280,"DiaWin_Login",Lang_Js_User[31],HTML,true);
		OpenWBS.GetCodeImg();
	}
	this.PayTradeType = function(BV_Type){
		var fn_type = BV_Type.toLowerCase();
		if(fn_type=="orderpay"){ return Lang_Js_PayTradeType[2]}
		else if(fn_type=="addfund"){ return Lang_Js_PayTradeType[3]}
		else{ return Lang_Js_PayTradeType[1] }
	}
	this.PayTradeStatus = function(BV_Status){
		var fn_status = BV_Status.toLowerCase();
		if(fn_status=="success"){ return Lang_Js_PayTradeStatus[1]}
		else if(fn_status=="failed"){ return Lang_Js_PayTradeStatus[2]}
		else if(fn_status=="cancel"){ return Lang_Js_PayTradeStatus[3]}
		else if(fn_status=="error"){ return Lang_Js_PayTradeStatus[4]}
		else if(fn_status=="invalid"){ return Lang_Js_PayTradeStatus[5]}
		else if(fn_status=="progress"){ return Lang_Js_PayTradeStatus[6]}
		else if(fn_status=="timeout"){ return Lang_Js_PayTradeStatus[7]}
		else if(fn_status=="ready"){ return Lang_Js_PayTradeStatus[8]}
		else if(fn_status=="waitpay"){ return Lang_Js_PayTradeStatus[9]}
		else{ return Lang_Js_PayTradeStatus[10] }
	}
	this.ScrollTimes = 3600;
	this.StopScroll  = false;
	this.BodyScroll  = function(){
		OpenWBS.ScrollTimes = OpenWBS.ScrollTimes - 1;
		document.documentElement.scrollTop = document.body.scrollHeight;
		if(OpenWBS.ScrollTimes>0 && OpenWBS.StopScroll==false){window.setTimeout(function(){OpenWBS.BodyScroll()},500);}
	}
	//根据公式计算配送费用,跟OS.ShippingFee函数要一致
	this.ShippingFee = function(BV_E,BV_W){
		var Fn_E,Fn_M,Fn_Int,Fn_Result;
		Fn_E = BV_E;
		var regex = /\{([\s\S]+?)\}/g;
		var Fn_Ms = regex.exec(BV_E);
		if(Fn_Ms!=null){
			Fn_Int = eval(Fn_Ms[1].replace("w",BV_W));
			if(Fn_Int<0){Fn_Int=0;}
			Fn_E = Fn_E.replace(Fn_Ms[0],Fn_Int);
			Fn_Result = eval(Fn_E.replace("w",BV_W));
		}else{
			Fn_Result = 0;
		}
		return Fn_Result;
	}
}
function Class_Cookie(){
	var _Cookie=this;
	this.CookiePre     = "" ;//cookie前缀
	this.CookieDomain  = "";
	this.CookiePath    = "";
	this.CookieSecure  = false;
	/**
	* 参数列表顺序：name,value,expires,path,domain,secure
	OpenWBS.Cookie.SetCookie("myinfo","linx:1071322670:openwbs@qq.com");
	OpenWBS.Cookie.SetCookie("myinfo","linx:1071322670:openwbs@qq.com",1000*60*60*24*10); 1000毫秒*60秒*60分*24小时=1天
	OpenWBS.Cookie.SetCookie("myinfo","linx:1071322670:openwbs@qq.com",1000*60*60*24*10,"/openwbs/");
	OpenWBS.Cookie.SetCookie("myinfo","linx:1071322670:openwbs@qq.com",1000*60*60*24*10,"/openwbs/","openwbs-1.com.htm"/*tpa=http://www.cloudsmi.com/company/include/javascript/openwbs.com*/,false);
	**/
	this.SetCookie = function (){
		var args = _Cookie.SetCookie.arguments;
		var argc = _Cookie.SetCookie.arguments.length;
		if(argc < 2){return false;}
		var name = _Cookie.CookiePre + args[0];
		var ThisCookie = name + "=" + _Cookie.Encode(args[1]);
		if(argc >= 3){ var date=new Date(); date.setTime(date.getTime()+args[2]); ThisCookie += "; expires=" + date.toGMTString(); }
		if(argc >= 4){ ThisCookie += ((OpenWBS.IsNull(args[3])) ? "" : ("; path=" + args[3]));}//cookie 作用路径
		if(argc >= 5){ ThisCookie += ((OpenWBS.IsNull(args[4])) ? "" : ("; domain=" + args[4]));}//cookie 作用域
		if(argc >= 6){ ThisCookie += ((args[5] == true) ? "; secure" : "")}//安全
		//document.cookie = ThisCookie;
	    if(ThisCookie.length <= 4000){document.cookie = ThisCookie; return true;}
		else{if(confirm("Cookie exceeds 4KB and will be cut!")){document.cookie = ThisCookie;return true;}}
	}
	//OpenWBS.Cookie.GetCookie("my");
	//OpenWBS.Cookie.GetCookie("my:name");
	this.GetCookie = function(name){
		var subname="";
		if(name.indexOf(":")>0){
			subname=name.split(":")[1];
			name   =name.split(":")[0];
		}
		var nameEQ = _Cookie.CookiePre + name + "=";
        var CookiesArray = document.cookie.split(';');
		for(var i=0;i<CookiesArray.length;i++){
			var Cookie = CookiesArray[i];
			while(Cookie.charAt(0)==' '){Cookie=Cookie.substring(1,Cookie.length)}
			if(Cookie.indexOf(nameEQ) == 0){
				var cookieValue = _Cookie.Decode(Cookie.substring(nameEQ.length,Cookie.length));
				if(subname!=""){
					var cookieArray = cookieValue.split("&");
					cookieValue = "";
					for(var ii=0;ii<cookieArray.length;ii++){
						if(subname==cookieArray[ii].split("=")[0]){
							cookieValue=cookieArray[ii].split("=")[1];
						}
					}
				}
				return cookieValue;
			}
		}
		return null;
	}
	this.DeleteCookie = function(name){
		_Cookie.SetCookie(name,"");
		//var realName = _Cookie.CookiePre + name;
		//if(_Cookie.GetCookie(realName)){ var date=new Date(); date.setTime(date.getTime()-10000); document.cookie = realName+"=v; expire="+date.toGMTString(); }
	}
	this.Encode = function(_str){ return unescape(_str);}
	this.Decode = function(_str){ return unescape(unescape(_str));}
}
function Class_JSON(){
	//JSON字符串转换为JSON对象
	this.parseJSON = function (sJSON){
		return  JSON.parse(sJSON);
	}
	//JSON对象转换为JSON字符串
	this.toJSONString = function(oJSON){
		return JSON.stringify(oJSON);
	}
	//JSON删除操作 OpenWBS.JSON.Delete(0,Fn_JSON.theskus)等于delete Fn_JSON.theskus[0];
	this.Delete = function(index, dataArray){
		index=parseInt(index);
		var len=dataArray.length;
		for(var i=0;i<len;i++){
			if(i==index){
				for(var j=i+1;j<len;j++){
					dataArray[j-1]=dataArray[j];//当前索引值后的数据都向前移
				}
				dataArray.length--;//移完之后,自身长度减1
			}
		}
		return dataArray;
	} 
}
/*
http://www.JSON.org/json2.js
2010-11-17
*/
//if(!this.JSON){this.JSON = {};}//firefox有内置JSON.parse()、JSON.stringify()；ie没有
this.JSON = {};
(function () {
    "use strict";
    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function (key) {
            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };
        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }
    function str(key, holder) {
        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':
            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':
            return String(value);

        case 'object':
            if (!value) {  return 'null'; }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = '';
            indent = '';
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') {
                indent = space;
            }

            rep = replacer;
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

            return str('', {'': value});
        };
    }
    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
								
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if (/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                j = eval('(' + text + ')');

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }
// If the text is not JSON parseable, then a SyntaxError is thrown.
            throw new SyntaxError('JSON.parse');
        };
    }
}());
//**JSON:end
function Class_User(){
	var _User = this;
	this.DiaLogin = function(FormName){
		if(_User.Logining(FormName)){window.location.reload();}
	}
	this.Login = function(FormName){
		var Form = document.forms[FormName];
		if(_User.Logining(FormName)){Form.submit();}
	}
	//会员登陆
	this.Logining = function(FormName){
		var Form = document.forms[FormName];
		var username  = Form.username.value;
		var password  = Form.password.value;
		var CheckCode_Value = document.getElementById("checkcode_value").value;
		var CheckCode_Name  = document.getElementById("checkcode_name").value;
		var CueMsgBox = document.getElementById("loginingmsgbox");
		var Check=true;
		if(OpenWBS.IsNull(CheckCode_Value)){
			Check = false;
			document.getElementById("checkcode_value").focus();
		}
		if(OpenWBS.IsNull(password)){
			Check = false;
			Form.password.focus();
		}
		if(OpenWBS.IsNull(username)){
			Check = false;
			Form.username.focus();
		}
		if(Check){
			OpenWBS.Checking(CueMsgBox);
			var ajaxString = "username="+escape(username)+"&password="+escape(password)+"&checkcode_name="+escape(CheckCode_Name)+"&checkcode_value="+escape(CheckCode_Value);
			var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=logining&r="+parseInt(Math.random()*1000);
			var ajaxSta    = posthttp(ajaxString,ajaxUrl);//window.open(ajaxUrl);
			if(ajaxSta=="ok"){
				Check = true;
				CueMsgBox.className="d_ok";
				CueMsgBox.innerHTML=Lang_Js_User[30];
			}else if(ajaxSta=="error_checkcode"){
				Check = false;
				CueMsgBox.className="d_err";
				CueMsgBox.innerHTML=Lang_Js_User[24];
				OpenWBS.GetCodeImg();
				document.getElementById("checkcode_value").focus();
			}else{
				Check = false;
				OpenWBS.GetCodeImg();
				CueMsgBox.className="d_err";
				CueMsgBox.innerHTML=Lang_Js_User[29];
			}
		}
		return Check;
	}
	//注册新会员
	this.Reg = function(FormName){
		var Form = document.forms[FormName];
		var Check=true;
		var CheckUsername  = _User.Reg_UsernameCheck(FormName);
		var CheckPassword  = _User.Reg_PasswordCheck(FormName);
		var CheckRePassword= _User.Reg_RePasswordCheck(FormName);
		var CheckEmailCheck= _User.Reg_EmailCheck(FormName);
		var CheckAllowed   = _User.Reg_AllowedCheck(FormName);
		Check = CheckUsername && CheckPassword && CheckRePassword && CheckEmailCheck && CheckAllowed;
		if(Check){
			var CueMsgBox = document.getElementById("regmsgbox");
			OpenWBS.DataSending(CueMsgBox);
			var Username  = Form.username.value;
			var Password  = Form.password.value;
			var Email     = Form.email.value;
			var CheckCode_Value = document.getElementById("checkcode_value").value;
		    var CheckCode_Name  = document.getElementById("checkcode_name").value;
			var ajaxString = "username="+escape(Username)+"&password="+escape(Password)+"&email="+escape(Email)+"&checkcode_name="+CheckCode_Name+"&checkcode_value="+CheckCode_Value;
			var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=registering&r="+parseInt(Math.random()*1000);
			var ajaxSta    = posthttp(ajaxString,ajaxUrl);//window.open(ajaxUrl);
			//alert(ajaxSta);
			if(ajaxSta=="ok"){
				CueMsgBox.className="d_ok";
				CueMsgBox.innerHTML=Lang_Js_User[37];
				Form.submit();
			}else if(ajaxSta=="error_checkcode"){
				OpenWBS.GetCodeImg();
				CueMsgBox.className="d_err";
				CueMsgBox.innerHTML=Lang_Js_User[24];
			}else{
				OpenWBS.GetCodeImg();
				CueMsgBox.className="d_err";
				CueMsgBox.innerHTML=Lang_Js_User[38];
			}
		}
	}
	this.CueUsername = function(){
		var CueMsgBox  =document.getElementById("d_username");
		CueMsgBox.className="d_alert";
		CueMsgBox.innerHTML=Lang_Js_User[5];
	}
	this.Reg_UsernameCheck = function(FormName){
		var Check=true;
		var Form = document.forms[FormName];
		var Username  = Form.username.value;
		var CueMsgBox = document.getElementById("d_username");
		OpenWBS.Checking(CueMsgBox);
		if(OpenWBS.IsNull(Username)){
			Check=false;
			CueMsgBox.className="d_err";
			CueMsgBox.innerHTML=Lang_Js_User[3];
		}else{
			var ajaxString = "username="+escape(Username);
			var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=checkusername&"+ajaxString+"&r="+parseInt(Math.random()*1000);
			var ajaxSta    = posthttp(ajaxString,ajaxUrl);//window.open(ajaxUrl);
			//alert(ajaxSta);
			if(ajaxSta=="ok"){
				Check = true;
				CueMsgBox.className="d_ok";
				CueMsgBox.innerHTML=Lang_Js_User[0];
			}else{
				Check = false;
				CueMsgBox.className="d_err";
				CueMsgBox.innerHTML=Lang_Js_User[5];
				if(ajaxSta=="used"){CueMsgBox.innerHTML=Lang_Js_User[7];}
			}
		}
		return Check;
	}
	this.CuePassword = function(){
		var CuePassword  =document.getElementById("d_password");
		CuePassword.className="d_alert";
		CuePassword.innerHTML=Lang_Js_User[19];
	}
	this.CueRePassword = function(){
		var CuePassword  =document.getElementById("d_repassword");
		CuePassword.className="d_alert";
		CuePassword.innerHTML=Lang_Js_User[10];
	}
	this.Reg_PasswordCheck = function(FormName){
		return OpenWBS.User.PasswordCheck(FormName);
	}
	this.Reg_RePasswordCheck = function(FormName){
		return OpenWBS.User.RePasswordCheck(FormName);
	}
	this.PasswordCheck = function(FormName){
		var Check=true;
		var Form = document.forms[FormName];
		var CuePassword  =document.getElementById("d_password");
		var CueRePassword=document.getElementById("d_repassword");
		OpenWBS.Checking(CuePassword);
		if(OpenWBS.IsNull(Form.password.value)){
			Check=false;
			CuePassword.className="d_err";
			CuePassword.innerHTML=Lang_Js_User[8];
		}else{
			if(Form.password.value.length<6){
				Check=false;
				CuePassword.className="d_err";
				CuePassword.innerHTML=Lang_Js_User[14];
			}
			else if(Form.password.value.length>20){
				Check=false;
				CuePassword.className="d_err";
				CuePassword.innerHTML=Lang_Js_User[15];
			}
			else{
				CuePassword.className="d_ok";
				CuePassword.innerHTML=Lang_Js_User[0];
			}
		}
		return Check;
	}
	this.RePasswordCheck = function(FormName){
		var Check=true;
		var Form = document.forms[FormName];
		var CuePassword  =document.getElementById("d_password");
		var CueRePassword=document.getElementById("d_repassword");
		OpenWBS.Checking(CueRePassword);
		if(!OpenWBS.IsNull(Form.repassword.value)){
			if(Form.password.value == Form.repassword.value){
				CueRePassword.className="d_ok";
				CueRePassword.innerHTML=Lang_Js_User[0];
			}else{
				Check=false;
				CueRePassword.className="d_err";
				CueRePassword.innerHTML=Lang_Js_User[9];
			}
		}else{
			Check=false;
			CueRePassword.className="d_err";
			CueRePassword.innerHTML=Lang_Js_User[8];
		}
		return Check;
	}
	this.CueEmail = function(){
		var CueMsgBox  =document.getElementById("d_email");
		CueMsgBox.className="d_alert";
		CueMsgBox.innerHTML=Lang_Js_User[22];
	}
	this.Reg_EmailCheck = function(FormName){
		var Check=true;
		var Form = document.forms[FormName];
		var Email = Form.email.value;
		var CueMsgBox = document.getElementById("d_email");
		OpenWBS.Checking(CueMsgBox);
		var ajaxString = "email="+escape(Email);
		var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=checkemail&r="+parseInt(Math.random()*1000);
		var ajaxSta    = posthttp(ajaxString,ajaxUrl);//window.open(ajaxUrl);
		if(ajaxSta=="ok"){
			Check = true;
			CueMsgBox.className="d_ok";
			CueMsgBox.innerHTML=Lang_Js_User[0];
		}else{
			Check = false;
			CueMsgBox.className="d_err";
			CueMsgBox.innerHTML=Lang_Js_User[23]
			if(ajaxSta=="used"){CueMsgBox.innerHTML=Lang_Js_User[21];}
		}
	    return Check;
	}
	this.Reg_AllowedCheck = function(FormName){
		var Check=true;
		var Form = document.forms[FormName];
		var CueMsgBox = document.getElementById("d_allowed");
		var Allowed   = document.getElementById("allowed");
		if(Allowed.checked==true){
			Check = true;
			CueMsgBox.className="d_ok";
			CueMsgBox.innerHTML=Lang_Js_User[27];
		}else{
			Check = false;
			CueMsgBox.className="d_err";
			CueMsgBox.innerHTML=Lang_Js_User[28];
		}
	    return Check;
	}
}
var OpenWBS = new Class_OpenWBS();


//创建地址下拉列表
function CreateAddressAsSelect(ParentNode,Region_Path,SelectedAddress,Key,IsCreateByOnChange){
	var args = CreateAddressAsSelect.arguments;
	var argc = CreateAddressAsSelect.arguments.length;
	var onchange_function = "";
	if(argc>5){ onchange_function = CreateAddressAsSelect.arguments[5]}
	if(!OpenWBS.IsNull(Region_Path)){
		var _Array,Arr,P_RegionPath;
		var fn_Grade;
		var IsLastRegion = false;
		var RegionPath   = SelectedAddress;
		var RegionArray  = RegionPath.split(",");
		var Select=document.createElement("select");
		Select.name=Key;
		Select.style.marginRight="4px";
		OpenWBS.DataLoading(ParentNode);
		//var ajaxString = "regionpath="+Region_Path+"";
		//var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=getregion&r="+parseInt(Math.random()*1000);
		//var ajaxSta    = posthttp(ajaxString,ajaxUrl);//window.open(ajaxUrl);
		OpenWBS.TempRegion = "";
		OpenWBS.GetRegion(Region_Path,region.regions);
		//alert(OpenWBS.JSON.toJSONString(OpenWBS.TempRegion));
		var ajaxSta = OpenWBS.TempRegion;
		if(ajaxSta!=false && ajaxSta!=""){
			_Array=ajaxSta;
			Select.options.add(new Option(Lang_Js_PleaseSelect,""));
			for(var i=0;i<_Array.length;i++){
				//Arr=_Array[i].split(":");
				//if(Arr.p>1){
					var oOption  = document.createElement("option");
					oOption.value = _Array[i].p;
					oOption.text  = _Array[i].n;
					fn_Grade      = _Array[i].g;
					Select.options.add(oOption);
					P_RegionPath = ",";
					for(var j=1;j<parseInt(fn_Grade)+1;j++){
						P_RegionPath = P_RegionPath + RegionArray[j] + ",";
					}
					if(P_RegionPath==_Array[i].p){oOption.selected=true;}
				//}
			}
		}else{
			IsLastRegion=true;
		}
		OpenWBS.RemoveElementByID("ImgLoading");
		if(!IsLastRegion){
			ParentNode.appendChild(Select);
			Select.setAttribute("grade",fn_Grade);
			//首次生成地区
			if(!IsCreateByOnChange && !OpenWBS.IsNull(SelectedAddress)){
				if(RegionArray.length-2 > fn_Grade){
					P_RegionPath = ","
					for(var j=1;j<parseInt(fn_Grade)+1;j++){
						P_RegionPath = P_RegionPath + RegionArray[j] + ",";
					}
					//alert("P_RegionPath="+P_RegionPath);
					CreateAddressAsSelect(ParentNode,P_RegionPath,SelectedAddress,Key,IsCreateByOnChange,onchange_function);
				}
			}
			//当地区内容改变时
			Select.onchange = function (){
				var selects=getElementsByTagNameAndName("select",Key)
				var thisSelect;
				for(var i=0;i<selects.length;i++){
					thisSelect = selects[i];//alert(thisSelect.options[thisSelect.selectedIndex].text);
					if(parseInt(thisSelect.getAttribute("grade"))>parseInt(this.getAttribute("grade"))){
						thisSelect.parentNode.removeChild(thisSelect);
					}
				}
				CreateAddressAsSelect(ParentNode,this.value,"",Key,true,onchange_function);
				eval(onchange_function);
			}
		}
	}
}

//$:创建年月日下拉列表
function CreateDate(ParentNode,SelectedDate,Key){
	SelectedDate = SelectedDate.split("-");
	var _this = this;
	this.sYear  = SelectedDate[0];
	this.sMonth = SelectedDate[1];
	this.sDay   = SelectedDate[2];
	this.CreateDateMonth = function (SelectedMonth){
		var month=document.createElement("select");
		month.name=Key+"_month";
		month.id  =Key+"_month";
		month.style.marginLeft="4px";
		month.options.add(new Option(Lang_Js_Month,""));
		for (var i=1; i<13; i++) {
			var oOption  = document.createElement("option");
			oOption.text  = i;
			oOption.value = i;
			month.options.add(oOption);
			if(parseInt(SelectedMonth)==i){oOption.selected=true;}
		}
		ParentNode.appendChild(month);
		_this.CreateDateDay(sDay);
		month.onchange = function(){
			var sday = OpenWBS.$id(Key+"_day");
			if(objExist(sday)){ParentNode.removeChild(sday)}
			_this.CreateDateDay("");
		}
	}
	this.CreateDateDay = function (SelectedDay){
		var vYear = OpenWBS.$id(Key+"_year").value;
		var vMonth = OpenWBS.$id(Key+"_month").value;
		//alert(vMonth);
		var day=document.createElement("select");
		day.name=Key+"_day";
		day.id  =Key+"_day";
		day.style.marginLeft="4px";
		day.options.add(new Option(Lang_Js_Day,""));
		//根据年月获取天数
		var _max = (new Date(vYear,vMonth, 0)).getDate();
		for (var i=1; i<=_max; i++) {
			var oOption  = document.createElement("option");
			oOption.text  = i;
			oOption.value = i;
			day.options.add(oOption);
			if(parseInt(SelectedDay)==i){oOption.selected=true;}
		}
		ParentNode.appendChild(day);
	}
	if(objExist(ParentNode)){
		var year=document.createElement("select");
		year.name=Key+"_year";
		year.id  =Key+"_year";
		year.options.add(new Option(Lang_Js_Year,""));
		for (var i=2010; i>=1900; i--) {
			var oOption  = document.createElement("option");
			oOption.text  = i;
			oOption.value = i;
			year.options.add(oOption);
			if(parseInt(sYear)==i){oOption.selected=true;}
		}
		ParentNode.appendChild(year);
		_this.CreateDateMonth(sMonth);
	}
}
//$:创建下拉列表
function CreateSelect(ParentNode,Attributes,optionsValue,SelectedValue){
	var _array;
	var arrayAttr   = Attributes.split(";");
	var arrayOption = optionsValue.split(";");
	var NewSelect=document.createElement("select");
	for(var i=0;i<arrayAttr.length;i++){
		_array=arrayAttr[i].split(":");
		if(_array[0]=="name"){NewSelect.name=_array[1];}
		if(_array[0]=="id"){NewSelect.id=_array[1];}
	}
	for(var i=0;i<arrayOption.length;i++){
		_array=arrayOption[i].split(":");
		var oOption  = document.createElement("option");
		oOption.value = _array[0];
		oOption.text  = _array[1];
		NewSelect.options.add(oOption);
		if(trim(SelectedValue)==trim(_array[0])){oOption.selected=true;}
	}
	ParentNode.appendChild(NewSelect);
}































