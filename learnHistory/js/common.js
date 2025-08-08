$(function () {

	//gnb
	var $gnb_dep1 = $('.gnb-dep01 > li > a');
	var $gnb_dep2 = $('.gnb-dep02-div');
	var $gnbBg = $('.subGnbBack');
	var $Mgnb = $('.mGnb li a');
	
	$gnb_dep1.on('mouseenter focus', function() {
		$('.subGnbBack, .gnb-dep02 > li > a, .gnb-dep02-div').clearQueue();			
		$gnbBg.addClass('active');
		$gnb_dep2.show();
	});

	$('.subGnbBack, .gnb-dep01').on('mouseleave',function() {
		$('.subGnbBack, .gnb-dep02 > li > a').clearQueue();
		$gnbBg.removeClass('active');
		$gnb_dep2.hide();
	});

	$('.gnb-dep01 li:last-child').on('focusout',function() {
		$gnbBg.removeClass('active');
		$gnb_dep2.hide();
	});

	// header gnb
    $('.header-menu > button').on('click', function () {
        $('#totalGnb').addClass('open');
		$('body').addClass('fixed'); 
    });

    $('#totalGnb > .close, #totalDim').on('click', function () {
        $('#totalGnb').removeClass('open');
		$('body').removeClass('fixed');
    });
	
	// 반응형에 따른 totalGnb 팝업 메뉴 처리
	$(window).resize(function(){
		var width = parseInt($(this).width());
		if (width > 1024) {
			$('#totalGnb').removeClass('open');
			$('body').removeClass('fixed');
		}
	}).resize();


	// header-search
	/*
	$('.header-sch .sch-view').on('click focus', function() {
		$('.search').fadeIn(100);
		$('#mask').show().css('z-index','151');
		$('body').addClass('fixed'); 
	});

	$('.search-close').on('click', function() {
		$('.search').fadeOut(100);
		$('#mask').hide().css('z-index','159');
		$('body').removeClass('fixed');
	}); */


	///// main //////
	fnMainTabSlide();
	//top-bnr
    var topBnrSwiper = new Swiper ('.tbnr-slide', {
		speed: 500,
		delay: 7000,
		loop: true,
		longSwipes: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false
		},
		effect: 'slide',
		slidesPerView: 1,
        pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

	// 2022-11-30
	$('.swiper-pagination > span').on('mouseover', function() {
		topBnrSwiper.slideTo($(this).next().index());
	});
    
	//main-visual
    var visualSwiper = new Swiper ('.main-visual', {
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

	//ebook-visual
	var mainBullet = [
        "EBS eBook",
        "고교 추천 eBook",
        "중학 추천 eBook",
        "초등 추천 eBook"
    ];
	
    var visualEbookSwiper = new Swiper ('.main-ebook-visual', {
		speed: 500,
		delay: 7000,
		loop: true,
        allowTouchMove: false,
        slideToClickedSlide: true,
		autoplay: {
			delay: 7000,
            disableOnInteraction: false
		},
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
            renderBullet: function (index) {
                return `
					<span class="dot swiper-pagination-bullet">
						<span class="swiper-active-bg-box active-num0${index + 1}">${mainBullet[index]}</span>
						${mainBullet[index]}
					</span>
				`;
            }
		},
		navigation: {
			nextEl: '.swiper-button-next-ebook',
			prevEl: '.swiper-button-prev-ebook'
		},
    });

	//my-visual
	var visualeBookMySwiper = new Swiper ('.eBook-my-visual', {
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

	// 모바일 헤더
	var moGnb = new Swiper ('.mGnb',{
		speed: 500,
		loop: false,
		slidesPerView: 5.5,
		pagination: false,
		navigation: {
			nextEl: '.swiper-button-next-unique',
			prevEl: '.swiper-button-prev-unique'
		},
		breakpoints: {
			1024: {
				slidesPerView: 7
			},
			767: {
				slidesPerView: 4,
			},
			380: {
				slidesPerView: 3,
			}
		}
	});

	// 추천교재
	$(".main-recom .tab li > a").on("click",function(){
		var n =  $(this).parent().index();
		$(".main-recom .tab li > a").removeClass("active");
		$(this).addClass("active");
		$(".recom-cont > li").removeClass("active");
		$(".recom-cont > li").eq(n).addClass("active");

		switch(n) {
			case 0:
			fnMainBookAction.swiper1();
				break;
			case 1:
			fnMainBookAction.swiper2();
				break;
			case 2:
			fnMainBookAction.swiper3();
				break;
			default:
				// console.log('default');
		}
	})

	// 나의 교재방 - 이용안내 2023-04-25
	const contentCount = document.querySelectorAll(".swiper-slide.skill-info").length; //컨텐츠 
	var eventsBanner = new Swiper('.swiper-events', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		centeredSlides: true,
		autoplay: contentCount > 1 ? { delay: 3000, disableOnInteraction: false } : false, //콘텐츠 갯수가 1일 때 autoplay 중지
		observer: true,
		observeParents: true,
		simulateTouch:false,
		speed: 500,
		navigation: {
			nextEl: contentCount > 1 ? '.swiper-button-next' : '',
			prevEl: contentCount > 1 ? '.swiper-button-prev' : '',
		},
		pagination: false
	});

	var isSwiper1,
		isSwiper2,
		isSwiper3 = false;
	var mainBookSwiper1;
	var mainBookSwiper2;
	var mainBookSwiper3;
	var $mainBookSwiper1 = $('.recom-cont > li:eq(0) .swiper-container');
	var $mainBookSwiper2 = $('.recom-cont > li:eq(1) .swiper-container');
	var $mainBookSwiper3 = $('.recom-cont > li:eq(2) .swiper-container');
	var fnMainBookAction = {
		swiper1: function(){
			if (isSwiper1) return;
			mainBookSwiper1 = new Swiper($mainBookSwiper1, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper1.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper1.find('.btn-next'),
					prevEl: $mainBookSwiper1.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},		
					900 : {  
						slidesPerView : 3.2,
					},
					600 : {  
						slidesPerView : 2.3,
					},
				}
			});
			isSwiper1 = true;
		},
		swiper2: function(){
			if (isSwiper2) return;
			mainBookSwiper2 = new Swiper($mainBookSwiper2, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper2.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper2.find('.btn-next'),
					prevEl: $mainBookSwiper2.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},		
					900 : {  
						slidesPerView : 3.2,
					},
					500 : {  
						slidesPerView : 2.3,
					},
				}
			});
			isSwiper2 = true;
		},
		swiper3: function(){
			if (isSwiper3) return;
			mainBookSwiper3 = new Swiper($mainBookSwiper3, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper3.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper3.find('.btn-next'),
					prevEl: $mainBookSwiper3.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},		
					900 : {  
						slidesPerView : 3.2,
					},
					500 : {  
						slidesPerView : 2.3,
					},
				}
			});
			isSwiper3 = true;
		},
	}
	if ($('.recom-cont > li:eq(0)').hasClass('active')) fnMainBookAction.swiper1();
	
	
	//새로나온교재
	$(".main-newbook .tab li > a").on("click",function(){
		var idx =  $(this).parent().index();
		$(".main-newbook .tab li > a").removeClass("active");
		$(this).addClass("active");
		$(".newbook-cont > li").removeClass("active");
		$(".newbook-cont > li").eq(idx).addClass("active");

		switch(idx) {
			case 0:
			fnMainBookAction2.swiper4();
				break;
			case 1:
			fnMainBookAction2.swiper5();
				break;
			case 2:
			fnMainBookAction2.swiper6();
				break;
			default:
				// console.log('default');
		}
	})

	var isSwiper4,
		isSwiper5,
		isSwiper6 = false;
	var mainBookSwiper4;
	var mainBookSwiper5;
	var mainBookSwiper6;
	var $mainBookSwiper4 = $('.newbook-cont > li:eq(0) .swiper-container');
	var $mainBookSwiper5 = $('.newbook-cont > li:eq(1) .swiper-container');
	var $mainBookSwiper6 = $('.newbook-cont > li:eq(2) .swiper-container');
	var fnMainBookAction2 = {
		swiper4: function(){
			if (isSwiper4) return;
			mainBookSwiper4 = new Swiper($mainBookSwiper4, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper4.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper4.find('.btn-next'),
					prevEl: $mainBookSwiper4.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},		
					900 : {  
						slidesPerView : 3.2,
					},
					500 : {  
						slidesPerView : 2.3,
					},
				}
			});
			isSwiper4 = true;
		},
		swiper5: function(){
			if (isSwiper5) return;
			mainBookSwiper5 = new Swiper($mainBookSwiper5, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper5.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper5.find('.btn-next'),
					prevEl: $mainBookSwiper5.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},		
					900 : {  
						slidesPerView : 3.2,
					},
					500 : {  
						slidesPerView : 2.3,
					},
				}
			});
			isSwiper5 = true;
		},
		swiper6: function(){
			if (isSwiper6) return;
			mainBookSwiper6 = new Swiper($mainBookSwiper6, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper6.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper6.find('.btn-next'),
					prevEl: $mainBookSwiper6.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},		
					900 : {  
						slidesPerView : 3.2,
					},
					500 : {  
						slidesPerView : 2.3,
					},
				}
			});
			isSwiper6 = true;
		},
	}
	if ($('.newbook-cont > li:eq(0)').hasClass('active')) fnMainBookAction2.swiper4();

	//추천 ebook
	$(".main-ebook .tab li > a").on("click",function(){
		var recEbook =  $(this).parent().index();
		$(".main-ebook .tab li > a").removeClass("active");
		$(this).addClass("active");
		$(".ebook-cont > li").removeClass("active");
		$(".ebook-cont > li").eq(recEbook).addClass("active");

		switch(recEbook) {
			case 0:
			fnMainBookAction3.swiper7();
				break;
			case 1:
			fnMainBookAction3.swiper8();
				break;
			case 2:
			fnMainBookAction3.swiper9();
				break;
			default:
				// console.log('default');
		}
	})

	var isSwiper7,
		isSwiper8,
		isSwiper9 = false;
	var mainBookSwiper7;
	var mainBookSwiper8;
	var mainBookSwiper9;
	var $mainBookSwiper7 = $('.ebook-cont > li:eq(0) .swiper-container');
	var $mainBookSwiper8 = $('.ebook-cont > li:eq(1) .swiper-container');
	var $mainBookSwiper9 = $('.ebook-cont > li:eq(2) .swiper-container');
	var fnMainBookAction3 = {
		swiper7: function(){
			if (isSwiper7) return;
			mainBookSwiper7 = new Swiper($mainBookSwiper7, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper7.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper7.find('.btn-next'),
					prevEl: $mainBookSwiper7.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},		
					900 : {  
						slidesPerView : 3.2,
					},
					500 : {  
						slidesPerView : 2.3,
					},
				}
			});
			isSwiper7 = true;
		},
		swiper8: function(){
			if (isSwiper8) return;
			mainBookSwiper8 = new Swiper($mainBookSwiper8, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper8.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper8.find('.btn-next'),
					prevEl: $mainBookSwiper8.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},		
					900 : {  
						slidesPerView : 3.2,
					},
					500 : {  
						slidesPerView : 2.3,
					},
				}
			});
			isSwiper8 = true;
		},
		swiper9: function(){
			if (isSwiper9) return;
			mainBookSwiper9 = new Swiper($mainBookSwiper9, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper9.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper9.find('.btn-next'),
					prevEl: $mainBookSwiper9.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},		
					900 : {  
						slidesPerView : 3.2,
					},
					500 : {  
						slidesPerView : 2.3,
					},
				}
			});
			isSwiper9 = true;
		},
	}
	if ($('.ebook-cont > li:eq(0)').hasClass('active')) fnMainBookAction3.swiper7();
 
	//판매 베스트 eBook
	$(".main-sebest .ebook-tab li > a").on("click",function(){
		var seBest =  $(this).parent().index();
		$(".main-sebest .ebook-tab li > a").removeClass("active");
		$(this).addClass("active");
		$(".sebest-cont > li").removeClass("active");
		$(".sebest-cont > li").eq(seBest).addClass("active");

		switch(seBest) {
			case 0:
			fnMainBookAction4.swiper10();
				break;
			case 1:
			fnMainBookAction4.swiper11();
				break;
			case 2:
			fnMainBookAction4.swiper12();
				break;
			default:
				// console.log('default');
		}
	})

	var isSwiper10,
		isSwiper11,
		isSwiper12 = false;
	var mainBookSwiper10;
	var mainBookSwiper11;
	var mainBookSwiper12;
	var $mainBookSwiper10 = $('.sebest-cont > li:eq(0) .swiper-container');
	var $mainBookSwiper11 = $('.sebest-cont > li:eq(1) .swiper-container');
	var $mainBookSwiper12 = $('.sebest-cont > li:eq(2) .swiper-container');
	// var $mainBookFixedSwiper10 = $('.sebest-cont > li:eq(0) .siwper-fixed-container');
	// var $mainBookFixedSwiper11 = $('.sebest-cont > li:eq(1) .siwper-fixed-container');
	// var $mainBookFixedSwiper12 = $('.sebest-cont > li:eq(2) .siwper-fixed-container');
	var fnMainBookAction4 = {
		swiper10: function(){
			if (isSwiper10) return;
			// mainBookFixedSwiper10 = new Swiper($mainBookFixedSwiper10, {
			// 	loop:false,
			// 	effect :'fade',
			// 	simulateTouch:false,
			// });
			mainBookSwiper10 = new Swiper($mainBookSwiper10, {
				loop:false,
				initialSlide: 0,
				slidesPerView:'5',
				spaceBetween:40,
				pagination: {
					el: '.pagination',
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl:'.swiper-button-next',
					prevEl:'.swiper-button-prev',
				},
				breakpoints : {
					1280: {  
						slidesPerView:'4',
						spaceBetween:48,
					},
					1080: {  
						slidesPerView:'4',
						spaceBetween:30,
					},
					900: {  
						slidesPerView:'3',
						spaceBetween:40,
					},
					767: {
						slidesPerView:'3',
						spaceBetween:28,
					},
					480 : {
						slidesPerView:'2',
						spaceBetween:30,
					},
				},
				// thumbs: {
				// 	swiper: mainBookFixedSwiper10,
				// },					
			});
			isSwiper10 = true;
			$mainBookSwiper10.on('reachEnd', function () {
				mainBookSwiper10 = new Swiper($mainBookSwiper10, {
					allowSlideNext: false
				})
			});
		},
		swiper11: function(){
			if (isSwiper11) return;
			// mainBookFixedSwiper11 = new Swiper($mainBookFixedSwiper11, {
			// 	loop:false,
			// 	effect :'fade',
			// 	simulateTouch:false,
			// });
			mainBookSwiper11 = new Swiper($mainBookSwiper11, {
				loop:false,
				initialSlide: 0,
				slidesPerView:'5',
				spaceBetween:40,
				pagination: {
					el: '.pagination',
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl:'.swiper-button-next',
					prevEl:'.swiper-button-prev',
				},
				breakpoints : {
					1280: {  
						slidesPerView:'4',
						spaceBetween:48,
					},
					1080: {  
						slidesPerView:'4',
						spaceBetween:30,
					},
					900: {  
						slidesPerView:'3',
						spaceBetween:40,
					},
					767: {
						slidesPerView:'3',
						spaceBetween:28,
					},
					480 : {
						slidesPerView:'2',
						spaceBetween:30,
					},
				},
				// thumbs: {
				// 	swiper: mainBookFixedSwiper11,
				// },
			});
			isSwiper11 = true;
			$mainBookSwiper11.on('reachEnd', function () {
				mainBookSwiper11 = new Swiper($mainBookSwiper11, {
					allowSlideNext: false
				})
			});
		},
		swiper12: function(){
			if (isSwiper12) return;
			// mainBookFixedSwiper12 = new Swiper($mainBookFixedSwiper12, {
			// 	loop:false,
			// 	effect :'fade',
			// 	simulateTouch:false,
			// });
			mainBookSwiper12 = new Swiper($mainBookSwiper12, {
				loop:false,
				initialSlide: 0,
				slidesPerView:'5',
				spaceBetween:40,
				pagination: {
					el: '.pagination',
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl:'.swiper-button-next',
					prevEl:'.swiper-button-prev',
				},
				breakpoints : {
					1280: {  
						slidesPerView:'4',
						spaceBetween:48,
					},
					1080: {  
						slidesPerView:'4',
						spaceBetween:30,
					},
					900: {  
						slidesPerView:'3',
						spaceBetween:40,
					},
					767: {
						slidesPerView:'3',
						spaceBetween:28,
					},
					480 : {
						slidesPerView:'2',
						spaceBetween:30,
					},
				},
				// thumbs: {
				// 	swiper: mainBookFixedSwiper12,
				// },
			});
			isSwiper12 = true;
			$mainBookSwiper12.on('reachEnd', function () {
				mainBookSwiper12 = new Swiper($mainBookSwiper12, {
					allowSlideNext: false
				})
			});
		},
	}
	if ($('.sebest-cont > li:eq(0)').hasClass('active')) fnMainBookAction4.swiper10();

	//새로나온 eBook
	$(".main-newEbook .ebook-tab li > a").on("click",function(){
		var newEbook =  $(this).parent().index();
		$(".main-newEbook .ebook-tab li > a").removeClass("active");
		$(this).addClass("active");
		$(".newEbook-cont > li").removeClass("active");
		$(".newEbook-cont > li").eq(newEbook).addClass("active");

		switch(newEbook) {
			case 0:
			fnMainBookAction5.swiper13();
				break;
			case 1:
			fnMainBookAction5.swiper14();
				break;
			case 2:
			fnMainBookAction5.swiper15();
				break;
			default:
				// console.log('default');
		}
	})
	var isSwiper13,
		isSwiper14,
		isSwiper15 = false;
	var mainBookSwiper13;
	var mainBookSwiper14;
	var mainBookSwiper15;
	var $mainBookSwiper13 = $('.newEbook-cont > li:eq(0) .swiper-container');
	var $mainBookSwiper14 = $('.newEbook-cont > li:eq(1) .swiper-container');
	var $mainBookSwiper15 = $('.newEbook-cont > li:eq(2) .swiper-container');
	var fnMainBookAction5 = {
		swiper13: function(){
			if (isSwiper13) return;
			mainBookSwiper13 = new Swiper($mainBookSwiper13, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper13.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper13.find('.btn-next'),
					prevEl: $mainBookSwiper13.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},
					1024 : {  
						slidesPerView : 3.8,
					},
					900 : {  
						slidesPerView : 3.2,
					},
					767 : {  
						slidesPerView : 3.4,
					},	
					640 : {  
						slidesPerView : 2.5,
					},
					480 : {  
						slidesPerView : 1.8,
					},
				}
			});
			isSwiper13 = true;
		},
		swiper14: function(){
			if (isSwiper14) return;
			mainBookSwiper14 = new Swiper($mainBookSwiper14, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper14.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper14.find('.btn-next'),
					prevEl: $mainBookSwiper14.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},
					1024 : {  
						slidesPerView : 3.8,
					},
					900 : {  
						slidesPerView : 3.2,
					},
					767 : {  
						slidesPerView : 3.4,
					},	
					640 : {  
						slidesPerView : 2.5,
					},
					480 : {  
						slidesPerView : 1.8,
					},
				}
			});
			isSwiper14 = true;
		},
		swiper15: function(){
			if (isSwiper15) return;
			mainBookSwiper15 = new Swiper($mainBookSwiper15, {
				loop: false,
				slidesPerView: 5.1,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper15.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper15.find('.btn-next'),
					prevEl: $mainBookSwiper15.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 4.2,
					},
					1024 : {  
						slidesPerView : 3.8,
					},
					900 : {  
						slidesPerView : 3.2,
					},
					767 : {  
						slidesPerView : 3.4,
					},	
					640 : {  
						slidesPerView : 2.5,
					},
					480 : {  
						slidesPerView : 1.8,
					},
				}
			});
			isSwiper15 = true;
		},
	}
	if ($('.newEbook-cont > li:eq(0)').hasClass('active')) fnMainBookAction5.swiper13();

	//추천 eBook 시리즈
	$(".main-ebook-seri .ebook-tab li > a").on("click",function(){
		var newEbookSeri =  $(this).parent().index();
		$(".main-ebook-seri .ebook-tab li > a").removeClass("active");
		$(this).addClass("active");
		$(".ebook-seri-cont > li").removeClass("active");
		$(".ebook-seri-cont > li").eq(newEbookSeri).addClass("active");

		switch(newEbookSeri) {
			case 0:
			fnMainBookAction6.swiper16();
				break;
			case 1:
			fnMainBookAction6.swiper17();
				break;
			case 2:
			fnMainBookAction6.swiper18();
				break;
			default:
				// console.log('default');
		}
	})
	var isSwiper16,
		isSwiper17,
		isSwiper18 = false;
	var mainBookSwiper16;
	var mainBookSwiper17;
	var mainBookSwiper18;
	var $mainBookSwiper16 = $('.ebook-seri-cont > li:eq(0) .swiper-container');
	var $mainBookSwiper17 = $('.ebook-seri-cont > li:eq(1) .swiper-container');
	var $mainBookSwiper18 = $('.ebook-seri-cont > li:eq(2) .swiper-container');
	var fnMainBookAction6 = {
		swiper16: function(){
			if (isSwiper16) return;
			mainBookSwiper16 = new Swiper($mainBookSwiper16, {
				loop: false,
				slidesPerView: 4,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper16.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper16.find('.btn-next'),
					prevEl: $mainBookSwiper16.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 3.8,
					},		
					1080 : {  
						slidesPerView : 3.5,
					},
					767 : {  
						slidesPerView : 2.5,
					},
				}
			});
			isSwiper13 = true;
		},
		swiper17: function(){
			if (isSwiper17) return;
			mainBookSwiper17 = new Swiper($mainBookSwiper17, {
				loop: false,
				slidesPerView: 4,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper17.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper17.find('.btn-next'),
					prevEl: $mainBookSwiper17.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 3.8,
					},		
					1080 : {  
						slidesPerView : 3.5,
					},
					767 : {  
						slidesPerView : 2.5,
					},
				}
			});
			isSwiper14 = true;
		},
		swiper18: function(){
			if (isSwiper18) return;
			mainBookSwiper18 = new Swiper($mainBookSwiper18, {
				loop: false,
				slidesPerView: 4,
				spaceBetween: 25,
				observer: true,
				observeParents: true,
				pagination: {
					el: $mainBookSwiper18.find('.pagination'),
					type: 'bullets',
					clickable: true,
				},
				navigation: {
					nextEl: $mainBookSwiper18.find('.btn-next'),
					prevEl: $mainBookSwiper18.find('.btn-prev'),
				},
				breakpoints : {
					1260 : { 
						slidesPerView : 3.8,
					},		
					1080 : {  
						slidesPerView : 3.5,
					},
					767 : {  
						slidesPerView : 2.5,
					},
				}
			});
			isSwiper15 = true;
		},
	}
	if ($('.ebook-seri-cont > li:eq(0)').hasClass('active')) fnMainBookAction6.swiper16();	


	//family-site
	var familySwiper = new Swiper ('.family-slide', {
		slidesPerView: 8,
		/*breakpoints : {
			1260 : { 
				slidesPerView : 4.6
			},		
			800 : {  
				slidesPerView : 3.6	
			},
			480 : {  
				slidesPerView : 2.6	
			},
		}*/
    });

	//best-slide
    var rankSwiper = new Swiper ('.best-slide', {
		loop: false,
		effect: 'fade',
		slidesPerView: 1,
		observer: true,
		observeParents: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
    });

	//wish-btn
	$('.btn-wish, button.wish').on('click', function() {
		$(this).toggleClass('on');
	});


	//tab
	$('.tab li a').on('click', function() {
		$(this).closest('.tab').find('a').removeClass('active');
		$(this).addClass('active');
	});

	//go-top
	$('.go-top').on('click', function(e) {   	 
		$('html, body').animate({
			scrollTop : 0        		
		}, 200);	
});	

	$(window).scroll(function() {		
		if($(this).scrollTop() > 0){
			$('.go-top').addClass('active');
		}else{
			$('.go-top').removeClass('active');	
		}
	});
	
	
	///// sub //////
	
	//sv-bnr
    var svSlideSwiper = new Swiper ('.sv-slide', {
		speed: 500,
		delay: 2500,
		loop: true,
		autoplay: true,
		effect: 'fade',
		slidesPerView: 1,
		observer: true,
		observeParents: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
    });

	// 20230224 너비에 따라 작동하는 이벤트 관련 코드 삭제
	// fnSort();

	// sort
	$(window).on('scroll', function () {
		// 20230224 너비에 따라 작동하는 이벤트 관련 코드 삭제
		// var winW = $(window).width();
		var scroll = $(window).scrollTop();
		var headerH = $('.top-bnr').height() + $('#Header').height();
		
		if (scroll >= headerH) {
			$('.sort-wrap').addClass('fixed');
		} else {
			$('.sort-wrap').removeClass('fixed');
		}
	});

	$('.sort > ul > li > strong').on('click', function () {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on').next().slideUp(150);
		}
		else {
			$(this).addClass('on').next().slideDown(150);
		}
	});	

	//view-type
	$('.view-type a').on('click', function() {
		$(this).siblings().removeClass('active'); //230120 수정: $('view-type a')를 $(this).siblings() 으로 수정
		$(this).addClass('active');
	});
	

	//location
	$('.snb > a').on('click', function(e){
		$(this).closest('.snb').toggleClass('active');
	});
	
	$(document).mouseup(function(e){ 
		if($('.snb.depth01').has(e.target).length === 0){
			$('.snb.depth01').removeClass('active');
		}
		if($('.snb.depth02').has(e.target).length === 0){
			$('.snb.depth02').removeClass('active');
		}
		if($('.snb.depth03').has(e.target).length === 0){
			$('.snb.depth03').removeClass('active');
		}
		if($('.snb.depth04').has(e.target).length === 0){
			$('.snb.depth04').removeClass('active');
		}
	});

	// 20230224 너비에 따라 작동하는 이벤트 관련 코드 삭제
	// var winW = $(window).width();
	// $(window).on('resize', function() {
	// 	if ( winW != $(window).width() ) {
	// 		fnSort();
	// 		winW = $(window).width();
	// 	}
	// });

	//구매 목록 탭-230118추가/230120 수정(중복 코드 등 정리)
	$(".result-list .ebook-tab li > a").on("click",function(){
		var n =  $(this).parent().index();
		$(".result-list .ebook-tab li > a").removeClass("active");
		$(".result-list-cont > li").removeClass("active");
		$(this).addClass("active");
		$(".result-list-cont > li").eq(n).addClass("active");
	})
});


