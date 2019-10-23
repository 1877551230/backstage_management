
$(function(){
	
	//给form表单添加submit事件
	$("form").submit(function(){
		return login();
	});
});
function login(){
	//获取页面数据
	var adminName=$("form input[name=adminName]").val();
	var adminPassword=$("form input[name=adminPassword]").val();
	$.ajax({
		url:"http://www.ms.com/user/login",
		type:"get",
		data:{"adminName":adminName,"adminPassword":adminPassword},
		dataType:"json",
		success:function(result){
			//result是服务端返回的数据
			if(result.status==200){
				//window.location.href="index.html";
				window.location.href="index.html";
			}else{
				alert("登录失败");
			}
		},
		error:function(){
			alert("请求失败!");
		}
	});
	return false;
}
