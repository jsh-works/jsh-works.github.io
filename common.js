$(function() {
	    $.getJSON('./MenuList.json', function(data) {
	      const html = undefined || [];
	      const div = undefined || [];
				
	      $.each(data, function(i, item) {
					html.push('<div class="menuList">');
					html.push('<dl>');
					if(item.id === "bookStory") {
						html.push('<dt>📖</dt>');
					} else if(item.id === "e-book") {
						html.push('<dt>💻</dt>');
					}

					
					html.push('<dd class="menu">' + item.menuName + '</dd>');
					html.push('<dd style="width: 20%;"><a href='+ item.devUrl +' class="dev" target="_blank">개발</a></dd>');
					if(!item.mainUrl && item.mainUrl === "") {
						html.push('<dd style="width: 20%;"></dd>');
					} else {
						html.push('<dd style="width: 20%;"><a href='+ item.mainUrl +' class="main" target="_blank">운영</a></dd>');
					}
					html.push('<dd style="width: 20%;" >' + item.update + '</dd>');
					html.push('</dl>');
					html.push('</div>');
	      });
	      // console.log(html);
	      $('.sort').html(div.join(''));
	      $('.traget').html(html.join(''));
	    });
	});