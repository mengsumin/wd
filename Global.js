var Global={
	url:""
};
Global.post=function(url,data,callback){
		$.ajax({
			type:'post',
			url:url,
			data:data,
			success:callback
		});
}
Global.CreatSelectList=function(data){

}
Global.CreateBgImg=function(data){
   
}