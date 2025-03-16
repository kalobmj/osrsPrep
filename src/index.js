const fetchItemId = async (item) => {

    console.log('Fetch itemId starting...')

    // first letter of item
    const searchLetter = item[0];
    console.log({searchLetter})
    
    try {
        const res = await fetch(`https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=${searchLetter}`);
        if (!res.ok) {
            throw new Error(`Error grabbing page of items starting with the letter ${searchLetter}`)
        };
        const data = await res.json();
        console.log({data})
    } catch(err) {
        console.error(err)
    }

    console.log('Fetch itemId completed')

};

const fetchItemData = async (item) => {

    try {
        const res = await fetch('https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=X')
    } catch(err) {
        console.error(err)
    }

};

fetchItemId('shark')
