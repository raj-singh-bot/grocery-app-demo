$( document ).ready(function() {
//slider about-section
    $('.about-section').slick({
        infinite: true,
        dots:false,
        arrows:true,
        nextArrow: '<i class="fas fa-arrow-right"></i>',
        prevArrow: '<i class="fas fa-arrow-left"></i>'
    });
    //slider category section
    $('.category-slider').slick({
        dots: false,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    dots: false
                }
                },
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: false
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true
            }
            }
    ]
    });
    // side menu bar
    $(".menu-bar-main a").click(function(){
        $(".side-menu-bar").addClass("show");
    })
    $(".close-btn a").click(function(){
        $(".side-menu-bar").removeClass("show");
    })
    //accordion
    var acc = document.getElementsByClassName("accordion");
    var i;
                
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        });
    }   
    //side cart
    $(".cart-btn a").click(function(){
        $(".side-cart-section").addClass("show");
    })
    $(".close-cart-btn a").click(function(){
        $(".side-cart-section").removeClass("show");
    })
    //responsive menu
    $(".menu-bar a").click(function(){
        $(".side-menu-bar-common").addClass("show");
    })
    $(".close-btn a").click(function(){
        $(".side-menu-bar-common").removeClass("show");
    })
        
});
