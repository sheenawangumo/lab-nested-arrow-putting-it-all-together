function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    console.log(`[Debug] Current attempt count: ${attemptCount} | Attempted password: "${passwordAttempt}"`);

    if (typeof passwordAttempt !== 'string') {
        return "Error: Invalid input type. Password must be a string.";
    }

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Login attempt ${attemptCount}: Login failed`;
    }
  };
}


 

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};