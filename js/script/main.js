require.config({
    paths: {
        jquery: '../lib/jquery-1.11.3.min',
        validate: '../lib/jquery.validate-v1.13.1.min',

        validateForm: '../widget/validateForm',
        tabSwitch:'../widget/tabSwitch'
            // ,mock:'../lib/mock-min'
            // ,formRange:'formRange'
            // ,calendar:'../lib/tcal.js'
            // ,Calendar:'../lib/Calendar'
    }
});

// require([ 'validateForm','selectRegion','mock','tabSwitch'],function( validateForm,selectRegion,Mock,tabSwitch){
require(['validateForm','tabSwitch'], function(validateForm,tabSwitch) {
    $(document).ready(function() {
        $(window).on('resize', function() {
            show(this.innerWidth)
        });

        /* 初始化切换组建 */
        new tabSwitch({
            tabs:document.getElementById('tabs'),
            panes:document.getElementById('tab-panes'),
            initialIndex:0,
            tabActiveClass:'tab-active',
            eventType:'mouseover'
        });

        // var url='/';
        // var url='http://b.test.com/1/scrollBar/js/ProJson.json';
        // $.ajax(url).done(function(data){
        //     show('ok')
        // }).fail(function(data){
        //     show('failed')
        // });
        // crossDomain();
        // function crossDomain(){
        //     document.domain='test.com';            
        //     window.frames['biframe'].contentWindow.doAjax(function(data){
        //         alert(data)
        //     })
        // }

        /* 表单验证 */
        new validateForm();
        // $('#form-reg').on('submit',function(e){
        //     show(123)
        // })
        // $.getJSON('https://github.com/JoePony/register2/blob/master/js/json/ProJson.json',{},function(res){
        //     show(res)
        // });

        // $('#chooseRegion').on('change',function(){
        //     $(this).closest('div').hide();
        //     $('#form-group-region').fadeIn(300);
        //     var mock=false;
        //     if(mock){
        //         var mockData=Mock.mock('@province')

        //         var mockDat={

        //         }

        //             // { "ProID": 1, "ProName": "北京市", "ProSort": 1, "ProRemark": "直辖市" }, { "ProID": 2, "ProName": "天津市", "ProSort": 2, "ProRemark": "直辖市" }, { "ProID": 3, "ProName": "河北省", "ProSort": 5, "ProRemark": "省份" }

        //         show(mockData)
        //     }
        //     $.ajax({
        //         // url:'selectRegion.php',
        //         url:'https://github.com/JoePony/register2/tree/master/js/json/ProJson.json',
        //         dataType:'jsonp',
        //         callback:'abc',
        //         success:function(res){
        //             show(res.responseText)
        //         }
        //     })

        // });
        // $('#form-reg').validate({
        //     rules:{
        //         username:{
        //             required:true,
        //             minlength:4,
        //             maxlength:10
        //         },
        //         psw:{
        //             required:true,
        //             minlength:6
        //         },
        //         'psw-confirm':{
        //             required:true,
        //             equalTo:'#psw'
        //         },
        //         email:{
        //             email:true
        //         }
        //     },
        //     messages:{
        //         username:{
        //             required:'用户名必填',
        //             minlength: $.validator.format('最小{0}位'),
        //             maxlength: $.validator.format('最大{0}位')
        //         },
        //         psw:{
        //             required:'密码必填',
        //             minlength: $.validator.format('最小{0}位')
        //         },
        //         'psw-confirm':{
        //             required:'请确认密码',
        //             equalTo:'两次密码不一致'
        //         },
        //         email:'Email格式好像不对哦'
        //     }
        // })
    });
    // show(new modal({'display':'none'}))
    // setTimeout(function(){
    // new selectPCD()
    // $('#formTest fieldset').attr('disabled',true)
    // show($('#formTest fieldset'))
    // },1000)
    // $('form').validate();
    /*  */


    // $(document).ready(function(){
    //     $(document).on('resize',function(){
    //         show(this.offsetWidth);
    //     })
    //     $('#form1').on('submit',function(e){
    //         show($(this).serialize())
    //         e.preventDefault();
    //     });

    //     $.ajax({
    //                 url:'ajax.php', 
    //                 data:{'k1':'v1'}, 
    //                 type:'post',
    //                 dataType:'json',
    //                 success:function(res){
    //                 // var resJson=JSON.parse(res);
    //                 show(res)
    //                 // show( resJson)
    //                  $('#username').val(res.address[1].username) 
    //                  // $('#username').val(res[0])
    //                 // $('#username').val(resJson[0]);
    //                 // show(Object.prototype.toString.call(resJson))
    //                 // show(typeof resJson)
    //                 }
    //             })

    //     /* range元素实时显示value */ 
    //     new formRange({ele:document.getElementById('range')});

    //     /* 表单验证 */ 
    //      $('#form1').validate({
    //         //debug:true, //开启调试模式，只调试不提交
    //         //1.配置规则
    //         rules: {  
    //             username: {
    //                 required: false, //是否必填
    //                 // minlength:3, //最小长度
    //                 // maxlength:10, //最大长度
    //                 rangelength: [2, 10], //长度范围
    //                 min: 1, //最大值，其实只适合type=number的情况，在此处用则只会匹配number类型，string类型将无法匹配
    //                 max: 100, //最小值
    //                 range: [1, 100] //范围
    //                     // remote:{  //如果要Ajax验证，比如验证用户名是否存在
    //                     //     url:'validate.php',
    //                     //     type:'post',
    //                     //     data:{
    //                     //         username:this.value
    //                     //     }
    //                     // }
    //             },
    //             range1: {
    //                 rangelength:[0,50],  
    //                 range:[3,60]
    //             },
    //             email: {
    //                 required:{  //每个依赖true或false的规则,都有一个depends方法
    //                     depends:function(element){ 
    //                         return $('#username').is(':filled');  //username填写后才要求必须填写email
    //                     }
    //                 },
    //                 min:{ 
    //                     param:10, //是否校验email最小长度为10，要看是否填写了username
    //                     depends:function(element){ 
    //                         return $('#username').is(':filled');  //username填写后才要求必须填写email
    //                     }
    //                 },
    //                 email: true
    //             },
    //             url: {
    //                 url: true
    //             },
    //             psw:{
    //                 required:false
    //             },
    //             'psw-comfirm':{  //name="psw-confirm"
    //                 required:false,
    //                 equalTo:'#psw'  //验证是否与$('#psw')的值一致
    //             },
    //             number:{
    //                 required:true,
    //                 number:true,
    //                 min:1,
    //                 max:100
    //             },
    //             digits:{
    //                 required:true,
    //                 digits:true //必须>=0的整数
    //             },
    //             date:{
    //             //     required:true,
    //                 dateISO:true //是否要求是dateISO类型，即YYYY-MM-DD或者YYYY/MM/DD
    //             },
    //             postcode:{
    //                 // required:false,
    //                 postcode:true
    //             }
    //             // ,date:{
    //             //     dateISO:true 
    //             // }
    //         },

    //         //2.如果不想用默认提示信息，则自定义提示信息
    //         messages: { 
    //             username: {
    //                 required: "必须输入username",
    //                 // minlength:"最小2位",
    //                 // maxlength:"最大10位",
    //                 rangelength: '请输入5-10位'
    //                     // remote:'不存在的用户名'
    //             },
    //             'psw-comfirm':'两次密码必须一致',
    //             date:'请输入有效的日期 (YYYY-MM-DD) ',
    //             number:'必须数字类型',
    //             digits:'必须是>=0的整数，最小0，最大100' 

    //         },

    //         //3.验证失败后触发的事件 
    //         invalidHandler:function(event,validator){
    //             show('验证失败了,'+'错误数:'+validator.numberOfInvalids())
    //         },

    //         //4.验证通过后触发的事件 
    //         submitHandler:function(){  
    //             show('OK')
    //             show('查看表单序列化结果:'+$('#form1').serialize());
    //             $.ajax({  //通过验证后，可以做相应操作，比如通过ajax提交表单
    //                 //...
    //             })
    //         },

    //         //5.不再对某元素进行校验
    //         ignore:'#number',

    //         //6. group和errorPlaceMent统一显示出错信息
    //         groups:{
    //             username:"password range1 email"  //这个不会用???，参考http://www.imooc.com/video/7485
    //         },
    //         errorPlaceMent:function(error,element){
    //             show('group错误'+error)
    //             $(document.createTextNode('dfdsf')).insertBefore($('#errorGroupsShow'));
    //         }


    //     });
    //         //7.自定义方法不会用???
    //         $.validator.addMethod('postcod',function(value,element,params){
    //             var pattern=/^[0-9]{6}$/;
    //             return pattern.test(value);
    //         },'请填写6位数字')
    //     //
    //     $('#form1 .check').on('click',function(){ 
    //         //3.valid()方法返回是否有表单项填写不符合规范
    //         show($('#form1').valid() ? '表单填写有效' : '有表单填写有问题'); 

    //         //4.ele.rules()获取元素ele的rules规则
    //         show($('#number').rules()); 
    //         //4.ele.rules('add',{x:xx,y:yy}) 添加(或重置)元素ele的rules规则
    //         $('#number').rules('add',{ 'min':1,'max':100})
    //     });
    //     $('#cancel').on('click',function(){  
    //         //4.ele.rules('remove','email') 删除email规则
    //         // $('#number').rules('remove','email')
    //         //4.ele.rules('remove','email') 删除email等多个规则
    //         $('#number').rules('remove','min max')
    //     })


    // });
});
