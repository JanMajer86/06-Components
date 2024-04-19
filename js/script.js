var items = document.querySelectorAll(".item");
// CAROUSEL FUNCTIONALITY

items.forEach((it) => {
  it.onclick = () => {
    // check if this answer is already open
    if (it.classList.contains("open")) {
      // if already open, remove "open" class
      it.classList.remove("open");
      // if not open...
    } else {
      // remove "open" class from all items
      items.forEach((item) => {
        item.classList.remove("open");
      });
      // add "open" class to this one item
      it.classList.add("open");
    }
  };
});

// PAGINATION FUNCTIONALITY attemp 01
const pageLinks = document.querySelectorAll(".page-link");
const buttonLeft = document.querySelector(".btn--left");
const buttonRight = document.querySelector(".btn--right");

let page = 0;
const maxLength = pageLinks.length - 1;

console.log("page: " + page);
changePaginationNumber(page);

buttonLeft.addEventListener("click", function () {
  arrowButtonClick(-1);
});

buttonRight.addEventListener("click", function () {
  arrowButtonClick(1);
});

for (let i = 0; i < pageLinks.length; i++) {
  pageLinks[i].id = i;
}

function getId(btn) {
  console.log("button id: " + btn.id);
  page = parseInt(btn.id);
  console.log("page: " + page);

  changePaginationNumber(page);
}

function arrowButtonClick(direction) {
  page += direction;

  if (page < 0) page = 0;
  if (page > maxLength) page = maxLength;

  console.log("page: " + page);

  changePaginationNumber(page);
}

function changePaginationNumber(page) {
  pageLinks.forEach((pageLink) => {
    pageLink.classList.remove("page-link--current");
  });
  pageLinks[page].classList.add("page-link--current");
  console.log("current page: " + page);
}
