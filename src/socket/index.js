const express = require('express')
const bodyParser = require('body-parser')
const socket = require('socket.io')
const cors = require('cors')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

var server = app.listen(5000,()=>{
    console.log("Howdy, I am running at PORT 5000")
})

var io =  socket(server);

io.on("connection", function(socket){
    console.log("Socket Connection Established with ID :"+ socket.id)
})

//ini endpoint notif dari nodejs
app.get('/pushNotif', (req,res) => {
    //untuk push notif ke vue nya
    io.emit("sendNotifToVue", 'Ini Notif Dari Backend')
    //sampai sini
    res.send('result')
})
//sampai sini