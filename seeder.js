//The purpose of this file is to connect to the database and automatically have the .json files reaad and input in to the DB.  
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const Schools = require('./models/Schools')


//Connect to the DB
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


//Read the JSON files tht are saved locally
const schools = JSON.parse(fs.readFileSync(`${__dirname}/_data/schools.json`, 'utf-8'));


//import into DB 
const importData = async () => {
    try {

        await Schools.create(schools);

        console.log('data imported'.brightCyan);
        process.exit();

    } catch (err) {

        console.log(err)
        
    }
}

//delete data
const deleteData = async () => {
    try {

        await Schools.deleteMany();

        console.log('data deleted'.brightRed);
        process.exit();

    } catch (err) {

        console.log(err)
        
    }
}

if(process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
        deleteData();
}
