/*
'=========================================================
' File     : main.lang.js
' 功能注释 : 系统前台语言文档
' Version  : 1.x
' Authority: http://www.openwbs.com
' Write By : linx
'=========================================================
*/

//前后台都必须并且一样的:
var Lang_Js_DiaTitle = [];
     Lang_Js_DiaTitle[0] = "信息提示";
var Lang_Js_DiaText = [];
	 Lang_Js_DiaText[0] = "正在执行操作,请稍后...";
	 Lang_Js_DiaText[1] = "{tpl:time}秒后自动关闭";
var Lang_Js_PayTradeType = [];
	 Lang_Js_PayTradeType[0] = "交易类型";
	 Lang_Js_PayTradeType[1] = "其他";
	 Lang_Js_PayTradeType[2] = "订单支付";
	 Lang_Js_PayTradeType[3] = "充值";

var Lang_Js_PayTradeStatus = [];
     Lang_Js_PayTradeStatus[0] = "交易状态";
	 Lang_Js_PayTradeStatus[1] = "支付完成";
	 Lang_Js_PayTradeStatus[2] = "支付失败";
	 Lang_Js_PayTradeStatus[3] = "支付取消";
	 Lang_Js_PayTradeStatus[4] = "支付错误";
	 Lang_Js_PayTradeStatus[5] = "支付无效";
	 Lang_Js_PayTradeStatus[6] = "支付处理中";
	 Lang_Js_PayTradeStatus[7] = "支付超时";
	 Lang_Js_PayTradeStatus[8] = "支付准备中";
	 Lang_Js_PayTradeStatus[9] = "等待支付";
	 Lang_Js_PayTradeStatus[10]= "未知状态";
		 
//共用;
	var Lang_Js_Btn_Submit         = "提交保存";
	var Lang_Js_Btn_ConfirmSave    = "确定保存";
	var Lang_Js_Btn_Confirm        = "确定";
	var Lang_Js_Btn_Cancel         = "取消";
	var Lang_Js_Btn_Close          = "关闭";
	var Lang_Js_Btn_Delete         = "删除";
	var Lang_Js_Btn_Edit           = "编辑";
	var Lang_Js_Btn_Add            = "添加";
	var Lang_Js_Btn_Next           = "下一步";
	
	var Lang_Js_Btn_ISee           = "我知道了";
	var Lang_Js_Btn_Select         = "选择";
	var Lang_Js_Btn_Login          = "登陆";
	var Lang_Js_Btn_Reply          = "回复";
	var Lang_Js_Btn_ReTry          = "重新加载";//重试
	var Lang_Js_Btn_ReloadAgain    = "点击重新加载试试.";
	
	var Lang_Js_Btn_Accept         = "接受并加为好友";
	var Lang_Js_Btn_Reject         = "拒绝";
    var Lang_Js_Btn_Ignore         = "忽略";
	var Lang_Js_Btn_AcceptAll      = "接受所有好友申请";
	var Lang_Js_Btn_RejectAll      = "拒绝所有好友申请";
    var Lang_Js_Btn_IgnoreAll      = "忽略所有好友申请";
	var Lang_Js_Btn_DeleteAll      = "全部删除";
	
	var Lang_Js_Btn_AddForFriend   = "加为好友";
	var Lang_Js_Btn_DelForUnfriend = "解除好友关系";
	
	var Lang_Js_Btn_AddToGroup     = "将所选好友加入分组";
	
	var Lang_Js_Yes                = "是";
	var Lang_Js_No                 = "否";
	var Lang_Js_Year               = "年";
	var Lang_Js_Month              = "月";
	var Lang_Js_Day                = "日";
	var Lang_Js_PleaseSelect       = "请选择...";
	var Lang_Js_PleaseSelect2      = "请选择";
	var Lang_Js_OpenNewPage        = "打开新页面";
	var Lang_Js_LoadingNewPage     = "正在加载新页面,请稍后...";
	var Lang_Js_Unlogined          = "您还没有登陆，请先登陆!";
	var Lang_Js_InForbidTimeConnotPost    = "您短时间内提交了太多的内容，请一会再试.";
	
	var Lang_Js_OrderID              = "订单号";
	var Lang_Js_OrderDetail          = "订单详细";
	var Lang_Js_OrderCreating        = "正在创建订单";
	var Lang_Js_OrderCreatingPW      = "正在创建订单,请稍后...";
	var Lang_Js_HaveNotSelectPayment = "请选择支付方式.";
	
	var Lang_Js_HaveNotSelectDelivery = "请选择送货方式.";
	
	
	//消息回复框默认的文字
	var Lang_Js_FeedReplyDefaultValue = "我也说两句...";
	var Lang_Js_Reply                 = "回复";
	var Lang_Js_ShrinkReply           = "收起回复";
	
	var Lang_Js_ListTableColLine_ID = "主键ID"
	
