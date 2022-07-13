// we can use the same elements to change the content of the page (all elements not just one or 2)
const allLis = document.querySelectorAll("li");

for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerHTML = '<a href="https://www.google.com">Google</a>';
}
