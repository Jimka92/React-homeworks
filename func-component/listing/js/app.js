'use strict';

function webStore(bid) {
  console.log(bid);
}

const siteurl = 'https://neto-api.herokuapp.com/etsy';

// Создадим компонент Listing 
function Listing(props) {
  if (!props.items || !Array.isArray(props.items) || !props.items.length) return;
  
                 

