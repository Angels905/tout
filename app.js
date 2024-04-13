const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient



// prisma.user.create({// 'create' une table automatiquement et incremente l'id
//     data: {
//         email:'fifi@gm',
//         password:'sdgfd',

//     }
// }).then(console.log)

// prisma.user.findMany({ // la condition our affiche est repose dur la condition email='f'
//     where:{email : {startsWith:'f'}}
// })
// .then(console.log)// il permet la recuperation des donnée du client et l'affiche sur le console grace a "node app.js"

// prisma.user.findUnique({ // 'Unique' permet daffiche selon la condition de where 
//     where:{email: 'fifi@gm'}
// })
// .then(console.log)// affiche sur le terminale

// prisma.user.update({ //  'update' c'est pour une mise à jour des donne et 'updatemeny' pour change sur tout les tables
//     where:{id:2},
//     data:{password:'1234'}//les nouvell donne
// })
// .then(console.log)

// prisma.user.create({ //  'create' une table avec un id aleatoire avec un seul element email
//     data:{
//         email:'papa@gmail'}//les nouvell donne
//    })
// .then(console.log)


// prisma.user.findUnique({
//     where : {
//         id:1
//     },

//     // includ : {
//     //     articles :true
//     // },
//     select: {//selection ne lemail et les article du user avec id 1
//         email:true,
//         articles:true
//     }
// }).then(console.log)

//une fonction find qui perlet d'affiche les articles d'un utilisateur 
async function find(){
    const user= await prisma.user.findUnique({
         where : {
             id:1
         },
 
         select: {//selection ne lemail et les article du user avec id 1
             email:true,
             articles:true
         }
     })
     console.log(user)
 }
 find().then(console.log)