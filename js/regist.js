
$(function(){
	
	//给form表单添加submit事件
	$("form").submit(function(){
		return register();
	});
});
$("input[name=adminName]").blur(
			function() {
				var adminName = $(this).val();
				

					$.ajax({
						url:"/user/checkUserName",
						type:"post",
						data:{"adminName":adminName},
						dataType:"json",
						success:function(result){
							if (result.status!=200) {
								$("#username_msg").html("用户名已存在");
							} else{
								$("#username_msg").html("<font color='green'>用户名可用</font>");
							}
						},
						error:function(){
							alertt("请求失败！");
						}
					});
				
			});

function register(){
	//获取页面数据
	var adminName=$("form input[name=adminName]").val();
	var adminPassword=$("form input[name=adminPassword]").val();
	var adminPhone=$("form input[name=adminPhone]").val();
	var adminEmail=$("form input[name=adminEmail]").val();
	var cinemaAddress=$("form input[name=cinemaAddress]").val();
	var cinemaName=$("form input[name=cinemaName]").val();
	
	$.ajax({
		url:"user/regist",
		type:"get",
		data:{"adminName":adminName,"adminPassword":adminPassword,"adminPhone":adminPhone,"adminEmail":adminEmail,"cinemaAddress":cinemaAddress,"cinemaName":cinemaName},
		dataType:"json",
		success:function(result){
			//result是服务端返回的数据
			if(result.status==200){
				alert("感谢您的加入");
				//window.location.href="index.html";
				window.location.href="login.html";
		}
		},
		error:function(){
			
			
		}
	});
	return false;
}
