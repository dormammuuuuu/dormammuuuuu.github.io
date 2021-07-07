pentitle="SCSS Arrow Animation";

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function projectShow(handler){
  var web = $('.type-web');
  var app = $('.type-app');
  if (handler.value == "all"){
    web.show();
    app.show();
  } else if (handler.value == "web"){
    web.show();
    app.hide();
  } else {
    web.hide();
    app.show();
  }
}
