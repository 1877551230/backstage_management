$(function(){
	 var oTable = $('.table').dataTable();
            var oSettings = oTable.fnSettings();
            var rows=oSettings._iDisplayLength;
            var page=oSettings._iDisplayStart;
            
            // 获取页码值
            //alert(oSettings._iDisplayStart);
            //获取页面分割长度
            //alert(oSettings._iDisplayLength);
 $.ajax({
            type:"get",
            url:"/products/pageManage",
            data:{"page":page,"rows":rows},
            dataType:"json",
            success:function (data) {
	            $("#list").html("");
	            if(data.rows.length>0)
                {
	                $.each( data.rows,function (index, values) {

				t.row.add([
   						"<tr class='text-c'><th width='25'><input type='checkbox' name='' value=''></th></tr>",
						"<td>"+values.movieName+"</td>",
						"<td><a href='javascript:;'><img width='210' class='picture-thumb' src='"+values.movieImage+"'></a></td>",
						"<td>"+values.movieDescription+"</td>",
						"<td>"+values.movieUptime+"</td>",
						"<td class='td-status'><span class='label label-success radius'>已发布</span></td>",
						"<td class='td-manage'><a style='text-decoration:none' onClick='picture_stop(this,'10001')' href='javascript:;' title='下架'><i class='Hui-iconfont'>&#xe6de;</i></a> <a style='text-decoration:none' class='ml-5' onClick='movie_add('电影编辑','movie-add.html')' href='javascript:;' title='编辑'><i class='Hui-iconfont'>&#xe6df;</i></a> <a style='text-decoration:none' class='ml-5' onClick='picture_del(this,'10001')' href='javascript:;' title='删除'><i class='Hui-iconfont'>&#xe6e2;</i></a></td></tr>"
   						]).draw();

		                
		                
                       /* $("#list").append(
"<tr class='text-c'><td><input type='checkbox'></td>"+
"<td>"+values.movieName+"</td>"+
"<td><a href='javascript:;'><img width='210' class='picture-thumb' src='"+values.movieImage+"'></a></td>"+
"<td>"+values.movieDescription+"</td>"+
"<td class='text-c'>"+values.movieType+"</td>"+
"<td>"+values.movieUptime+"</td>"+
"<td class='td-status'><span class='label label-success radius'>已发布</span></td>"+
"<td class='td-manage'><a style='text-decoration:none' onClick='picture_stop(this,'10001')' href='javascript:;' title='下架'><i class='Hui-iconfont'>&#xe6de;</i></a> <a style='text-decoration:none' class='ml-5' onClick='movie_add('电影编辑','movie-add.html')' href='javascript:;' title='编辑'><i class='Hui-iconfont'>&#xe6df;</i></a> <a style='text-decoration:none' class='ml-5' onClick='picture_del(this,'10001')' href='javascript:;' title='删除'><i class='Hui-iconfont'>&#xe6e2;</i></a></td></tr>"    
                        );*/
                    }
                );
                }
            },
        });
});