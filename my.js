/*
	jq的结构
	$();
	function(){}
	$(#id).click();
	function(){};
	语句
	
*/

$(document).keypress(function(e) {
	// 回车键事件
	if(e.which == 13)
	{ jQuery("#toSearch").click(); }
});

$(function(){
	$("#toSearch").click(function(){
		chrome.tabs.getSelected(null, function (tab) {
			//alert(tab.url);
			//alert(typeof(tab.url));测试类型->string
			
			var str=tab.url;
			var arr1=str.split("//");
			var arr2=arr1[1].split("/");
			var result=arr2[0];
			//alert(result);
			
			//下面的是正则表达式，patt正则，str字符串，正则没写完
			//var patt=new RegExp("/^///&/","i");
			//var result=patt.exec(str);
			//alert(result);
			window.open("https://www.google.co.jp/search?q="+$("#keyword").val()+" site:"+result);
		});
		//alert(window.location.href);这个方法的地址是popup的地址所以不行
	});
});