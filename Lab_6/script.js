const message = document.getElementById("message");
const input = document.getElementById("input1");
const input2 = document.getElementById("input2");
const titulo = document.getElementById("titulo");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let var1 = formData.get("password");
  let var2 = formData.get("passwordVer");
  if (var1 === var2) {
    console.log("correct");
    message.innerHTML = `Las contraseñas coinciden!`;
    input.innerHTML = `<label for="fname" style="color: green" id="input1">Escribe tu contraseña: </label>`;
    input2.innerHTML = `<label for="lname" style="color: green" id="input2">Vuelve a escribir tu contraseña: </label>`;
  } else {
    message.innerHTML = `Las contraseñas NO coinciden!`;
    input.innerHTML = `<label for="fname" style="color: red" id="input1">Escribe tu contraseña: </label>`;
    input2.innerHTML = `<label for="lname" style="color: red" id="input2">Vuelve a escribir tu contraseña: </label>`;
  }
});

onBtnChange = () => {
  const titulo = document.getElementById("titulo");
  titulo.innerHTML = `Enviado!`;
};

onBtnEnterPass = () => {
  let res = window.alert("Introduce la Contraseña Deseada");
};

onBtnEnterPassVar = () => {
  let res = window.alert(
    "Vuelve a Introducir la Contraseña deseada nuevamente para verificar que es la misma"
  );
};
