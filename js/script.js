window.addEventListener("DOMContentLoaded", function() {
  let navHamburger = document.getElementById("nav-hamburger"),
    sidebar = document.querySelectorAll(".sidebar-menu_item"),
    searchBlock = document.querySelector(".search-block"),
	closeSearchBlock = document.querySelector(".search-block_form-input_close");
	searchBlock.style.display = "none";

  sidebar[2].addEventListener("click", event => {
    document.body.classList.toggle("modal-open");
    if (searchBlock.style.display == "none") {
      searchBlock.style.display = "block";
    } else {
      searchBlock.style.transition = "all 0.5s ease";
      searchBlock.style.opacity = "0";
      setTimeout(() => {
        searchBlock.style.display = "none";
        searchBlock.style.opacity = "1";
      }, 500);
    }
  });

  navHamburger.addEventListener("click", () => {
    document.body.classList.toggle("modal-open");
    for (var i = 0; i < navHamburger.getElementsByTagName("span").length; i++) {
      navHamburger.getElementsByTagName("span")[i].classList.toggle("close");
    }
  });

  closeSearchBlock.addEventListener("click", () => {
    document.body.classList.toggle("modal-open");
    if (searchBlock.style.display == "none") {
      searchBlock.style.display = "block";
    } else {
      searchBlock.style.transition = "all 0.5s ease";
      searchBlock.style.opacity = "0";
      setTimeout(() => {
        searchBlock.style.display = "none";
        searchBlock.style.opacity = "1";
      }, 500);
    }
  });
});
