$(function(){
//新增提交表单
$("form").submit(function submitForm(){
       alert("我要submit表单了");
        alert($("#form-admin-add").serialize());
        $.post("/user/save",$("#form-admin-add").serialize(), function(data){
            if(data.status == 200){
                layer.msg('添加成功!',{icon:1,time:1000});
            }
        });
    });
});