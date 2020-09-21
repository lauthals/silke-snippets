<script>
// The debounce function receives our function as a parameter

const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  
var logo=document.getElementsByClassName("custom-logo");
  if(window.scrollY !== 0 || !document.body.classList.contains('home')){
    logo[0].setAttribute("src", "https://preview.tza-aachen.de/wp-content/uploads/2020/09/TZA_Logo_TZA_RGB_grau_gross_OZ.png")
    logo[0].setAttribute("srcset", "https://preview.tza-aachen.de/wp-content/uploads/2020/09/TZA_Logo_TZA_RGB_grau_gross_OZ.png")
  }
  else {
    logo[0].setAttribute("src", "https://preview.tza-aachen.de/wp-content/uploads/2020/09/TZA_Logo_TZA_RGB_grau_gross_Logo.png")
    logo[0].setAttribute("srcset", "https://preview.tza-aachen.de/wp-content/uploads/2020/09/TZA_Logo_TZA_RGB_grau_gross_Logo.png 1980w")
  }

  document.documentElement.dataset.scroll = window.scrollY;
  
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();
</script>
