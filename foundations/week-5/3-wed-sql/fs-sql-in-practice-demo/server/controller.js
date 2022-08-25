// COPIED FROM SEED.JS
require("dotenv").config();

// install and import Sequelize
const Sequelize = require("sequelize");

// destructure the URI from process.env obj
const {CONNECTION_STRING} = process.env;


//instantiante a sequelized obj from the Sequelize class
    // 2 args - db connection and object
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

// JUST FOR THE DEMO BELOW
const userId = 4;
const clientId = 3;

// BUILD OUT THE CONTROLLER 
    // getUserInfo - the seq query is using an alias to select from cc_clients table
        // then JOIN the cc_users as and alias u
            // join them via the user_id
            // specifically WHERE the u.user_id equals the variable above, userId
    // updateUserInfo - 1st destructure data from the frontend
        // will be updating two individual tables with 2 separate queries
            // do not need join
        // must wrap in single quotes around string values to keep them from being formated with double quotes

module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`SELECT * FROM cc_clients AS c
            JOIN  cc_users AS u
                ON c.user_id = u.user_id
                WHERE u.user_id = ${userId}`)
            .then((dbRes) => {
                // Sequelize will store your data at index 0
                res.status(200).send(dbRes[0])
            })
            .catch((err) => {
                console.log(err);
            })
    },
    updateUserInfo: (req, res) => {
        let {
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            city,
            state,
            zipCode
        } = req.body

        sequelize.query(`update cc_users SET first_name = '${firstName}', 
            last_name = '${lastName}', 
            email = '${email}', 
            phone_number = ${phoneNumber}
        WHERE user_id = ${userId};
        
        update cc_clients SET address = '${address}', 
            city = '${city}', 
            state = '${state}', 
            zip_code = ${zipCode}
        WHERE user_id = ${userId};`)
            .then((dbRes) => {
                // Sequelize will store your data at index 0
                res.status(200).send(dbRes[0])
            })
            .catch((err) => {
                console.log(err);
            })
    },
    getUserAppt: (req, res) => {
        sequelize.query(`SELECT * FROM cc_appointments
            WHERE client_id = ${clientId}
            ORDER BY date DESC;`)
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
            })
            .catch((err) => {
                console.log(err);
            })
    },
    requestAppointment: (req, res) => {
        let {date, service} = req.body;

        sequelize.query(`INSERT INTO cc_appointments (client_id, date, service_type, notes, approved, completed)
            VALUES ('${clientId}', '${date}','${service}', '', false, false)
            RETURNING *;`)
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
            })
            .catch((err) => {
                console.log(err);
            })
    }
}