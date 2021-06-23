var galleryCarousel = document.querySelector('#galleryCarousel')
var carousel = new bootstrap.Carousel(galleryCarousel, {
  interval: 1500,
  wrap: false
})

var triggerTabList = [].slice.call(document.querySelectorAll('#tabs a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    tabTrigger.show()
  })
})

var myCarousel = document.querySelector('#galleryCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

function startUp(){
  setHeight= $(".carousel-inner img:nth-child(1)").height();
  $(".carousel-inner").height(setHeight)
  $(".carousel-inner img").each(function(){
     $(this).css('max-height', setHeight);
  })
}





/*function viewTab(evt, tabName) {
function scrollSpy(){
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#tabs'
  });

  hotfixScrollSpy();
  window.scrollBy(0,1);
}
  var i, content, button_status;
  content = document.getElementsByClassName("description");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  button_status = document.getElementsByClassName("proj_buttons_label");
  for (i = 0; i < button_status.length; i++) {
    button_status[i].className = button_status[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("default_tab").click();
*/
