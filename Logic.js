var Logic={};
Logic.init=function(){
	//显示初始化页面
    //绑定动态搜索下拉框
    //城市下拉列表
    $(".search-bar-button.city").click(function(){
    	Logic.closeAllList();
    	$(".search-list.city-list").toggle();
    });
    //选择人数绑定事件
        $(".search-bar-button.people").click(function(){
    	Logic.closeAllList();
    	$(".search-list.people-list").toggle();
    });
    //排序列表
        $(".search-bar-button.default").click(function(){
    	Logic.closeAllList();
    	$(".search-list.default-list").toggle();
    });
    //选择具体下拉框列表交互
    $(".search-list").click(function(){
        Logic.closeAllList();
    });
    //点击查看具体详情交互
    $(".search-example").click(function(){
    	Logic.closeIndexHtml();
    	Logic.showDetilesHtml();
    });
    //左翻页按钮绑定交互
    $(".detiles-turn-left").click(function(){
      var style=$(".bg.detile-right").css('display');
        if(style=='block'){
        	Logic.closeDetilesHtml();
        	Logic.showDetilesHtml();
        }
        else{
        	Logic.closeDetilesHtml();
        	Logic.showDetileLeft();
        }

    });
    //右翻页按钮绑定交互
    $(".detiles-turn-right").click(function(){
    	 var style=$(".bg.detile-left").css('display');
        if(style=='block'){
        	Logic.closeDetilesHtml();
        	Logic.showDetilesHtml();
        }
        else{
        	Logic.closeDetilesHtml();
        	Logic.showDetileRight();
        }
    });
    //点击房东显示详细房东信息。
    $(".detiles-master").click(function(){
        Logic.closeDetilesHtml();
        Logic.showMaster();
    });

    //绑定返回首页
    $(".button-back").click(function(){
            Logic.closeDetilesHtml();
            Logic.showIndexHtml();
    });
    //绑定查看图片交互
    $(".button-check").click(function(){
        Logic.closeDetilesHtml();
        Logic.showLookingHtml();
    })
    //关闭查看图片
    $(".close-img").click(function(){
        Logic.closeDetilesHtml();
        Logic.showDetilesHtml();
    })


}
Logic.closeAllList=function(){
	$(".search-list").hide();
}
Logic.closeIndexHtml=function(){

	$(".bg.index").css('display','none');

}
Logic.showIndexHtml=function(){
    Logic.closeAllList();
	$(".bg.index").css('display','block');
}
Logic.closeDetilesHtml=function(){
	$(".detiles").css('display','none');
		Logic.closeDetileLeft();
	Logic.closeDetileRight();
    Logic.closeMaster();
    Logic.closeLookingHtml();
}
Logic.showDetilesHtml=function(){
	$(".detiles").css('display','block');

}
///关闭/显示详情左页面
Logic.showDetileLeft=function(){
	$(".bg.detile-left").css('display','block');
}
Logic.showDetileRight=function(){
    $(".bg.detile-right").css('display','block');
}
//关闭详情右页面
Logic.closeDetileLeft=function(){
  $(".bg.detile-left").css('display','none');
}
Logic.closeDetileRight=function(){
  $(".bg.detile-right").css('display','none');
}
//显示作业面
//房东页面
Logic.closeMaster=function(){
  $(".bg.master").css('display','none');
}

Logic.showMaster=function(){
  $(".bg.master").css('display','block');
}

///查看图片页面

Logic.showLookingHtml=function(){
    $(".lookingBG").css('display','block');
}
Logic.closeLookingHtml=function(){
    $('.lookingBG').css('display','none');
}