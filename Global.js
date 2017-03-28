var Global = {
    url: ""
};
Global.askSearchData = {
    city: "",
    people: "",
    order: ""
}
Global.askDetileData = {}
Global.post = function(url, data, callback) {
        $.ajax({
            type: 'post',
            url: url,
            data: data,
            success: callback
        });
    }
    /*
            data={
        Length:n,
        data1,
        data2:,
        name：
            }
    */
Global.CreatSelectList = function(data) {
    var n = data.Length;
    var strtmp = "";
    var name = data.name;
    var ul = Global.CreateNode("ul", 'search-list clear box-sizing hide ' + name + '-list index', "");
    for (i = 0; i < n; i++) {

    }
}
Global.CreateBgImg = function(data) {

}
Global.CreateNode = function(type, className, text) {
        var newNode;
        if (type == 'img') {
            newNode = $("<" + type + " class='" + className + "'" + " src='" + text + "'/>")
        } else {
            newNode = $("<" + type + " class='" + className + "'>" + text + "</" + type + ">");
        }
        return $(newNode);
    }
    /*
        name:'东京近浅草一室户',
        unit:'CNY',
        price:'150',
        wuzi:'整套',
        people：'4',
        rooms:'1',
        beds:'2',
        toilet:'1',
        imgurl:"./img/usein/search-example.png"
    */
Global.CreateSearchExample = function(data) {
        var search_example = $(Global.CreateNode("div", "search-example clear index", ""));
        var search_example_title = $(Global.CreateNode("div", "search-example-title", ""))
            .append(Global.CreateNode("span", "", data.name));
        var price = $(Global.CreateNode("span", "", data.unit)).append(Global.CreateNode("em", "stronger-number", data.price));
        $(price).appendTo(search_example_title);
        var search_example_brief = $(Global.CreateNode("div", "search-example-brief clear", ""));
        var search_example_img = $(Global.CreateNode("div", "fl search-example-img", "")).append(Global.CreateNode("img", "", data.imgurl));
        var ul = $(Global.CreateNode("ul", "fl search-example-list", ""));

        var oneli = $(Global.CreateNode("li", "", ""))
            .append(Global.CreateNode("i", "zhengtao", ""))
            .append(Global.CreateNode("span", "", data.wuzi));

        var twoli = $(Global.CreateNode("li", "", ""))
            .append(Global.CreateNode("i", "most-people", ""))
            .append(Global.CreateNode("span", "", "最多" + data.people + "人"));
        var threeli = $(Global.CreateNode("li", "", ""))
            .append(Global.CreateNode("i", "number-rooms", ""))
            .append(Global.CreateNode("span", "", data.rooms + "个房间"));
        var fourli = $(Global.CreateNode("li", "", ""))
            .append(Global.CreateNode("i", "number-beds", ""))
            .append(Global.CreateNode("span", "", data.beds + "张床"));

        var fiveli = $(Global.CreateNode("li", "", ""))
            .append(Global.CreateNode("i", "number-tollet", ""))
            .append(Global.CreateNode("span", "", data.toilet + "个卫生间"));

        $(ul).append(oneli)
            .append(twoli)
            .append(threeli)
            .append(fourli)
            .append(fiveli);
        $(search_example_brief).append(search_example_img)
            .append(ul);
        $(search_example).append(search_example_title)
            .append(search_example_brief);
        return search_example;

    }
    //清空bgindex下所有search-examplediv
Global.ClearAllSearchExample = function() {
        $(".search-example").remove();
    }
    //点击搜索列表重新渲染index
