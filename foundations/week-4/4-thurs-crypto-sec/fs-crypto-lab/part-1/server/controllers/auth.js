/*

Then build out the register function to hash the users password and then store that new user to the local database of users. Note: You should be storing all properties on the user object, except the password. Instead, you should be storing the password hash.

Then build out the login function to receive a username and password. First, make sure the username exists in the database, if it does, compare the password being passed in to the hashed password in the database with the appropriate bcrypt method. If the password is correct, send a copy of the user object back to the front-end. However, make sure you delete the hashed password off of the object copy you send.

*/

const bcrpyt = require('bcryptjs');

const users = []

module.exports = {
    login: (req, res) => { 

      console.log('Logging In User');
      console.log(req.body);

      // destructure the username and password from the request body
      const { username, password } = req.body
      console.log( username, password );

      // look for the user in the users array
      for (let i = 0; i < users.length; i++) {

        // if the username matches the username in the array and the password matches the password in the array
        if (users[i].username === username && bcrpyt.compareSync(password, users[i].pwdHash)) {
            
          // let userCopy = { ...users[i] };
          // delete userCopy.pwdHash;
          return res.status(200).send(users[i]);
        }
      }
      res.status(400).send("User not found.");
    },
    register: (req, res) => {
      console.log('Registering User');
      console.log(req.body);

      // destructure request.body
      const { username, email, firstName, lastName, password } = req.body;
      console.log( username, email, firstName, lastName, password );

      // generate a salt
      const salt = bcrpyt.genSaltSync(10);
      console.log(`This is the salt: `, salt);

      // generate a hashed password using the password and salt
      const pwdHash = bcrpyt.hashSync(password, salt);
      console.log(`This is the hashed password: `, pwdHash);

      // create a user object to be stored in DB, note: password is hashed
      let userObj = {
        username,
        email,
        firstName,
        lastName,
        pwdHash
      }

      console.log(userObj);

      // add user to users array
      users.push(userObj);
      console.log(users);
      
      // make copy of user object and delete password property
      let userObjReturned = {...userObj};
      delete userObjReturned.pwdHash;
      
      console.log(userObjReturned);
      console.log(userObj, req.body);

      res.status(200).send(userObjReturned);

    }
}