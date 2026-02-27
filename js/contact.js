

// Contact form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('✓ Message sent successfully! We will contact you soon.');
                window.location.href = 'index.html';
            } else {
                alert('❌ Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            alert('❌ Error sending message. Please try again.');
        });
    });
}
