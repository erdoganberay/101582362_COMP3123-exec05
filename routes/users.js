const express = require('express');
const routerUser = express.Router();
const user = require('../user.json');

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res) => {
	res.json(user);
});



/*
- modify /login router to accept username and password as json body parameter
- read data from user.json file
- if username and  passsword is valid then send resonse as below 
    {
	status: true,
	message: "user is valid"
    }
- if username is invalid then send response as below 
    {
	status: false,
	message: "user name is invalid"
    }
- if passsword is invalid then send response as below 
    {
	status: false,
	message: "password is invalid"
    }
*/
routerUser.post('/login', (req, res) => {
	const { username, password } = req.body;

	if (username !== user.username) {
		return res.json({
			status: false,
			message: 'user name is invalid'
		});
	}

	if (password !== user.password) {
		return res.json({
			status: false,
			message: 'password is invalid'
		});
	}

	res.json({
		status: true,
		message: 'user is valid'
	});
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req, res) => {
	const { username } = req.params;
	res.send(`<b>${username} successfully logout.</b>`);
});

module.exports = routerUser;
