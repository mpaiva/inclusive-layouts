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
                    <img id="menu1" class="" type="button" src='../img/${database.children[i].children[y].path}' alt='${database.children[i].children[y].name}'>
                    <p>${database.children[i].children[y].name}</p>
                </div>
                    
                    `; 
                }
            }

            if(buffer !== "")
            {
                document.querySelector('.products').innerHTML += `
                
                <div class="category"> 
                    <h1>${database.children[i].name}</h1>
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

    for(let i =0; i < database.children.length; i++){

        document.querySelector('.products').innerHTML += `
                
        <div class="category"> 
            <h1>${database.children[i].name}</h1>
        </div>
        
        `; 
        
        for(let y =0; y < database.children[i].children.length; y++){

                document.querySelector('.products').innerHTML += `
                
                <div class="item big-box">
                    <img id="menu1" class="" type="button" src='../img/${database.children[i].children[y].path}' alt='${database.children[i].children[y].name}'>
                    <p>${database.children[i].children[y].name}</p>
                </div>
                
                `; 
            }

    }


})
.catch((error)=>{
    console.error(error);
})
/////////////////////////////////////////////

    document.querySelector('.searchBar').addEventListener("keyup", printResults);
