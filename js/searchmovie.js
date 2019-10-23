function searchmovie(){
	var movieName=$("#movieName").val();
		var _ticket = $.cookie("EM_TICKET");
	 var cinemaName=_ticket.split("_")[2];
	 alert(cinemaName);
	 
	 //var oTable = $('.table').dataTable();
           // var oSettings = oTable.fnSettings();
           // var rows=oSettings._iDisplayLength;
            //var page=oSettings._iDisplayStart;
            
            // 获取页码值
            //alert(oSettings._iDisplayStart);
            //获取页面分割长度
            //alert(oSettings._iDisplayLength);
 $.ajax({
            type:"get",
            url:"/products/searchmoviename",
            data:{"movieName":movieName,"cinemaName":cinemaName},
            dataType:"json",
            success:function (data) {
	            $("#list").html("");
	            if(data.rows.length>0)
                {
	                $.each( data.rows,function (index, values) {
		                
                        $("#list").append(
"<tr class='text-c'><td><input type='checkbox'></td>"+
"<td>"+values.movieName+"</td>"+
"<td><a href='javascript:;'><img width='210' class='picture-thumb' src='"+values.movieImage+"'></a></td>"+
"<td>"+values.movieDescription+"</td>"+
"<td class='text-c'>"+values.movieType+"</td>"+
"<td>"+values.movieUptime+"</td>"+
"<td class='td-status'><span class='label label-success radius'>已发布</span></td>"+
"<td class='td-manage'><a style='text-decoration:none' onClick='picture_stop(this,'10001')' href='javascript:;' title='下架'><i class='Hui-iconfont'>&#xe6de;</i></a> <a style='text-decoration:none' class='ml-5' onClick='movie_add('电影编辑','movie-add.html')' href='javascript:;' title='编辑'><i class='Hui-iconfont'>&#xe6df;</i></a> <a style='text-decoration:none' class='ml-5' onClick='picture_del(this,'10001')' href='javascript:;' title='删除'><i class='Hui-iconfont'>&#xe6e2;</i></a></td></tr>"    
                        );
                    }
                );
                }
            },
        });

}

function searchticket(){
	var movieName=$("#movieName").val();
 //var oTable = $('.table').dataTable();
	 
	 		var _ticket = $.cookie("EM_TICKET");
	 var cinemaName=_ticket.split("_")[2];
	 		
           // var oSettings = oTable.fnSettings();
            //var rows=oSettings._iDisplayLength;//获取页面分割长度 
            //var page=oSettings._iDisplayStart;// 获取页码值
 $.ajax({
            type:"get",
            url:"/products/searchticket",
            data:{"movieName":movieName,"cinemaName":cinemaName},
            dataType:"json",
            success:function (data) {
	             $("#list").html("");
	            if(data.rows.length>0)
                {
	                $.each( data.rows,function (index, values) {
		                
                        $("#list").append(

"<tr class='text-c'>"+
"<th width='25'><input type='checkbox' name='' value=''></th>"+
"<td>"+values.movieName+"</td>"+
"<td>"+values.ticketPrice+"</td>"+
"<td>"+values.ticketNum+"</td>"+
"<td>"+values.ticketTime+"</td>"+
"<td>"+values.cinemaName+"</td>"+
"<td class='td-status'><span class='label label-success radius'>已启用</span></td>"	+
"<td class='td-manage'><a style='text-decoration:none' onClick='admin_stop(this,'10001')' href='javascript:;' title='停用'><i class='Hui-iconfont'>&#xe631;</i></a> <a title='编辑' href='javascript:;' onclick='admin_edit('管理员编辑','admin-add.html','1','800','500')' class='ml-5' style='text-decoration:none'><i class='Hui-iconfont'>&#xe6df;</i></a> <a title='删除' href='javascript:;' onclick='admin_del(this,'1')' class='ml-5' style='text-decoration:none'><i class='Hui-iconfont'>&#xe6e2;</i></a></td></tr>"			
                        );
                    }
                );
                }
            },
        });
    }