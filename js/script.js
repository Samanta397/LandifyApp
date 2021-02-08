$('.menu-btn').on('click', function(event){
	event.preventDefault;
	$(this).toggleClass('menu-btn_active');
	$('.menu-list').toggleClass('menu-list_active');
});


var swiper = new Swiper('.swiper-container', {
	slidesPerView: 6,
	loop: true,
	loopFillGroupWithBlank: true,

	breakpoints: {     
		220: {       
		   slidesPerView: 1,
		   spaceBetween: 10     
		},     
		576: {       
		   slidesPerView: 2,       
		 spaceBetween: 20     
		},    
		768: {       
		   slidesPerView: 3,       
		   spaceBetween: 30     
		},
		992: {    
			slidesPerView: 6,       
		    spaceBetween: 30  
		}   
	 }, 
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });


