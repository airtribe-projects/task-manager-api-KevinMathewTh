// Express Serve with GET API
const express = require('express');
const app = express();
app.use(express.json())
// GET tasks.json and store it in a list called tasks
let tasks = [{
    "id": 1,
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false,
    "priority": "high",
    "creationDate": new Date()
  }];
// GET TASKS API
app.get('/tasks', (req, res) => {
    if(!req.query.completed){
        tasks.sort((a, b) => b.creationDate - a.creationDate);
        res.send(tasks); 
    }
    else{
        const filteredTask=tasks.filter((task)=> String(req.query.completed)==String(task.completed)
        ).map((task)=>task);
        filteredTask.sort((a, b) => a.creationDate - b.creationDate);
        res.send(filteredTask);
    }
    
});
// GET TASK BY ID API
app.get('/tasks/:id', (req, res) => {
    const id=parseInt(req.params.id)
    const task=tasks.find((task)=>task.id==parseInt(id))
    if(!task){
        return res.status(404).send("Task Id is not found");
    }
    res.send(tasks)
});
// GET TASK BY PRIORITY
app.get('/tasks/priority/:level', (req, res) => {
    //console.log(String(req.params.level));
    const filteredTask=tasks.filter((task)=> 
        String(req.params.level).toLowerCase()==String(task.priority).toLowerCase())
        .map((task)=>task);
    filteredTask.sort((a, b) => a.creationDate - b.creationDate);
    res.send(filteredTask);
});
// POST TASK API
app.post('/tasks', (req, res) => {
    const priorities =["low","medium","high"]
    const task = req.body;
    task.id=tasks.length+1;
    const date = new Date();
    task.creationDate=date;
    console.log(typeof(task.completed))
    if(!req.body.title || !req.body.description || typeof(req.body.completed)!="boolean" || priorities.indexOf(req.body.priority)==-1 ){
        return res.status(400).send("Invalid Input");
    }
    tasks.push(task);
    res.send(tasks);
    
});
// PUT TASK API To edit Task with Id
app.put('/tasks/:id', (req, res) => {
    const priorities =["low","medium","high"]
    const id=req.params.id;
    const task=tasks.find((task)=>task.id==parseInt(id))
    if(!req.body.title || !req.body.description || typeof(req.body.completed)!="boolean" || priorities.indexOf(req.body.priority)==-1 ){
        return res.status(400).send("Invalid Input");
    }
    task.title=req.body.title;
    task.description=req.body.description;
    task.completed=req.body.completed;
    task.priority=req.body.priority;
    res.send(task)

});
// DELETE TASK API
app.delete('/tasks/:id', (req, res) => {
   const id=req.params.id;
   const task=tasks.find((task)=>task.id==parseInt(id))
   const index=tasks.indexOf(task)
   tasks.splice(index,1);
   res.send(tasks)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});