(function ($) {

    new WOW().init();

    jQuery(window).load(function() { 
        jQuery("#preloader").delay(100).fadeOut("slow");
        jQuery("#load").delay(100).fadeOut("slow");
    });


    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-nav li a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
    //loginModal
    
    $("#loginButton").click(function(evt) {
        document.getElementById("inputLoginUsername").value = "";
        document.getElementById("inputLoginPassword").value = "";
        
        $("#loginModal").modal('show');
    });
    
    $("#closeLoginModal").click(function(evt) {
        document.getElementById("inputLoginUsername").value = "";
        document.getElementById("inputLoginPassword").value = "";
        
        $('#loginModal').modal('hide');
    });
    
    $("#forgotPasswordButton").click(function(evt) {
        $('#loginModal').modal('hide');
        document.getElementById("recoverPasswordUsername").value = "";
        $("#recoverPasswordModal").modal("show");
        //TODO
    });
    
    $("#submitLoginButton").click(function(evt) {
        $('#loginModal').modal('hide');
        //TODO
    });
    
    $("#signUpFromLoginButton").click(function(evt) {
        $('#loginModal').modal('hide');
        document.getElementById("inputSignupUsername").value = "";
        document.getElementById("inputSignupEmail").value = "";
        document.getElementById("confirmSignupEmail").value = "";
        document.getElementById("inputSignupPassword").value = "";
        document.getElementById("confirmSignupPassword").value = "";
        $("#signupModal").modal("show");
    });
    
    //end loginModal

    //recoverPasswordModal
    
    $("#closeRecoverPasswordModal").click(function(evt) {
        document.getElementById("recoverPasswordUsername").value = "";
        
        $("#recoverPasswordModal").modal('hide');
    });
    
    $("#submitRecoverPassword").click(function(evt) {
        $("#recoverPasswordModal").modal('hide');
    });
    
    //end recoverPasswordModal
    
    //signupModal
    $("#signupButton").click(function(evt) {
        document.getElementById("inputSignupUsername").value = "";
        document.getElementById("inputSignupEmail").value = "";
        document.getElementById("confirmSignupEmail").value = "";
        document.getElementById("inputSignupPassword").value = "";
        document.getElementById("confirmSignupPassword").value = "";
        $("#signupModal").modal("show");
    });
    
    $("#closeSignupModal").click(function(evt) {
        document.getElementById("inputSignupUsername").value = "";
        document.getElementById("inputSignupEmail").value = "";
        document.getElementById("confirmSignupEmail").value = "";
        document.getElementById("inputSignupPassword").value = "";
        document.getElementById("confirmSignupPassword").value = "";
        $("#signupModal").modal("hide");
    });
    
    $("#submitSignupButton").click(function(evt) {
        $("#signupModal").modal("hide");
    });
    
    $("#signupAlreadyAMemberButton").click(function(evt) {
        $("#signupModal").modal("hide");

        document.getElementById("inputLoginUsername").value = "";
        document.getElementById("inputLoginPassword").value = "";
        
        $("#loginModal").modal('show');
    });
    //end signupModal
})(jQuery);
