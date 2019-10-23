$(function(){
	   
//新增商品提交表单
$("form").submit(function submitForm(){
       alert("我要submit表单了");
        alert($("#form-movie-add").serialize());
        $.post("/products/savemovie",$("#form-movie-add").serialize(), function(data){
            if(data.status == 200){
                alert("新增商品成功");
                document.getElementById("form-movie-add").reset();
                
            }
        });
    });
});
function change(){
	if($("#movieStatus").is(':checked')){
	$("#movieStatus").attr('checked',true).next().attr('checked',false);
}
if($("#movieStatus").next().is(':checked')){
	$("#movieStatus").attr('checked',false);
}
	
}
