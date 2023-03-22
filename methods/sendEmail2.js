const sendEmail2 = (req,res)=>{
    console.log("here");
    console.log(req.body);

    res.send("respnse from send email2");
}

module.exports = sendEmail2;