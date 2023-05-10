


const generateId=(elementClass)=>{

    const clave=document.querySelector(elementClass).getAttribute("class")

    /*const random=()=>{
        let ramdomNumber=0
        for(let i=0; i<4; i++){
           ramdomNumber+= Math.floor(Math.random()*10)
        }

      
        return ramdomNumber
        
    }*/
    
    

    return `${clave}-${Array.from(document.querySelectorAll(elementClass)).length}`
}





const getPorcent=(barSize, numberOfPost, checked)=>{
    const porcent= checked*((100*(barSize/numberOfPost))/400)

    const porcentSize= checked*(barSize/numberOfPost)
    
    return {porcent, porcentSize}
}


const setProgress=(LineProgressDiv, progressPorcentDiv,progress)=>{
    console.log(progress.porcentSize)

    LineProgressDiv.style.width=`${progress.porcentSize}px`;
    progressPorcentDiv.innerHTML=`${Math.floor(progress.porcent)}%`

}


const setNameCompany=(classElement, name)=>{
    /*document.querySelector(classElement).innerHTML=name*/
    classElement.innerHTML=name
}

const setWeek=(classElement, date)=>{
    document.querySelector(classElement).innerHTML=date
}



const numbersOfImges=(elementContainer, number, listOfImg)=>{

    let imgPosted=document.createElement("div")
    imgPosted.classList.add("img-posted");

 

    for(let i=0; i<number; i++){
       
        let body=`<div class="progress-img-container"> 
        <span class="img-index">${i+1}</span>

        <div class="img-container"> 
            <img class="progress-img__img" src="${listOfImg[i].url}">

            </img>
        </div>

        <span class="date-img">
            ${listOfImg[i].date}
        </span>
        </div>`

        imgPosted.innerHTML+=body
        

    }

    elementContainer.appendChild(imgPosted);
}




    //reunir las url de las imagenes

    const test=(inputUrl, inputDate, numberOfPostInput, formsControls, progressImg)=>{
        const collection=[]
        let counter=0
        inputUrl
        .addEventListener("keydown", function(e){
            if(e.key=="Enter"){

                collection.push({
                    url:`${inputUrl.value}`,
                    date:`${inputDate.value}`,
                })

                inputUrl.value=""
                inputDate.value=""

                counter+=1
                if(counter==numberOfPostInput.value){

                    //set images
                    numbersOfImges(progressImg, numberOfPostInput.value, collection)

                    formsControls.style.display="none"
                }

                
            }
        })

        
    }     



























const createModule=()=>{

    /*GENERATE ID  TO THE ELEMENTS*/
    //cabecera
    //-name
    const plan= document.getElementById("header-plan__input");
    let BlockEventTest=false

    if(plan.value){
    

    let module= document.createElement("div");
    module.classList.add(`module-container`);
    
   
    
   

    const body= `<div class="module-gestion-progress__container">
        <section class="name-company">
            <div class="name-company-container">
                <h1 class="name-company__h1">Empresa</h1>
                <h2 class="name-company__h2">Progreso de la Gestión</h2>
            </div>
        
        </section>

        <section class="dashboard">
            <div class="dashboard-line-container">
                <div class="dashboard-line-out">
                    <div class="dashboard-line-in"></div>
                </div>
                <div class="progress-porcent"></div>
            </div>

            <div class="porcent">
                <span></span>
            </div>
        </section>

        <section class="progress-img"> 
            

        </section>

        <!-- controls -->
        <form class="form-controls">

           <div class="info-client">
               <input type="text" class="form__input name-company--input" placeholder="Empresa">
               <input type="text" class="form__input number-of-post--input" placeholder="Cantidad de post">
           </div>

           <input type="text" class="form__input añadir-url--input"  placeholder="Url post (Trello)" disabled>
           <input type="date" class="form__input añadir-date--input" placeholder="Fecha de Publicación"
            disabled>
       </form>

    </div>`

    module.innerHTML=body

    const section=document.querySelector(".section");
    section.appendChild(module);

    //asignar id

    module.setAttribute("id", generateId(".module-container"))

    module.addEventListener("keydown", function(e){
       
        //elements from Dom
        const lineIn=document.querySelectorAll(".dashboard-line-in");
        const lineOut=document.querySelectorAll(".dashboard-line-out");
        const fieldPorcent=document.querySelectorAll(".porcent");
        const numberOfPostInput=document.querySelectorAll(".number-of-post--input");
        const nameCompanyInput=document.querySelectorAll(".name-company--input");
        const nameCompany=document.querySelectorAll(".name-company__h1");
        const formsControls=document.querySelectorAll(".form-controls");
        const progressImg=document.querySelectorAll(".progress-img");
        //inputs
        const urlInput=document.querySelectorAll(".añadir-url--input");
        const dateInput=document.querySelectorAll(".añadir-date--input");
        
        let counter=nameCompany.length-1
        
        console.log(lineOut.clientWidth)

        if(e.key=="Enter" 
            && numberOfPostInput[counter]
            && nameCompanyInput[counter]){

                urlInput[counter].disabled=false;
                dateInput[counter].disabled=false;
            
         //nombre de la empresa       
         setNameCompany(nameCompany[counter], nameCompanyInput[counter].value);
         
         
        //progreso de la gestión
        
        setProgress(
            lineIn[counter], 
            fieldPorcent[counter], 
            getPorcent(lineOut[counter].clientWidth, 
            plan.value, numberOfPostInput[counter].value))

        
        if(BlockEventTest==false){
        console.log("si")
        test(urlInput[counter], dateInput[counter], numberOfPostInput[counter], formsControls[counter], progressImg[counter])
            BlockEventTest=true 
        }
                
        }


        
    
        
    })
    
   
    

    }
    

}








    //Eventos/inputs

//conexión nombre
  /* setNameCompany(".name-company__h1", document.querySelector(".name-company--input").value);*/


//progress
  /* setProgress(
    document.querySelector(".dashboard-line-in"), 
    document.querySelector(".porcent"), 
    getPorcent(document.querySelector(".dashboard-line-out").clientWidth, 3, 1))*/



  /*  window.addEventListener("keydown", function(e){

        if(e.key=="Enter" 
            && document.querySelector(".name-company--input").value
            && document.querySelector(".number-of-post--input").value 
           /* && document.querySelector(".añadir-url--input").value*/
            /*&& document.querySelector(".añadir-date--input").value){
                
                document.querySelector(".añadir-url--input").disabled=false;
                document.querySelector(".añadir-date--input").disabled=false;
            
         //nombre de la empresa       
         setNameCompany(".name-company__h1", document.querySelector(".name-company--input").value);
         
         
        //progreso de la gestión
        
        setProgress(
            document.querySelector(".dashboard-line-in"), 
            document.querySelector(".porcent"), 
            getPorcent(document.querySelector(".dashboard-line-out").clientWidth, 
            3, document.querySelector(".number-of-post--input").value))


        
        test()
               

                
        }


        
    
        
    })*/




    document.querySelector(".header-añadir-modulo").
    addEventListener("click", ()=>{
        createModule()
        console.log(generateId(".module-container"))
    })