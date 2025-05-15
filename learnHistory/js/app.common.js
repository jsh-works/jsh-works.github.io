$(function() {
    //app-list-visual
	var visualAppListMySwiper = new Swiper ('.app-list-visual', {
		speed: 500,
		delay: 7000,
		loop: true,
		autoplay: {
			delay: 7000
		},
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
    });
    
    //문항코드 해설 아코디언
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.contents-tlt');

        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
        $next.slideToggle();
        $this.toggleClass('on');

        if (!e.data.multiple) {
            $el.find('.contents-sub').not($next).slideUp().prev(".contents-tlt").removeClass('on');
        }
    }
    
    var accordion = new Accordion($('#accordion'), true); //검색시
    var accordion2 = new Accordion($('#accordionTable'), false); //채점 후
	// var accordion3 = new Accordion($('#accordionLecture'), true); //앱뷰 강의
	var accordion4 = new Accordion($('#mAccordionTab'), true); //모바일 사이즈 탭메뉴

    //구매 목록-20230223 수정
	$(".pur-list .ebook-tab li > a").on("click",function(){
		var n =  $(this).parent().index();
		$(".pur-list .ebook-tab li > a").removeClass("active");
		$(".pur-list-cont > li").removeClass("active");
		$(this).addClass("active");
		$(".pur-list-cont > li").eq(n).addClass("active");
	})
	// $(".pur-list .ebook-tab li > a").on("click",function(){
	// 	$(".pur-list .ebook-tab li > a").removeClass("active");
	// 	$(this).addClass("active");
	// })

	// 설정-탭 (20230217 추가)
	$(".setting-cont .setting-tab li > a").on("click",function(){
		var n =  $(this).parent().index();
		$(".setting-cont .setting-tab li > a").removeClass("active");
		$(".setting-cont .setting-tab-cont > li").removeClass("active");
		$(this).addClass("active");
		$(".setting-cont .setting-tab-cont > li").eq(n).addClass("active");
	})

    //사이드 메뉴 탭버튼
	$('.sort > ul > li > strong').on('click', function () {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on').next().slideUp(150);
		}
		else {
			$(this).addClass('on').next().slideDown(150);
		}
	});	
    //timer 접기
    $('.btn.toggle-btn').on('click', function () {
        $(this).toggleClass('on');
        
		if ($(this).hasClass('on')) {
			$(this).prev().addClass('on');
            $(this).prev().prev().removeClass('on');
		}
		else {
			$(this).prev().removeClass('on');
            $(this).prev().prev().addClass('on');
		}
	});

    //viewType
	$('.view-type a').on('click', function() {
		$(this).siblings().removeClass('active'); //20230223 수정: $('view-type a')를 $(this).siblings() 으로 수정
		$(this).addClass('active');
	});
	//viewType2-20230424 추가
	$('.view-type2 a').on('click', function() {
		$('.view-type2 a').removeClass('active');
		$(this).addClass('active');
	});
});

function viewType(obj, id) {
	$('.list-type').hide().removeClass('on');
	$(document.getElementById(id)).show().focus().addClass('on');
}
// 20230223 추가-상위에 탭 있는 이중탭일 경우 사용(ex.구매목록-appFullPurchaseList.html 참고해서 각 이미지형,목록형 리스트 마크업 구조 변경도 필수)
function viewType2(obj, id) {
	$(document.getElementById(id)).siblings().hide().removeClass('active');
	$(document.getElementById(id)).show().focus().addClass('active');
}