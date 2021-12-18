
// delete part
const delitem=(index)=>{
    // console.log(itemjsonarray);
    itemjsonarraystr=localStorage.getItem('itemjson');
    itemjsonarray=JSON.parse(itemjsonarraystr);
    itemjsonarray.splice(index,1);
    localStorage.setItem('itemjson',JSON.stringify(itemjsonarray));
    genrateCard();
}
const insertcardval=()=>{
    const title=document.getElementById('title');
    const description=document.getElementById('description');
    if(localStorage.getItem('itemjson')==null){
        itemjsonarray=[];
        itemjsonarray.push([title.value,description.value]);
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarray));
    }
    else{
        itemjsonarraystr=localStorage.getItem('itemjson');
        itemjsonarray=JSON.parse(itemjsonarraystr);
        itemjsonarray.push([title.value,description.value]);
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarray));
    }
    genrateCard();
    title.value='';
    description.value='';
}
const genrateCard=()=>{
    if(localStorage.getItem('itemjson')==null){
        itemjsonarray=[];
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarray));
    }
    else{
        itemjsonarraystr=localStorage.getItem('itemjson');
        itemjsonarray=JSON.parse(itemjsonarraystr);
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarray));
    }
    let str='';
    itemjsonarray.forEach((element,index) => {
        str+=`<div class="card">
        <div class="card-head">${element[0]}</div>
        <div class="card-body">${element[1]}</div>
      
        
        <div class="card-footer">
        <button id="btn2" onclick="delitem(${index})">Delete</button>
        </div>
        </div>
        `;        
        
        
    });
    const panel=document.getElementById('panel');
    panel.innerHTML=str;


}

const addNotes=document.getElementById('addNotes');
addNotes.addEventListener('click',insertcardval);
genrateCard();