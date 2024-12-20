console.log(window.location.href)
let string = window.location.pathname;
const activeLink = document.getElementById(string.slice(1));
activeLink.style.backgroundColor = '#9FE2BF';