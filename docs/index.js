window.onload = function() {
  const path = window.location.pathname.split("/");

  switch(path[1])
  {
    case "":{loadPage("home");break;}
    case "about":{loadPage("about");break;}
    case "concepts":{loadPage("concepts");break;}
    case "models":{loadPage("models");break;}
    case "contact":{loadPage("contact");break;}
    default:{loadPage("404");break;}
  }

  document.querySelectorAll(".nav_link").forEach((item) => {
    item.addEventListener("click", function() {
      const page = item.getAttribute("value");
      loadPage(page);
      
      const pushPath = (page === "home") ? "/" : page;
      window.history.pushState("", "", pushPath);
    });
  });

  function loadPage($path) {
    if (!$path) return;
    
    // Corrigido: getElementById em vez de querySelectorById
    const container = document.getElementById("container"); 
    const request = new XMLHttpRequest();
    
    // Corrigido: adicionado o ponto antes de .html
    request.open("GET", "docs/pages/" + $path + ".html"); 
    request.send();
    
    request.onload = function() {
      // Corrigido: status (sem o 'e') e responseText para pegar o conteúdo
      if (request.status == 200) {
        container.innerHTML = request.responseText; 
      } else {
        loadPage("404");
      }
    };
  }
}