function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


function Cookie() {
  const cookieBox = document.querySelector(".cookie");
  const cancelButton = document.querySelector(".btn-cancel");
  const acceptButton = document.querySelector(".btn-accept");

  setTimeout(() => {
    if (cookieBox) {
      cookieBox.style.display = 'block';
    }
  }, 3000);

  if (cancelButton && cookieBox) {
    cancelButton.addEventListener('click', () => {
      cookieBox.style.display = 'none';
    });
  }

  if (acceptButton && cookieBox) {
    acceptButton.addEventListener('click', () => {
      cookieBox.style.display = 'none';
    });
  }
}

Cookie();



