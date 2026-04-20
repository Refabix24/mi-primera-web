const boton = document.getElementById("btnSaludo");

boton.addEventListener("click", function () {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "🔥 Ahora usas addEventListener como un pro";
  mensaje.style.color = "yellow";
});