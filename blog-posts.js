const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./models');

BlogPosts.create('I Like Turtles', "I like turtles. I mean, like, I really, really, like turtles", 'Little Kid');
BlogPosts.create();
BlogPosts.create();


router.get('/', (req, res) => {
	res.json(BlogPosts.get());
});

