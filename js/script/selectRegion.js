define(function(){
    function selectRegion(){
        this.select();
    }
    selectRegion.prototype.select=function(){
        $.ajax({
            url:'js/json/ProJson.json',
            dataType:'json',
            success:function(res){
                // show(res)
                var d=document.createElement('option')
                d.innerHTML=123;
                $('#addressProvince').append($(d))
                show(123)
            },
            error:function(error){
                show(error.responseText)

            }
        });
    }

    return selectRegion;
});