const breakPoint = 900;
let mainMenu, burgerIcon;
window.addEventListener('load', () => {
  const mainMenu = document.querySelector("header nav.main-menu");
  const burgerIcon = document.querySelector("header nav#burger-icon");
  if (!burgerIcon) return;
  burgerIcon.addEventListener("click", () => {
    mainMenu.classList.toggle("block");
    burgerIcon.textContent = (burgerIcon.textContent === "⛌") ? "☰" : "⛌";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > breakPoint) {
      mainMenu.classList.remove("block");
      burgerIcon.textContent = "☰";
    }
  });

});


    function validateContactForm(event) {
      //event.preventDefault();
      let form = event.target;

      let p = form.querySelector("p#form-message");
      let fullName = form.querySelector("input[name='fullname']");
      p.classList.add("error");

      if (fullName.value.length === 0) {
        p.textContent = "oop, fullname is missing";
        return false;
      }

      let email = form.querySelector("input[name='email']").value;
      const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (patt.test(email) === false) {
        p.textContent = "oop, email is not valid";
        return false;
      }

      let subject = form.querySelector("input[name='subject']");
      if (subject.value.length === 0) {
        p.textContent = "oop, subject is missing";
        return false;
      }

      let body = form.querySelector("textarea[name='body']");
      if (body.value.length === 0) {
        p.textContent = "oop, message is missing";
        return false;
      }

      p.classList.add("success");
      p.textContent = "form sent!!!";
      return false;
    }
