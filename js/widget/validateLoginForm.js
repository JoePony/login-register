/*
表单验证组件，依赖validate第三方插件
*/ 
define(['validate','getStorage','dialogBounce'],function(validate,getStorage,dialogBounce){
    function ValidateLoginForm(){
        this.form=$('#form-login');
        this.init();
    }

    // 初始化
    ValidateLoginForm.prototype.init=function(){
        this.validatorLogin();
    };
    ValidateLoginForm.prototype.bind=function(){

    }
    // 获取注册表单
    // ValidateLoginForm.prototype.render=function(){
        
    // };
    /* 自定义合法的用户名正则 */ 
    $.validator.addMethod('isUsernameLegal',function(value,element){
        return /^\s*[a-zA-Z]\w{4,19}\s*$/.test(value);
    });

    // 登录表单验证方法
    ValidateLoginForm.prototype.validatorLogin=function(){
        var username=this.form.username;
        _form=this.form;
        _form.validate({
            rules:{
                username:{
                    required:true
                },
                psw:{
                    required:true
                }           
            },
            messages:{
                username:'用户名是必须的',
                psw:'密码也是必须的'
            },
            submitHandler:function(){
                var _formUsername=_form[0].username,
                    _formPsw=_form[0].psw;
                var result=getStorage.result({type:'sessionStorage',key:_formUsername.value});
                if(result===_formPsw.value){
                    location.assign('http://joepony.github.io/dom-1/');
                }else{
                    _formPsw.focus();
                    _formPsw.value='';
                    new dialogBounce({
                        appendToEle:document.querySelector('#form-wrap'),
                        msg:'用户名或密码错误'
                    });
                }
            }
            ,
            debug:true
        })
    }
    return ValidateLoginForm;
});