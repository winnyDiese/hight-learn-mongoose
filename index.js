
const mongoose = require('mongoose')
const Blog = require('./blog')

// async ()=>{
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/testMongoose')
//         console.log('Connexion reussi avec la bdd')
//     } catch (error) {
//         console.log(error.message)
//     }
// }


async function bddConnexion(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testMongoose')
        console.log('Connexion reussi avec la bdd')

        // // Methode one
        // const blog = new Blog({
        //     titre : "Titre 11",
        //     contenu: "Contenu 11"
        // })
        // const result = await blog.save()

            

        // // Methode Two
        // const result = await Blog.create({
        //     titre: "Titre 2",
        //     contenu: "Contenu 2"
        // })
        // console.log(result)


        const find = await Blog.find()
        console.log(find)


    } catch (error) {
        console.log(error.message)
    }
}

bddConnexion()
