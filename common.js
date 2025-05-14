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

		
	    $.getJSON('/MenuList.json', function(data) {
	      const html = undefined || [];
				
	      $.each(data, function(i, item) {
					html.push('<div class="menuList">');
					html.push('<dl>');
					html.push('<dt>' + item.menuName + '</dt>');
					html.push('<dd>' + item.depth1 + '</dd>');
					html.push('<dd>' + item.depth2 + '</dd>');
					html.push('<dd><a href='+ item.devUrl +' class="dev" target="_blank">개발</a></dd>');
					html.push('<dd><a href='+ item.mainUrl +' class="main" target="_blank">운영</a></dd>');
					html.push('<dd>' + item.update + '</dd>');
					html.push('</dl>');
					html.push('</div>');
	      });
	      // console.log(html);
	      $('.traget').html(html.join(''));
	    });
	});