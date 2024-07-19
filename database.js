//linking to database
const express=require('express')
const app=express()
const sequelize=require("sequelize")
//function with databse name,username ,password and objects like host and dialecct
const sequel=new sequelize('student','postgres','qwert@123',{
    host:'localhost',
    dialect:'postgres'
})

const db={}
db.sequelize=sequelize
db.sequel=sequel

//creating table 

const table =db.sequel.define('data',{
    Uname:{
       type:sequelize.STRING,
       allowNull:false
    },
    Uid:{
        type:sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    dob:{
        type:sequelize.DATE,
        allowNull:false
    },
    location:{
        type:sequelize.STRING,
        allowNull:true
    }

},{
    timestamps:false
})

db.sequel.sync({alter:true}).then(function(){
    console.log("model synced to database")
})

//inserting elements

    table.create({'Uname':'Dhanu','Uid':7,'dob':12-3-2003})
    table.bulkCreate([
        {'Uname':'Dhanush','Uid':8,'dob':13-3-2003},
        {'Uname':'asd','Uid':9,'dob':14-3-2003},
        {'Uname':'sdfg','Uid':23,'dob':15-3-2003}
    ])

// updating elements in record

    table.update({Uname:'abcd'},{
        where:{
            Uid:23
        }
    })

//FINDALL
app.get("/",(req,res)=>{
    table.findAll({
    
    }).then(find=>{
        console.log('found')
        res.send(find)
    })
})

table.update({
    location:'sdm'
},{
    where:{
       Uid:7
    }
})

table.destroy({where:{Uid:9}})




    app.listen(2000,()=>{
        console.log("App is running in 2000");
    })