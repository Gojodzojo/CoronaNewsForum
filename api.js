const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
require('dotenv').config()
app.use(express.json())
app.use(AllowCrossDomain)

const port = process.env.PORT || 4000
let posts = require('./posts.json')

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => 
{
    console.log(`Nasłuchiwanie portu ${port}`)
})

app.get('/posts', (req,res) =>
{   
    const postsTitles = posts.map(post => {
        return {
            title: post.title,
            author: post.author,
            id: post.id
        }
    })
    res.json({posts: postsTitles})
})

app.post('/posts', (req,res) =>
{   
    const {author, text, title} = req.body
    const newPost = {
        title: title,
        author: author,
        text: text,
        id: generateID(),
        answers: []
    }
    posts.push(newPost)
    res.json({status: "Success"})
})

app.get('/posts/:id', (req, res) => {
    const post = posts.find(({id}) => id == req.params.id)
    res.json(post)
})

app.post('/posts/:id', (req, res) => {
    const { answers } = posts.find(({id}) => id == req.params.id)
    answers.push(req.body)
    res.json({status: "Success"})
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

process.stdin.resume()
process.on('exit', onExit)
process.on('SIGINT', onExit)
process.on('uncaughtException', onExit)

function onExit() {
    console.log('koniec')
    fs.writeFileSync('posts.json', JSON.stringify(posts))
    process.exit()
}

function AllowCrossDomain(req, res, next)
{
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    next()
}

function generateID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}