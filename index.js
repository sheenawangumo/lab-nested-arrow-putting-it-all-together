function createLoginTracker(userInfo){ 
 let attemptCount = 0;
    const loginHandler = (passwordAttempt) => {
        if (attemptCount >= 3) {
        return "Account is locked due to too many failed login attempts"; 
         }
        if (passwordAttempt === userInfo.password) { 
            attemptCount = 0;
        return "Login successful"; }
          else  { 
       attemptCount++; 
      if (attemptCount >= 3) { 
           return "Account is locked due to too many failed login attempts";
          }
        return "Login failed";
    }
  };
    return loginHandler;
  }


 

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};