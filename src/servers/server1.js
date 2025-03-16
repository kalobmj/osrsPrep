import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// api call for fetching item list
app.get('/api/itemId:firstLetter', cors(), async (req, res) => {

    const firstLetter = req.params.firstLetter
    console.log({firstLetter})

    let baseURL = 'https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=';

    try {
        const res = await fetch(`${baseURL}${firstLetter}`);
        if (!res.ok) {
            throw new Error(`Error calling api with first letter ${firstLetter}`)
        };
        const data = await res.json();
        console.log({data});
        res.send(JSON.stringify(data))
    } catch(err) {
        console.log('err found')
        console.error(err)
        // res.send(err)
    }

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});