
let express = require('express');
let app = express();
app.get('/', (req, res) => {
    res.send('Hello Express');
}); app.listen(3022, () => {
    console.log('App listening on port 3022');
});