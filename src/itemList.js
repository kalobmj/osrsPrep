import data from "./data.js";

// arr of keys
let itemNames = Object.keys(data);
itemNames = itemNames.map(item => item.toLowerCase())
// copy of itemNames for filter
let itemNamesCopy = itemNames;

console.log(itemNames)


const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const searchOptions = document.getElementById('options');
const dataRes = document.getElementById('data-res');

searchBar.value = ''

// searchBar keydown event
searchBar.addEventListener('keyup', () => {
    console.log('change occured');
	// copy of itemNames for filter
	let itemNamesCopy = itemNames;
	// this should filter from harcoded item list, based on user current input value
	itemNamesCopy = itemNamesCopy.filter(item => item.includes(searchBar.value))
	console.log(searchBar.value)
	console.log({itemNamesCopy})

	let firstTenItems = itemNamesCopy.slice(0, 10);
	console.log({firstTenItems});

	searchOptions.innerHTML = ''

	function onClickForDataRes(val) {
		dataRes.innerText = val
	};

	firstTenItems.map(items => {
		searchOptions.innerHTML += `
			<li id='search-result-list-item' class='list-group-item'>
				<a href='#' onClick="dataRes.innerText='${items}'">
					<span id='search-result-list-name'>
						${items}
					</span>
				</a>
			</li>
		`
	});

	console.log(searchOptions.innerHTML)

	if (searchBar.value === '') {
		searchOptions.innerHTML = ''
	}

});

// filter working
let itemNamesFilterTestAbyss = itemNames.filter(item => item.includes('abyss'));

console.log({itemNamesFilterTestAbyss})



// we will have the input bar update on each user keydown. This keydown will run a filter to determine the items that match the users input. If more than 10 include the top 10 items, if not just display what is available.

// div search -> input elem -> div results -> unordered list(ul) -> list elem(li) -> default to prob just span elem (or when user presses the search will begin) / takes item clicked, and executed search with completed item name

// can possibly include a search icon in the search dropdown. This would prob require taking a hardcode list of the item names, mapping over each then grabbing the item names and updating the list possibly. I feel like calling the api on each item might have many api calls. might skip the feature all together and might just have the item names

// user searches
// on keydown, filter out item list and display top 10 items
// take this list on the fly, and map over each item, to create list elements, then take those items and add them to the unordered list using innerHTML
// when user backtracks, execute the same logic.
// when search bar is empty, remove list elements and hide dropdown. 
