const express = require('express');
const sendEmail = require('./methods/sendEmail');
const sendEmail2 = require('./methods/sendEmail2');
const app = new express();
const port = 3000


app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.json()); 
app.use(express.urlencoded({ extended:true }));

app.route('/').get((req,res)=>{
    res.render('test.ejs')
})


// app.route('/sendEmail').get((req,res)=>{
//     console.log('sendEmail get ')
//     res.send("/sendEmail get ")
// })
// .post(sendEmail,(req,res)=>{
//     console.log(req.body, typeof req.body,"here");

//     // sendEmail(req.body.email, req.body.message);
//     // res.send("okay")
// })

app.get('/sendEmail',(req,res)=>{
    console.log("sendemail get");
    res.end();
})

// following below both post routes are working
app.post('/sendEmail',(req,res)=>{
    console.log("post here");
    sendEmail(req,(info)=>{
        console.log("this is callback")
        console.log(info)
        res.send("sending mail testing")
    })
});

app.post('/sendEmail2', sendEmail2);

app.route('*').get((req,res)=>{
    res.send('404')
})
.post((req,res)=>{
    res.send('404_p');
});

app.listen(port,(err)=>{
    if(!err) console.log(`http://localhost:${port}`)
    else console.log("error occured:",err);
})