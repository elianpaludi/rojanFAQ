document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems,
        
        );
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
     M.Carousel.init(elems, {
         fullWidth:false,
         indicators:true,
         duration:250,
         dist:-100,
     });
  });


  let twitch = document.getElementById('twitch');

  twitch.addEventListener('click', function() {
    window.open('https://www.twitch.tv/rojankhzxr');
})
  let instagram = document.getElementById('instagram');

  instagram.addEventListener('click', function() {
    window.open('https://www.instagram.com/Rojankhzxr/');
})
  let youtube = document.getElementById('youtube');

  youtube.addEventListener('click', function() {
    window.open('https://www.youtube.com/c/RojanCrypto');
})