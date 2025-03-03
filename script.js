document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading spinner
    const button = this.querySelector('.submit-btn');
    button.classList.add('loading');
    
    // Get the form data
    const formData = {
        name: this.querySelector('[name="user_name"]').value,
        email: this.querySelector('[name="user_email"]').value,
        phone: this.querySelector('[name="user_phone"]').value,
        message: this.querySelector('[name="message"]').value,
        to_name: "DuckBazaar",
        reply_to: this.querySelector('[name="user_email"]').value
    };

    // Send the email using EmailJS
    emailjs.send('service_fpdmlbd', 'template_be7oks3', formData)
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        })
        .finally(function() {
            button.classList.remove('loading');
        });
}); 