            function sendEmail() {
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const message = document.getElementById("message").value;
                const responseMessage = document.getElementById("responseMessage");

                if (!name || !email || !message) {
                    responseMessage.textContent = "Por favor, preencha todos os campos.";
                    responseMessage.style.color = "red";
                    return;
                }

          
                setTimeout(() => {
                    responseMessage.textContent = "Seu email foi enviado com sucesso!";
                    responseMessage.style.color = "green";
                    clearForm();
                }, 1000);
            }

            function clearForm() {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            }
