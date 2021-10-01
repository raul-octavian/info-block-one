(function() {
emailjs.init("user_LUUEYiIRn5R6Bw8Fwtxmu");
})();

// let formData = document.getElementById("form");
// const senderEmail = formData.email.value;
// const senderName = formData.name.value;
// const content = formData.content.value;

$('#form').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_il9e4lf');
    formData.append('template_id', 'template_jo2ryds');
    formData.append('user_id', 'user_LUUEYiIRn5R6Bw8Fwtxmu');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});