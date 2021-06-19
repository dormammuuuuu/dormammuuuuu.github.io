function viewTab(evt, tabName) {
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
