$(function(){
//新增商品提交表单
$("form").submit(function submitForm(){
       alert("我要submit表单了");
        alert($("#form-ticket-add").serialize());
        $.post("/products/save",$("#form-ticket-add").serialize(), function(data){
            if(data.status == 200){
                alert("新增商品成功");
                 document.getElementById("form-ticket-add").reset();
            }
        });
    });
});