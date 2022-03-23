   function printResults() {
       fetch('img/desktop.json')
    .then(res => res.json())
    .then(data =>{
        const database = data;
        const search = document.querySelector('.searchBar').value;
       // console.log(${database.children[i].children[y].path);
        clearResults();
    
        for(let i =0; i < database.children.length; i++){

            let buffer = "";
            for(let y =0; y < database.children[i].children.length; y++){
                if(database.children[i].children[y].name.toLocaleLowerCase().includes(search) || search == "") 
                {
                    buffer += `
                    <div class="item big-box">
                        <figure>
                            <img id="menu1" class="" type="button" src='../img/${database.children[i].children[y].path}' alt='${database.children[i].children[y].name}'>
                            <figcaption>${database.children[i].children[y].name}</figcaption>
                        </figure>
                    </div>
                    
                    `; 
                }
            }

            if(buffer !== "")
            {
                document.querySelector('.products').innerHTML += `
                
                <div class="category"> 
                    <h3>${database.children[i].name}</h3>
                </div>
                
                `; 
                document.querySelector('.products').innerHTML += buffer;

            }
        }
        if(document.querySelector('.products').innerHTML == "")
        {
            document.querySelector('.products').innerHTML = "No results...";
        }


        function clearResults(){
            document.querySelector('.products'). innerHTML = "";
        }

    })
    .catch((error)=>{
        console.error(error);
    })
}
////////////////first render/////////////////
fetch('img/desktop.json')
.then(res => res.json())
.then(data =>{
    const database = data;
    let testMuqueca = 0;

    for(let i =0; i < database.children.length; i++){

        document.querySelector('.products').innerHTML += `
                
        <div class="category"> 
            <h3>${database.children[i].name}</h3>
        </div>
        
        `; 
        
        for(let y =0; y < database.children[i].children.length; y++){
            testMuqueca++;
                document.querySelector('.products').innerHTML += `
                
                <div class="item big-box">
                <figure>
                    <img id="menu1" class="" type="button" src='../img/${database.children[i].children[y].path}' alt='${database.children[i].children[y].name}'>
                    <figcaption>${database.children[i].children[y].name}</figcaption>
                </figure>
                </div>
                
                `; 
            }

    }
console.log(testMuqueca );

})
.catch((error)=>{
    console.error(error);
})
/////////////////////////////////////////////

    document.querySelector('.searchBar').addEventListener("keyup", printResults);
