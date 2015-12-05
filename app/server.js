/**
 * Created by a487037 on 12/03/2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/heros', function (request, response) {
    fs.readFile('data/heros.json', function (error, data) {
        response.json(JSON.parse(data));
    });
});

app.post('/heros', function (request, response) {
    var heros;
    fs.readFile('data/heros.json', function (error, data) {
        heros = JSON.parse(data);
        heros.push(request.body);
        console.log(request.body);
        fs.writeFile('data/heros.json', JSON.stringify(heros), function () {
            console.log('File updated');
            response.send(heros);
        });
    });
});

app.put('/movies/:id', function (request, response) {
    var id = request.params.id, heros;
    console.log('Updaing the movie list for ' + id);
    fs.readFile('data/heros.json', function (error, data) {
        heros = JSON.parse(data);
        for (var i = 0; i < heros.length; i++) {
            if (heros[i].id == id) {
                if (heros[i].movieslist === null || typeof heros[i].movieslist === 'undefined') {
                    heros[i].movieslist = [];
                }
                heros[i].movieslist.push(request.body);
                console.log('Movie pushed in..');
                fs.writeFile('data/heros.json', JSON.stringify(heros), function () {
                    console.log('File updated');
                    response.send(heros);
                });
            }
        }
    });
});

app.listen(1234, function () {
    console.log('Your server is running on the port 1234');
});