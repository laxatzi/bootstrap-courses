// GOOGLE MAP on homepage
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: 40.736851, lng: 22.920227};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('myGoogleMap'), {zoom: 10, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

    // Load the API from the specified URL
    //  The async attribute allows the browser to render the page while the API loads
    //  The key parameter will contain your own API key (which is not needed for this tutorial)
    // The callback parameter executes the initMap() function

// SMOOTH SCROLLING
    // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#topOfPage']").on('click', function(e) {

    // Make sure this.hash has a value before overriding default behavior
   if (this.hash !== "") {
 
     // Prevent default anchor click behavior
     e.preventDefault();
 
     // Store hash
     var hash = this.hash;
 
     // Using jQuery's animate() method to add smooth page scroll
     // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){
 
       // Add hash (#) to URL when done scrolling (default click behavior)
       window.location.hash = hash;
       });
     } // End if
   });
