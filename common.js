$(function() {
	    $.getJSON('./MenuList.json', function(data) {
	      const html = undefined || [];
	      const mob = undefined || [];
	      const div = undefined || [];
				
	      $.each(data, function(i, item) {
					html.push('<div class="menuList">');
					html.push('<dl>');
					if(item.id == 'learnHistory') {
						html.push('<dt class="menu learn">' + item.menuName + '</dt>');
					} else {
						html.push('<dt class="menu">' + item.menuName + '</dt>');
					}
					html.push('<dd><a href='+ item.devUrl +' class="dev" target="_blank">개발</a></dd>');
					if(item.progress == '대기') {
						html.push('<dd style="color:red;">'+ item.progress +'</dd>');
					} else if(item.progress == '진행') {
						html.push('<dd style="color:green;">'+ item.progress +'</dd>');
					} else {
						html.push('<dd>'+ item.progress +'</dd>');
					}
					html.push('<dd >' + item.update + '</dd>');
					html.push('</dl>');
					html.push('</div>');
	      });

	      $.each(data, function(j, item) {
					mob.push('<ul>');
					if(item.id == 'learnHistory') {
						mob.push('<li class="tit learn">' + item.menuName + '</li>');
					} else {
						mob.push('<li class="tit">' + item.menuName + '</li>');
					}
					mob.push('<li class="info">');
					mob.push('<a href='+ item.devUrl +' class="dev" target="_blank">개발</a>');
					mob.push('<span>' + item.update + '</span>');
					mob.push('</li>');
					mob.push('</ul>');
	      });

	      $('.sort').html(div.join(''));
	      $('.pc-target').html(html.join(''));
	      $('.mob-target').html(mob.join(''));
	    });
	});