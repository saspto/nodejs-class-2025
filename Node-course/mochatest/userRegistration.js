module.exports.registerUser = function (username, password) {

    if (!username || !password) {
    
    return "Error: Both username and password are required.";
    
    }
    
    return `User ${username} successfully registered!`;
    
    };