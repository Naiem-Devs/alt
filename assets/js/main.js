(function($) {
  "use strict";
  
  document.querySelector('html').classList.remove('no-js');
  if (!window.Cypress) {

    AOS.init({
      mirror: true,
      duration: 1500,
      initClassName: 'aos-init',
      once: true,
    });

  }
 
})(jQuery);
