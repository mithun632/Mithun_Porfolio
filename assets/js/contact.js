function sendMail() {
    var params={
        name:document.getElementById("name").value,
        name:document.getElementById("email").value,
        name:document.getElementById("phone").value,
        name:document.getElementById("Message").value,

    };

const serviceID = "service id";
const templateID = "template id";

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        document.getElementById("Message").value="";
        console.log(res);
        alert("your message sent successfully")

    })
    .catch((err) => console.log(err));
}