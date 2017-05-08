/*
表单验证组件，依赖validate第三方插件
*/ 
define(['validate','setStorage','getStorage','dialogBounce'],function(validate,setStorage,getStorage,dialogBounce){
    function ValidateRegForm(){
        this.form=$('#form-reg');
        this.init();
    }

    // 初始化
    ValidateRegForm.prototype.init=function(){
        this.validatorRegister();
    };
    ValidateRegForm.prototype.bind=function(){

    }
    // 获取注册表单
    // ValidateRegForm.prototype.render=function(){
        
    // };

    // 注册表单验证方法
    ValidateRegForm.prototype.validatorRegister=function(){
        var _form=this.form  //防止作用域引起的问题
        _form.validate({
            // 验证规则
            rules:{
                username:{
                    required:true,
                    isUsernameLegal:true //用自定义正则规则验证
                },
                psw:{
                    required:true,
                    minlength:6
                },
                'psw-confirm':{
                    required:true,
                    equalTo:'#psw'  //重复密码与密码保持一致
                },
                birthday:{
                    required:true,
                    dateISO:true  //严格验证日期
                },
                email:{
                    required:true,
                    email:true  
                }
            },
            // 自定义提示信息
            messages:{
                username:{
                    required:'用户名必填',
                    isUsernameLegal:'仅允许字母开头的5-20位非中文字符'
                },
                psw:{
                    required:'密码必填',
                    minlength: $.validator.format('最小{0}位')
                },
                'psw-confirm':{
                    required:'请确认密码',
                    equalTo:'两次密码不一致'
                },
                birthday:{
                    required:'允许格式:xxxx-xx-xx或xxxx/xx/xx',
                    dateISO:'允许格式:xxxx-xx-xx或xxxx/xx/xx'
                },
                email:{
                    required:'请填写正确的Email格式',
                    email:'请填写正确的Email格式'
                }
            },
            // 只要有单个表单项通过验证
            // success:function(){
            // },
            // 表单整体验证成功 
            submitHandler:function(){
                _form[0].getElementsByTagName('fieldset')[0].setAttribute('disabled',true);
                var _formUsername=_form[0].username.value,
                    _formPsw=_form[0].psw.value;
                new setStorage({
                    type:'sessionStorage',                    
                    data:[{key:_formUsername, value:_formPsw}]
                });

                new dialogBounce({
                    msg:'注册成功，请重新登录',
                    time:1000
                });
                setTimeout(function(){
                    $('.tabs legend').not('tab-active').trigger('click');
                },1000);
            },
            // 调试模式
            debug:true

            // 通过一条验证
            // success:function(){
            //     console.log(_form.serialize())
            // },
            // 通过全部验证
            //     //         //3.验证失败后触发的事件 
            //         invalidHandler:function(event,validator){
            //             show('验证失败了,'+'错误数:'+validator.numberOfInvalids())
            //         },

            //         //5.不再对某元素进行校验
            //         ignore:'#number',

            //         //6. group和errorPlaceMent统一显示出错信息
            //         groups:{
            //             username:"password range1 email" //参考http://www.imooc.com/video/7485
            //         },
            //         errorPlaceMent:function(error,element){
            //             show('group错误'+error)
            //             $(document.createTextNode('dfdsf')).insertBefore($('#errorGroupsShow'));
            //         }

        })
    }
    /* 自定义合法的用户名正则 */ 
    $.validator.addMethod('isUsernameLegal',function(value,element){
        return /^\s*[a-zA-Z]\w{4,19}\s*$/.test(value);
    });

    return ValidateRegForm;
});