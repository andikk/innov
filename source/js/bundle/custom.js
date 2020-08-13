 $(function(){

   $('.js-menu-btn').click(function() {
     $('.navigation__list').toggleClass('opened'); // Открываем верхнее меню
     $('.js-menu-btn').toggleClass('js-change'); // Меняем икноку на кнопке
   });

   $('.navigation__link').click(function() {
     $('.navigation__list').toggleClass('opened'); // Открываем верхнее меню
     $('.js-menu-btn').toggleClass('js-change'); // Меняем икноку на кнопке
   });

   $('a[href*="#"]')
     // Remove links that don't actually link to anything
     .not('[href="#"]')
     .not('[href="#0"]')
     .click(function(event) {
       // On-page links
       if (
         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
         &&
         location.hostname == this.hostname
       ) {
         // Figure out element to scroll to
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         // Does a scroll target exist?
         if (target.length) {
           // Only prevent default if animation is actually gonna happen
           event.preventDefault();
           $('html, body').animate({
             scrollTop: target.offset().top - 60
           }, 1000);
         }
       }
     });

// direct browser to top right away
   if (window.location.hash)  scroll(0,0);
// takes care of some browsers issue
   setTimeout(function(){scroll(0,0);},1);

// if we have anchor on the url (calling from other page)
     if(window.location.hash){
       // smooth scroll to the anchor id
       $('html,body').animate({
         scrollTop:$(window.location.hash).offset().top - 60 + 'px'
       },1000,'swing');
     }

   new WOW().init();

});
