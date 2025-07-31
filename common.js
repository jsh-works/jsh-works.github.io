$(function() {
	    $.getJSON('./MenuList.json', function(data) {
	      const html = undefined || [];
	      const mob = undefined || [];
	      const div = undefined || [];
				
	      $.each(data, function(i, item) {
					html.push('<div class="menuList">');
					html.push('<dl>');
					html.push('<dt class="menu">' + item.menuName + '</dt>');
					html.push('<dd><a href='+ item.devUrl +' class="dev" target="_blank">개발</a></dd>');
					if(!item.mainUrl && item.mainUrl === "") {
						html.push('<dd></dd>');
					} else {
						html.push('<dd><a href='+ item.mainUrl +' class="main" target="_blank">운영</a></dd>');
					}
					html.push('<dd >' + item.update + '</dd>');
					html.push('</dl>');
					html.push('</div>');
	      });

	      $.each(data, function(j, item) {
					mob.push('<ul>');
					mob.push('<li class="tit">' + item.menuName + '</li>');
					mob.push('<li class="info">');
					mob.push('<a href='+ item.devUrl +' class="dev" target="_blank">개발</a>');
					mob.push('<span>' + item.update + '</span>');
					mob.push('</li>');
					mob.push('</ul>');
	      });

	      // console.log(html);
	      $('.sort').html(div.join(''));
	      $('.pc-target').html(html.join(''));
	      $('.mob-target').html(mob.join(''));
	    });
	});