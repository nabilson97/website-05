$(document).ready(function(){
  //header height
  
  /*
  $('.header').height($(window).height())
  
  $('.header').resize(function() {
    $('.header').height($(window).height())
  })
  */
  
  //loading page
  
  $(window).on('load',function(){
    
    $('.loading').fadeOut(1000,function(){
      
      $('body').css('overflow','auto')
      
    })
    
  })
  
  
  
  //nav color
  
  $(window).scroll(function(){
    if ($(window).scrollTop()>=150){
      $('nav').css({
        'background-color':'#000645',
        'padding':'10px 0'
      })
    }else {
      $('nav').css({
        'background-color':'transparent',
        'padding':'18px'
      })
    }
  })
  
  //nav color on reload
  
  if ($(window).scrollTop() >= 150) {
    $('nav').css({
      'background-color': '#000645',
      'padding': '10px 0'
    })
  } else {
    $('nav').css({
      'background-color': 'transparent',
      'padding': '18px'
    })
  }
  
  
  // to top button
  
  $(window).scroll(function(){
    if ($(this).scrollTop()>250){
      $('.toTopScroll').fadeIn()
    } else {
      $('.toTopScroll').fadeOut()
    }
  })
  
  $('.toTopScroll').click(function(){
    
    $('body, html').animate({
      scrollTop: 0
    },500)
    
    
  })
  
  //testmonials
  
  $('.testmonials .buttons .btn').on('click',function(e){
    
    e.preventDefault()
    
    $($(this).data('click')).siblings().fadeOut(200,function(){
      
      $($(this).data('click')).siblings().removeClass('active')
      
    })
    
    $($(this).data('click')).delay(200).fadeIn(200,function(){
      
      $($(this).data('click')).addClass('active')
      
    })
    
    $(this).addClass('active').siblings().removeClass('active')
   
    
  });
 
 //venobox
 
   $('.venobox').venobox({
     infinigall : true
   });
   
   
   
   
   
   
  //owl-carousel  
  
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots:true,
    center:true,
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }) 
  
  
  //faq
  
  $('.faq .content .list .info i').click(function(){
    
    $(this).parent().siblings('p').slideToggle(200)
    
    if ($(this).hasClass('fas fa-plus-circle')) {
      
      $(this).attr('class','fas fa-minus-circle')
      
      $(this).css('color','#f8234a')
      
      $(this).siblings('h4').css('color','#f8234a')
      
    }else{
      
      $(this).attr('class','fas fa-plus-circle')
      
      $(this).css('color', 'black')
      
      $(this).siblings('h4').css('color', 'black')
      
    }
    
  })
  
  //synco links
  
  $('nav li a').click(function(e){
    
    e.preventDefault()
    
    $('html , body').animate({
      
      scrollTop: $('#'+$(this).data('scroll')).offset().top-110
      
    },1000)
    
    
    
  })
  
  
  //AOS library
  
  $(function(){
    
    AOS.init();
    
    window.addEventListener('load',AOS.refresh)
    
    
  })
  
  

  
  
});




