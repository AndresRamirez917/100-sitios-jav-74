async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=Vodka');
    const coctail = await result.json();
    console.log(coctail);
    const numArr = ["1", "2", "3", "4", "5", "6" ];
    const coctailSlice = coctail.drinks.sort(() => 0.5 - Math.random).slice(0, 6);
    coctailSlice.forEach((element, index) => {
        const box = document.createRange().createContextualFragment(`
            
            <div class="grid-box box-${numArr[index]}">
             
                </div>
                 <a href="project${numArr[index]}.html?img=${encodeURIComponent(element.strDrinkThumb)}" class="btn" onclick="saveImage('${element.strDrinkThumb}', '${numArr[index]}')"></a>
                
                `)
                const showcase = document.getElementById('showcase');
                showcase.append(box)
            });
        }

        function saveImage(imgUrl, page) {
            localStorage.setItem(`savedImage_${page}`, imgUrl);
        } 

        getData()

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