//操作
	var Lang_Js_DoDel              = "删除";
	var Lang_Js_DoHidden           = "隐藏";
	
	var Lang_Js_DoExpand           = "展开";
	var Lang_Js_DoShrink           = "收起";
	
	var Lang_Js_Logout             = "退出";
	var Lang_Js_Login              = "用户登陆";
	var Lang_Js_Register           = "注册会员帐号";

//提示信息
	var Lang_Js_Cue_Checking          = "检测中，请稍候......";
	var Lang_Js_Cue_DataSubmiting     = "正在提交传输数据......";
	var Lang_Js_Cue_DataSending       = "正在提交数据......";
	var Lang_Js_Cue_DataLoading       = "正在加载数据......";
	var Lang_Js_Cue_Processing        = "正在执行操作......";
	var Lang_Js_Cue_IsUserLoginedChecking = "正在检测您是否已经登陆...";
	var Lang_Js_Cue_Uploading         = "正在上传......";
	
	var Lang_Js_Cue_LoadingFail       = "数据加载失败.";
	var Lang_Js_Cue_CheckPermission   = "检查是否有权限.";
	var Lang_Js_Cue_HaveSelectNothing = "未选择任何内容!";
	var Lang_Js_Cue_IllegalData       = "请不要拟造非法数据.";
	
	var Lang_Js_Cue_ServerErrorAndTryLatter        = "服务器请求失败,请稍后再试试.";
	var Lang_Js_Cue_ServerErrorAndTryRefreshLatter = "服务器请求失败,请稍后再刷新试试.";
	
	var Lang_Js_Cue_HaveNoneGoodsInCart   = "您的购物车中没有商品，请您先选购商品";
	
	
	var Lang_Js_ChangeCheckcodeTip    = "看不清楚可点击换一张";
	var Lang_Js_ChangeCheckcodeTipPre = "看不清楚可";
	var Lang_Js_ChangeCheckcodeTipSub = "换一张";
	
	
	var Lang_Js       = [];
		 Lang_Js[0]   = "";
		 Lang_Js[1]   = "错误:请检查.";
		 Lang_Js[2]   = "错误:找不到对象,请确认该页面模板制作无错并且页面已完全加载.";
		 Lang_Js[3]   = "头像URL不能为空.";
		 Lang_Js[4]   = "头像保存成功.";
		 Lang_Js[5]   = "保存头像失败.";
		 Lang_Js[6]   = "您还未登陆或登陆超时.";
		 Lang_Js[7]   = "参数数据错误.";
		 Lang_Js[8]   = "小头像保存成功.";
		 Lang_Js[9]   = "保存基本信息";
		 Lang_Js[10]  = "恭喜，基本信息保存成功！";
		 Lang_Js[11]  = "您还没有登陆，请先登陆!";
		 Lang_Js[12]  = "Email格式错误.";
		 Lang_Js[13]  = "Email已经被使用了.";
		 Lang_Js[14]  = "保存失败！";
		 Lang_Js[15]  = "保存收货地址";
		 Lang_Js[16]  = "恭喜，收货地址保存成功！";
		 Lang_Js[17]  = "请选择收货地区";
		 Lang_Js[18]  = "请填写详细地址";
		 Lang_Js[19]  = "请填写邮编";
		 Lang_Js[20]  = "请填写真实收货人姓名";
		 Lang_Js[21]  = "联系手机 和 联系电话 请填写一项";
		 Lang_Js[22]  = "请输入目前的密码";
		 Lang_Js[23]  = "请输入新密码";
		 Lang_Js[24]  = "两次输入的密码不一致";
		 Lang_Js[25]  = "密码由\"英文数字_-\"组成，最小长度:6 最大长度:20";
		 Lang_Js[26]  = "恭喜，密码修改成功，请牢记新密码！";
		 Lang_Js[27]  = "目前的密码输入错误";
		 Lang_Js[28]  = "密码修改失败！";
		 Lang_Js[29]  = "修改密码";
		 Lang_Js[30]  = "如果长时间没反应请刷新页面重新上传头像.";
		 Lang_Js[31]  = "没有选择要上传的头像图片";
		 Lang_Js[32]  = "上传的头像图片太大";
		 Lang_Js[33]  = "系统不支持ADODB.STREAM";
		 Lang_Js[34]  = "头像图片大小不能超过{$:size}";
		 Lang_Js[35]  = "只能上传jpg、jpeg、gif、png、bmp格式的头像图片";
		 Lang_Js[36]  = "获取上传的头像图片数据时发生错误";
		 Lang_Js[37]  = "没上传任何头像图片";
		 Lang_Js[38]  = "一次只能上传一张头像图片";
		 Lang_Js[39]  = "保存头像图片时出错，检查路径是否正确或是否有有文件写入权限";
		 Lang_Js[40]  = "请不要上传无效的头像图片";
		 Lang_Js[41]  = "请填写正确的联系手机或联系电话";
		 Lang_Js[42]  = "请选择送货方式";
		 Lang_Js[43]  = "系统没配置送货方式，请通知网站管理员先在系统管理后台添加配送方式!"
	
		 
