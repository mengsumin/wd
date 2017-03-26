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
/*
		data={
	Length:n,
	data1,
	data2:,
	name：
		}
*/
Global.CreatSelectList=function(data){
	var n=data.Length;
	var strtmp="";
	var name=data.name;
	var ul=Global.CreateNode("ul",'search-list clear box-sizing hide '+name+'-list index',"");
	for(i=0;i<n;i++)
	{

	}
}
Global.CreateBgImg=function(data){
   
}
Global.CreateNode=function(type,className,text){
		var newNode=$("<"+type+" class='"+className+"'>"+text+"</"+type+">");
		return $(newNode);
}
