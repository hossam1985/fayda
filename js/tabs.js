//tabs

function toggleTabs() {
  let tab1 = document.getElementById("tab1");
  let lab1 = document.getElementById("lab1");
  let tab2 = document.getElementById("tab2");
  let lab2 = document.getElementById("lab2");
  let tabPanels = document.querySelector('.tab-panels');
  let tabPanelChildren = tabPanels.children;

  if (tab1.hasAttribute("checked")) {
    tab1.removeAttribute("checked");
    tab2.setAttribute("checked", "");
    tabPanelChildren[1].style.display = 'block';
    tabPanelChildren[0].style.display = 'none';
    lab2.style.color = "var(--num1)";
    lab2.style.backgroundColor = "#f7f7f7";
    lab1.style.color = "#f7f7f7";
    lab1.style.backgroundColor = "var(--num1)";
  } else {
    tab2.removeAttribute("checked");
    tab1.setAttribute("checked", "");
    tabPanelChildren[0].style.display = 'block';
    tabPanelChildren[1].style.display = 'none';
    lab1.style.color = "var(--num1)";
    lab1.style.backgroundColor = "#f7f7f7";
    lab2.style.color = "#f7f7f7";
    lab2.style.backgroundColor = "var(--num1)";
  }
}

function togTabs(label){
  let tab1 = document.getElementById("tab1");
  let lab1 = document.getElementById("lab1");
  let tab2 = document.getElementById("tab2");
  let lab2 = document.getElementById("lab2");
  let tabPanels = document.querySelector('.tab-panels');
  let tabPanelChildren = tabPanels.children;

  if (label.id === "lab1") {
    tab1.setAttribute("checked", "");
    tab2.removeAttribute("checked");
    tabPanelChildren[0].style.display = 'block';
    tabPanelChildren[1].style.display = 'none';
    lab1.style.color = "var(--num1)";
    lab1.style.backgroundColor = "#f7f7f7";
    lab2.style.color = "#f7f7f7";
    lab2.style.backgroundColor = "var(--num1)";
  } else {
    tab2.setAttribute("checked", "");
    tab1.removeAttribute("checked");
    tabPanelChildren[1].style.display = 'block';
    tabPanelChildren[0].style.display = 'none';
    lab2.style.color = "var(--num1)";
    lab2.style.backgroundColor = "#f7f7f7";
    lab1.style.color = "#f7f7f7";
    lab1.style.backgroundColor = "var(--num1)";
  } 
}

function toggleCheckboxes() {
  let tab1 = document.getElementById("tab1");
  let lab1 = document.getElementById("lab1");
  let tab2 = document.getElementById("tab2");
  let lab2 = document.getElementById("lab2");
  let tabPanels = document.querySelector('.tab-panels');
  let tabPanelChildren = tabPanels.children;
  
  tab2.setAttribute("checked", "");
  tab1.removeAttribute("checked");
  tabPanelChildren[1].style.display = 'block';
  tabPanelChildren[0].style.display = 'none';
  lab2.style.color = "var(--num1)";
  lab2.style.backgroundColor = "#f7f7f7";
  lab1.style.color = "#f7f7f7";
  lab1.style.backgroundColor = "var(--num1)";
}

// Check if the URL has a parameter indicating to toggle checkboxes
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('toggle') === 'true') {
      toggleCheckboxes();
  }
}