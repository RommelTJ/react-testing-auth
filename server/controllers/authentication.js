exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // See if a user with the given email exists.
  // If a user with email does exist, return an error
  // If a user with email does not exist, create and save a user record
  // Respond to request indicating the user was created.
};
