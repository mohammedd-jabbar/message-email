const form = document.querySelector(".submitForm");

const name = document.querySelector("#firstname");
const massage = document.querySelector("#massage");

const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  Email.send({
    SecureToken: "485b370a-b13f-4a56-b3f6-d113a8d6cf5f",
    To: "mohammedjabbar019@gmail.com",
    From: "mohammedjabbar019@gmail.com",
    Subject: "Massage form website",

    Body: `Name: ${name.value} <BR />
       Massage: ${massage.value}`,
  });
  btnText.innerHTML = "Thanks";
  btn.classList.add("active");

  setTimeout(() => {
    location.reload();
    console.log("Success");
  }, 3000);
});