//用户
var Lang_ForgetPassword = "忘记登录密码?";
var Lang_Js_User = [];
    Lang_Js_User[0] = "填写正确。";
	Lang_Js_User[1] = "您的填写有误。";
	
	Lang_Js_User[2] = "恭喜您，该用户名还未被注册，您可以使用这个用户名注册！";
	Lang_Js_User[3] = "用户名不能为空！";
	Lang_Js_User[4] = "用户名长度错误！";
	Lang_Js_User[5] = "不能有空格，可以是中文，长度控制在3-15字节以内！";
	Lang_Js_User[6] = "此用户名包含不可接受字符或被管理员屏蔽,请选择其它用户名!";
	Lang_Js_User[7] = "该用户名已经被注册，请选用其他用户名!";
	
	Lang_Js_User[8]  = "密码不能为空。";
	Lang_Js_User[9]  = "两次输入的密码不一致，请再输入一次您上面输入的密码！";
	Lang_Js_User[10] = "请再输入一遍您上面填写的密码。";
	Lang_Js_User[11] = "密码设置错误，密码中必须包含小写字母。";
	Lang_Js_User[12] = "密码设置错误，密码中必须包含大写字母。";
	Lang_Js_User[13] = "密码设置错误，密码中必须包含符号。";
	Lang_Js_User[14] = "密码设置错误，密码长度过小。";
	Lang_Js_User[15] = "密码设置错误，密码过长。";
	Lang_Js_User[16] = "密码设置错误，密码不允许和用户名相同。";
	Lang_Js_User[17] = "密码设置错误，密码不允以下字符:\ & ' \" ! / * , < > % # ?。";
	Lang_Js_User[18] = "不允许注册帐号与密码相同。";
	Lang_Js_User[19] = "密码由\"英文数字_-\"组成，最小长度:6 最大长度:20 且密码不能与用户名相同。";
	
	Lang_Js_User[20] = "邮箱不能为空。";
	Lang_Js_User[21] = "该邮箱已被注册，请更换别邮箱。";
	Lang_Js_User[22] = "请填写真实并且最常用的邮箱，我们需要通过邮箱对您进行认证。";
	Lang_Js_User[23] = "请输入正确的邮箱地址。";
	
	Lang_Js_User[24] = "验证码不正确。";
	Lang_Js_User[25] = "登录已超时,请刷新验证码。";
	Lang_Js_User[26] = "请输入验证码。";
	
	Lang_Js_User[27] = "已同意。";
	Lang_Js_User[28] = "请先确定已阅读并完全同意协议内容。";
	
	Lang_Js_User[29] = "登陆失败，用户名或密码不正确。";
	Lang_Js_User[30] = "登陆成功。";
	
	Lang_Js_User[31] = "用户登陆";
	Lang_Js_User[32] = "用户帐号";
	Lang_Js_User[33] = "登陆密码";
	Lang_Js_User[34] = "认证码";
	Lang_Js_User[35] = "您还没有登陆,请先登陆。";
	Lang_Js_User[36] = "看不清？点击刷新";
	Lang_Js_User[37] = "注册会员成功.";
	Lang_Js_User[38] = "注册会员失败.";
	Lang_Js_User[39] = "";
	Lang_Js_User[40] = "发布成功";
	Lang_Js_User[41] = "发布失败";
	Lang_Js_User[42] = "留言成功";
	Lang_Js_User[43] = "留言失败";
	Lang_Js_User[44] = "提交的内容不能为空";
	Lang_Js_User[45] = "暂无访客";
	Lang_Js_User[46] = "删除成功";
	Lang_Js_User[47] = "删除失败";
	Lang_Js_User[48] = "确定要删除吗?";
	Lang_Js_User[49] = "信息发布时间至今已操过5天,不可以再删除.";
	Lang_Js_User[50] = "系统消息";
	Lang_Js_User[51] = "操作完成.";
	Lang_Js_User[52] = "删除所有系统消息操作失败.";
	Lang_Js_User[53] = "暂无消息";
	Lang_Js_User[54] = "转播成功.";
	Lang_Js_User[55] = "转播失败.";
	Lang_Js_User[56] = "找回密码";
	Lang_Js_User[57] = "使用邮箱找回";
	Lang_Js_User[58] = "使用密保问题找回";
	Lang_Js_User[59] = "用户帐号或邮箱";
	Lang_Js_User[60] = "请输入您的用户账号或账户邮箱地址";
	Lang_Js_User[61] = "";
	Lang_Js_User[62] = "";
	Lang_Js_User[63] = "用户不存在";
	Lang_Js_User[64] = "用户已被禁用";
	Lang_Js_User[65] = "系统已成功发送了一封关于找回密码的邮件到您的账户邮箱，请注意查收！<br/>按邮件的说明即可重新设置您的登陆密码。";
	Lang_Js_User[66] = "系统邮件配置错误导致无法发送邮件，请联系网站管理员！";
	Lang_Js_User[67] = "新密码设置成功，请牢记您的新密码。";
	Lang_Js_User[68] = "此找回密码链接已失效或已过期";
	Lang_Js_User[69] = "发送邮件失败，原因可能是系统邮件配置错误或者是该账户邮箱无法接收邮件";
	
	
