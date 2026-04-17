function createLoginTracker (userInfo) {
  let attemptCount = 3;
   attemptCount++;
    return (userInfo) => {
   return (passwordAttempt) => { 
    
     if (attemptCount >= 4) {
      console.log('Login failed. Too many attempts.');
      return 'login failed';
    }
    else if (passwordAttempt === userInfo.password) {
      console.log('Login successful!');
      attemptCount = 0;
      return 'login successful';
    }
     else if (passwordAttempt !== userInfo.password && attemptCount <= 3) {
      console.log('Incorrect password. Try again.');
      return 'incorrect password'; 
      attemptCount++;
    }

  }
};
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};