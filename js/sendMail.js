emailjs.init("hdqU6-V8vS3ddyGy9");

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = document.querySelector(".btn-submit");
    btn.textContent = "Enviando...";
    btn.disabled = true;

    const templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs
        .send("service_6qlso6v", "template_ixhuxpg", templateParams)
        .then(function () {
        btn.textContent = "¡Mensaje enviado! 💗";
        btn.style.background = "#4CAF50";
        document.querySelector("form").reset();

        setTimeout(() => {
            btn.textContent = "Enviar Mensaje";
            btn.style.background = "";
            btn.disabled = false;
        }, 4000);
        })
        .catch(function (error) {
        console.error("Error:", error);
        btn.textContent = "Error al enviar. Intentá de nuevo.";
        btn.style.background = "#e74c3c";
        btn.disabled = false;
        });
    });