var Lang_Js_Friend = [];
	Lang_Js_Friend[0] = "所有好友";
	Lang_Js_Friend[1] = "创建新分组";
	Lang_Js_Friend[2] = "选择成员";
	Lang_Js_Friend[3] = "移出该分组";
	Lang_Js_Friend[4] = "成功将所选好友加入分组.";
	Lang_Js_Friend[5] = "所选择的好友已在分组中.";
	Lang_Js_Friend[6] = "没有选择任何好友.";
	Lang_Js_Friend[7] = "编辑分组";
	Lang_Js_Friend[8] = "删除分组";
	Lang_Js_Friend[9] = "确认要删除分组 “<b>{tpl:groupname}</b>” 吗？<br>提示: 删除分组操作，并不会删除该分组下的好友！";
	Lang_Js_Friend[10] = "成功删除分组 “<b>{tpl:groupname}</b>” .";
	Lang_Js_Friend[11] = "删除分组 “<b>{tpl:groupname}</b>” 操作失败.";
	Lang_Js_Friend[12] = "保存成功";
	Lang_Js_Friend[13] = "好友分组已经存在";
	Lang_Js_Friend[14] = "保存失败";
	Lang_Js_Friend[15] = "这个分组里还没好友";
	Lang_Js_Friend[16] = "确定和 “<b>{tpl:name}</b>” 解除好友关系吗？";
	Lang_Js_Friend[17] = "成功和 “<b>{tpl:name}</b>” 解除好友关系.</b>";
	Lang_Js_Friend[18] = "和 “<b>{tpl:name}</b>” 解除好友关系操作失败.";
	Lang_Js_Friend[19] = "TA还没有好友.";
	Lang_Js_Friend[20] = "将{tpl:name}加为好友?";
	Lang_Js_Friend[21] = "需要通过“<b>{tpl:name}</b>”的验证才能加他为好友！";
	Lang_Js_Friend[22] = "附加信息(选填，45字内)";
	Lang_Js_Friend[23] = "申请已经发送，请等待“<b>{tpl:name}</b>”确认.";
	Lang_Js_Friend[24] = "“<b>{tpl:name}</b>”已经是你的好友.";
	Lang_Js_Friend[25] = "对“<b>{tpl:name}</b>”的好友申请发送失败.";
	Lang_Js_Friend[26] = "我的好友申请";
	Lang_Js_Friend[27] = "接受“<b>{tpl:name}</b>”的好友请求";
	Lang_Js_Friend[28] = "未分组好友";
	Lang_Js_Friend[29] = "未知分组好友";
	Lang_Js_Friend[30] = "选择好友分组";
	Lang_Js_Friend[31] = "建新分组";
	Lang_Js_Friend[32] = "您的操作动作太过频繁，请喝口茶后再试.";
	Lang_Js_Friend[33] = "拒绝“<b>{tpl:name}</b>”的好友请求";
	Lang_Js_Friend[34] = "拒绝理由(选填,45字内)";
	Lang_Js_Friend[35] = "系统运行错误:操作失败";
	Lang_Js_Friend[36] = "忽略“<b>{tpl:name}</b>”的好友请求";
	Lang_Js_Friend[37] = "自己是自己最好的朋友，所以不用加自己为好友.";
	Lang_Js_Friend[38] = "无好友申请";
	Lang_Js_Friend[39] = "请求加你为好友";
	Lang_Js_Friend[40] = "接受了你的好友请求并加你为好友";
	Lang_Js_Friend[41] = "拒绝了你的好友请求";
	Lang_Js_Friend[42] = "对方已经是你的好友，请在好友页面删除.";
	Lang_Js_Friend[43] = "成功接受对方的好友请求并加对方为好友.";
	Lang_Js_Friend[44] = "对方已经是你的好友.";
	Lang_Js_Friend[45] = "分组名称";
	Lang_Js_Friend[46] = "分组成员";
	Lang_Js_Friend[47] = "批量操作好友申请完成.";
	Lang_Js_Friend[48] = "批量操作好友申请失败.";
	Lang_Js_Friend[49] = "";
	
	