Global.ReLoadIndex = function() {
        Global.ClearAllSearchExample();
        Global.post(url, Global.askSearchData, function(result) {
            var len = result.length;
            for (var i = 0; i < len; i++) {
                var example = $(Global.CreateSearchExample(result[i]));
                $(".bg.index").append(example);
            }
        })
    }
    /*var testDetileJSON={
         masterImgUrl:'./img/usein/master-head.png',
         masterWeiXinName:"房东微信昵称",
         otherHouses:['东京近浅草一室户','东京新宿两室一厅','大阪日本桥站两层独栋'],
         houseDescribe:'装修精致的一室户，非常适合情侣入住，距离市中心步行仅需10分钟'，
         peakPrice:'150',
         peakUnit:'CNY',
         slackPrice:'250',
         slackUnit:'CNY',
         checkImgUrl:"./img/usein/check-looking.png",
         roomsProperty:['整套','4','1','2','1'],
         masterWeiXin:'fangdongweixin',
         weixinClient:'isbugkefu',
         weibo:'http://baidu.com/',
         peopleWrap:'2',
         peopleWrapPrice:'150',
         peopleWrapTime:'CNY/晚',
         extraPrice:'150',
         extraTime:'CNY/晚',
         sweepPrice:'150',
         sweepTime:'CNY/晚',
         guaranteePrice:'1500',
         guaranteeTime:'CNY/人/单/晚'，
         deviceSelected:[1,10],
         ditiezhan:['步行','10'],
         dianchezhan:['步行','10'],
         feijichang:['步行','10'],
         jingdian:['地铁直达','10']
    }
    */
Global.SetDetile = function(data) {
        $(".master-head-img").css("backgroundImage","url('" + data.masterImgUrl + "')");
        $(".master-head-name").html(data.masterWeiXinName);
        //
        $(".master-other-wood").empty();
        data.otherHouses.forEach(function(element, index, array) {
            $(".master-other-wood").append(Global.CreateNode("li", "", element));
        });

        //
        $(".detiles-example-evalutation").html(data.houseDescribe);

        //
        $(".detiles-price-lowest .detiles-price-danwei").html(data.peakUnit);
        $('.detiles-price-heighest .detiles-price-danwei').html(data.slackUnit);

        $(".detiles-price-lowest .stronger-number").html(data.peakPrice);
        $('.detiles-price-heighest .stronger-number').html(data.slackPrice);

        //
        $(".picture-detiles>img").attr('src', data.checkImgUrl);
        //
        $(".detiles-example-devices-text").each(function(i) {
            if (i == 0) {
                $(this).html(data.roomsProperty[i]);
            } else if (i == 1) {
                $(this).html("最多" + data.roomsProperty[i] + "人");
            } else if (i == 2) {
                $(this).html(data.roomsProperty[i] + "个房间");
            } else if (i == 3) {
                $(this).html(data.roomsProperty[i] + "张床");
            } else {
                $(this).html(data.roomsProperty[i] + "个卫生间");
            }
        });
        //
        $("#fangdongweixin").html(data.masterWeiXinName);
        $("#weixinClient").html(data.weixinClient);
        //
        var tmpArr = ['ditiezhan', 'dianchezhan', 'feijichang', 'jingdian'];
        var tmp2 = ['dtz', 'dcz', 'fjc', 'jd'];
        for (var i = 0; i < 4; i++) {
            if (data[tmpArr[i]] == []) {
                $("#" + tmp2[i]).remove();
            } else {
                $("#" + tmp2[i] + " .distance-way").html(data[tmpArr[i]][0]);
                $("#" + tmp2[i] + " .stronger-number").html(data[tmpArr[i]][1]);

            }
        }

        //device
        $(".furniture-select").removeClass("has");
        data.deviceSelected.forEach(function(element, index, array) {
            $(".furniture-select").eq(element).addClass("has");
        });

        //
        $(".detiles-warps-right-first .people-labor-time").each(function(i) {
            if (i == 0) {
                $(this).html(data.peopleWrapTime);
            } else if (i == 1) {
                $(this).html(data.extarTime);
            } else if (i == 2) {
                $(this).html(data.sweepTime);
            } else if (i == 3) {
                $(this).html(data.guaranteeTime);
            }
        });

        /*     peopleWrap:'2',
             peopleWrapPrice:'150',
             peopleWrapTime:'CNY/晚',
             extraPrice:'150',
             extraTime:'CNY/晚',
             sweepPrice:'150',
             sweepTime:'CNY/晚',
             guaranteePrice:'1500',
             guaranteeTime:'CNY/人/单/晚'，*/
        //labor

        $(".detiles-warps-right-first em").each(function(i) {
            if (i == 0) {
                $(this).html(data.peopleWrap);
            } else if (i == 1) {
                $(this).html(data.peopleWrapPrice);
            } else if (i == 2) {
                $(this).html(data.extraPrice);
            } else if (i == 3) {
                $(this).html(data.sweepPrice);
            } else if (i == 4) {
                $(this).html(data.guaranteePrice);
            }
        });



    } //
