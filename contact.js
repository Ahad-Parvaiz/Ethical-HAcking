// Initialize EmailJS
(function () {
    emailjs.init("hUncnqJwYv5lxUNvl"); // Replace "your_public_key" with your actual Public Key from EmailJS
  })();
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Send email using EmailJS
    emailjs
      .send("service_fhf5uxn", "template_ugxe8ep", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function () {
          // Display success message
          const responseMessage = document.getElementById("response-message");
          responseMessage.style.display = "block";
          responseMessage.textContent = "Message sent successfully!";
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  });
  