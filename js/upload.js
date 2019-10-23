 $("#uploadfile").change(function () {
        var formData = new FormData();
        formData.append("pic", document.getElementById("uploadfile").files[0]);
        $.ajax({
            type: "POST", // 数据提交类型
            url: "http://www.ms.com/uploadImg", // 发送地址
            data: formData, //发送数据
            async: true, // 是否异步
            processData: false, //processData 默认为false，当设置为true的时候,jquery ajax 提交的时候不会序列化 data，而是直接使用data
            contentType: false, //
            success:function (data) {
                if(data.error==0){
                    alert(data.error);
                    alert(data.url);
                    document.getElementById("filename").value=data.url;
                }
            }
        });
    });