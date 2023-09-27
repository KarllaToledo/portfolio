/*Formulario de Contato*/

document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coletar dados do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Validar os campos (adicionar validações personalizadas conforme necessário)

    const formulario = document.getElementById("miFormulario");
    const formData = new FormData(formulario);
  
  
    emailjs.sendForm("tu_service_id", "tu_template_id", formData)
      .then(function(response) {
        console.log("Correo electrónico enviado con éxito", response);
        alert("Formulario enviado con éxito");
      }, function(error) {
        console.error("Error al enviar el correo electrónico", error);
        alert("Hubo un error al enviar el formulario");
      });
});

