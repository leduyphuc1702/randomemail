function generateEmail() {
    var randomString = Math.random().toString(36).substring(5, 10);
    var domain = "gmail.com";
    var randomEmail = randomString + "@" + domain;
    document.getElementById("randomEmail").innerText = randomEmail;
}