var Lang_Js_Tie = [];
    Lang_Js_Tie[1]  = "请填写回复内容.";
	Lang_Js_Tie[2]  = "请填写内容.";
	Lang_Js_Tie[3]  = "数据提交成功！";
	Lang_Js_Tie[4]  = "数据提交失败！";
	Lang_Js_Tie[5]  = "暂无相关内容.";
	Lang_Js_Tie[6]  = "输入验证码";
	Lang_Js_Tie[7]  = "验证码不正确.";
	Lang_Js_Tie[8]  = "请勿非法操作!";
	Lang_Js_Tie[9]  = "内容不存在.";
	Lang_Js_Tie[10] = "禁止评论.";
	Lang_Js_Tie[11] = "谢谢您！评论提交成功。";
	Lang_Js_Tie[12] = "谢谢您！成功提交商品咨询。";
	Lang_Js_Tie[13] = "谢谢您！成功发表商品评论。";
	Lang_Js_Tie[14] = "谢谢您！评论提交成功，您的评论需要经过管理员审核才能显示。";
	Lang_Js_Tie[15] = "谢谢您！商品咨询提交成功，您的咨询需要经过管理员审核才能显示。";
	Lang_Js_Tie[16] = "谢谢您！商品评论提交成功，您的评论需要经过管理员审核才能显示。";
	
	
