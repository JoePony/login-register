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
                $('#addressProvince').append($(d))
            },
            error:function(error){
                show(error.responseText)

            }
        });
    }

    return selectRegion;
});