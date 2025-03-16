
const resDisplay = document.getElementById('data-res');

const fetchItemId = async (item) => {

    console.log('Fetch itemId starting...')

    const baseURL = 'http://localhost:5000/api/itemId';

    // first letter of item
    const searchLetter = item[0];
    console.log({searchLetter})

    try {
        const res = await fetch(`${baseURL}${searchLetter}`);
        if (!res.ok) {
            throw new Error(`Error calling backend...`)
        };
        const data = await res.json();
        console.log(`${item} data: `, data)
        const newData = JSON.stringify(data);
        const parsedData = JSON.parse(newData);
        console.log(parsedData['shark'])
        resDisplay.innerText = JSON.stringify(data);
    } catch(err) {
        console.error(err)
    };
    
    // try {
    //     const res = await fetch(`https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=${searchLetter}`);
    //     if (!res.ok) {
    //         throw new Error(`Error grabbing page of items starting with the letter ${searchLetter}`)
    //     };
    //     const data = await res.json();
    //     console.log({data})
    // } catch(err) {
    //     console.error(err)
    // }



    console.log('Fetch itemId completed')

};

const fetchItemData = async (item) => {

    try {
        const res = await fetch('https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=X')
    } catch(err) {
        console.error(err)
    }

};

const testFetch = async () => {
    try {
        const res = await fetch('https://api.weirdgloop.org/exchange/history/osrs/latest?name=Nightmare%20staff');
        if (!res.ok) {
            throw new Error(`Error fetching data from api...`)
        };
        const data = await res.json();
        console.log({data})
        console.log(data)
        const itemName = "Nightmare staff"
        const itemData = data[itemName];
        console.log({itemData})
        console.log(itemData.id)
        resDisplay.innerText = JSON.stringify(data);
    } catch(err) {
        console.error(err)
    }
};

const fetchPrice = async (item) => {
    
    console.log(`Begin fetching ${item} data...`)

    console.log(item)
    const regex = /\s/gi;
    const searchStr = item.replaceAll(regex, '%20');
    console.log(searchStr);

    const baseURL = 'https://api.weirdgloop.org/exchange/history/osrs/latest?name=';

    console.log(`${baseURL}${searchStr}`)

    try {
        const res = await fetch(`${baseURL}${searchStr}`);
        if (!res.ok) {
            throw new Error(`Error calling API using ${searchStr} search term`)
        };
        const data = await res.json();
        console.log({data})
        const itemData = data[item];
        console.log({itemData})
        console.log('This is our id data: ', itemData.id);
        console.log('This is our timestamp data: ', itemData.timestamp);
        console.log('This is our price data: ', itemData.price);
        console.log('This is our volume data: ', itemData.volume);
        console.log(`Here is your requested Data for the item: ${item}`, itemData);
        resDisplay.innerText = JSON.stringify(itemData);
    } catch(err) {
        console.error(err)
    }

    console.log(`Done fetching ${item} data`)


}

// testFetch();

const testFetchId = async (id) => {

    console.log(`Beginning fetching data using Id: ${id}`);

    // our CORS workaround
    const corsURL = 'https://corsproxy.io/?url=';
    
    const baseURL = 'https://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item='

    console.log('This is our cors url: ', `${corsURL}${baseURL}${id}`);
    
    try {
        const res = await fetch(`${corsURL}${baseURL}${id}`);
        if (!res.ok) {
            throw new Error(`Error calling API using item id: ${id}`)
        }
        const data = await res.json();
        console.log('our cors API call was okay. Our data is: ', data)
        console.log({data})
    } catch(err) {
        console.error(err)
    }

    console.log(`Done fetching data using Id: ${id}`)
    
}

fetchPrice('Nightmare staff');
fetchPrice('3rd age platebody');
testFetchId(10348) // 3rd age platebody Id
testFetchId(24422) // Nightmare staff Id

// fetchItemId('shark')
