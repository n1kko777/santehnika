window.addEventListener("DOMContentLoaded", function() {
  let navHamburger = document.getElementById("nav-hamburger"),
    navDropdown = document.querySelector(".mobile-nav-dropdown"),
    navMenu = document
      .querySelector(".mobile-nav-dropdown-menu")
      .getElementsByTagName("li"),
    sidebar = document.querySelectorAll(".sidebar-menu_item"),
    basket = document.querySelector(".basket"),
    searchBlock = document.querySelector(".search-block"),
    searchForm = document.querySelector(".search-block_form"),
    searchInput = document.querySelector(".search-block_form-input"),
    searchHelpText = document.querySelector(".search-block_form-helpText"),
    searchPlaceholder = document.querySelector(
      ".search-block_form-placeholder"
    ),
    closeBasket = document.querySelector(".basket_close"),
    closeSearchBlock = document.querySelector(".search-block_form-input_close");
  const URL = window.location.origin;

  /* go home :) */
  sidebar[0].addEventListener("click", () => {
    window.location.href = URL;
  });

  function scrollLock() {
    if (document.body.classList.contains("modal-open")) {
      document.body.classList.remove("modal-open");
    } else {
      document.body.classList.add("modal-open");
    }
  }

  /* toggle any block with .d-n */
  function toggleBlock(elem) {
    scrollLock();
    if (elem.classList.contains("d-n")) {
      elem.classList.remove("d-n");
    } else {
      elem.classList.add("d-n");
    }
  }

  /* toggle basket block */
  sidebar[1].addEventListener("click", () => {
    if ( !searchBlock.classList.contains('d-n') ) {
      toggleBlock(searchBlock);
      toggleBlock(basket);
    } else {
      toggleBlock(basket);
    }
  });
  closeBasket.addEventListener("click", () => {
    toggleBlock(basket);
  });

  /* toggle search block */
  sidebar[2].addEventListener("click", () => {
    if ( !basket.classList.contains('d-n') ) {
      toggleBlock(basket);
      toggleBlock(searchBlock);
    } else {
      toggleBlock(searchBlock);
    }
  });
  closeSearchBlock.addEventListener("click", () => {
    toggleBlock(searchBlock);
  });

  /* search input action */
  searchForm.addEventListener("click", event => {
    let target = event.target;
    if (
      target.classList.contains("search-block_form-placeholder") ||
      target.classList.contains("search-block_form-input")
    ) {
      searchPlaceholder.style.opacity = "0";
      searchHelpText.style.opacity = "1";
      searchInput.focus();
    }
  });
  searchInput.addEventListener("focus", () => {
    searchPlaceholder.style.opacity = "0";
    searchHelpText.style.opacity = "1";
    searchInput.focus();
  }); /* focus */
  searchInput.addEventListener("blur", () => {
    if (searchInput.value === "") {
      searchPlaceholder.style.opacity = "1";
      searchHelpText.style.opacity = "0";
    }
  }); /* blur */

  /* toggle nav menu */
  function toggleNavMenu() {
    for (var i = 0; i < navHamburger.getElementsByTagName("span").length; i++) {
      navHamburger.getElementsByTagName("span")[i].classList.toggle("close");
    }
    navDropdown.classList.toggle("d-n");
    scrollLock();
  }
  navHamburger.addEventListener("click", () => {
    toggleNavMenu();
  });

  /* nav menu listner */
  navMenu[0].addEventListener("click", () => {
    toggleNavMenu();
    window.location.href = URL;
  });
  navMenu[1].addEventListener("click", () => {
    toggleNavMenu();
    toggleBlock(basket);
  });
  navMenu[2].addEventListener("click", () => {
    toggleNavMenu();
    toggleBlock(searchBlock);
  });
});