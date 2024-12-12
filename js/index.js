async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=Vodka');
    const coctail = await result.json();
    console.log(coctail);
}
getData()