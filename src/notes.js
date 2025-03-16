// A note for OSRS - if you wish to access Old School Runescape's Grand Exchange, change "m=itemdb_rs" to "m=itemdb_oldschool" in the URL. Along with this, there is only 1 category. A proper call to get page 1 of all items that start with the letter 'c' for the OSRS API would look like: https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=c&page=1. Alpha is explained later in the wiki but it is the first letter of the item.

// Configuration

// info returns the runedate of when the Grand Exchange Database was last updated. The URL for the info query is https://secure.runescape.com/m=itemdb_rs/api/info.json. 

// detail

// detail returns current price and price trends information on tradeable items in the Grand Exchange, the category, item image and examine for the given item. The URL for detail queries is https://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=X where X is the ItemID.

// For example, if we want the information on steadfast boots, we'd go to https://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=21787, which would result in

// {"item":{"icon":"https://services.runescape.com/m=itemdb_rs/4856_obj_sprite.gif?id=21787","icon_large":"https://services.runescape.com/m=itemdb_rs/4856_obj_big.gif?id=21787","id":21787,"type":"Miscellaneous","typeIcon":"https://www.runescape.com/img/categories/Miscellaneous","name":"Steadfast boots","description":"A pair of powerful-looking boots.","current":{"trend":"neutral","price":"17.0m"},"today":{"trend":"negative","price":"-897.2k"},"members":"true","day30":{"trend":"positive","change":"+27.0%"},"day90":{"trend":"positive","change":"+30.0%"},"day180":{"trend":"positive","change":"+8.0%"}}}

// Images

// The Grand Exchange Database can return item images with obj_big and obj_sprite. These images can sometimes be skewed since it includes items that might not necessarily be seen in game such as placeholder graphics for most cosmetic overrides from Solomon's General Store, use the mtx pet icon for various pets and the achievement banner in other cases. Many items from Treasure Hunter and Solomon's General Store can be seen before being released in-game by sometimes over a month ahead.

//     The URL for obj_big queries is https://services.runescape.com/m=itemdb_rs/obj_big.gif?id=X where X is the ItemID.
//     The URL for obj_sprite queries is https://services.runescape.com/m=itemdb_rs/obj_sprite.gif?id=X where X is the ItemID.

// For example, if we want to see the image for Mod Daze's homework, we'd go to https://services.runescape.com/m=itemdb_rs/obj_big.gif?id=34775 for a detailed image or https://services.runescape.com/m=itemdb_rs/obj_sprite.gif?id=34775 for the inventory icon. Unlike the images as seen in the game, the Grand Exchange Database images have a completely solid line surrounding items, which is different from ingame since there are breaks in images for borders.

// Note that item images retrieved outside of the above place the most recent runedate before obj_big and obj_sprite. When the next system update occurs and info.json is updated, the link no longer operates for those that had a runedate in the link. 

// fetch item id

// https://api.weirdgloop.org/exchange/history/osrs/latest?name=Nightmare%20staff