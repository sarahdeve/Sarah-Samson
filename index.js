var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
if (mobile) { 

    $('.hidemobile').css('display', 'none'); // OR you can use $('.hidemobile').hide();
} 
else 
{ 
    $('.hideweb').css('display', 'none'); // OR you can use $('.hideweb').hide();
}

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

// https://api.jquery.com/jQuery.ajax
// $.ajax({
//     method: 'POST',
//     url: 'https://formsubmit.co/ajax/0a9b8b8612578cd0c1c2113ca4cde51f',
//     dataType: 'json',
//     accepts: 'application/json',
//     data: {
//         name: "FormSubmit",
//         message: "I'm from Devro LABS"
//     },
//     success: (data) => console.log(data),
//     error: (err) => console.log(err)
// });