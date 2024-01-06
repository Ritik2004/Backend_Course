// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server running on port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed!!!", err)
})




// To connect to database we have used good approaches like
// we have use iffe , use try and catch block along with
// async and await 

// import express from "express";
// const app = express()


// ( async =>{
//     try{
//      await 
//      mongoose.connect(`${process.env.
//         MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERRR:", error);
//             throw error
//         })
      
//         app.listen(process.env.PORT, ()=>{
//          console.log(`App is running om port ${process.env.PORT}`);
//         })

//     }
//     catch(error){
//      console.log("Error:", error)
//      throw err
//     }
// })()