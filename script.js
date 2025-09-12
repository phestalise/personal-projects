// Abre o cliente de e-mail sem depender de EmailJS
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const assunto = `Contato do Portfólio - ${nome}`;
    const corpo = `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`;

    const mailtoLink =
      `mailto:phestalise@gmail.com` +
      `?subject=${encodeURIComponent(assunto)}` +
      `&body=${encodeURIComponent(corpo)}`;

    window.location.href = mailtoLink;

    alert("Redirecionando para seu cliente de e-mail...");
    form.reset();
  });
});
