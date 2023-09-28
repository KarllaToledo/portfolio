/*Formulario de Contato*/

class FormSubmit {
  this.settings = settings;
  this.form = document.querySelector(settings.form);
  this.formButton = document.querySelector(settings.button)
  if (this.form) {
    this.url = this.form.getAttribute("action");
  }
}

displaySucess() {
this.form.innerHtml = this.settings.sucess;

}

displayError() {
  this.form.innerHtml = this.settings.error;
}

init() {
  if (this.form) this.formButton.addEventListerner("Click",() => this.displaySucess());
return this;
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button:"[data-button]",
  sucess: "<h1 class= 'sucess'> Mensagem Enviada!</h1>"
  error: "<h1>Não foi possível enviar sua mensagem.</h1>"

});

formSubmit.init();