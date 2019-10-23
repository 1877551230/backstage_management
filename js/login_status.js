 $(function(){
            var _ticket = $.cookie("EM_TICKET");
            if(!_ticket){
                window.location.href="login.html";
                return ;
            }
            //当dataType类型为jsonp时，jQuery就会自动在请求链接上增加一个callback的参数
            $.ajax({
                url : "http://www.ms.com/user/query/" + _ticket,
                dataType : "json",
                type : "GET",
                success : function(data){
	                 var _data = JSON.parse(data.data);
	                 var cinemaName=_data.cinemaName;
	                 var adminName=_data.adminName;
	                 //通过id名 adminName找到元素,加入变量adminName
	                  $("#cinemaname").html(cinemaName);
	                 $("#adminName").html(adminName);
	                 if($("#adminname")!=null){
	                  $("#adminname").val(cinemaName);
	                  }
					alert("欢迎你!"+cinemaName+"的管理员"+adminName);
					
                    if(data.status == 200){
                        var _data = JSON.parse(data.data);//jackson
                        if(_data==null){
                            window.location.href="./login.html";
                            return;}
                    }
                },
                error : function(){
                    alert('index error.');
                }
            });
        });

        