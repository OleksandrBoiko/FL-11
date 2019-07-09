let email;
let password;
let newPassword;
let oldPassword;
let changePassword;
let userLogin = "user@gmail.com";
let userPassword = "UserPass";
let adminLogin = "admin@gmail.com";
let adminPassword = "AdminPass";
let minLengthEmail = 6;
let minLengthPassword = 5;

email = prompt("Please enter your email adress", "");
if (email === null || email === "" || typeof email !== "undefined") {
    alert("Canceled.");
} else if (email.length < minLengthEmail) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (email !== userLogin && email !== adminLogin) {
    alert("I don’t know you");
} else {
    password = prompt("Please enter your password", "");
    if (password === null || password === "" || typeof password !== "undefined") {
        alert("Canceled.");
    } else if (password !== userPassword && password !== adminPassword) {
        alert("Wrong password.");
    } else {
        if (email === userLogin && password === userPassword) {
            changePassword = confirm("Do you want to change your password?", "");
            if (changePassword === false) {
                alert("You have failed the change.");
            } else {
                oldPassword = prompt("Please enter your old password", "");
                if (oldPassword === null || oldPassword === '' || typeof oldPassword !== 'undefined') {
                    alert("Canceled.");
                } else if (oldPassword !== userPassword) {
                    alert("Wrong password.");
                } else {
                    newPassword = prompt("Please enter your new password", "");
                    if (newPassword.length < minLengthPassword) {
                        alert("It’s too short password. Sorry.");
                    } else {
                        let newPasswordRepeat = prompt("Please repeat your new password","");
                        if (newPasswordRepeat === newPassword) {
                            alert("You have successfully changed your password.");
                        } else {
                            alert("You wrote the wrong password.");
                        }
                    }
                }
            }
            
        } else if (email === adminLogin && password === adminPassword) {
            changePassword = confirm("Do you want to change your password?", "");
            if (changePassword === false) {
                alert("You have failed the change.");
            } else {
                oldPassword = prompt("Please enter your old password", "");
                if (oldPassword === null || oldPassword === "" || typeof oldPassword !== "undefined") {
                    alert("Canceled.");
                } else if (oldPassword !== adminPassword) {
                    alert("Wrong password.");
                } else {
                    newPassword = prompt("Please enter your new password", "");
                    if (newPassword.length < minLengthPassword) {
                        alert("It’s too short password. Sorry.");
                    } else {
                        let newPasswordRepeat = prompt("Please repeat your new password", "");
                        if (newPasswordRepeat === newPassword) {
                            alert("You have successfully changed your password.");
                        } else {
                            alert("You wrote the wrong password.");
                        }
                    }
                }
            }
        }
    }
};