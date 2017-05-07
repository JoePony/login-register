define(function(){
    function formRange(opt){
        // this.ele=opt.ele;
        this.range=opt.ele;
        this.render();
    }
    formRange.prototype.render=function(){
        var result=result || document.createElement('span');
        $(this.range).on('mousedown',function(){
                show(1)
                $(this).after(result);
                $(this).on('mousemove',function(e){
                    // resul
                    result.innerHTML=this.value;
                })
        }).on('mouseup',function(){
                    result.innerHTML='';
            // this.parentNode.removeChild(result)
        })
    }
    return formRange;
});