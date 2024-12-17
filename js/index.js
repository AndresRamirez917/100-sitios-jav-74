async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=Vodka');
    const coctail = await result.json();
    console.log(coctail);
    const numArr = ["1", "2", "3", "4", "5", "6" ];
    const coctailSlice = coctail.drinks.sort(() => 0.5 - Math.random).slice(0, 6);
    coctailSlice.forEach((element, index) => {
        const box = document.createRange().createContextualFragment(`
            
            <div class="grid-box box-${numArr[index]}">
                <a href="project${numArr[index]}.html?img=${encodeURIComponent(element.strDrinkThumb)}" onclick="saveImage('${element.strDrinkThumb}', '${numArr[index]}')">
                <img src="${element.strDrinkThumb}" alt="">
                </a>
            </div>
                
   
       
                `)
                const showcase = document.getElementById('showcase');
                showcase.append(box)
            });
        }

        function saveImage(imgUrl, page) {
            localStorage.setItem(`savedImage_${page}`, imgUrl);
        } 

        getData()

        async function getData2() {
            const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=Vodka');
            const coctail = await result.json();
            const numArr = ["1", "2", "3", "4", "5", "6"];
            const coctailSlice = coctail.drinks.sort(() => 0.5 - Math.random()).slice(0, 6);
            coctailSlice.forEach(element => {
                const box = document.createRange().createContextualFragment(`
                    
                    <div class="flex-box box-1">
                        <img src="${element.strDrinkThumb}" alt="">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur quia inventore quos accusantium odit provident magnam et pariatur hic, alias, soluta magni unde ipsum dolore at quam! Quam animi dolore reprehenderit fugit, recusandae ea.
                        </p>
                    </div>
                    
                    `)
                    const work_row = document.querySelector('.work-row');
                    work_row.append(box)
            })
        }
        getData2()

        const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
            e.preventDefault();
            const inputArr = [
                {id:"nombre", nombe:"Nombre"},
                {id:"email", nombe:"Email"},
                {id:"fecha", nombe:"Fecha"},
                {id:"hora", nombe:"Hora"},
                {id:"mensaje", nombe:"Mensaje"}
            ];
            for(let{id, nombe} of inputArr ){
                const element = document.getElementById(id);
                if(element.value.trim() === ""){
                    return  swal({
                        title: `El campo ${nombe} no puede estar vacío`,
                        icon: "error",
                         })
                }
                if("email" === id && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.value)){
                    return  swal({
                        title: `El campo ${nombe} no tiene el formato correcto`,
                        icon: "error",
                         })
                }
            }
            swal({
                title: `Datos enviados satisfactoriamente`,
                icon: "success",
                 })
                 inputArr.forEach(({id}) => document.getElementById(id).value = "")
    }