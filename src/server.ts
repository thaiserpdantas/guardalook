import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: 'Welcome to guardalook'
    });
});


const port = 3210;
app.listen(3210, () => {
    console.log('✨ Server started on port', port);
});