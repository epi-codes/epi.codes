document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("nav a.menu").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector("nav").classList.toggle("menu-open");
  })

  document.querySelectorAll("nav .menu-container a, nav a.logo").forEach((link) => {
    link.addEventListener("click", function(){
      document.querySelector("nav").classList.remove("menu-open");
    })
  })
})