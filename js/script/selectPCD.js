define(['modal'],function(_modal) {
    function fn(){
    var ok = true;
    if (ok) {
        var obj;
        $.ajax({
            url: 'ajax.php',
            dataType: 'json',
            beforeSend: function() {
                new _modal({'display':'block'})
            },
            success: function(r) {
                obj = JSON.parse(r);
                var arrProvince = obj.province
                    // show(obj.province)
                var template;
                var province = document.querySelector('#province');
                for (var i = 0, len = arrProvince.length; i < len; i++) {
                    var name = arrProvince[i]['ProName'],
                        proID = arrProvince[i]['ProID'];
                    template = document.createElement('option');
                    template.value = name;
                    template.setAttribute('data-proid', proID);
                    template.innerHTML = name;
                    province.appendChild(template);
                }
            },
            complete: function() {
                new _modal({'display':'none'})
                document.querySelector('#province').focus();
            },
            error: function(err) {
                show(err)
            }
        });

        $('#province').on('change', function() {
            var proID = this.selectedOptions[0].getAttribute('data-proid');
            var elementSelectCity = document.querySelector('#city');
            $(elementSelectCity).children('option:gt(0)').remove();

            for (var i = 0, city = obj['city'], len = city.length; i < len; i++) {
                if (proID == city[i]['ProID']) {
                    var template;
                    name = city[i]['CityName'];
                    template = document.createElement('option');
                    template.value = name;
                    template.setAttribute('data-cityid', city[i]['CityID']);
                    template.innerText = name;
                    elementSelectCity.appendChild(template);
                }
            }
            $(elementSelectCity).children(':first-child').selected;
            $(elementSelectCity).focus();
            // show($(elementSelectCity).children('option:nth-child(1)').attr('selected',true))
        });

        $('#city').on('change', function() {
            var template,
                name,
                arrDistrict = obj.district,
                cityID = this.selectedOptions[0].getAttribute('data-cityid');
            var elementSelectDistrict = document.querySelector('#district');
            $(elementSelectDistrict).children(':gt(0)').remove();
            for (var i = 0, len = arrDistrict.length; i < len; i++) {
                if (arrDistrict[i]['CityID'] == cityID) {
                    name = arrDistrict[i]['DisName']
                        // if()
                        // var template;
                        //     template
                    template = document.createElement('option');
                    template.value = name;
                    template.innerText = name;
                    template.setAttribute('data-districtid', arrDistrict[i]['ID']);
                    elementSelectDistrict.appendChild(template);
                }
            }
            $(elementSelectDistrict).focus();
        });
    }
    $('#formTest').validate();
    }
    return fn;
});
