function generateCertificate() {
    let certID = document.getElementById("certInput").value.trim();

    if(certID === "") {
        document.getElementById("result").innerText = "❌ Please enter a certificate ID!";
        document.getElementById("result").style.color = "red";
        document.getElementById("certificatePreview").style.display = "none";
        return;
    }

    document.getElementById("result").innerText = "✅ Certificate Generated! ID: " + certID;
    document.getElementById("result").style.color = "green";

    // Show certificate preview
    document.getElementById("certificatePreview").style.display = "block";
    document.getElementById("certIDDisplay").innerText = "Certificate ID: " + certID;
}

function verifyCertificate() {
    let certID = document.getElementById("certInput").value.trim();

    if(certID === "") {
        document.getElementById("result").innerText = "❌ Please enter a certificate ID!";
        document.getElementById("result").style.color = "red";
        document.getElementById("certificatePreview").style.display = "none";
        return;
    }

    document.getElementById("result").innerText = "✅ Certificate Verified Successfully! ID: " + certID;
    document.getElementById("result").style.color = "green";
}
