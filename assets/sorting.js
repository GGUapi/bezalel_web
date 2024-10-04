document.addEventListener("DOMContentLoaded", function() {
  var storiesToggle = document.getElementById("sorting");
  var ascending = true;

  storiesToggle.addEventListener("click", function() {
    ascending = !ascending;
    storiesToggle.textContent = ascending ? "Oldest Stories ▲" : "Latest Stories ▼";
  
    const articlesContainer = document.querySelector(".row");
    const articles = Array.from(articlesContainer.querySelectorAll(".col-lg-4"));

    articles.sort(function(a, b) {
      const timeA = new Date(a.querySelector(".time").textContent);
      const timeB = new Date(b.querySelector(".time").textContent);

      return ascending ? timeB - timeA : timeA - timeB;
    });
    
    const newArticlesContainer = document.createElement("div");
    newArticlesContainer.classList.add("row");
    newArticlesContainer.style.display = "flex";
    
 
    articles.forEach(function(article) {
      newArticlesContainer.appendChild(article);
    });

    articlesContainer.parentNode.replaceChild(newArticlesContainer, articlesContainer);
  });
});