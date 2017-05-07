define(function(){
    function modal(options){
        this.modalEle=$('.modalEle');
        this.dis(options);
    }
    modal.prototype.dis=function(o){
        if(o['display']=='none'){
            this.modalEle.addClass('dis-n');
            $('#formTest fieldset').attr('disabled',false)
        }else{
            this.modalEle.removeClass('dis-n');
            $('#formTest fieldset').attr('disabled',true)
            
        }
    }
    // modal.prototype.hide=function(){
    //     this.modalEle.addClass('dis-n');
    // }
    return modal;
});