var Lang_Js_Shop = [];
	Lang_Js_Shop[1]   = "暂无相关商品";
	Lang_Js_Shop[2]   = "温馨提醒: 您的购物车已经有该商品了.";
	Lang_Js_Shop[3]   = "温馨提醒: 您的购物车已经满了，请先去下单结帐后再回来买商品.";
	Lang_Js_Shop[4]   = "成功加入购物车！";
	Lang_Js_Shop[5]   = "请选择搭配商品！";
	Lang_Js_Shop[6]   = "本套装最少得选择{$:AdjunctMinNum}个搭配商品,您目前只选了{$:AdjunctSelectGoodsNum}个搭配商品！";
	Lang_Js_Shop[7]   = "本套装最多允许选择{$:AdjunctMaxNum}个搭配商品,您目前已选了{$:AdjunctSelectGoodsNum}个搭配商品！";
	Lang_Js_Shop[8]   = "温馨提醒: 您的购物车已经有该套装了.";
	Lang_Js_Shop[9]   = "温馨提醒: 您的购物车已经满了，请先去下单结帐后再回来买商品.";
	Lang_Js_Shop[10]  = "已成功清空购物车.";
	Lang_Js_Shop[11]  = "[套装]";
	Lang_Js_Shop[12]  = "[查看套装详细]";
	Lang_Js_Shop[13]  = "[收起套装详细]";
	Lang_Js_Shop[14]  = "操作提醒：请在“收货人信息”中请选择“收货地区”.";
	Lang_Js_Shop[15]  = "温馨提示：您购买的商品数量已经超出库存数量!";
	Lang_Js_Shop[16]  = "暂无相关商品";
	Lang_Js_Shop[17]  = "暂无送货方式可选";
	
	
var Lang_Js_Order = [];
    Lang_Js_Order[0] = "订单";
	Lang_Js_Order[1] = "订单号";
	Lang_Js_Order[2] = "下单时间";
	Lang_Js_Order[3] = "总金额";
	Lang_Js_Order[4] = "已支付";
	Lang_Js_Order[5] = "订单状态";
	Lang_Js_Order[6] = "支付状态";
	Lang_Js_Order[7] = "发货状态";
	Lang_Js_Order[8] = "操作";
	Lang_Js_Order[9] = "查看详细";
	Lang_Js_Order[10]= "付款";
	Lang_Js_Order[11]= "订单不存在.";
	Lang_Js_Order[12]= "订单号不正确.";
	Lang_Js_Order[13]= "你无权查看该订单.";
	Lang_Js_Order[14]= "选择支付方式";
	Lang_Js_Order[15]= "确认支付";
	Lang_Js_Order[16]= "收货人信息";
	Lang_Js_Order[17]= "收货人姓名";
	Lang_Js_Order[18]= "收货人Email";
	Lang_Js_Order[19]= "配送地区";
	Lang_Js_Order[20]= "收货人地址";
	Lang_Js_Order[21]= "收货人邮编";
	Lang_Js_Order[22]= "联系电话";
	Lang_Js_Order[23]= "联系手机";
	Lang_Js_Order[24]= "配送方式";
	Lang_Js_Order[25]= "付款方式";
	Lang_Js_Order[26]= "送货时间";
	Lang_Js_Order[27]= "商品重量";
	Lang_Js_Order[28]= "订单附言";
	Lang_Js_Order[29]= "是否开票";
	Lang_Js_Order[30]= "发票抬头";
	Lang_Js_Order[31]= "购买的商品";
	Lang_Js_Order[32]= "排序";
	Lang_Js_Order[33]= "图片";
	Lang_Js_Order[34]= "名称";
	Lang_Js_Order[35]= "价格";
	Lang_Js_Order[36]= "数量";
	Lang_Js_Order[37]= "金额小计";
	Lang_Js_Order[38]= "商品总价格";
	Lang_Js_Order[39]= "配送费用";
	Lang_Js_Order[40]= "配送保价费";
	Lang_Js_Order[41]= "发票税金";
	Lang_Js_Order[42]= "订单总金额";
	