//추천시리즈
function tabView(obj, id) {
	$('.main-series').hide().removeClass('active');
	$(document.getElementById(id)).show().focus().addClass('active');
	fnMainTabSlide();
}
	
function fnMainTabSlide() {
	var seriesSwiper = new Swiper('.main-series', {
		slidesPerView: 2,
		spaceBetween: 25,
		loop: false,
		observer: true,
		observeParents: true,
		breakpoints : {
			680 : {  
				slidesPerView : 1	
			},
		}
	})
}
 
// 20230224 너비에 따라 작동하는 이벤트 관련 코드 삭제
// function fnSort() {
// 	var winW = $(window).width();
	
// 	if(winW < 1080) {
// 		$('.sort.type2 > ul > li > strong').removeClass('on');
// 		$('.sort.type2 > ul > li > ul').hide();
// 	} else {
// 		$('.sort.type2 > ul > li > strong').addClass('on');
// 		$('.sort.type2 > ul > li > ul').show();
// 	}
// }

function fnTab(obj, id) {
	$('.tab-cnt').hide();
	$(document.getElementById(id)).show().focus();
}

function viewType(obj, id) {
	$('.list-type').hide().removeClass('active');
	$(document.getElementById(id)).show().focus().addClass('active');
}

//230120: 추가
function viewType2(obj, id) {
	$(document.getElementById(id)).siblings().hide().removeClass('active');
	$(document.getElementById(id)).show().focus().addClass('active');
}

function popView(strID){	
	$(strID).css('display', 'block');
	$('#mask').css('display', 'block');
	$('body').addClass('fixed');
}

function popClose(){
	$('div.popup').css('display', 'none');
	$('#mask').css('display', 'none');
	$('body').removeClass('fixed');
}

