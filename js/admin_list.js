$(function(){
	 var oTable = $('.table').dataTable();
            var oSettings = oTable.fnSettings();
            var rows=oSettings._iDisplayLength;//获取页面分割长度 
            var page=oSettings._iDisplayStart;// 获取页码值
 $.ajax({
            type:"get",
            url:"/user/pageManage",
            data:{"page":page,"rows":rows},
            dataType:"json",
            success:function (data) {
	            if(data.rows.length>0)
                {
	                $.each( data.rows,function (index, values) {
		                
                        $("#list").append(

"<tr class='text-c'>"+
"<th width='25'><input type='checkbox' name='' value=''></th>"+
"<td>"+values.cinemaName+"</td>"+
"<td>"+values.cinemaAddress+"</td>"+
"<td>"+values.adminName+"</td>"+
"<td>"+values.adminPhone+"</td>"+
"<td>"+values.adminEmail+"</td>"+
"<td>超级管理员</td>"+
"<td class='td-status'><span class='label label-success radius'>已启用</span></td>"	+
"<td class='td-manage'><a style='text-decoration:none' onClick='admin_stop(this,'10001')' href='javascript:;' title='停用'><i class='Hui-iconfont'>&#xe631;</i></a> <a title='编辑' href='javascript:;' onclick='admin_edit('管理员编辑','admin-add.html','1','800','500')' class='ml-5' style='text-decoration:none'><i class='Hui-iconfont'>&#xe6df;</i></a> <a title='删除' href='javascript:;' onclick='admin_del(this,'1')' class='ml-5' style='text-decoration:none'><i class='Hui-iconfont'>&#xe6e2;</i></a></td></tr>"			
                        );
                    }
                );
                }
            },
        });
});