var Lang_Js_OrderPay = [];
    Lang_Js_OrderPay[0] = "订单支付"
	
var Lang_Js_OrderStatus = [];
    Lang_Js_OrderStatus[1] = "活动订单"
    Lang_Js_OrderStatus[2] = "已作废"
    Lang_Js_OrderStatus[3] = "已完成"
	 
var Lang_Js_PayStatus = [];
     Lang_Js_PayStatus[0] = "未支付";
	 Lang_Js_PayStatus[1] = "已支付";
	 Lang_Js_PayStatus[2] = "处理中";
	 Lang_Js_PayStatus[3] = "部分付款";
	 Lang_Js_PayStatus[4] = "部分退款";
	 Lang_Js_PayStatus[5] = "全额退款";
	 
var Lang_Js_ShipStatus = [];
	Lang_Js_ShipStatus[0]  = "未发货";
	Lang_Js_ShipStatus[1]  = "已发货";
	Lang_Js_ShipStatus[2]  = "部分发货";
	Lang_Js_ShipStatus[3]  = "部分退货";
	Lang_Js_ShipStatus[4]  = "已退货";
	Lang_Js_ShipStatus[5]  = "发货状态";
	
var Lang_Js_PayTradeRecord = [];
    Lang_Js_PayTradeRecord[0] = "交易记录";
	Lang_Js_PayTradeRecord[1] = "交易类型";
	Lang_Js_PayTradeRecord[2] = "交易单号";
	Lang_Js_PayTradeRecord[3] = "交易金额";
	Lang_Js_PayTradeRecord[4] = "状态";
	Lang_Js_PayTradeRecord[5] = "时间";
	Lang_Js_PayTradeRecord[6] = "备注";
	
var Lang_Js_Vote = [];
    Lang_Js_Vote[0]  = "投票系统";
	Lang_Js_Vote[1]  = "投票";
	Lang_Js_Vote[2]  = "(可选{tpl:votemode_mode}个)";
	Lang_Js_Vote[3]  = "发起时间：";
	Lang_Js_Vote[4]  = "参与人数：";
	Lang_Js_Vote[5]  = "模板制作错误:不存在id为\"votedetail\"的对象.";
	Lang_Js_Vote[6]  = "投票成功!";
	Lang_Js_Vote[7]  = "投票失败!";
	Lang_Js_Vote[8]  = "最多允许选择{tpl:votemode_mode}项.";
	Lang_Js_Vote[9]  = "请选择你要投票的候选项！";
	
var Lang_Js_Guestbook = [];
    Lang_Js_Guestbook[0]  = "在线留言";
	Lang_Js_Guestbook[1]  = "暂无留言";
	Lang_Js_Guestbook[2]  = "正在提交留言...";
	Lang_Js_Guestbook[3]  = "留言成功，请等待管理员审核。";
	Lang_Js_Guestbook[4]  = "请填写留言内容！";
	Lang_Js_Guestbook[5]  = "请填写验证码！";
	Lang_Js_Guestbook[6]  = "您填写的邮箱不是有效的邮箱地址！";
	Lang_Js_Guestbook[7]  = "留言失败，请稍后再试试！";
	Lang_Js_Guestbook[8]  = "验证码填写错误！";
	

	


	
	
	
	
	
	
	
	
	
	
	
	
	