var items = document.querySelectorAll(".item");

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
