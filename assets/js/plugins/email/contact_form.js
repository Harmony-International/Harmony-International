function emailSend(){
	var name = document.getElementById('#name').value;
	var email = document.getElementById('#email').value;
	var subject = document.getElementById('#subject').value;
	var message = document.getElementById('#message').value;



	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "akshaysureshaluparambil@gmail.com",
    Password : "0924F0DD7A45A09557F285527F76C52146EA",
    To : 'akshayaluparambil@gmail.com',
    From : 'akshaysureshluparambil@gmail.com',
    Subject : subject,
    Body : message
}).then(
  message => alert(message)
);
