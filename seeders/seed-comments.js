const db = require('../models')

// // To use await, we need an async function.
// async function seed() {
//     // Get the place, H-Thai-ML
//     let place = await db.Place.findOne({ name: 'H-Thai-ML' })
//     // Create a fake sample comment.
//     let comment = await db.Comment.create({
//         author: 'Famished Fran',
//         rant: false,
//         stars: 5.0,
//         content: 'Wow, simply amazing! Highly recommended!'
//     })
//     // Add that comment to the place's comment array.
//     place.comments.push(comment.id)
//     //save the place now that it has comment
//     await place.save()
//     // Exit the program
//     process.exit()
// }
// seed()

function seed() {
    db.place_schema.findOne({ name: 'H-Thai-ML' })
        .then((place) => {
            db.comment_schema.create({
                author: 'Famished Fran',
                rant: false,
                stars: 5.0,
                content: 'Wow, simply amazing! Highly recommended!' 
            })
                .then((comment) => {
                    place.comments.push(comment)
                    place.save()
                        .then(() => { process.exit() })
                })
        })
        .catch((err) => { console.log(err) })
}

seed()
