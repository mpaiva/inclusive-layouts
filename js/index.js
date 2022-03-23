const database = [
{
    name: "Product 1",
},
{
    name: "Product 2",
},
{
    name: "Product 3",
},
{
    name: "Product 4",
},
{
    name: "Product 5",
},
{
    name: "Product 6",
},
{
    name: "Product 7",
},
{
    name: "Product 8",
},
{
    name: "Product 9",
}
];

function clearResults(){
    document.querySelector('.products'). innerHTML = "";
}

function getResults(){
    const search = document.querySelector('.searchBar').value;

     clearResults();

    for(let i =0; i < database.length; i++){
        if(database[i].name.toLocaleLowerCase().includes(search)) 
        {
            document.querySelector('.products').innerHTML += `
            
            <div class="item big-box">
                <img id="menu1" class="" type="button" src="images/menu1.jpg" alt="" data-toggle="modal"
                data-target="#menu01">
                <div class="img"></div>
                <p>${database[i].name}</p>
            </div>
            
            `; 
        }
    }
    if(document.querySelector('.products').innerHTML == "")
    {document.querySelector('.products').innerHTML = "No results..." 

    }
    
}
for(let i =0; i < database.length; i++){
        document.querySelector('.products').innerHTML += `
        
        <div class="item big-box">
            <img id="menu1" class="" type="button" src="images/menu1.jpg" alt="" data-toggle="modal"
            data-target="#menu01">
            <div class="img"></div>
            <p>${database[i].name}</p>
        </div>
        
        `; 
}

document.querySelector('.searchBar').addEventListener("keyup", getResults);