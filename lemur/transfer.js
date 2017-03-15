'use strict';
var EventHubClient = require('azure-event-hubs').Client;
var express = require('express');
var config = require('/etc/lemur/config');
var app = express();

var json = require('json'),
    bodyParser = require('body-parser'),
    multer = require('multer');

var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connectionString = config.connectionString;
var eventHubPath = config.eventHubPath;
var requestUrl = '';

var printError = function (err) {
    console.error(err.message);
};

console.log("Starting Client ...")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(config.port);

var client = EventHubClient.fromConnectionString(connectionString, eventHubPath);
client
    .open()
    .then(function() {
        return client.createSender();
    })
    .then(function(sender) {
        app.post('/', upload.array(), function (req, res, next) {
            console.log(req.body);
            return sender.send(req.body);
        })
    })
    .catch(printError);
