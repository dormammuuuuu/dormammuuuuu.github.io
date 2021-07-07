pentitle="SCSS Arrow Animation";

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



function projectShow(handler){
  const c_app = $('.type-c-app');
  const java_app = $('.type-java-app');
  const asm_app = $('.type-asm-app');
  const vb_app = $('.type-vb-app');
  const checkbox = $('input:checkbox');
  var web = $('.type-web');
  var filter = $('#filter');
  web.hide();
  c_app.hide();
  java_app.hide();
  asm_app.hide();
  vb_app.hide();
  filter.hide();

  if (handler.value == "all"){
    web.show();
    c_app.show();
    java_app.show();
    asm_app.show();
    vb_app.show();
  } else if (handler.value == "web"){
    web.show();
  } else {
    filter.show();
    checkbox.prop('checked', false);
    c_app.show();
    java_app.show();
    asm_app.show();
    vb_app.show();
  }
}

function filterChange(){
  const c_app = $('.type-c-app');
  const java_app = $('.type-java-app');
  const asm_app = $('.type-asm-app');
  const vb_app = $('.type-vb-app');
  c_app.hide();
  java_app.hide();
  asm_app.hide();
  vb_app.hide();

  if($('#filter-c').is(':checked')){
    c_app.show();
  }
  if($('#filter-java').is(':checked')){
    java_app.show();
  }
  if($('#filter-vb').is(':checked')){
    vb_app.show();
  }
  if($('#filter-asm').is(':checked')){
    asm_app.show();
  }
  if($('input:checkbox').not(':checked').length == $('input:checkbox').length){
    c_app.show();
    java_app.show();
    asm_app.show();
    vb_app.show();
  }
}
