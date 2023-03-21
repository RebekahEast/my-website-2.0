document.querySelectorAll(".software").forEach(function(extend) {

    let flick = document.createElement("div");
    flick.className = "flick";
    extend.appendChild(flick);

    flick.addEventListener("click", function() {
      extend.classList.toggle("open");
    }, false);

  });