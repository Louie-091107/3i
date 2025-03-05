let generatedOTP = null;
const SCAS_ACCESS_CODE = "SCAS2024"; // Change this to the actual unique code

function validateAccessCode() {
    const enteredCode = document.getElementById('access-code').value;
    const messageElement = document.getElementById('access-message');

    if (enteredCode !== SCAS_ACCESS_CODE) {
        messageElement.textContent = "Invalid access code. Please try again.";
        return;
    }

    // Access code is correct, allow entry
    messageElement.textContent = "";
    document.getElementById('access-form').style.display = 'none';
    document.getElementById('grade-strand-form').style.display = 'block';
}

function validateGradeStrand() {
    const grade = document.getElementById('grade').value;
    const strand = document.getElementById('strand').value;
    const messageElement = document.getElementById('grade-message');

    if (!grade || !strand) {
        messageElement.textContent = "Please enter both grade and strand.";
        return;
    }

    messageElement.textContent = "";
    document.getElementById('grade-strand-form').style.display = 'none';
    document.getElementById('otp-form').style.display = 'block';
}

function generateOTP() {
    const email = document.getElementById('email').value;
    if (!email) {
        alert("Please enter your email.");
        return;
    }

    // Generate a random 6-digit OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000);
    
     // Display the OTP (since we cannot send emails)
     document.getElementById('otp-display').textContent = `Your OTP: ${generatedOTP}`;
    }

function login() {
    const inputOTP = document.getElementById('otp').value;
    const messageElement = document.getElementById('otp-message');

    if (!generatedOTP) {
        messageElement.textContent = "Please generate an OTP first.";
        return;
    }

    if (inputOTP == generatedOTP) {
        messageElement.textContent = "Login successful!";
        document.getElementById('otp-form').style.display = 'none';
        document.getElementById('account-setup').style.display = 'block';
    } else {
        messageElement.textContent = "Invalid OTP. Please try again.";
    }
}

function setupAccount() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username && password) {
        userPasscode = password; // Store the passcode
        localStorage.setItem("userPasscode", userPasscode);
        alert("Account setup successful! You can now use your passcode to log in.");
       
    } else {
        document.getElementById("setup-message").textContent = "Please fill in all fields.";
    }

    
    setTimeout(() => {
        window.location.href = "homepage.html"; // Redirect to homepage or profile setup page
    }, 2000);
}
