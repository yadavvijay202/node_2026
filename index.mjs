import express from 'express'
const server = express()
const port = 5000

server.use(express.json())

server.post("/login", (req, res) => {
    console.log(req.body)
    res.status(200).json({
        message: "success"
    })
    })

server.listen(port, () =>{
    console.log(`server started on ${port}`)
})