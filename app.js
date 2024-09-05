const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rentease', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/rentease',
        collectionName: 'sessions',
    }),
}));

// Use routes
app.use('/', indexRouter);
app.use('/auth', authRouter); // Adding a route for authentication

app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', { title: 'Server Error' });
});


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
