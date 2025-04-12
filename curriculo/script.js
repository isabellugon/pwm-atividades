window.addEventListener("load", () => {
    alert("Bem-vindo(a) ao portfólio de Isabel Lugon!");
  });
  
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("main section");
    const scrollY = window.scrollY + 80;
  
    sections.forEach(section => {
      const id = section.getAttribute("id");
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;
  
      const link = document.querySelector(`nav a[href="#${id}"]`);
      if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
  
