// функций на JS для открытия и закрытия бокового меню

function toggleNav() {
    var nav = document.getElementById("Sidenav");
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth > 768) {
        nav.style.width = (nav.style.width === "15%") ? "0" : "15%";
    } else {
        nav.style.width = (nav.style.width === "100%") ? "0" : "100%";
    }
}


function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
}

function toggleSidebar() {
    var sidebar = document.getElementById('Sidenav');
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var thresholdWidth = 768;

    if (screenWidth < thresholdWidth) {
      sidebar.style.transform = 'translateX(-100%)';
    }
  }

  // Initial check on page load
  toggleSidebar();

  // Attach the function to the window resize event
  window.addEventListener('resize', toggleSidebar);



function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}
  
