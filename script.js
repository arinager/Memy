let form = document.querySelector(".form");
let inputs = document.querySelectorAll("input")


form.addEventListener("submit", function(e){
    e.preventDefault();

    let newE1 = document.createElement("p");
    newE1.textContent = "From Submited";
    form.appendChild(newE1);

    inputs.forEach(function (item){
        console.log(item.value);
    });
    setTimeout(() => {
        form.style.display = "none";
    }, 2000);
    });
