const path = require('path');
let express = require('express');
let student = require('./Scripts/FormStudent.js');
let teacher = require('./Scripts/FormTeacher.js');
let app = express();

app.get("/", (_, res) => {
    res.sendFile('/home/sergey/defolt/HTML/index.html');
});

app.get("/Teacher" , (_, res) => {
    res.sendFile(path.join("/home/sergey/defolt/HTML", "/FormToTeacher.html"));
});

app.get("/Student", (_, res) => {
     res.sendFile(path.join("/home/sergey/defolt/HTML", "/FormToSudent.html"));
});
//
// app.post("/Teacher");
// app.post("/Student",  teacher.main());

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});