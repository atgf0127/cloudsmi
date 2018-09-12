OpenWBS.C = new Class_C();
function Class_C(){
	this.Content     = new Class_C_Content();
	this.Shop        = new Class_C_Shop();
	this.Cart        = new Class_C_Cart();
	this.Tie         = new Class_C_Tie();
	this.Vote        = new Class_C_Vote();
	this.Guestbook   = new Class_C_Guestbook();
	this.Link        = new Class_C_Link();
	this.Order       = new Class_C_Order();
	this.User        = new Class_C_User();
}
function Class_C_Content(){
	var _Content=this;
	this.Detail_Init = function(){
		OpenWBS.C.Content.AddHits(subsystem,id);
	}
	this.AddHits = function(SubSystem,ContentID){
		var ajaxString = "";
		var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=addcontenthits&subsys="+SubSystem+"&id="+ContentID+"&r="+parseInt(Math.random()*1000);
		var ajaxSta    = posthttp(ajaxString,ajaxUrl);
	}
}
function Class_C_Shop(){
	var _Shop=this;
	_Shop.AttrsNum = 0 ;
	_Shop.GoodsID  = 0 ;
	_Shop.GoodsName = "" ;
	_Shop.MKPrice       = 0 ;
	_Shop.DefaultPrice  = 0 ;
	_Shop.NewPrice      = 0 ;
	this.AddGoodsHits = function(GoodsID){
		var ajaxString = "";
		var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=addgoodshits&id="+GoodsID+"&r="+parseInt(Math.random()*1000);
		var ajaxSta    = posthttp(ajaxString,ajaxUrl);
	}
	//初始化商品属性状态
	this.SetGoodsAttribute = function(){
		if(!objExist(OpenWBS.$id("goodsattributelist"))){ return false;}
		var attrs_dl=getElementsByTagNameAndName("dl","attr");
		_Shop.AttrsNum=attrs_dl.length;
		for(var i=0;i<attrs_dl.length;i++){
			var lis=attrs_dl[i].getElementsByTagName("li");
			for(var j=0;j<lis.length;j++){
				lis[j].onclick = function(){
					if(this.className!="current"){
						this.className="current";
						var t_lis=OpenWBS.$id(this.parentNode.id).getElementsByTagName("li");
						for(var l=0;l<t_lis.length;l++){
							if(parseInt(this.parentNode.getAttribute("attrtype"))!=2){
								if(escape(t_lis[l].getAttribute("goodsattrid"))!=escape(this.getAttribute("goodsattrid"))){t_lis[l].className="";}
							}
						}
					}else{
						this.className="";
					}
					_Shop.ShowSelectChoiceAndSetPrice("onclick");
					_Shop.BuyButtonSet();
				}
			}
			var span = document.createElement("font");
			span.id="choice_"+attrs_dl[i].getAttribute("attrid");
			OpenWBS.$id("choiceinfo").appendChild(span);
		}
	}
	//提示已选择的属性和商品价格
	this.ShowSelectChoiceAndSetPrice = function(Event){
		if(Event=="onclick"){
			if(OpenWBS.$id("choiceinfo").parentNode.style.display=="none"){OpenWBS.$id("choiceinfo").parentNode.style.display=""};
		}
		var attrs_dl=getElementsByTagNameAndName("dl","attr");
		var IsSelect = false;
		var NotSelectAttr = "";
		var AttributeName = "";
		var TempPrice = 0 ;
		var T_i = 0;
		var fontchoice,tempattr ;
		for(var i=0;i<attrs_dl.length;i++){
			var lis=attrs_dl[i].getElementsByTagName("li");
			AttributeName = attrs_dl[i].getAttribute("attrname");
			IsSelect = false;
			tempattr = "";
			for(var j=0;j<lis.length;j++){
				if(T_i==0){TempPrice=parseFloat(_Shop.DefaultPrice)}
				fontchoice = OpenWBS.$id("choice_"+attrs_dl[i].getAttribute("attrid"));
				if(lis[j].className=="current"){
					IsSelect = true;T_i=T_i+1;
					TempPrice = parseFloat(TempPrice) + parseFloat(lis[j].getAttribute("attrprice"));
					if(tempattr==""){tempattr = lis[j].getAttribute("attrvalue");}else{tempattr = tempattr +" | "+lis[j].getAttribute("attrvalue");}
				}
				if(j==lis.length-1){if(tempattr!=""){fontchoice.innerHTML="\""+tempattr+"\"";}else{fontchoice.innerHTML="";}}
			}
			if(!IsSelect){if(NotSelectAttr==""){NotSelectAttr = AttributeName}else{NotSelectAttr = NotSelectAttr +" "+ AttributeName}}
		}
		OpenWBS.$id("choiceinfo").setAttribute("notselect",NotSelectAttr);
		if(Event!="init"){
			//显示选择属性后的商品价格
			OpenWBS.$id("goodsprice").innerHTML = OpenWBS.FormatCurrency(TempPrice);
			//保存选择属性后的商品价格
			_Shop.NewPrice = OpenWBS.parseMoney(TempPrice);
			//调用(计算套装原价、套装总价、节省多少)方法
			OpenWBS.C.Shop.SetAdunctPacksPrice();
		}
		_Shop.SetGoodsDiscount();
	}
	//商品详细页-计算设置商品折扣优惠并显示
	this.SetGoodsDiscount = function(){
		if(OpenWBS.C.Shop.MKPrice > 0){
			if(objExist(OpenWBS.$id("zekou"))){OpenWBS.$id("zekou").innerHTML   = OpenWBS.FormatCurrency((_Shop.NewPrice/_Shop.MKPrice)*10);}
			if(objExist(OpenWBS.$id("youhui"))){OpenWBS.$id("youhui").innerHTML = OpenWBS.FormatCurrency(_Shop.MKPrice - _Shop.NewPrice);}
		}
	}
	//商品详细页购物程序初始化
	this.BuyGoodsInit = function(){
		_Shop.NewPrice = _Shop.DefaultPrice;
		if(!(OpenWBS.C.Shop.MKPrice > 0)){OpenWBS.C.Shop.MKPrice=0}
		_Shop.SetGoodsAttribute();
		_Shop.ShowSelectChoiceAndSetPrice("init");
		_Shop.BuyButtonSet();
	}
	//购买按钮 加入购物车 按钮状态等设置
	this.BuyButtonSet = function(){
		var BuyBtn =OpenWBS.$id("buynow");
		var CartBtn=OpenWBS.$id("addtocart");
		//在没有选择任何属性的时候提示用户先选择商品属性
		if(!OpenWBS.IsNull(OpenWBS.$id("choiceinfo").getAttribute("notselect"))){
			BuyBtn.onmouseover=function(){_Shop.BuyButtonSet_Mouseover(this)}
			BuyBtn.onmouseout=function(){_Shop.BuyButtonSet_Mouseout(this)}
			CartBtn.onmouseover=function(){_Shop.BuyButtonSet_Mouseover(this)}
			CartBtn.onmouseout=function(){_Shop.BuyButtonSet_Mouseout(this)}
			var AdjunctArea = OpenWBS.$id("adjunctarea");
			if(objExist(AdjunctArea)){
				var Adjuncts=getElementsByTagNameAndAttribute(AdjunctArea,"div","tag","adjunct");
				for(var i=0;i<Adjuncts.length;i++){
					var buypacksBtn=getElementsByTagNameAndAttribute(Adjuncts[i],"input","name","buypacks")[0];
					buypacksBtn.onmouseover = function(){_Shop.BuyButtonSet_Mouseover(this)}
					buypacksBtn.onmouseout=function(){_Shop.BuyButtonSet_Mouseout(this)}
				}
			}
		}else{
			BuyBtn.style.cursor="pointer";
			CartBtn.style.cursor="pointer";
			BuyBtn.onmouseover=function(){}
			BuyBtn.onmouseout=function(){}
			BuyBtn.onclick = function(){OpenWBS.C.Shop.BuyNow()}
			CartBtn.onmouseover=function(){}
			CartBtn.onmouseover=function(){}
			CartBtn.onclick = function(){OpenWBS.C.Shop.AddToCart()}
			var AdjunctArea = OpenWBS.$id("adjunctarea");
			if(objExist(AdjunctArea)){
				var Adjuncts=getElementsByTagNameAndAttribute(AdjunctArea,"div","tag","adjunct");
				for(var i=0;i<Adjuncts.length;i++){
					var buypacksBtn=getElementsByTagNameAndAttribute(Adjuncts[i],"input","name","buypacks")[0];
					buypacksBtn.style.cursor="pointer";
					buypacksBtn.onmouseover = function(){}
					buypacksBtn.onmouseout=function(){}
					buypacksBtn.onclick = function(){OpenWBS.C.Shop.BuyThisPacks(this)}
				}
			}
		}
	}
	this.BuyButtonSet_Mouseover = function(_this){
		_this.style.cursor="not-allowed";_this.style.visibility="visible";
		if(!objExist(OpenWBS.$id("noselectcue"))){
			var span=document.createElement("span");span.id="noselectcue";span.innerHTML=Lang_Js_PleaseSelect2+": <font>" + OpenWBS.$id("choiceinfo").getAttribute("notselect") + "</font>";_this.parentNode.appendChild(span);
		}
	}
	this.BuyButtonSet_Mouseout = function(_this){
		var span=OpenWBS.$id("noselectcue");if(objExist(span)){span.parentNode.removeChild(span);}
	}
	//购买商品时-获取商品属性信息 返回形式:"L|1627|1619|1618"
	this.GetAttrInfoBeforeBuyGoods = function(){
		var TempString = "";
		var attrs_dl   = getElementsByTagNameAndName("dl","attr");
		for(var i=0;i<attrs_dl.length;i++){
			var lis=attrs_dl[i].getElementsByTagName("li");
			for(var j=0;j<lis.length;j++){
				if(lis[j].className=="current"){
					if(TempString!=""){TempString = TempString + "|"+lis[j].getAttribute("goodsattrid");}else{TempString = lis[j].getAttribute("goodsattrid");}
				}
			}
		}
		return TempString;
	}
	//立即购买
	this.BuyNow = function(){
		if(true==OpenWBS.C.Shop.AddToCart()){window.location.href="openwbs.client.js-mycart"/*tpa=http://www.cloudsmi.com/include/javascript/openwbs.client.js?mycart*/+filesuffix+"";}
		//if(OpenWBS.IsUserLogined!=true){OpenWBS.LoginDiaWindow();}
	}
	//放入购物车
	this.AddToCart = function(){
		var MyCart = OpenWBS.Cookie.GetCookie("mycart");
		var Result = false ;
		if(OpenWBS.IsNull(MyCart)){
			//如果购物车cookie信息为空则创建cookie,购物车10天内有效,超过10天过期处理
			var NewCartInfo='{"theskus":[],"thepacks":[]}';
			if(OpenWBS.Cookie.SetCookie("mycart",NewCartInfo,1000*60*60*24*10)){Result = _Shop.AddToCart();}
		}else{
			//获取购买商品的信息
			var GoodsNum   = OpenWBS.$id("goodsnum").value;
			var AttrString = OpenWBS.C.Shop.GetAttrInfoBeforeBuyGoods();
			var GoodsInfo  = {"id":""+OpenWBS.C.Shop.GoodsID+"","num":""+GoodsNum+"","attr":""+AttrString+""};
			var Fn_JSON    = OpenWBS.JSON.parseJSON(MyCart);//把json字符串转化为json数据
			//检查购物车中是否存在商品了
			for(var i=0;i<Fn_JSON.theskus.length;i++){
				if(Fn_JSON.theskus[i]!=null){
					if(Fn_JSON.theskus[i].id==OpenWBS.C.Shop.GoodsID && Fn_JSON.theskus[i].attr==AttrString){
						OpenWBS.DiaWindowCueMessage(Lang_Js_Shop[2]);
						Result = true;
					}
				}
			}
			//购物车中没有该商品则把它加入购物车
			if(Result==false){
				Fn_JSON.theskus.push(GoodsInfo);
				Fn_JSON = OpenWBS.JSON.toJSONString(Fn_JSON);
				//alert(Fn_JSON);
				if(Fn_JSON.length >= 2000){
					//购物车已满
					OpenWBS.DiaWindowCueMessage(Lang_Js_Shop[3]);
				}else{
					OpenWBS.Cookie.SetCookie("mycart",Fn_JSON,1000*60*60*24*10);
					OpenWBS.DiaWindowCueMessage(Lang_Js_Shop[4]);
					Result = true;
				}
			}
		}
		update_mycart();
		return Result;
	}
	//各个配件组初始化设置
	this.AdjunctGoodsSet = function(){
		var AdjunctArea = OpenWBS.$id("adjunctarea"); if(!objExist(AdjunctArea)){return false;}
		var Adjuncts=getElementsByTagNameAndAttribute(AdjunctArea,"div","tag","adjunct");
		//检查各个配件组里是否有配件商品，如果没有则删除此组
		for(var i=0;i<Adjuncts.length;i++){if(!(getElementsByTagNameAndAttribute(Adjuncts[i],"li","adjunctgoods","true").length>0)){Adjuncts[i].parentNode.removeChild(Adjuncts[i]);}}
		//重新获取有效的配件组
		var Adjuncts=getElementsByTagNameAndAttribute(AdjunctArea,"div","tag","adjunct");
		//下面这段是处理所有配件组成为切换样式 并设置搭售价
		var Adjunctlist_nav = OpenWBS.$id("adjunctlist_nav");
		if(!objExist(Adjunctlist_nav)){alert("Error: var Adjunctlist_nav = OpenWBS.$id(\"adjunctlist_nav\");");}else{
			var ul=document.createElement("ul");
			for(var i=0;i<Adjuncts.length;i++){
				//构建切换样式
				var li=document.createElement("li");if(0==i){li.className="current";}//第一个为选中状态
				var a =document.createElement("a");a.setAttribute("texti",i+1);a.href="javascript:;";a.innerHTML=Adjuncts[i].getAttribute("name");
				a.onclick=function(){TabSwitch('adjunctlist_nav','adjunctlist_',this.getAttribute("texti"));}
				li.appendChild(a);ul.appendChild(li);
				//设置各个搭售商品的搭售价
				var pricetype=parseInt(Adjuncts[i].getAttribute("pricetype"));//优惠方式
				var price    =parseFloat(Adjuncts[i].getAttribute("price"));//优惠额度
				var fonts=getElementsByTagNameAndAttribute(Adjuncts[i],"font","tag","adjprice");//显示搭售价的地方
				var adjunctgoodsprice=0;//商品搭售价
				var goodsprice=0;
				for(var j=0;j<fonts.length;j++){
					//商品原价
					goodsprice=OpenWBS.parseMoney(fonts[j].getAttribute("goodsprice"));
					//计算商品搭售价,如果商品原价为0则搭售价也为0
					if(goodsprice==0){adjunctgoodsprice=0;}else{if(!(pricetype>0)){adjunctgoodsprice = goodsprice - price;}else{adjunctgoodsprice = goodsprice * price;}}
					fonts[j].innerHTML=OpenWBS.FormatCurrency(adjunctgoodsprice);
					OpenWBS.$id("goods_"+Adjuncts[i].getAttribute("adjunctid")+"_"+fonts[j].getAttribute("goodsid")+"").setAttribute("adjprice",adjunctgoodsprice)
				}
			}
			Adjunctlist_nav.appendChild(ul);
		}
		//:end
		//设置点击checkbox选中或不选择中时计算套装价格等
		var inputs=getElementsByTagNameAndAttribute(AdjunctArea,"input","name","adjunctgoods");
		for(var j=0;j<inputs.length;j++){
			inputs[j].onclick=function(){OpenWBS.C.Shop.SetAdunctPacksPrice();}
		}
		//调用(计算套装原价、套装总价、节省多少)方法
		OpenWBS.C.Shop.SetAdunctPacksPrice();
	}
	//计算套装原价、套装总价、节省多少
	this.SetAdunctPacksPrice = function(){
		var AdjunctArea = OpenWBS.$id("adjunctarea"); if(!objExist(AdjunctArea)){return false;}
		var Adjuncts=getElementsByTagNameAndAttribute(AdjunctArea,"div","tag","adjunct");
		//alert(packs_nowprice);
		for(var i=0;i<Adjuncts.length;i++){
			var packs_defprice=parseFloat(_Shop.NewPrice);
			var packs_nowprice=parseFloat(_Shop.NewPrice);
			var packs_nowsaved=0;
			var inputs=getElementsByTagNameAndAttribute(Adjuncts[i],"input","name","adjunctgoods");
			for(var j=0;j<inputs.length;j++){
				if(inputs[j].checked==true){
					packs_defprice=parseFloat(packs_defprice+parseFloat(inputs[j].getAttribute("goodsprice")));
					packs_nowprice=parseFloat(packs_nowprice+parseFloat(inputs[j].getAttribute("adjprice")));
					packs_nowsaved=parseFloat(packs_defprice-packs_nowprice);
				}
			}
			getElementsByTagNameAndAttribute(Adjuncts[i],"font","tag","defprice")[0].innerHTML=OpenWBS.FormatCurrency(packs_defprice);
			getElementsByTagNameAndAttribute(Adjuncts[i],"font","tag","nowprice")[0].innerHTML=OpenWBS.FormatCurrency(packs_nowprice);
			getElementsByTagNameAndAttribute(Adjuncts[i],"font","tag","nowsaved")[0].innerHTML=OpenWBS.FormatCurrency(packs_nowsaved);
			//alert(inputs.length);
		}
	}
	this.GetAdjunctSelectGoodsID = function(AdjunctID){
		var Adjuncts = getElementsByTagNameAndAttribute(OpenWBS.$id("adjunctarea"),"div","tag","adjunct");
		var ii;
		var Adjunct
		for(ii=0;ii<Adjuncts.length;ii++){if(Adjuncts[ii].getAttribute("adjunctid")==AdjunctID){Adjunct=Adjuncts[ii]};}
		var SelectNum  = 0;
		var TempString = "";
		var inputs=getElementsByTagNameAndAttribute(Adjunct,"input","name","adjunctgoods");
		for(var j=0;j<inputs.length;j++){
			if(inputs[j].checked==true){
				if(TempString!=""){TempString = TempString + "|"+inputs[j].getAttribute("goodsid");}else{TempString = inputs[j].getAttribute("goodsid");}
			}
		}
		return TempString;
	}
	this.BuyThisPacks = function(_this){
		var MyCart    = OpenWBS.Cookie.GetCookie("mycart");
		if(OpenWBS.IsNull(MyCart)){
			//如果购物车cookie信息为空则创建cookie,购物车10天内有效,超过10天过期处理
			var NewCartInfo='{"theskus":[],"thepacks":[]}';
			if(OpenWBS.Cookie.SetCookie("mycart",NewCartInfo,1000*60*60*24*10)){_Shop.BuyThisPacks();};
		}else{
			var AdjunctID = parseInt(_this.getAttribute("adjunctid"));
			if(!(AdjunctID>0)){return false;}
			//获取套装商品信息
			var GoodsNum   = OpenWBS.$id("goodsnum").value;
			var AttrString = OpenWBS.C.Shop.GetAttrInfoBeforeBuyGoods();
			var AdjunctSelectGoodsID = OpenWBS.C.Shop.GetAdjunctSelectGoodsID(AdjunctID);
			//检测所选配件数量是否在最小购买量和最大购买量之间
			var AdjunctSelectGoodsNum;
			if(OpenWBS.IsNull(AdjunctSelectGoodsID)){AdjunctSelectGoodsNum=0;}else{AdjunctSelectGoodsNum = AdjunctSelectGoodsID.split("|").length;}
			var Adjuncts = getElementsByTagNameAndAttribute(OpenWBS.$id("adjunctarea"),"div","tag","adjunct");
			var Adjunct;
			var ii;for(ii=0;ii<Adjuncts.length;ii++){if(Adjuncts[ii].getAttribute("adjunctid")==AdjunctID){Adjunct=Adjuncts[ii]};}
			var AdjunctMinNum = parseInt(Adjunct.getAttribute("minnum"));
			var AdjunctMaxNum = parseInt(Adjunct.getAttribute("maxnum"));
			if(!(AdjunctSelectGoodsNum>0)){alert(Lang_Js_Shop[5]); return false;}//请选择搭配商品！
			if(AdjunctSelectGoodsNum<AdjunctMinNum){alert(Lang_Js_Shop[6].replace("{$:AdjunctMinNum}",AdjunctMinNum).replace("{$:AdjunctSelectGoodsNum}",AdjunctSelectGoodsNum)); return false;}
			if(AdjunctMaxNum>0 && AdjunctSelectGoodsNum>AdjunctMaxNum){alert(Lang_Js_Shop[7].replace("{$:AdjunctMaxNum}",AdjunctMaxNum).replace("{$:AdjunctSelectGoodsNum}",AdjunctSelectGoodsNum)); return false;}
			//检测完毕
			var PacksInfo  = {"id":""+AdjunctID+"","num":"1","attr":""+AttrString+"","selectgoodsid":""+AdjunctSelectGoodsID+""};
			//alert(AdjunctSelectGoodsNum);
			var Fn_JSON    = OpenWBS.JSON.parseJSON(MyCart);//把json字符串转化为json数据
			//检查购物车中是否存在商品了
			for(var i=0;i<Fn_JSON.thepacks.length;i++){
				if(Fn_JSON.thepacks[i]!=null){
					if(Fn_JSON.thepacks[i].id==AdjunctID && Fn_JSON.thepacks[i].attr==AttrString && Fn_JSON.thepacks[i].selectgoodsid==AdjunctSelectGoodsID){
						OpenWBS.DiaWindowCueMessage(Lang_Js_Shop[8]);
						window.location.href="openwbs.client.js-mycart"/*tpa=http://www.cloudsmi.com/include/javascript/openwbs.client.js?mycart*/+filesuffix+"";
						return false;
					}
				}
			}
			Fn_JSON.thepacks.push(PacksInfo);
			Fn_JSON = OpenWBS.JSON.toJSONString(Fn_JSON);//alert(Fn_JSON);
			if(Fn_JSON.length >= 2000){
				OpenWBS.DiaWindowCueMessage(Lang_Js_Shop[9]);
				window.location.href="openwbs.client.js-mycart"/*tpa=http://www.cloudsmi.com/include/javascript/openwbs.client.js?mycart*/+filesuffix+"";
			}else{
				OpenWBS.Cookie.SetCookie("mycart",Fn_JSON,1000*60*60*24*10);
				OpenWBS.DiaWindowCueMessage(Lang_Js_Shop[4]);
				window.location.href="openwbs.client.js-mycart"/*tpa=http://www.cloudsmi.com/include/javascript/openwbs.client.js?mycart*/+filesuffix+"";
			}
		}
	}
}
function Class_C_Cart(){
	var _Cart=this;
	this.DeliveryJson = "";
	this.Clear = function(){
		OpenWBS.Cookie.DeleteCookie("mycart");		//OpenWBS.Cookie.SetCookie("mycart","",1000*60*60*24*10);
		OpenWBS.DiaWindowCueMessage(Lang_Js_Shop[10]);
		OpenWBS.C.Cart.GetCart(1);
	}
	//showtype=1(我的购物车)
	//showtype=2(填写核对订单信息)
	this.GetCart = function(showtype,CartJSONString){
		var args = OpenWBS.C.Cart.GetCart.arguments;
		var argc = OpenWBS.C.Cart.GetCart.arguments.length;
		showtype = parseInt(showtype);
		if(argc > 1){
			var ajaxSta    = CartJSONString;
		}else{
			var Area = OpenWBS.$id("mycart");
			OpenWBS.DataLoading(Area);
			var ajaxString = "";
			var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=getcart&r="+parseInt(Math.random()*1000);
			var ajaxSta    = posthttp(ajaxString,ajaxUrl);
			Area.innerHTML = "";
		}
		var cartgoods  = OpenWBS.$id("cartgoods");
		var cartweight = 0;
		var cartamount = 0;
		var order_i    = 0;
		if(ajaxSta=="error" || ajaxSta=="false"){
			//加载失败
			order_i = -1;
			var tr = document.createElement("tr");tr.className = "data";
			var td = document.createElement("td");
			td.innerHTML = OpenWBS.LoadingFailAndReloadAgain("OpenWBS.C.Cart.GetCart("+showtype+")");
			td.setAttribute("colSpan",7);
			tr.appendChild(td);
			var trs=cartgoods.getElementsByTagName("tr");
			for(var tt=0;tt<trs.length;tt++){cartgoods.removeChild(trs[tt]);}
			cartgoods.appendChild(tr);
		}else if(ajaxSta==""){
			//空(无商品)
		}else{
			var tempstring;
			var TempJSON   = OpenWBS.JSON.parseJSON(ajaxSta);//把json字符串转化为json数据
			var theskus    = TempJSON.theskus;
			var thepacks   = TempJSON.thepacks;
			
			cartweight     = TempJSON.weight;
			cartamount     = TempJSON.amount;
			
			var _goodsid,_goodsbn,_goodsname,_goodsweight,_goodsprice,_attrprice,_goodseourl,_thumbnail,_goodsattr,_goodsattrvalue;
			var _goodsurl="";
			var _num,_amount;
			var _tagid;
			for(var ii=0;ii<theskus.length;ii++){
				tempstring  = theskus[ii];
				order_i++;
				//主商品信息
				//_goodsid  = OpenWBS.RegMatch(/"goodsid":"([\s\S]*?)"/,tempstring);
				_goodsid         = tempstring.goodsid;　　　　　　　//商品ID
				_goodsbn         = tempstring.goodsbn;　　　　　　　//商品编号
				_goodsname       = unescape(tempstring.goodsname);  //商品名称
				_goodsweight     = tempstring.goodsweight;          //商品重量
				_goodsprice      = tempstring.goodsprice;           //商品价格(销售价)
				_attrprice　     = tempstring.attrprice;            //属性价格
				_thumbnail       = unescape(tempstring.thumbnail);  //商品缩略图
				_goodsattr       = tempstring.goodsattr;            //选择的属性ID
				_goodsattrvalue  = unescape(tempstring.goodsattrvalue);  //选择的属性名称
				_goodsprice      = OpenWBS.FormatCurrency(parseFloat(_goodsprice) + parseFloat(_attrprice));  //计算属性后的商品价格 = 商品原价 + 属性价格
				_goodseourl      = unescape(tempstring.seourl);  //商品名称
				_goodsurl        = "?shop/"+_goodsid+"/"+_goodseourl+filesuffix;
				
				_num  　　　= tempstring.num;
				_amount     = tempstring.amount;
				
				_tagid      = "s_"+_goodsid+"_"+_goodsattr;
				
				if(showtype==1){
					var tr=document.createElement("tr");tr.className = "data";
					var td0=document.createElement("td");td0.innerHTML= "<span>"+ order_i +"</span><input type=\"hidden\" name=\"weight\" id=\"weight_"+_tagid+"\" tagid=\""+_tagid+"\" value=\""+_goodsweight+"\">";td0.style.textAlign="center";
					var td1=document.createElement("td");
					td1.innerHTML= "<div class=\"spimg\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><a href=\""+_goodsurl+"\" target=\"_blank\"><img src=\""+_thumbnail+"\"/></a></td></tr></table></div>";
					var str_goodsattr = ""; if(_goodsattrvalue!=""){str_goodsattr="<span class=\"yellow\">("+ _goodsattrvalue +")</span>"}
					var td2=document.createElement("td"); td2.innerHTML= "<a href=\""+_goodsurl+"\" target=\"_blank\">"+ _goodsname + str_goodsattr +"</a>";
					var td3=document.createElement("td"); td3.innerHTML= "<strong class=\"font14 redh\"><em class=\"moneySb\">￥</em><span id=\"goodsprice_"+_tagid+"\">"+ _goodsprice +"</span></strong>";
					var td4=document.createElement("td");
					td4.innerHTML= "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spnum\"><tr><td><input type=\"text\" class=\"text numinput\" name=\"goodsnum\" id=\"num_"+_tagid+"\" tagid=\""+_tagid+"\" thetype=\"skus\" goodsid=\""+_goodsid+"\" goodsattr=\""+_goodsattr+"\" value=\""+_num+"\" onchange=\"OpenWBS.C.Cart.GoodsNumChange('num_"+_tagid+"')\" tagid=\""+_tagid+"\" /></td><td><b class=\"do_numup\" onclick=\"OpenWBS.NumSet('add','num_"+_tagid+"');OpenWBS.C.Cart.GoodsNumChange('num_"+_tagid+"')\"></b><b class=\"do_numdown\" onclick=\"OpenWBS.NumSet('del','num_"+_tagid+"');OpenWBS.C.Cart.GoodsNumChange('num_"+_tagid+"')\"></b></td></tr></table>";
					var td5=document.createElement("td");td5.innerHTML= "<strong class=\"font14 redh\"><em class=\"moneySb\">￥</em><span name=\"amount\" id=\"amount_"+_tagid+"\">"+ _amount +"</span></strong>";
					var td6=document.createElement("td");
					var a=document.createElement("a");a.innerHTML=Lang_Js_Btn_Delete;a.href="javascript:void(0);";td6.appendChild(a);
					a.setAttribute("goodsid",_goodsid);
					a.setAttribute("goodsattr",_goodsattr);
					tr.appendChild(td0);tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);tr.appendChild(td5);tr.appendChild(td6);
					cartgoods.appendChild(tr);
					a.onclick = function(){
						var _GoodsID = this.getAttribute("goodsid");
						var _Attr    = this.getAttribute("goodsattr");
						var MyCart   = OpenWBS.Cookie.GetCookie("mycart");
						//alert(MyCart);
						var Fn_JSON = OpenWBS.JSON.parseJSON(MyCart);//把json字符串转化为json数据
						for(var i=0;i<Fn_JSON.theskus.length;i++){
							if(Fn_JSON.theskus[i]!=null){
								if(Fn_JSON.theskus[i].id==_GoodsID && Fn_JSON.theskus[i].attr==_Attr){
									OpenWBS.JSON.Delete(i,Fn_JSON.theskus);//delete Fn_JSON.theskus[i];
									break;
								}
							}
						}
						Fn_JSON = OpenWBS.JSON.toJSONString(Fn_JSON);
						OpenWBS.Cookie.SetCookie("mycart",Fn_JSON,1000*60*60*24*10);
						var _tbody=this.parentNode.parentNode.parentNode;_tbody.removeChild(this.parentNode.parentNode);
						OpenWBS.C.Cart.Amount();
					}
				}else if(showtype==2){
					var tr=document.createElement("tr");tr.className = "data";
					var td0=document.createElement("td");td0.innerHTML= "<span>"+ order_i +"</span>";td0.style.textAlign="center";
					var td1=document.createElement("td");td1.innerHTML= "<div class=\"spimg\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><a href=\""+_goodsurl+"\" target=\"_blank\"><img src=\""+_thumbnail+"\"/></a></td></tr></table></div>";
					var str_goodsattr = ""; if(_goodsattrvalue!=""){str_goodsattr="<span class=\"yellow\">("+ _goodsattrvalue +")</span>"}
					var td2=document.createElement("td");td2.innerHTML= "<a href=\""+_goodsurl+"\" target=\"_blank\">"+ _goodsname + str_goodsattr +"</span></a>";
					var td3=document.createElement("td");td3.innerHTML= "<span class=\"redh\"><em class=\"moneySb\">￥</em><span id=\"goodsprice_"+_tagid+"\">"+ _goodsprice +"</span></span>";
					var td4=document.createElement("td");td4.innerHTML= _num;
					var td5=document.createElement("td");td5.innerHTML= "<span class=\"redh\"><em class=\"moneySb\">￥</em><span name=\"amount\" id=\"amount_"+_tagid+"\">"+ _amount +"</span></span>";
					tr.appendChild(td0);tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);tr.appendChild(td5);
					cartgoods.appendChild(tr);
				}
			}
			var _packsid,_packsname,_packsweight,_packsprice,_selectgoodsid,_selectgoods;
			if(thepacks!=null){
				for(var jj=0;jj<thepacks.length;jj++){
					tempstring  = thepacks[jj];
					order_i++;
					//主商品信息
					_goodsid         = tempstring.goodsid;　　　　　　　//商品ID
					_goodsbn         = tempstring.goodsbn;　　　　　　　//商品编号
					_goodsname       = unescape(tempstring.goodsname);  //商品名称
					_goodsweight     = tempstring.goodsweight;          //商品重量
					_goodsprice      = tempstring.goodsprice;           //商品价格(销售价)
					_attrprice　     = tempstring.attrprice;            //属性价格
					_thumbnail       = unescape(tempstring.thumbnail);  //商品缩略图
					_goodsattr       = tempstring.goodsattr;            //选择的属性ID
					_goodsattrvalue  = unescape(tempstring.goodsattrvalue);  //选择的属性名称
					_goodsprice      = OpenWBS.FormatCurrency(parseFloat(_goodsprice) + parseFloat(_attrprice));  //计算属性后的商品价格 = 商品原价 + 属性价格
					_goodseourl      = unescape(tempstring.seourl);  //商品名称
				    _goodsurl        = "?shop/"+_goodsid+"/"+_goodseourl+filesuffix;
					//套装信息
					_packsid  　  = tempstring.packsid;　　　  //套装ID
					_packsname    = unescape(tempstring.packsname);　　  //套装名称
					_packsweight  = tempstring.packsweight;    //套装重量
					_packsprice   = tempstring.packsprice;     //套装价格
					_selectgoodsid= tempstring.selectgoodsid;  //所选的套装商品ID
					_selectgoods  = tempstring.selectgoods;    //所选的套装商品

					_num  　　　= tempstring.num;             //套装数量
					_amount     = tempstring.amount;　　      //套装金额小计 = 套装价格 * 套装数量

					_tagid      = "p_"+_packsid+"_"+_goodsattr+"_"+_selectgoodsid;
					//处理套装商品
					_selectgoods = tempstring.selectgoods
					
					if(showtype==1){
						var tr=document.createElement("tr");tr.className = "data";tr.setAttribute("order",order_i);
						var td0=document.createElement("td");td0.innerHTML= "<span>"+ order_i +"</span><input type=\"hidden\" name=\"weight\" id=\"weight_"+_tagid+"\" tagid=\""+_tagid+"\" value=\""+_packsweight+"\">";td0.style.textAlign="center";
						var td1=document.createElement("td");
						td1.id="tr_td1_"+order_i;
						td1.innerHTML= "<div class=\"spimg\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><a href=\""+_goodsurl+"\" target=\"_blank\"><img src=\""+_thumbnail+"\"/></a></td></tr></table></div>";
						var td2=document.createElement("td");
						td2.id="tr_td2_"+order_i;
						var str_goodsattr = ""; if(_goodsattrvalue!=""){str_goodsattr="<span class=\"yellow\">("+ _goodsattrvalue +")</span>"}
						td2.innerHTML= "<p class=\"redh blue_a\"><span class=\"redh pr5\">"+Lang_Js_Shop[11]+"</span>"+ _packsname +"<a href=\"javascript:;\" class=\"pl5\" onclick=\"OpenWBS.C.Cart.SeeDetail(this)\">"+Lang_Js_Shop[12]+"</a></p><p><a href=\""+_goodsurl+"\" target=\"_blank\">"+ _goodsname + str_goodsattr +"</a></p>";
						
						var ul = document.createElement("ul");
							ul.className="adjunctgoodslist";
							ul.style.display="none";
						var li,li_url;
						for(var kk=0;kk<_selectgoods.length;kk++){
							li=document.createElement("li");
							li_url = "?shop/"+_selectgoods[kk].goodsid+"/"+_selectgoods[kk].seourl+".html"
							li.innerHTML="<div class=\"spimg\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td><a href=\""+ li_url +"\" target=\"_blank\"><img src=\""+ unescape(_selectgoods[kk].thumbnail) +"\"></a></td></tr></tbody></table></div><p class=\"nowprice\"><del><em class=\"moneySb\">￥</em>"+ _selectgoods[kk].goodsprice +"</del></p><p class=\"adjprice\"><em class=\"moneySb\">￥</em>"+ _selectgoods[kk].adjunctprice +"</p><p class=\"spname\"><a href=\""+ li_url +"\" target=\"_blank\">"+ unescape(_selectgoods[kk].goodsname) +"</a></p>";
							ul.appendChild(li);
						}
						td2.appendChild(ul);
						
						var td3=document.createElement("td"); td3.innerHTML= "<strong class=\"font14 redh\"><em class=\"moneySb\">￥</em><span id=\"goodsprice_"+_tagid+"\">"+ _packsprice +"</span></strong>";
						var td4=document.createElement("td");
						td4.innerHTML= "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spnum\"><tr><td><input type=\"text\" class=\"text numinput\" name=\"goodsnum\" id=\"num_"+_tagid+"\" tagid=\""+_tagid+"\" thetype=\"packs\" packsid=\""+ _packsid +"\" goodsattr=\""+ _goodsattr +"\" selectgoodsid=\""+ _selectgoodsid +"\" value=\""+_num+"\" onchange=\"OpenWBS.C.Cart.GoodsNumChange('num_"+_tagid+"')\" tagid=\""+_tagid+"\" /></td><td><b class=\"do_numup\" onclick=\"OpenWBS.NumSet('add','num_"+_tagid+"');OpenWBS.C.Cart.GoodsNumChange('num_"+_tagid+"')\"></b><b class=\"do_numdown\" onclick=\"OpenWBS.NumSet('del','num_"+_tagid+"');OpenWBS.C.Cart.GoodsNumChange('num_"+_tagid+"')\"></b></td></tr></table>";
						var td5=document.createElement("td");td5.innerHTML= "<strong class=\"font14 redh\"><em class=\"moneySb\">￥</em><span name=\"amount\" id=\"amount_"+_tagid+"\">"+ _amount +"</span></strong>";
						var td6=document.createElement("td");
						var a=document.createElement("a");a.innerHTML=Lang_Js_Btn_Delete;a.href="javascript:void(0);";td6.appendChild(a);
	
						a.setAttribute("packsid",_packsid);
						a.setAttribute("goodsattr",_goodsattr);
						a.setAttribute("selectgoodsid",_selectgoodsid);
						tr.appendChild(td0);tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);tr.appendChild(td5);tr.appendChild(td6);
						cartgoods.appendChild(tr);
						a.onclick = function(){
							var _PacksID     = this.getAttribute("packsid");
							var _GoodsAttr   = this.getAttribute("goodsattr");
							var _SelectGoods = this.getAttribute("selectgoodsid");
							var MyCart  = OpenWBS.Cookie.GetCookie("mycart");
							var Fn_JSON = OpenWBS.JSON.parseJSON(MyCart);//把json字符串转化为json数据
							for(var i=0;i<Fn_JSON.thepacks.length;i++){
								if(Fn_JSON.thepacks[i]!=null){
									if(Fn_JSON.thepacks[i].id==_PacksID && Fn_JSON.thepacks[i].attr==_GoodsAttr && Fn_JSON.thepacks[i].selectgoodsid==_SelectGoods){
										OpenWBS.JSON.Delete(i,Fn_JSON.thepacks);//delete Fn_JSON.thepacks[i];
									}
								}
							}
							Fn_JSON = OpenWBS.JSON.toJSONString(Fn_JSON);
							OpenWBS.Cookie.SetCookie("mycart",Fn_JSON,1000*60*60*24*10);
							var _tbody=this.parentNode.parentNode.parentNode;_tbody.removeChild(this.parentNode.parentNode);
							OpenWBS.C.Cart.Amount();
						}
					}else if(showtype==2){
						var tr=document.createElement("tr");tr.className = "data";tr.setAttribute("order",order_i);
						var td0=document.createElement("td");td0.innerHTML= "<span>"+ order_i +"</span><input type=\"hidden\" name=\"weight\" id=\"weight_"+_tagid+"\" tagid=\""+_tagid+"\" value=\""+_packsweight+"\">";td0.style.textAlign="center";
						var td1=document.createElement("td");
						td1.id="tr_td1_"+order_i;
						td1.innerHTML= "<div class=\"spimg\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><a href=\""+_goodsurl+"\" target=\"_blank\"><img src=\""+_thumbnail+"\"/></a></td></tr></table></div>";
						var td2=document.createElement("td");
						td2.id="tr_td2_"+order_i;
						var str_goodsattr = ""; if(_goodsattrvalue!=""){str_goodsattr="<span class=\"yellow\">("+ _goodsattrvalue +")</span>"}
						td2.innerHTML= "<p class=\"redh blue_a\"><span class=\"redh pr5\">"+Lang_Js_Shop[11]+"</span>"+ _packsname +"<a href=\"javascript:;\" class=\"pl5\" onclick=\"OpenWBS.C.Cart.SeeDetail(this)\">"+Lang_Js_Shop[12]+"</a></p><p><a href=\""+_goodsurl+"\" target=\"_blank\">"+ _goodsname + str_goodsattr +"</a></p>";
						
						var ul = document.createElement("ul");ul.className="adjunctgoodslist";ul.style.display="none";
						var li,li_url;
						for(var kk=0;kk<_selectgoods.length;kk++){
							li=document.createElement("li");
							li_url = "?shop/"+_selectgoods[kk].goodsid+"/"+_selectgoods[kk].seourl+".html"
							li.innerHTML="<div class=\"spimg\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td><a href=\""+ li_url +"\" target=\"_blank\"><img src=\""+ unescape(_selectgoods[kk].thumbnail) +"\"></a></td></tr></tbody></table></div><p class=\"adjprice\"><em class=\"moneySb\">￥</em>"+ _selectgoods[kk].adjunctprice +"</p><p class=\"spname\"><a href=\""+ li_url +"\" target=\"_blank\">"+ unescape(_selectgoods[kk].goodsname) +"</a></p>";
							ul.appendChild(li);
						}
						td2.appendChild(ul);
						var td3=document.createElement("td");td3.innerHTML= "<span class=\"redh\"><em class=\"moneySb\">￥</em><span id=\"goodsprice_"+_tagid+"\">"+ _packsprice +"</span></span>";
						var td4=document.createElement("td");td4.innerHTML= _num ;
						var td5=document.createElement("td");td5.innerHTML= "<span class=\"redh\"><em class=\"moneySb\">￥</em><span name=\"amount\" id=\"amount_"+_tagid+"\">"+ _amount +"</span></span>";
						tr.appendChild(td0);tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);tr.appendChild(td5);
						cartgoods.appendChild(tr);
					}
				}
			}
			//alert("fdsaf"+cartweight);
			//计算重量和价格
			if(showtype==1){
				OpenWBS.C.Cart.Amount();
			}else if(showtype==2){
				if(!(argc>1)){
				OpenWBS.$id("input_cartweight").value = cartweight;
				OpenWBS.$id("input_cartamount").value = cartamount;
				}
			}
		}
		if(order_i==0){
			//如果没有返回值为空则判断为没有商品(ie浏览器)
			var tr=document.createElement("tr");tr.className = "data";
			var td=document.createElement("td");td.setAttribute("colSpan",7);td.innerHTML=Lang_Js_Cue_HaveNoneGoodsInCart;
			tr.appendChild(td);
			var trs=cartgoods.getElementsByTagName("tr");
			for(var tt=0;tt<trs.length;tt++){cartgoods.removeChild(trs[tt]);}
			cartgoods.appendChild(tr);//ie必须以appendChild方式插入tr才有效,innerHTML方式无效
			OpenWBS.$id("clearcart").style.display="none";
			OpenWBS.$id("gotopay").style.display="none";
		}
	}
	//计算商品总金额和重量总计
	this.Amount = function(){
		var spanAmount = getElementsByTagNameAndName("span","amount");
		var spanWeight = getElementsByTagNameAndName("input","weight");
		//alert(spanAmount.length);
		var amount = 0 ;
		var weight = 0 ;
		for(var i=0;i<spanAmount.length;i++){
			amount = amount + parseFloat(spanAmount[i].innerHTML);
		}
		for(var i=0;i<spanWeight.length;i++){
			weight = weight + parseFloat(spanWeight[i].value)*parseInt(OpenWBS.$id("num_"+spanWeight[i].getAttribute("tagid")).value);
		}
		OpenWBS.$id("total_amount").innerHTML = OpenWBS.FormatCurrency(amount) ;
		OpenWBS.$id("total_weight").innerHTML = OpenWBS.FormatCurrency(weight) ;
	}
	this.GoodsBuyNumCheck = function(id,cueboxid){
		var cuebox          = OpenWBS.$id(cueboxid);
		var buynum          = parseInt(OpenWBS.$id(id).value);
		var currentstocknum = parseInt(OpenWBS.$id("currentstocknum").innerHTML);
		if(buynum>currentstocknum){
			cuebox.innerHTML = Lang_Js_Shop[15];//"温馨提示：您购买的商品数量已经超出库存数量!";
		}else{
			cuebox.innerHTML = "";
		}
	}
	this.GoodsNumChange = function(id){
		var _this = OpenWBS.$id(id);
		var tagid = _this.getAttribute("tagid");
		var type = _this.getAttribute("thetype");
		var price = OpenWBS.$id("goodsprice_"+tagid).innerHTML;
		var num   = parseInt(_this.value); if(!(num>0)){_this.value=1;num=1;}
		OpenWBS.$id("amount_"+tagid).innerHTML = OpenWBS.FormatCurrency(parseFloat(price) * num);
		OpenWBS.C.Cart.Amount();
		//更改购物车Cookies
		var MyCart  = OpenWBS.Cookie.GetCookie("mycart");
		//alert(MyCart);
		var Fn_JSON = OpenWBS.JSON.parseJSON(MyCart);//把json字符串转化为json数据
		
		//单独商品
		if(type=="skus"){
			var _GoodsID    = _this.getAttribute("goodsid");
			var _GoodsAttr  = _this.getAttribute("goodsattr");
			for(var i=0;i<Fn_JSON.theskus.length;i++){
				if(Fn_JSON.theskus[i]!=null){
					if(Fn_JSON.theskus[i].id==_GoodsID && Fn_JSON.theskus[i].attr==_GoodsAttr){Fn_JSON.theskus[i].num=num.toString(); }
				}
			}
		}else if(type=="packs"){
			var _PacksID     = _this.getAttribute("packsid");
			var _GoodsAttr   = _this.getAttribute("goodsattr");
			var _SelectGoods = _this.getAttribute("selectgoodsid");
			for(var i=0;i<Fn_JSON.thepacks.length;i++){
				if(Fn_JSON.theskus[i]!=null){
					if(Fn_JSON.thepacks[i].id==_PacksID && Fn_JSON.thepacks[i].attr==_GoodsAttr && Fn_JSON.thepacks[i].selectgoodsid==_SelectGoods){
						Fn_JSON.thepacks[i].num=num.toString();
					}
				}
			}
		}
		Fn_JSON = OpenWBS.JSON.toJSONString(Fn_JSON);
		OpenWBS.Cookie.SetCookie("mycart",Fn_JSON,1000*60*60*24*10);
	}
	this.SeeDetail = function(_this){
		var _id = _this.parentNode.parentNode.id;
		var ul  = OpenWBS.$id(_id).getElementsByTagName("ul")[0];
		var td1 = OpenWBS.$id("tr_td1_"+_this.parentNode.parentNode.parentNode.getAttribute("order"));
		if(ul.style.display=="none"){
			_this.innerHTML=Lang_Js_Shop[13];//"[收起套装详细]";
			td1.style.verticalAlign="top";
			td1.style.paddingTop="55px";
			
			ul.style.display="";
			
		}else{
			_this.innerHTML=Lang_Js_Shop[12];//"[查看套装详细]";
			td1.style.verticalAlign="middle";
			td1.style.paddingTop="";
			ul.style.display="none";
		}
	}
	this.Order = function(){
		if(!(OpenWBS.IsUserLogined===false || OpenWBS.IsUserLogined===true)){OpenWBS.CheckIsLogined();}
		if(OpenWBS.IsUserLogined){
			window.location.href="openwbs.client.js-mycart-checkout"/*tpa=http://www.cloudsmi.com/include/javascript/openwbs.client.js?mycart/checkout*/+filesuffix;
		}else{
			OpenWBS.LoginDiaWindow();
		}
	}
	this.DeliveryDay = function(_this){
		var input = OpenWBS.$id("delivery[specal_day]");
		if(_this.options[_this.selectedIndex].value == "specal"){input.style.display = "";}else{input.style.display = "none";}
	}
	//获取送货方式数据(json格式)
	this.GetDeliveryData = function(){
		var ajaxString = "";
		var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=getdeliverydata&r="+parseInt(Math.random()*1000);
		var ajaxSta    = posthttp(ajaxString,ajaxUrl);
		return ajaxSta;
	}
	//初次加载送货方式
	this.GetDelivery = function(){
		var DeliveryArea = OpenWBS.$id("deliverylist");OpenWBS.DataLoading(DeliveryArea);
		var DeliveryData = OpenWBS.C.Cart.GetDeliveryData();
		if(DeliveryData=="error" || DeliveryData===false){
			DeliveryArea.innerHTML = Lang_Js_Cue_LoadingFail + OpenWBS.ReTry("OpenWBS.C.Cart.GetDelivery()");//加载失败
		}else if(DeliveryData==""){
			DeliveryArea.innerHTML = Lang_Js_Shop[17];
		}else{
			DeliveryArea.innerHTML = "";
			OpenWBS.C.Cart.DeliveryJson = OpenWBS.JSON.parseJSON(DeliveryData);//把json字符串转化为json数据
			OpenWBS.C.Cart.SetDelivery();
			OpenWBS.C.Cart.OrderCount();
		}
	}
	this.SetDelivery = function(){
		var DeliveryArea = OpenWBS.$id("deliverylist");DeliveryArea.innerHTML = "";
		//获取地区Region_Path
		var region = "";
		var HaveSelectRegion = false;//是否正确选择了收货地区
		var selects=getElementsByTagNameAndName("select","ship_area");
		var fn_ii = 0;
		var fn_checked = "";
		for(var i=0;i<selects.length;i++){
			if(selects[i].options[selects[i].selectedIndex].value!=""){
				region=selects[i].options[selects[i].selectedIndex].value;
				HaveSelectRegion = true;
			}else{
				HaveSelectRegion = false;
			}
		}
		if(!HaveSelectRegion){
			var div=document.createElement("div");div.className="cartalert";
			div.innerHTML=Lang_Js_Shop[14];//"操作提醒：请在"收货人信息"中请选择"收货地区".";
			DeliveryArea.appendChild(div);
		}else{
			var array       = region.split(",");
			var regionArray = [];
			//alert("array.length="+array.length);
			for(var jj=0;jj<array.length-1;jj++){
				if(jj>1){regionArray[jj-1] = regionArray[jj-2] + array[jj] +",";}else{regionArray[0]    = ","+ array[1] +",";}
			}
			//alert("regionArray[]="+regionArray.join("-----"));
			var ii,jj,tempstring,DeliveryID,DeliveryPrice,AreaFeeSet,Area,SetAreaDefaultFee,RegionLastPath,Protect,ProtectRate,ProtectMinPrice;
			var AreaID;
			var TempJSON = OpenWBS.C.Cart.DeliveryJson;
			var Delivery = TempJSON.delivery;
			var order_i  = 0 ;
			var IsInDeliveryRegion = false ;
			var CartWeight = OpenWBS.$id("input_cartweight").value;//alert(CartWeight);
			var table=document.createElement("table");table.className="infoTable";table.style.border="0px";table.cellPadding="0";table.cellSpacing="0";table.style.width="100%";
			var tbody=document.createElement("tbody");
			DeliveryArea.appendChild(table);table.appendChild(tbody);
			for(ii=0;ii<Delivery.length;ii++){
				//alert(OpenWBS.JSON.toJSONString(Delivery[ii]));
				order_i++;
				DeliveryID        = Delivery[ii].id;
				AreaFeeSet        = parseInt(Delivery[ii].areafeeset);//配送地区费用设置 1:统一设置 2:指定配送地区和费用
				SetAreaDefaultFee = parseInt(Delivery[ii].setareadefaultfee);//当指定配送地区和费用时 是否启用默认费用 0:不启用 1:启用
				Area              = Delivery[ii].area;
				Protect           = Delivery[ii].protect;        //支持支持物流保价  0:不启用 1:启用
				ProtectRate       = Delivery[ii].protectrate;    //支持物流保价 费率
				ProtectMinPrice   = Delivery[ii].protectminprice;//支持物流保价 最低保价费
				IsInDeliveryRegion = false ;
				if(AreaFeeSet!=1 && AreaFeeSet!=2){AreaFeeSet=2}
				if(AreaFeeSet==1){
					DeliveryPrice = OpenWBS.ShippingFee(Delivery[ii].expressions,CartWeight);
				}else{
					//检查选择的地区是否在此配送方式指定的配送地区内，若在指定的配送地区则 按 该地区指定的费用运算公式;
					for(var kk=regionArray.length-1;kk>=0;kk--){
						if(IsInDeliveryRegion == true){
							break;
						}else{
							//配送地区
							for(jj=0;jj<Area.length;jj++){
								OpenWBS.IsInRegion = false;OpenWBS.CheckIsInRegion(regionArray[kk],Area[jj].areaid);
								if(OpenWBS.IsInRegion==true){
									//明确存在
									if(kk==regionArray.length-1){
										DeliveryPrice = OpenWBS.ShippingFee(Area[jj].expressions,CartWeight);
										IsInDeliveryRegion = true;
										break;
									}else{
									//其上级存在
									    //获取当前地区A的子地区，如果子地区为空则表示A下的所有地区都有效
										OpenWBS.GetRegion(regionArray[kk],Area[jj].areaid);
										//alert(OpenWBS.JSON.toJSONString(OpenWBS.TempRegion));
										if(OpenWBS.TempRegion.length==0){
											DeliveryPrice = OpenWBS.ShippingFee(Area[jj].expressions,CartWeight);
											IsInDeliveryRegion = true;
											break;
										}
									}
								}
							}
						}
					}
					//若选择的地区不在指定的配送地区则 按 默认费用运算公式;
					if(IsInDeliveryRegion!=true && SetAreaDefaultFee==1){
						DeliveryPrice = OpenWBS.ShippingFee(Delivery[ii].expressions,CartWeight);
					}
				}
				//未启用默认费用时，不在指定配送地区的顾客不能使用本配送方式下订单
				if(!(AreaFeeSet==2 && SetAreaDefaultFee!=1 && IsInDeliveryRegion!=true)){
					DeliveryPrice = OpenWBS.FormatCurrency(DeliveryPrice);
					fn_ii = fn_ii + 1;
					//=======生成HTML=======;
					var tr =document.createElement("tr");tbody.appendChild(tr);
					var td1=document.createElement("td");tr.appendChild(td1);
					td1.className="titletd";
					td1.style.textAlign="left";
					//ie6、ie7 下input.name为只读(注意input.name="delivery[shipping_id]"方式在ie6、ie7不兼容)
					//采用兼容写法
					var input = "<input type=\"radio\" name=\"delivery[shipping_id]\" order=\""+ order_i +"\" deliveryid=\""+ DeliveryID +"\" deliveryprice=\""+ DeliveryPrice +"\" protect=\""+ Protect +"\" protectrate=\""+ ProtectRate +"\" protectminprice=\""+ ProtectMinPrice +"\" value=\""+ DeliveryID +"\" onclick=\"OpenWBS.C.Cart.SetShipping(this,0)\" />";
					td1.innerHTML=input;
					var span=document.createElement("span");td1.appendChild(span);
					span.innerHTML=unescape(Delivery[ii].name);
					var td2=document.createElement("td");tr.appendChild(td2);
					td2.className="infotd";
					td2.innerHTML="<div><strong class=\"redh\">+<em class=\"moneySb\">￥</em>"+ DeliveryPrice +"</strong></div><div class=\"pt5\">"+ unescape(Delivery[ii].intro) +"</div>";
					//======================
				}
			}
		}
		OpenWBS.C.Cart.AutoSelectDefaultDelivery();
	}
	this.AutoSelectDefaultDelivery = function(){
		var inputs = getElementsByTagNameAndName("input","delivery[shipping_id]");
		if(inputs.length>=1){
			inputs[0].checked=true;
			OpenWBS.C.Cart.SetShipping();
		}
	}
	this.IsSelectArea = function(){}
	//设置显示配送费用
	this.SetShipping = function(_this){
		OpenWBS.C.Cart.OrderCount();
	}
	this.OrderCount = function(){
		var thisDelivery;
		var inputs = getElementsByTagNameAndName("input","delivery[shipping_id]");
		for(var ii=0;ii<inputs.length;ii++){if(inputs[ii].checked==true){thisDelivery=inputs[ii]}}
		var deliveryCue = OpenWBS.$id("deliverycue");
		var PlacingOrderBtn=OpenWBS.$id("placingorder");
		if(objExist(thisDelivery)){
			deliveryCue.innerHTML = "";
			var total_cartamount = parseFloat(OpenWBS.$id("input_cartamount").value);
			var total_shipping   = parseFloat(thisDelivery.getAttribute("deliveryprice"));
			var total_tax        = 0 ;
			var total_protect    = 0 ;
			if(parseInt(thisDelivery.getAttribute("protect"))==1){
				total_protect = total_cartamount * parseFloat(thisDelivery.getAttribute("protectrate"));
				if(total_protect < parseFloat(thisDelivery.getAttribute("protectminprice"))){total_protect=parseFloat(thisDelivery.getAttribute("protectminprice"))}
			}
			var taxObj = OpenWBS.$id("payment[is_tax]");
			if(taxObj.checked==true){
				total_tax = total_cartamount * parseFloat(taxObj.getAttribute("taxrate")) * 1/100
			}
			OpenWBS.$id("total_protect").innerHTML  = OpenWBS.FormatCurrency(total_protect);
			OpenWBS.$id("total_shipping").innerHTML = OpenWBS.FormatCurrency(total_shipping);
			OpenWBS.$id("total_tax").innerHTML      = OpenWBS.FormatCurrency(total_tax);
			OpenWBS.$id("total_amount").innerHTML   = OpenWBS.FormatCurrency(parseFloat(total_cartamount) + parseFloat(total_shipping) + parseFloat(total_protect) + parseFloat(total_tax))
			PlacingOrderBtn.style.cursor="pointer";
			PlacingOrderBtn.onclick=function(){OpenWBS.C.Cart.PlacingOrder()}
		}else{
			deliveryCue.innerHTML="";
			var div=document.createElement("div");div.className="cartalert";
			div.innerHTML=Lang_Js_HaveNotSelectDelivery;//"操作提醒：请选择送货方式.";
			deliveryCue.appendChild(div);
			PlacingOrderBtn.style.cursor="not-allowed";
			PlacingOrderBtn.onclick=function(){alert(Lang_Js_HaveNotSelectDelivery);}
		}
	}
	//提交订单
	this.PlacingOrder = function(){
		if(!(OpenWBS.IsUserLogined===false || OpenWBS.IsUserLogined===true)){OpenWBS.CheckIsLogined();}
		if(OpenWBS.IsUserLogined){
			var Check = true;
			var Error = "";
			//if(!OpenWBS.CheckItem("ship_area","d_ship_area",Array("Normal",""),Array("d_err",Lang_Js[17]))){Check=false;}
			if(!OpenWBS.CheckSelectArea("ship_area","d_ship_area",Array("Normal",""),Array("d_err",Lang_Js[17]))){Check=false;Error=Error+Lang_Js[17]+"\r\n";}
			if(!OpenWBS.CheckItem("ship_address","d_ship_address",Array("Normal",""),Array("d_err",Lang_Js[18]))){Check=false;Error=Error+Lang_Js[18]+"\r\n";}
			if(!OpenWBS.CheckItem("ship_zip","d_ship_zip",Array("Normal",""),Array("d_err",Lang_Js[19]))){Check=false;Error=Error+Lang_Js[19]+"\r\n";}
			if(!OpenWBS.CheckItem("ship_name","d_ship_name",Array("Normal",""),Array("d_err",Lang_Js[20]))){Check=false;Error=Error+Lang_Js[20]+"\r\n";}
			if(!OpenWBS.CheckItem("ship_mobile|ship_tel","d_ship_tel",Array("Normal",""),Array("d_err",Lang_Js[21]))){Check=false;Error=Error+Lang_Js[21]+"\r\n";}
			if(Check){
				//电话号码和手机合法性判断
				var fn_tel    = OpenWBS.$id("ship_tel").value;
				var fn_mobile = OpenWBS.$id("ship_mobile").value;
				if(fn_tel.length<5 && fn_mobile.length<5){
					Check=false;
					OpenWBS.$id("d_ship_tel").className="d_err";
					OpenWBS.$id("d_ship_tel").innerHTML=Lang_Js[41];
					Error=Error+Lang_Js[41]+"\r\n";
				}
				if(Check){
					var d = new Date();
					var form=OpenWBS.$id("ordercreate");
					var fn_DialogID = "loadingnewpage";
					var fn_Title    = Lang_Js_OrderCreating;//"正在创建订单";
					var fn_HTML     = "<div id=\"fixbox\" style=\"padding:25px 4px 5px 10px;\"></div>";
					OpenWBS.CreateDiaWindow(400,130,fn_DialogID,fn_Title,fn_HTML,true,false);
					var tip = OpenWBS.$id("DiaText_"+fn_DialogID);
					var LoadingBar  = document.createElement("span");
					LoadingBar.className    = "loading_big";
					LoadingBar.style.margin = "0px 15px 15px 90px";
					LoadingBar.innerHTML    = Lang_Js_OrderCreatingPW;//"正在创建订单,请稍后...";
					tip.appendChild(LoadingBar);
					form.submit();
					//开始提交订单
					//var fn_Result = OpenWBS.C.Cart.PostOrder();
	//				var fn_PlaceOrderResult = OpenWBS.JSON.parseJSON(fn_Result);
	//				if(fn_PlaceOrderResult.errorinfo==""){
	//					alert("ok");
	//				}else{
	//					alert(fn_Result);
	//				}
				}else{
					alert(Error);
				}
			}else{
				alert(Error);
			}
		}else{
			OpenWBS.LoginDiaWindow();
		}
	}
	//提交订单并返回结果信息
	this.PostOrder = function(){
		var ajaxString = "username="+escape(Username)+"&password="+escape(Password)+"&email="+escape(Email)+"&checkcode_name="+CheckCode_Name+"&checkcode_value="+CheckCode_Value;
		var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=placeorder&r="+parseInt(Math.random()*1000);
		var ajaxSta    = posthttp(ajaxString,ajaxUrl);
	}
	this.PayForCart = function(){
		var Check = false;
		var form  = OpenWBS.$id("orderform");
		var payment = getElementsByTagNameAndName("input","payment");
		for(var i=0;i<payment.length;i++){
			if(payment[i].checked==true){Check=true;}
		}
		if(Check){
			OpenWBS.DoingDiaWindow();
			form.action="orderpay.asp.htm"/*tpa=http://www.cloudsmi.com/include/javascript/include/module/payment/orderpay.asp*/;
		    form.submit();
		}else{
			alert(Lang_Js_HaveNotSelectPayment);
		}
	}
}
function Class_C_Tie(){
	var _Tie = this;
    this.Page = function(Subsystem,ContentID,Page){
		_Tie.GetTie(Subsystem,ContentID,Page);
	}
	this.Show = function(Subsystem,ContentID){
		_Tie.GetTie(Subsystem,ContentID,0);
	}
	this.GetTie = function(Subsystem,ContentID,Page){
		var TieArea;
		if(Subsystem=='goodsconsult'){TieArea=OpenWBS.$id("goodsconsult_tiearea");}
		else if(Subsystem=='goodscomment'){TieArea=OpenWBS.$id("goodscomment_tiearea");}
		else{TieArea=OpenWBS.$id("tiearea");}
		if(objExist(TieArea)){
			OpenWBS.DataLoading(TieArea)
			var ajaxString = "page="+escape(Page);
			var ajaxUrl    = "include/module/ajax/tie.asp?ctl=gettie&subsys="+Subsystem+"&id="+ContentID+"&r="+parseInt(Math.random()*1000);
			var ajaxSta    = posthttp(ajaxString,ajaxUrl);
			if(ajaxSta==false || ajaxSta.toLowerCase()=="error"){
				TieArea.innerHTML = Lang_Js_Cue_LoadingFail;
			}else{
				if(ajaxSta.toLowerCase()=="null"){
					TieArea.innerHTML = Lang_Js_Tie[5];
				}else{
					TieArea.innerHTML = ajaxSta;
				}
			}
		}
	}
	this.Reply = function(_this,Subsystem,ContentID,TieID){
		var ctbody;// = OpenWBS.$id("tie_ctbody_"+TieID);
		var c_textarea; // = OpenWBS.$id("commenttextarea"+TieID);
		if(Subsystem=='goodsconsult'){
			ctbody = OpenWBS.$id("goodsconsulttie_ctbody_"+TieID);
			c_textarea=OpenWBS.$id("goodsconsulttextarea"+TieID);
		}
		else if(Subsystem=='goodscomment'){
			ctbody = OpenWBS.$id("goodscommenttie_ctbody_"+TieID);
			c_textarea=OpenWBS.$id("goodscommenttextarea"+TieID);
		}
		else{
			ctbody = OpenWBS.$id("tie_ctbody_"+TieID);
			c_textarea = OpenWBS.$id("commenttextarea"+TieID);
		}
		
		if(objExist(ctbody) && !objExist(c_textarea)){
			var CommentSet;
			var ajaxString = "";
			var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=checkcommentset&subsys="+Subsystem+"&id="+ContentID+"&r="+parseInt(Math.random()*1000);
			var ajaxSta    = posthttp(ajaxString,ajaxUrl);
			if(ajaxSta=="0"){ CommentSet=0;}else if(ajaxSta =="2"){CommentSet=2;}
			var div=document.createElement("div");
			div.className="replymsg";
			var textarea=document.createElement("textarea");
			textarea.className="on";
			if(Subsystem=='goodsconsult'){textarea.name="goodsconsulttextarea"+TieID;textarea.id="goodsconsulttextarea"+TieID;}
			else if(Subsystem=='goodscomment'){textarea.name="goodscommenttextarea"+TieID;textarea.id="goodscommenttextarea"+TieID;}
			else{textarea.name="commenttextarea"+TieID;textarea.id="commenttextarea"+TieID;}
			
			
			var divBtn = document.createElement("div");
			divBtn.className = "divBtn";
			divBtn.id        = "divsubmit"+TieID;
			var submitBtn = document.createElement("input");
			submitBtn.type      = "button";
			submitBtn.className = "sysBtn_s";
			submitBtn.value     = Lang_Js_Btn_Confirm; //"确定";
			submitBtn.onclick   = function(){
				this.disabled=true;
				var pnode=this.parentNode;
				var id   =OpenWBS.DataSending(pnode);
				_Tie.PostReply(this,Subsystem,ContentID,TieID);
				this.disabled=false;
				OpenWBS.RemoveElementByID(id);
			}
			var resetBtn = document.createElement("input");
			resetBtn.type      = "button";
			resetBtn.className = "sysBtn_grey_s ml3";
			resetBtn.value     = Lang_Js_Btn_Cancel; //"取消";
			resetBtn.onclick   = function(){
				ctbody.removeChild(div);
			}
			divBtn.appendChild(submitBtn);
			divBtn.appendChild(resetBtn);
			div.appendChild(textarea);
			div.appendChild(divBtn);
			ctbody.appendChild(div);
			textarea.onblur = function(){if(OpenWBS.IsNull(textarea.value)){textarea.className="mv";}}
			textarea.onfocus = function(){if(textarea.className!="on"){textarea.className="on";}}
			textarea.focus();
			//加载验证码
			if(CommentSet==0 || CommentSet==2){
				_Tie.CreateCheckCode(_this,divBtn,TieID,Subsystem);
			}	
		}
	}
	this.CreateCheckCode = function(_this,obj,TieID){
		var args = _Tie.CreateCheckCode.arguments;
		var argc = _Tie.CreateCheckCode.arguments.length;
		var Subsystem = "";
		if(argc>3){Subsystem=args[3]}
		
		var span,CheckCodeDiv;
		var CheckCodeExist = false;
		var thisDiv        = _this.parentNode;
		var CheckCodeInput = OpenWBS.$id("checkcode_value"+TieID);
		if(objExist(CheckCodeInput)){
			CheckCodeExist = true;
			span = CheckCodeInput.parentNode;
			CheckCodeDiv = CheckCodeInput.parentNode.parentNode;
			//alert("CheckCodeDiv.id="+CheckCodeDiv.id+"       thisDiv.id="+thisDiv.id);
			if(thisDiv.id != CheckCodeDiv.id){ CheckCodeDiv.removeChild(span);CheckCodeExist=false;}
		}
		if(!CheckCodeExist){
			var span   = document.createElement("span");
			var span_c = document.createElement("span");
			var input  = document.createElement("input");
			span.className= "pt5";
			input.className = "codetext ml10";
			input.type      = "text";
			input.name      = "checkcode_value";
			input.id        = "checkcode_value"+TieID;
			//input.maxlength = 5;
			input.value     = Lang_Js_Tie[6];
			span_c.className= "ml2 mt2 pr10";
			span_c.id       = "checkcode_boxer"+TieID;
			span_c.setAttribute("name","checkcode_boxer"+TieID);
			span_c.setAttribute("subsystem",Subsystem);
			input.style.width = "68px";
			input.style.color = "#777";
			span.appendChild(input);
			span.appendChild(span_c);
			obj.appendChild(span);
			input.onfocus = function(){
				this.value = "";
				this.style.color = "#333";
				this.style.background="#FEFFCB";
				if(OpenWBS.IsNull(span_c.innerHTML)){
					var ran = parseInt(Math.random()*100000);
					span_c.innerHTML="<img id=\"codeimg"+TieID+"\" src=\"include/code.asp?s="+ran+"\" style=\"border:1px solid #ccc;cursor:hand;height:20px;vertical-align:middle;\" onclick=\"this.src=this.src+\'&t=\'+ Math.random();\" alt=\""+Lang_Js_User[36]+"\" /><input type=\"hidden\" name=\"checkcode_name\" id=\"checkcode_name"+TieID+"\" value=\""+ran+"\" />";
				}
			}
			input.onblur = function(){
				this.style.background="#FFF";
				if(OpenWBS.IsNull(this.value)){
					this.style.color = "#999";
					this.style.background="#FFF";
					this.value=Lang_Js_Tie[6];
				}
			}
		}
	}
	this.ReFlushCheckCode = function(Name,TieID,Subsystem){
		var obj = getElementsByTagNameAndNameAndAttrbute("span",Name,Subsystem)[0];
		var ran = parseInt(Math.random()*100000);
		obj.innerHTML="<img id=\"codeimg"+TieID+"\" src=\"include/code.asp?s="+ran+"\" style=\"border:1px solid #ccc;cursor:hand;height:20px;vertical-align:middle;\" onclick=\"this.src=this.src+\'&t=\'+ Math.random();\" alt=\""+Lang_Js_User[36]+"\" /><input type=\"hidden\" name=\"checkcode_name\" id=\"checkcode_name"+TieID+"\" value=\""+ran+"\" />";
	}
	//提交评论
	this.Post = function(_this,Subsystem,ContentID){
		_this.disabled=true;
		_Tie.Send(_this,Subsystem,ContentID,0);
		_this.disabled=false;
	}
	//提交回复
	this.PostReply = function(_this,Subsystem,ContentID,P_ID){
		_Tie.Send(_this,Subsystem,ContentID,P_ID);
	}
	//ajax提交传送评论数据
	this.Send = function(_this,Subsystem,ContentID,P_ID){
		var Logined,CommentSet;
		var ajaxString = "";
		var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=checkcommentset&subsys="+Subsystem+"&id="+ContentID+"&r="+parseInt(Math.random()*1000);
		var ajaxSta    = posthttp(ajaxString,ajaxUrl);
		if(ajaxSta=="error" || ajaxSta=="-1"){
			alert(Lang_Js_Tie[9]);//内容不存在.
		}else if(ajaxSta=="0" || ajaxSta=="2"){//只允许会员评论 或 自由评论
			if(!P_ID>0){var submitBtn = _this.parentNode;_Tie.CreateCheckCode(_this,submitBtn,"0",Subsystem);}
			var obj_checkcode_value = OpenWBS.$id("checkcode_value"+P_ID);
			var obj_checkcode_name  = OpenWBS.$id("checkcode_name"+P_ID);
			if(objExist(obj_checkcode_value) && objExist(obj_checkcode_name)){
				ajaxUrl     = "include/module/ajax/ajax.asp?ctl=checkislogined&r="+parseInt(Math.random()*1000);
				var ajaxStatus = posthttp(ajaxString,ajaxUrl);
				if(ajaxStatus=="ok"){
					Logined = true;
					_Tie.Sending(Subsystem,ContentID,P_ID);
				}else{
					Logined = false;
					alert(Lang_Js_User[35]);
					OpenWBS.LoginDiaWindow();
				}
			}else{
				alert(Lang_Js_Tie[6]);//输入验证码
			}
		}else if(ajaxSta=="1"){
			alert(Lang_Js_Tie[10]);//禁止评论.
		}//else if(ajaxSta=="2"){//自由评论
//			if(!P_ID>0){var submitBtn = _this.parentNode;_Tie.CreateCheckCode(_this,submitBtn,"0");}
//			var CheckCode = OpenWBS.$id("checkcode"+P_ID);
//			var CodeName  = OpenWBS.$id("checkcode_name"+P_ID);
//			if(objExist(CheckCode) && objExist(CodeName)){
//				ajaxString  = "checkcode="+escape(CheckCode.value)+"&checkcode_name="+escape(CodeName.value);
//				ajaxUrl     = "include/module/ajax/ajax.asp?ctl=checkcode&r="+parseInt(Math.random()*1000);
//				var ajaxStatus = posthttp(ajaxString,ajaxUrl);
//				if(ajaxStatus=="ok"){
//					_Tie.Sending(Subsystem,ContentID,P_ID);
//				}else{
//					alert(Lang_Js_Tie[7]);//验证码不正确.
//				}
//			}else{
//				alert(Lang_Js_Tie[6]);
//			}
//		}
        else{
			alert(Lang_Js_Tie[8]);
		}
	}
	this.Sending = function(Subsystem,ContentID,P_ID){
		var Content;
		var SendingSuccessMsg;
		if(Subsystem=='goodsconsult'){
			if(P_ID>0){Content = OpenWBS.$id("goodsconsulttextarea"+P_ID);}else{Content = OpenWBS.$id("goodsconsulttextarea");}
			var isgoodsconsultcheck = OpenWBS.$id("goodsconsultcheck");
			SendingSuccessMsg = Lang_Js_Tie[12];
			if(objExist(isgoodsconsultcheck)){if(isgoodsconsultcheck.value == "1"){SendingSuccessMsg = Lang_Js_Tie[15];}}
		}else if(Subsystem=='goodscomment'){
			if(P_ID>0){Content = OpenWBS.$id("goodscommenttextarea"+P_ID);}else{Content = OpenWBS.$id("goodscommenttextarea");}
			SendingSuccessMsg = Lang_Js_Tie[13];
			var isgoodscommentcheck = OpenWBS.$id("goodscommentcheck");
			if(objExist(isgoodscommentcheck)){if(isgoodscommentcheck.value == "1"){SendingSuccessMsg = Lang_Js_Tie[16];}}
		}else{
			if(P_ID>0){Content = OpenWBS.$id("commenttextarea"+P_ID);}else{Content = OpenWBS.$id("commenttextarea");}
			SendingSuccessMsg = Lang_Js_Tie[11];
			var iscontentcommentcheck = OpenWBS.$id("contentcommentcheck");
			if(objExist(iscontentcommentcheck)){if(iscontentcommentcheck.value == "1"){SendingSuccessMsg = Lang_Js_Tie[14];}}
		}
		if(objExist(Content)){
			if(OpenWBS.IsNull(Content.value)){
				if(P_ID>0){alert(Lang_Js_Tie[1]);}else{alert(Lang_Js_Tie[2])}
			}else{
				var ajaxString = "";
				var obj_checkcode_value = OpenWBS.$id("checkcode_value"+P_ID);
			    var obj_checkcode_name  = OpenWBS.$id("checkcode_name"+P_ID);
				if(objExist(obj_checkcode_value) && objExist(obj_checkcode_name)){
					ajaxString  = "checkcode_value="+escape(obj_checkcode_value.value)+"&checkcode_name="+escape(obj_checkcode_name.value)+"&";
				}
				ajaxString     = ajaxString + "p_id="+P_ID+"&content="+escape(Content.value);
				var ajaxUrl    = "include/module/ajax/tie.asp?ctl=posttie&subsys="+Subsystem+"&id="+ContentID+"&r="+parseInt(Math.random()*1000);
				var ajaxSta    = posthttp(ajaxString,ajaxUrl);
				
				if(ajaxSta=="ok"){
					alert(SendingSuccessMsg);
					Content.value = "";
					_Tie.GetTie(Subsystem,ContentID,"0");
					if(objExist(obj_checkcode_value) && objExist(obj_checkcode_name)){
						obj_checkcode_value.value=Lang_Js_Tie[6];
						obj_checkcode_name.parentNode.innerHTML="";
					}
				}else if(ajaxSta=="error_checkcode"){
					_Tie.ReFlushCheckCode("checkcode_boxer"+P_ID,P_ID,Subsystem);
					alert(Lang_Js_Tie[7]);
				}else{
					_Tie.ReFlushCheckCode("checkcode_boxer"+P_ID,P_ID,Subsystem);
					alert(Lang_Js_Tie[4]);
				}
			}
		}
	}
}
function Class_C_Vote(){
	var _Vote = this;
	this.GetVoteDetail = function(VoteID,IsHaveVoted){
		var votedetail = OpenWBS.$id("votedetail");
		if(!objExist(votedetail)){
			alert(Lang_Js_Vote[5]);
		}else{
			var ajaxString = "voteid="+VoteID;
			var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=votedetail&r="+parseInt(Math.random()*1000);
			var ajaxSta    = posthttp(ajaxString,ajaxUrl);
			
			if(ajaxSta=="error" || OpenWBS.IsNull(ajaxSta) || ajaxSta==false){
				
			}else{
				var voteJSON  = OpenWBS.JSON.parseJSON(ajaxSta);//把json字符串转化为json对象数据;
				var voteid        = VoteID;
				var votetitle     = unescape(voteJSON.votetitle);
				var votemode      = parseInt(voteJSON.votemode);
				var votemode_mode = parseInt(voteJSON.votemode_mode);
				var description   = unescape(voteJSON.description);
				var resultdescribe= unescape(voteJSON.resultdescribe);
				var hits          = parseInt(voteJSON.hits);
				var joins         = parseInt(voteJSON.joins);
				var addtime       = voteJSON.addtime;
				var vote_options  = voteJSON.vote_options;
				var voteHTML,titleHTML,optionHTML,inputHTML,tempHTML = "";
				var option_i,option_id,option_content,option_votenum,option_percent,option_allnum,input_type,display;
				option_allnum = 0;
				input_type    = "radio";
				if(votemode>1){input_type="checkbox";}
				for(var ii=0;ii<vote_options.length;ii++){
					option_allnum = option_allnum + parseInt(vote_options[ii].votenum);
				}
				for(var ii=0;ii<vote_options.length;ii++){
					option_i       = ii+1;
					option_id      = vote_options[ii].id;
					option_content = unescape(vote_options[ii].content);
					option_votenum = parseInt(vote_options[ii].votenum);
					if(option_votenum==0){
						option_percent = "0%";
					}else{
						option_percent = parseInt((option_votenum * 100)/option_allnum)+"%";
					}
					inputHTML      = "<input type=\""+input_type+"\" name=\"poll\" voteid=\""+VoteID+"\" optionid=\""+option_id+"\" id=\"voteoption_"+VoteID+"_"+option_id+"\" />";
					if(IsHaveVoted){
						tempHTML = "<dl class=\"poll_item\"><dt>[voteoptionlist:content]</dt><dd><div class=\"poll_drawing\"><div class=\"percent_bg c[voteoptionlist:i]\" name=\"poll_percent\" percent=\"[voteoptionlist:percent]\" style=\"width:[voteoptionlist:percent]\"></div></div><div class=\"poll_num\"><span class=\"num\">[voteoptionlist:votenum]</span><span class=\"percent\">([voteoptionlist:percent])</span></div><div class=\"input\"></div></dd></dl>";
					}else{
						tempHTML = "<dl class=\"poll_item\"><dt>[voteoptionlist:content]</dt><dd><div class=\"poll_drawing\"><div class=\"percent_bg c[voteoptionlist:i]\" name=\"poll_percent\" percent=\"[voteoptionlist:percent]\" style=\"width:[voteoptionlist:percent]\"></div></div><div class=\"poll_num\"><span class=\"num\">[voteoptionlist:votenum]</span><span class=\"percent\">([voteoptionlist:percent])</span></div><div class=\"input\">"+inputHTML+"</div></dd></dl>";
					}
					tempHTML = tempHTML.replace(/\[voteoptionlist:i\]/g,option_i);
					tempHTML = tempHTML.replace(/\[voteoptionlist:content\]/g,option_content);
					tempHTML = tempHTML.replace(/\[voteoptionlist:votenum\]/g,option_votenum);
					tempHTML = tempHTML.replace(/\[voteoptionlist:percent\]/g,option_percent);
					if(OpenWBS.IsNull(optionHTML)){
						optionHTML = tempHTML;
					}else{
						optionHTML = optionHTML + tempHTML;
					}
				}
				if(votemode>1){tempHTML=Lang_Js_Vote[2].replace("{tpl:votemode_mode}",votemode_mode);}else{tempHTML="";}
				titleHTML = "<h1 class=\"votetitle\"><span class=\"title\">{vote:title}</span><span class=\"votemodemore\">"+tempHTML+"</span></h1>";
				if(!IsHaveVoted){
					inputHTML= "<input type=\"submit\" class=\"sysBtn\" value=\""+Lang_Js_Vote[1]+"\" />";
					display  = "display:none;"
				}else{
					inputHTML= "";
					if(!OpenWBS.IsNull(resultdescribe)){display=""}else{display = "display:none;"}
				}
				voteHTML  = "<form action=\"javascript:;\" method=\"get\" voteid=\"{vote:id}\" votemode=\"{vote:votemode}\" votemodemore=\"{vote:votemodemore}\" onsubmit=\"OpenWBS.C.Vote.VotePoll(this);\"><div class=\"addtime\">"+Lang_Js_Vote[3]+"{vote:addtime}</div><div class=\"joins\">"+Lang_Js_Vote[4]+"{vote:joins}</div>"+titleHTML+"<div class=\"description\">{vote:description}</div><div class=\"polls\">"+optionHTML+"</div><div class=\"poll_btn\">"+inputHTML+"</div><div class=\"resultdescribe\" id=\"resultdescribe\" style=\""+display+"\">{vote:resultdescribe}</div></form>";
				voteHTML = voteHTML.replace(/\{vote:id\}/g,voteid);
				voteHTML = voteHTML.replace(/\{vote:title\}/g,votetitle);
				voteHTML = voteHTML.replace(/\{vote:votemode\}/g,votemode);
				voteHTML = voteHTML.replace(/\{vote:votemodemore\}/g,votemode_mode);
				voteHTML = voteHTML.replace(/\{vote:description\}/g,description);
				voteHTML = voteHTML.replace(/\{vote:resultdescribe\}/g,resultdescribe);
				voteHTML = voteHTML.replace(/\{vote:hits\}/g,hits);
				voteHTML = voteHTML.replace(/\{vote:joins\}/g,joins);
				voteHTML = voteHTML.replace(/\{vote:addtime\}/g,addtime);
				votedetail.innerHTML = voteHTML;
			}
		}
	}
	this.VotePoll = function(_this){
		polls = getElementsByTagNameAndAttribute(_this,"input","name","poll");
		var votemode     = parseInt(_this.getAttribute("votemode"));
		var votemodemore = parseInt(_this.getAttribute("votemodemore"));
		var OptionID     = "";
		var HaveSelectOptionNum = 0;
		for(var i=0;i<polls.length;i++){
			if(polls[i].checked==true){
				HaveSelectOptionNum = HaveSelectOptionNum + 1;
				if(OpenWBS.IsNull(OptionID)){
					OptionID=polls[i].getAttribute("optionid");
				}else{
					OptionID=OptionID+","+polls[i].getAttribute("optionid");
				}
			}
		}
		if(!(HaveSelectOptionNum>0)){
			alert(Lang_Js_Vote[9]);
		}else{
			if(votemode==2 && HaveSelectOptionNum>votemodemore){
				alert(Lang_Js_Vote[8].replace("{tpl:votemode_mode}",votemodemore));
			}else{
				var DiaWindowID = OpenWBS.DoingDiaWindow();
				var VoteID=_this.getAttribute("voteid");
				var VotePollSuccess=Lang_Js_Vote[6];
				var VotePollFailed =Lang_Js_Vote[7];
				var ajaxString = "voteid="+VoteID+"&optionid="+OptionID+"";
				var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=votepoll&r="+parseInt(Math.random()*1000);
				var ajaxSta    = posthttp(ajaxString,ajaxUrl);
				if(ajaxSta=="ok"){
					OpenWBS.DiaWindowCueMessage(VotePollSuccess);
					OpenWBS.DiaWindowCloseByID(DiaWindowID);
					OpenWBS.C.Vote.GetVoteDetail(VoteID,true);
				}else{
					alert(VotePollFailed);d
				}
			}
		}
	}
	this.AddVoteHits = function(VoteID){
		var ajaxString = "";
		var ajaxUrl    = "include/module/ajax/ajax.asp?ctl=addvotehits&id="+VoteID+"&r="+parseInt(Math.random()*1000);
		var ajaxSta    = posthttp(ajaxString,ajaxUrl);
	}
}
function Class_C_Guestbook(){
	var _this = this;
	this.areaid = "";
	this.Init = function(){
		var userid   = OpenWBS.Cookie.GetCookie("my:id");
		var username = OpenWBS.Cookie.GetCookie("my:name");
		if(!(OpenWBS.IsNull(userid) || OpenWBS.IsNull(username))){
			if(objExist(OpenWBS.$id("guestbook.username"))){
				OpenWBS.$id("guestbook.username").value = username;
			}
		}
	}
	this.Get = function(boxerid){
		if(!objExist(OpenWBS.$id(boxerid))){
			alert("alert:"+boxerid+" is not exist!");
		}else{
			_this.areaid = boxerid;
			_this.Page(0);
		}
	}
	this.Page = function(page){
		OpenWBS.DataLoading(OpenWBS.$id(_this.areaid));
		$.ajax({
			type:"POST",dataType:"html",async:true,url:"include/module/ajax/ajax.guestbook.asp?ctl=guestbook&action=get&page="+page,data:"",
			error:function(XMLHttpRequest,textStatus,errorThrown){OpenWBS.$id(_this.areaid).innerHTML=Lang_Js_Cue_ServerErrorAndTryLatter;alert(Lang_Js_Cue_ServerErrorAndTryRefreshLatter);},
			success:function(ajaxText){
				if(ajaxText=="null"){
					OpenWBS.$id(_this.areaid).innerHTML=Lang_Js_Guestbook[1];
				}else{
					OpenWBS.$id(_this.areaid).innerHTML = ajaxText;
				}
			}
		});
	}
	this.Post = function(){
		var content  = trim(OpenWBS.$id("guestbook.content").value);
		var username = trim(OpenWBS.$id("guestbook.username").value);
		var email    = trim(OpenWBS.$id("guestbook.email").value);
		var tel      = trim(OpenWBS.$id("guestbook.tel.htm"/*tpa=http://www.cloudsmi.com/include/javascript/guestbook.tel*/).value);
		var website  = trim(OpenWBS.$id("guestbook.website").value);
		var checkcode_name = trim(OpenWBS.$id("checkcode_name").value);
		var checkcode_value = trim(OpenWBS.$id("checkcode_value").value);
		var check    = true;
		if(OpenWBS.IsNull(content)){
			check = false;
			$("#guestbook_cue").attr("class","guestbook_cue d_alert").html(Lang_Js_Guestbook[4]).show("slow");
			OpenWBS.$id("guestbook.content").focus();
			window.setTimeout(function(){$("#guestbook_cue").hide("slow")},2500);
		}else{
			var sReg = /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;
			if(!OpenWBS.IsNull(email)){
				if(!sReg.test(email)){
					check = false;
					$("#guestbook_cue").attr("class","guestbook_cue d_alert").html(Lang_Js_Guestbook[6]).show("slow");
					OpenWBS.$id("guestbook.email").focus();
					window.setTimeout(function(){$("#guestbook_cue").hide("slow")},2500);
				}
			}
			if(OpenWBS.IsNull(checkcode_value)){
				check = false;
				$("#guestbook_cue").attr("class","guestbook_cue d_alert").html(Lang_Js_Guestbook[5]).show("slow");
				OpenWBS.$id("checkcode_value").focus();
				window.setTimeout(function(){$("#guestbook_cue").hide("slow")},2500);
			}
		}
		if(check){
			OpenWBS.DataSending(OpenWBS.$id("guestbook_cue"));
			$("#guestbook_cue").attr("class","guestbook_cue").show("slow");
			$.ajax({
				type:"POST",dataType:"html",async:true,
				url:"ajax.guestbook.asp-ctl=guestbook&action=post.htm"/*tpa=http://www.cloudsmi.com/include/javascript/include/module/ajax/ajax.guestbook.asp?ctl=guestbook&action=post*/,
				data:"content="+escape(content)+"&username="+escape(username)+"&email="+escape(email)+"&tel="+escape(tel)+"&website="+escape(website)+"&checkcode_name="+escape(checkcode_name)+"&checkcode_value="+escape(checkcode_value),
				error:function(XMLHttpRequest,textStatus,errorThrown){OpenWBS.DiaWindowCloseByID(DialogID);alert(Lang_Js_Cue_ServerErrorAndTryLatter);},
				success:function(ajaxText){
					$("#guestbook_cue").hide();
					if(ajaxText=="ok"){
						$("#guestbook_cue").attr("class","guestbook_cue d_ok").html(Lang_Js_Guestbook[3]).show("slow");
						window.setTimeout(function(){$("#guestbook_cue").hide("slow")},6000);
						window.setTimeout(function(){
						OpenWBS.$id("guestbook.content").value = "";
						OpenWBS.$id("checkcode_value").value = "";
						OpenWBS.GetCodeImg();
						},2000);
					}else if(ajaxText=="error_checkcode"){
						OpenWBS.GetCodeImg();
						$("#guestbook_cue").attr("class","guestbook_cue d_err").html(Lang_Js_Guestbook[8]).show("slow");
						OpenWBS.$id("checkcode_value").focus();
						window.setTimeout(function(){$("#guestbook_cue").hide("slow")},2500);
					}else if(ajaxText=="error_content_is_null"){
						$("#guestbook_cue").attr("class","guestbook_cue d_err").html(Lang_Js_Guestbook[4]).show("slow");
						OpenWBS.$id("guestbook.content").focus();
						window.setTimeout(function(){$("#guestbook_cue").hide("slow")},2500);
					}else{
						$("#guestbook_cue").attr("class","guestbook_cue d_err").html(Lang_Js_Guestbook[7]).show("slow");
						window.setTimeout(function(){$("#guestbook_cue").hide("slow")},3000);
					}
				}
			});
		}
	}
}
function Class_C_Link(){
	var _Link=this;
	this.AddHits = function(ID){
		$.post("include/module/ajax/ajax.asp?ctl=addlinkhits&id="+ID);
	}
}
function Class_C_Order(){
	this.Pay = function(OrderID){
		var fn_DialogID = OpenWBS.CreateID();
		var fn_Title    = Lang_Js_OrderPay[0] +"["+OrderID+"]";
		var fn_HTML     = '<form method="post" id="orderform" extra="suborder"><input type="hidden" name="orderid" value="'+OrderID+'" />'+
		'<div id="diatext_orderpay" class="orderpay" style="padding:10px;">'+
		'<div class="heading">'+Lang_Js_Order[14]+'</div>'+
		'<div id="paymentslist" class="paymentslist">{cart:paymentslist}</div>'+
		'<div class="do_pay"><input type="button" class="bigbtn" onclick="OpenWBS.C.Cart.PayForCart()" value="'+Lang_Js_Order[15]+'" /></div>'+
		'</div></form>';
		OpenWBS.CreateDiaWindow(800,500,fn_DialogID,fn_Title,fn_HTML,true,true);
		var ObjectDiv  = OpenWBS.$id("paymentslist");OpenWBS.DataLoading(ObjectDiv);
		$("#paymentslist").load("include/module/ajax/ajax.asp?ctl=getpaymentslist&orderid="+OrderID+"");
	}
}
function Class_C_User(){
	this.ForgetPassword = function(){
		var fn_DialogID = OpenWBS.CreateID();
		var fn_Title    = Lang_Js_User[56];
		var fn_HTML     = '<form method="post" id="orderform" extra="suborder"><input type="hidden" name="orderid" value="" />'+
		'<div id="diatext_forget" class="forget_password" style="padding:10px;">'+
		'<div class="heading">'+Lang_Js_User[57]+'</div>'+
		'<div id="forget_bd" class="forget_bd">'+
		'<table border="0" cellpadding="5" cellspacing="0">'+
		'<tr><td align="right"><div class="font14">'+Lang_Js_User[59]+':</div></td><td class="td02"><div><input type="text" class="text" id="useraccount" name="useraccount" style="width:200px;" value="" /><label class="Normal" style="padding-left:5px;">'+Lang_Js_User[60]+'</label></div></td></tr>'+
		'<tr><td align="right"><div class="font14">'+Lang_Js_User[34]+':</div></td><td class="td02"><input type="text" class="text" id="checkcode_value2" name="checkcode_value2" maxlength="5" value="" style=" font-size:14px; font-family:Arial, Helvetica, sans-serif; font-weight:bold; width:88px;" /><span id="checkcode_boxer2" style="padding:0px 0px 0px 4px;"></span><label class="Normal" id="d_checkcode2"></label></td></tr>'+
		'<tr><td class="td01"></td><td class="td02"><div><input type="button" id="forgetpw_btn" onclick="OpenWBS.C.User.PostForgetPassword()" style="padding:5px 25px; font-size:14px;" value="'+ Lang_Js_Btn_Confirm +'" /></div><div style="padding-top:10px;"><label class="Normal" id="d_forget_result"></label></div></td></tr>'+
		'</table></div>'+
		'</div></form>';
		OpenWBS.CreateDiaWindow(600,300,fn_DialogID,fn_Title,fn_HTML,true,true);
		OpenWBS.GetCodeImg2();
	}
	this.PostForgetPassword = function(){
		var Check=true;
		var Account = OpenWBS.$id("useraccount").value;
		var CheckCode_Value = OpenWBS.$id("checkcode_value2").value;
		var CheckCode_Name  = OpenWBS.$id("checkcode_name2").value;
		var ParaString = "useraccount="+escape(Account)+"&checkcode_name="+escape(CheckCode_Name)+"&checkcode_value="+escape(CheckCode_Value);
		if($.trim(CheckCode_Value)==""){Check=false;OpenWBS.$id("checkcode_value2").focus();}
		if($.trim(Account)==""){Check=false;OpenWBS.$id("useraccount").focus();}
		if(Check){
			var tip = OpenWBS.$id("d_forget_result");tip.innerHTML="";OpenWBS.DataSending(tip);
			$("#forgetpw_btn").attr("disabled",true);
			$.ajax({
					type:"POST",dataType:"html",async:true,
					url:"ajax.asp-ctl=forgetpassword.htm"/*tpa=http://www.cloudsmi.com/include/javascript/include/module/ajax/ajax.asp?ctl=forgetpassword*/,data:ParaString,
					error:function(){alert(Lang_Js_Cue_ServerErrorAndTryLatter);},
					success:function(ajaxText){
						if(ajaxText=="ok"){
							$("#forget_bd").html(Lang_Js_User[65]);
						}else if(ajaxText=="error_checkcode"){
							tip.className="d_err";tip.innerHTML=Lang_Js_User[24];
							OpenWBS.$id("checkcode_value2").focus();
							OpenWBS.GetCodeImg2();$("#forgetpw_btn").attr("disabled",false);
						}else if(ajaxText=="error_user_not_exist"){
							tip.className="d_err";tip.innerHTML=Lang_Js_User[63];
							OpenWBS.GetCodeImg2();$("#forgetpw_btn").attr("disabled",false);
						}else if(ajaxText=="error_user_is_disable" || ajaxText=="error_user_is_recycle"){
							tip.className="d_err";tip.innerHTML=Lang_Js_User[64];
							OpenWBS.GetCodeImg2();$("#forgetpw_btn").attr("disabled",false);
						}else if(ajaxText=="error_jmail_not_installed"){
							$("#forget_bd").html(Lang_Js_User[66]);
						}else if(ajaxText=="error_send_email_fail"){
							$("#forget_bd").html(Lang_Js_User[69]);
						}else{
							tip.className="d_err";tip.innerHTML=ajaxText;
							OpenWBS.GetCodeImg2();$("#forgetpw_btn").attr("disabled",false);
						}
					}
				});
		}
	}
	this.ResetPassword = function(FormName){
		var Check=true;
		var Form = document.forms[FormName];
		var CheckCode_Value = OpenWBS.$id("checkcode_value").value;
		var CheckCode_Name  = OpenWBS.$id("checkcode_name").value;
		var ParaString = "uid="+escape(Form.userid.value)+"&hash="+escape(Form.hash.value)+"&password="+escape(Form.password.value)+"&checkcode_name="+escape(CheckCode_Name)+"&checkcode_value="+escape(CheckCode_Value);
		if($.trim(CheckCode_Value)==""){Check=false;OpenWBS.$id("checkcode_value").focus();}
		if(OpenWBS.User.PasswordCheck(FormName)==false){Check=false;}
		if(OpenWBS.User.RePasswordCheck(FormName)==false){Check=false;}
		if(Check){
			var tip = OpenWBS.$id("msgbox");tip.innerHTML="";OpenWBS.DataSending(tip);
			$.ajax({
					type:"POST",dataType:"html",async:true,url:"ajax.asp-ctl=resetpassword.htm"/*tpa=http://www.cloudsmi.com/include/javascript/include/module/ajax/ajax.asp?ctl=resetpassword*/,data:ParaString,
					error:function(){tip.innerHTML="";alert(Lang_Js_Cue_ServerErrorAndTryLatter);},
					success:function(ajaxText){
						if(ajaxText=="ok"){
							tip.className="d_ok";
							tip.innerHTML=Lang_Js_User[67];
							OpenWBS.DiaWindowCueMessage(Lang_Js_User[67],10,400,160)
							window.setTimeout(function(){window.location.href="index.asp-login.htm"/*tpa=http://www.cloudsmi.com/include/javascript/index.asp?login*/+filesuffix},8000);
						}else if(ajaxText=="error_checkcode"){
							tip.className="d_err";
							tip.innerHTML=Lang_Js_User[24];
							OpenWBS.$id("checkcode_value").focus();
						}else if(ajaxText=="error_user_not_exist"){
							tip.className="d_err";
							tip.innerHTML=Lang_Js_User[63];
						}else if(ajaxText=="error_user_is_disable" || ajaxText=="error_user_is_recycle"){
							tip.className="d_err";
							tip.innerHTML=Lang_Js_User[64];
						}else if(ajaxText=="error_getpassword_link_disable"){
							tip.className="d_err";
							tip.innerHTML=Lang_Js_User[68];
						}else{
							tip.className="d_err";
							tip.innerHTML=ajaxText;
						}
						OpenWBS.GetCodeImg();
					}
				});
		}
	}
}