(function ($) {

    new WOW().init();

    jQuery(window).load(function() { 
        jQuery("#preloader").delay(100).fadeOut("slow");
        jQuery("#load").delay(100).fadeOut("slow");
    });
    
    //nav pills
    $(".nav.nav-pills li").on("click",function(){
        $(".nav.nav-pills li").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".nav.nav-pills li a").on("click",function(){
        $('.toggle-content').hide();
        $($(this).attr('href')).show();
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
    
    //settingsModal
    
    $("#settingsBtn").click(function(evt) {
        $("#settingsModal").modal('show');
    })
    
    //endSettingsModal
    
    //loginModal
    
    $("#navLoginButton").click(function(evt) {
        document.getElementById("inputLoginUsername").value = "";
        document.getElementById("inputLoginPassword").value = "";
        
        $("#loginModal").modal('show');
    });
    
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

})(jQuery);
