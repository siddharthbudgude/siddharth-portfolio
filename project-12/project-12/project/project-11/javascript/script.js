$(document).ready(function(){
    $(".sidd").owlCarousel({
      nav:true  ,
      dots:false,
      navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      slideBy:1,
      items:1,
      margin:10,
      autoplay:false,
      items:1,
      animateIn:'fastIn',
      animateOut:'fadeOut',
      loop:true,
      responsive:{
        0:{
            items:1,
            nav:true,
        },
        768:{
            items:1,
            nav:true,
        },
        992:{
            items:1,
        }



      }
    });
    $(".sidd").on("mousewheel",'.owl-stage',function(e){
        if(e.deltaY>0){
            $(".sidd").trigger('next.owl');
        }else{
            $(".sidd").trigger('prev.owl');
        }
        e.preventDefault();
    })

   

});
$(document).ready(function(){
$(".sidd-1").owlCarousel({
      nav:true  ,
      dots:false,
      navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      slideBy:1,
      items:1,
      margin:10,
      autoplay:false,
      items:1,
      animateIn:'fastIn',
      animateOut:'fadeOut',
      loop:true,
      responsive:{
        0:{
            items:1,
            nav:true,
        },
        768:{
            items:2,
            nav:true,
        },
        992:{
            items:4,
        }



      }
    });
});
$(document).ready(function(){
    $(".sidd-2").owlCarousel({
          nav:true,
          dots:false,
          navText:["<span><i class='fas fa-chevron-left'></i></span>","<span><i class='fas fa-chevron-right'></i></span>"],
          slideBy:1,
          items:1,
          margin:10,
          autoplay:true,
          items:1,
          animateIn:'fastIn',
          animateOut:'fadeOut',
          loop:true,
          responsive:{
            0:{
                items:1,
                nav:true,
            },
            768:{
                items:2,
                nav:true,
            },
            992:{
                items:3,
                nav:true
            }
    
    
    
          }
        });
    });

    $(document).ready(function(){
        $(".sidd-3").owlCarousel({
              nav:true  ,
              dots:false,
              navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
              slideBy:1,
              items:1,
              margin:10,
              autoplay:false,
              items:1,
            //   animateIn:'fastIn',
            //   animateOut:'fadeOut',
              loop:true,
              responsive:{
                0:{
                    items:1,
                    nav:true,
                },
                768:{
                    items:1,
                    nav:true,
                },
                992:{
                    items:1,
                    nav:true
                }
        
        
        
              }
            });
        });
    