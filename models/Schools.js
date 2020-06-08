const mongoose = require('mongoose');
const SchoolsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    }, 

    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Name can not be more than 500 characters']
    },

    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
        'Please use a valid URL with HTTP or HTTPS'
    ]
    },

    phone: {
        type: String,
        maxlngth: [20, 'Phone number can not be longer than 20 characters']
    },

    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
    ]
    },

    address: {
        type: String,
        required: [true, 'Please add an address']
    },

        //****below******This is going to find the location of the school you choose. More documentaion here - https://mongoosejs.com/docs/geojson.html
    location: { 
            //GeoJSON Point
        type: {
            type: String,
            enum: ['Point'],  //the only value this can take is a point becassue we are dropping a point based on 'coordinates', the next one in the list.
        },

        coordinates: {
            type:[Number],
            index: '2dsphere'
        },

        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
   

        careers: {
            type: [String],
            required: true,
            enum: [
                'Web Develoment',
                'Mobile Development',
                'UI/UX',
                'Data Scinece',
                'Business',
                'Other'
            ]
        },

        averageRating: {
            type: Number,
            min: [1, 'Rating must be at least 1'],
            max: [10, 'Rating can not be more than 10']
        },

        averageCost: Number,
        photo: {
            type: String,
            default: 'no-photo.jpg'
        },

        housing: {
            type: Boolean,
            default: false
        },

        jpbAssistance: {
            type: Boolean,
            default: false
        },

        jobGuarantee: {
            type: Boolean,
            default: false
        },

        acceptGi: {
            type: Boolean,
            default: false
        },

        createdAt: {
            type:Date,
            default: Date.now
        }



    },

    



});

module.exports = mongoose.model('Schools', SchoolsSchema);