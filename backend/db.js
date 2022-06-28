const Sequelize=require('sequelize')
const db=new Sequelize({
    dialect:'mysql',
    database:'HowWasYourDay',
    username:'lucifer2',
    password:'Lucifer21!1'
})

const Days=db.define('Days',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    date:{
        type:Sequelize.DATE,
        allowNull:false
    },
    day:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports={db,Days}

