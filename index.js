let page = "landing";
let selectedImage= "";
printResults('.mainContainer',page)
document.querySelector('.searchBar').addEventListener("keyup",  function(){
   if(page == "landing")
   {
    printResults('.mainContainer',page, null)
   }
   else
   {
    document.querySelector('.products').innerHTML = ``;
    showSelected('.mainContainer', selectedImage,page);
   }

});
document.querySelector('.mainContainer').onclick = function(event) {
    page = "second";
    selectedImage = event.target.id;
    document.querySelector('.products').innerHTML = ``;
    showSelected('.mainContainer', event.target.id,page);
}
//////////////////////////////////////////////////////////////

function printResults(searchClass,page, selected)
{
    let buffer1 = `
        <div>
            <main>
        <div class="products">
        `;
    
    let buffer2 = `
        <div class="wrapper grid">
        `; 

    let buffer3 =`
                </div>
            </main>
        </div>
        `;

    rendering(searchClass,buffer1,buffer2,buffer3,page, selected);
}

function showSelected(searchClass, selected, page)
{
    let buffer1 = `
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
            <nav>
                <div class="navigationProducts">
        `;
    
    let buffer2 = `
        <div>
        `; 

    let buffer3 =`
            </div>
            </nav>
        </div>
            `;
    rendering(searchClass,buffer1,buffer2,buffer3,page, selected);

}


//////////////////////////////////////////////////////////////
function rendering(searchClass,buffer1,buffer2,buffer3,page, selected)
{

    console.log(document.querySelector('.searchBar').value);
    fetch('img/desktop.json')
    .then(res => res.json())
    .then(data =>{
        const database = data;
        const search = document.querySelector('.searchBar').value;
        clearResults();
        let counter = 0;
        let buffer = "";

        buffer += buffer1;

        for(let i =0; i < database.children.length; i++){

            let temporaryBuffer= "";
            let haveItems = false;
            temporaryBuffer +=`
                <div class="category"> 
                    <h3>${database.children[i].name}</h3>
                </div>
            `;
            temporaryBuffer += buffer2; 

            for(let y = 0; y < database.children[i].children.length; y++){
                if(database.children[i].children[y].name.toLocaleLowerCase().includes(search) || search == "") 
                {
                    counter++;
                    haveItems = true;
                    temporaryBuffer += `
                    <div class="item">
                        <figure class="fig">
                            <img id='${database.children[i].children[y].name}' type="button" src='../img/${database.children[i].children[y].path}' alt='${database.children[i].children[y].name}'>
                            <figcaption>${database.children[i].children[y].name}</figcaption>
                        </figure>
                    </div>
                    `; 
                }
            }
            temporaryBuffer += `</div>
            `;   
            if(haveItems)
            {

                buffer += temporaryBuffer;

            }
        }
        buffer += buffer3;
        document.querySelector(searchClass).innerHTML = buffer;
        document.querySelector('.counter').innerHTML = `${counter} layouts found`;


    /* if(document.querySelector(searchClass).innerHTML == "")
        {
            document.querySelector(searchClass).innerHTML = "No results...";
        }*/


        function clearResults(){
            document.querySelector(searchClass). innerHTML = "";
        }

        ////////////////rendering selected image//////////////////////////
        if(page == "second")
        {
            for(let i =0; i < database.children.length; i++){
                for(let y = 0; y < database.children[i].children.length; y++){
                    if(database.children[i].children[y].name == selected) 
                    {
                        document.querySelector(searchClass).innerHTML += `
                        
                        <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7">
                        <main>
                          <div class="products">
                                <img id='${database.children[i].children[y].name}' class="selectedImage" src='../img/${database.children[i].children[y].path}' alt='${database.children[i].children[y].name}'>
                          </div>
                        </main>
                    </div>
    
                        `;
                        break;
                    }
                }
            }
        }

    })
    .catch((error)=>{
        console.error(error);
    })
}
//////////////////////////////////////////////////////////
