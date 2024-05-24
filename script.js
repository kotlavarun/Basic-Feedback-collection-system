document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    
    if(name && email && feedback) {
        console.log('Feedback submitted:', { name, email, feedback });
        alert('Thank you for your feedback!');
        document.getElementById('feedbackForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
