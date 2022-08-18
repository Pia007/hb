// SET UP: 5 import dependencies
const bcrypt = require('bcryptjs');

// SET UP 6: initialize an empty array to store fake db called chat
const chats = [];

// SET UP 7: FUNCTIONS
module.exports = {
    createMessage: (req, res) => {
        console.log(`Create message endpoint hit!`);
        
        // 1  DESTRUCTION PIN AND MESSAGE, keys, of the request body
        const {pin, message} = req.body
        console.log(pin, message)


        // 10 THE FUNTIONS SHOULD SHOW ALL MSG ASSOCIATED WITH A PARTICULAR PIN
        // checks the chats array to check to see if the chats obj pin has is === to the objs pin hash, if there is not a match, the rest of this as skipped a msgObj is create -SEE THE #6

        for(let i = 0; i < chats.length; i++ ) {
            // compare the pin coming in with the hashed version stored in the chat array
            // compareSync() returns a boolean
            const pinExists = bcrypt.compareSync(pin, chats[i].pinHash);
            if(pinExists) {
                //if the pin matches, access the messages array and add the new message to the array
                chats[i].messages.push(message);
                // make a copy of the messages at that index
                let messagesToReturn = {...chats[i]};
                // remove the pinHash
                delete messagesToReturn.pinHash;
                // send the message back to the client
                res.status(200).send(messagesToReturn);
                return;
                // using return prevents sending multiple sets of headers can also use return res.status(200).send(messagesToReturn)
            }
        }

        //2 PASSWORD PROTECTION: using salting and hashing
            // SALTING: increases the complexity of the hash
            // genSaltSync() method takes in a number that indicates the number of rounds of salting. Default is 10
        const salt = bcrypt.genSaltSync(10);

        //3 SEE THE SALT
        console.log(`This is the salt :`, salt);

        //4 HASH: is the actual encryption of the password
            // hashSync() takes two args - what you want to hash and what you want to salt it with
        const pinHash = bcrypt.hashSync(pin, salt);

        //5 SEE THE PINHASH
        console.log(`This is the salted hash: `, pinHash);

        //6 MAKE NEW MSG OBJ WITH THE PIN HASH
            // WHY? never store reg pwd in db
        let msgObj = {
            pinHash,
            messages: [message]
        }

        // 7 ADD THE NEW OBJ to the array of chat messages
            // simulated adding a msg to the db
            //never store raw pwds in the DB, only hashed versions
        chats.push(msgObj);

        // 8 CREATE A COPY OF THE MSG OBJ THAT WILL BE SENT TO THE CLIENT
        let messageToReturn = {...msgObj}

        // 9 DELETE PINHASH FROM THE OBJECT
            // must delete the pinhash prior to sending the msg to the client
        delete messageToReturn.pinHash;
        res.status(200).send(messageToReturn);

        
    }
}