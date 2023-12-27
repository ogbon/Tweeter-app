import express from 'express';
import 'dotenv/config'

const app = express()
const port = process.env.PORT

app.use(express.json())



app.use('/', (req,res) => {
    res.status(200).send({message: 'You are Welcome Tweeter App'})
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
