const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
 const tempelatePath = path.join(__dirname, '/templates')
 const User = require('./mongoodb');
const { disconnect } = require('process');
console.log(tempelatePath);
app.use(express.json())
app.set('view engine', 'hbs');
app.set('views', tempelatePath);
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    console.log("hittd home")
    res.render("home");
});

app.get("/login", (req, res) => {
    console.log("login hitted")
    res.render("login")
});


app.get("/signup", (req, res) => {
    console.log("signup hitted")
    res.render("signup");
});


app.post('/signup', async (req, res) => {
    console.log(req.body)
    const data = {
        firstName: req.body.F_Name,
        lastName: req.body.L_Name,
        UserName: req.body.U_Name,
        email: req.body.email,
        password: req.body.password
    }
    console.log(data);
    await User.create(data)
    res.render('home')
});
app.post('/login', async (req, res) => {
try{
    console.log(req.body)
    const check=await User.findOne({email:req.body.email })
    if(check.password==req.body.password)
    res.render('welcome')
    else{
        res.send('worng password try again')
    }
}

catch{disconnect
res.send("Oops! wrong details goback and try again")
}
  
});

app.listen(3000, () => {
    console.log('Server started on ports 3000');
});