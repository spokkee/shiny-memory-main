(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    
  }); // end of document ready
})(jQuery); // end of jQuery name space

function toggle_visibility(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display!='none') ? 'none' : 'block');
  }
