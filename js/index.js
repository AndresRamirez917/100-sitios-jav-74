async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=Vodka');
    const coctail = await result.json();
    console.log(coctail);
    const numArr = ["1", "2", "3", "4", "5", "6" ];
    const coctailSlice = coctail.drinks.sort(() => 0.5 - Math.random).slice(0, 6);
    coctailSlice.forEach((element, index) => {
        const box = document.createRange().createContextualFragment(`
            
            <div class="grid-box box-${numArr[index]}">
                
                <a href="project1.html" class="msj1" ><img src="${element.strDrinkThumb}" alt=""></a>
                </div>
                
                `)
                const showcase = document.getElementById('showcase');
                showcase.append(box)
            });
        }
        getData()
        // <a href="project1.html" class="msj1">Project one rose palm tree</a>