const mongoose = require('mongoose');
const Property = require('./models/property');

mongoose.connect('mongodb://localhost:27017/rentease', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const properties = [
    {
        type: 'buy',
        title: 'Luxury Apartment',
        description: 'A beautiful luxury apartment in the city center.',
        price: 500000,
        location: 'City Center',
        image: 'property1.jpg',
        soldOut: false
    },
    {
        type: 'rent',
        title: 'Cozy Studio',
        description: 'A cozy studio apartment for rent.',
        price: 1200,
        location: 'Downtown',
        image: '/images/property2.jpg'
    },
    {
        type: 'buy',
        title: 'Modern Townhouse',
        description: 'A modern townhouse with a spacious layout and backyard.',
        price: 350000,
        location: 'Suburb',
        image: '/images/property3.jpg',
        soldOut: true
    },
    {
        type: 'rent',
        title: 'Charming Cottage',
        description: 'A charming cottage with a garden and peaceful surroundings.',
        price: 800,
        location: 'Countryside',
        image: '/images/property4.jpg'
    },
    // {
    //     type: 'buy',
    //     title: 'Penthouse Suite',
    //     description: 'An upscale penthouse with panoramic city views.',
    //     price: 1200000,
    //     location: 'Downtown',
    //     image: '/images/property5.jpg'
    // },
    {
        type: 'rent',
        title: 'Urban Loft',
        description: 'An urban loft with open space and modern amenities.',
        price: 1500,
        location: 'City Center',
        image: '/images/property6.jpg'
     
    },
    {
        type: 'buy',
        title: 'Family Home',
        description: 'A spacious family home with multiple bedrooms and a large yard.',
        price: 450000,
        location: 'Suburb',
        image: '/images/property7.jpg',
        soldOut: false
    },
    {
        type: 'rent',
        title: 'Beachfront Bungalow',
        description: 'A beachfront bungalow with stunning ocean views.',
        price: 2000,
        location: 'Coastal',
        image: '/images/property8.jpg'
    },
    {
        type: 'buy',
        title: 'Victorian Mansion',
        description: 'A historic Victorian mansion with original architecture and large grounds.',
        price: 850000,
        location: 'Historic District',
        image: '/images/property9.jpg',
        soldOut: true
    }
    // {
    //     type: 'rent',
    //     title: 'Studio Apartment',
    //     description: 'A small but efficient studio apartment in a prime location.',
    //     price: 950,
    //     location: 'Downtown',
    //     image: '/images/property10.jpg'
    // }
    // Add more properties as needed
];

// async function populateDatabase() {
//     try {
//         console.log('Connecting to database...');
//         await mongoose.connection.once('open', () => console.log('Database connected!'));

//         console.log('Clearing existing properties...');
//         await Property.deleteMany({});

//         console.log('Inserting new properties...');
//         await Property.insertMany(properties);

//         console.log('Properties added!');
//     } catch (err) {
//         console.error('Error populating database:', err.message);
//     } finally {
//         mongoose.connection.close();
//     }
// }

// populateDatabase();

async function populateDatabase() {
    try {
        console.log('Connecting to database...');
        await mongoose.connect('mongodb://localhost:27017/rentease', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected!');

        console.log('Clearing existing properties...');
        await Property.deleteMany({});

        console.log('Inserting new properties...');
        const result = await Property.insertMany(properties);
        console.log('Properties added:', result);
    } catch (err) {
        console.error('Error populating database:', err.message);
    } finally {
        mongoose.connection.close();
    }
}

populateDatabase();


