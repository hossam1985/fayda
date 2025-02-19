//start header

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

//end header

// start scroll to top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// end scroll to top


// accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//snackbar
let snackBarVisible = true;

function showSnackBar(duration) {
    if (!snackBarVisible) return;

    let snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function() {
        if (snackBarVisible) {
            snackbar.className = snackbar.className.replace("show", "");
        }
    }, duration);
}

function showFixedSnackBar() {
    if (!snackBarVisible) return;

    let snackbar = document.getElementById("snackbar");
    snackbar.className = "fixed";
}

function closeSnackBar() {
    let snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    snackbar.style.animation = "moveSnackbarToRight 1s ease-in-out forwards";
    snackBarVisible = false;
}

function startSnackBarIntervals() {
    setTimeout(function() {
        showSnackBar(8000); 
    }, 10000);

    setTimeout(function() {
        showSnackBar(8000); 
    }, 65000);

    setTimeout(function() {
        showFixedSnackBar();
    }, 120000);
}

window.onload = startSnackBarIntervals;
