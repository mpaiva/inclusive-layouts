   function printResults(searchClass, page) {
       console.log(document.querySelector('.searchBar').value);
       fetch('img/desktop.json')
    .then(res => res.json())
    .then(data =>{
        const database = data;
        const search = document.querySelector('.searchBar').value;
       // console.log(${database.children[i].children[y].path);
        clearResults();
        let counter = 0;

        let buffer = "";
        buffer = `
              <div>
                <main>
                <div class="products">
        `;
        for(let i =0; i < database.children.length; i++){

            let temporaryBuffer= "";
            let haveItems = false;
            temporaryBuffer += `
                
            <div class="category"> 
                <h3>${database.children[i].name}</h3>
            </div>
            
            <div class="wrapper grid">
            `; 

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
        buffer +=`
          </div>
        </main>
    </div>
        `;
        document.querySelector(searchClass).innerHTML = buffer;
        document.querySelector('.counter').innerHTML = `${counter} layouts found`;


       /* if(document.querySelector(searchClass).innerHTML == "")
        {
            document.querySelector(searchClass).innerHTML = "No results...";
        }*/


        function clearResults(){
            document.querySelector(searchClass). innerHTML = "";
        }

    })
    .catch((error)=>{
        console.error(error);
    })
}
////////////////first render/////////////////
////////////////////////////////////////////
/////////////////////////////////////////////


    function showSelected(searchClass, selected, page)
    {
        fetch('img/desktop.json')
        .then(res => res.json())
        .then(data =>{
            const database = data;
            const search = document.querySelector('.searchBar').value;
           // console.log(${database.children[i].children[y].path);
            clearResults();
            let counter = 0;
    
            let buffer = "";
            buffer = `
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
                    <nav>
                        <div class="navigationProducts">
            `;
            for(let i =0; i < database.children.length; i++){
    
                let temporaryBuffer= "";
                let haveItems = false;
                temporaryBuffer += `
                    
                <div class="category"> 
                    <h3>${database.children[i].name}</h3>
                </div>
                
                <div>
                `; 
    
                for(let y = 0; y < database.children[i].children.length; y++){
                    if(database.children[i].children[y].name.toLocaleLowerCase().includes(search) || search == "") 
                    {
                        counter++;
                        haveItems = true;
                        temporaryBuffer += `
                        <div class="item">
                            <figure class="fig">
                                <img id='${database.children[i].children[y].name}' class="img" type="button" src='../img/${database.children[i].children[y].path}' alt='${database.children[i].children[y].name}'>
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
            buffer +=`
            </div>
            </nav>
          </div>

            `;
            document.querySelector(searchClass).innerHTML = buffer;
            document.querySelector('.counter').innerHTML = `${counter} layouts found`;
    
    
           /* if(document.querySelector(searchClass).innerHTML == "")
            {
                document.querySelector(searchClass).innerHTML = "No results...";
            }*/
    
    
            function clearResults(){
                document.querySelector(searchClass). innerHTML = "";
            }
    

        ////////////////////////////////main////////////////////////////////////



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


        })
        .catch((error)=>{
            console.error(error);
        })
    }

///////////////////first render///////////

//////////////////////////////////////////



    printResults('.mainContainer')
    let page = "landing";
    let selectedImage= "";
    document.querySelector('.searchBar').addEventListener("keyup",  function(){
       if(page == "landing")
       {
        printResults('.mainContainer', page)
       }
       else
       {
        document.querySelector('.products').innerHTML = ``;
        showSelected('.mainContainer', selectedImage, page);
       }
    
    });
    document.querySelector('.mainContainer').onclick = function(event) {
        page = "second"
        selectedImage = event.target.id;
        document.querySelector('.products').innerHTML = ``;
        showSelected('.mainContainer', event.target.id, page);
    }