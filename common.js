$(function() {
			$.each($("td.url > a"), function(i,v){
				$(v).text($(v).attr("href"));
			});

			$(".kor").on('click', function() {
				$.each($("td.url > a"), function(i,v){
					$(v).html($(v).attr("href").replace('./en','./kr'));
					$(this).prop('href', $(v).text());
				});
			});
			
			$(".en").on('click', function() {
				$.each($("td.url > a"), function(i,v){
					$(v).html($(v).attr("href").replace('./kr','./en'));
					$(this).prop('href', $(v).text());
				});
			});
	});