let data="";
  function add_note(data=""){
    console.log(data)
      let div=document.createElement("div");
      div.classList.add("note");
      let htmldata=`<div id="operation"> 
      <span class="edit"><i class="fa-solid fa-pen-to-square"></i></span>
      <span class="remove"><i class="fa-solid fa-trash"></i></span>
    </div>
    <div class="min">${data}</div>
    <textarea class="text"></textarea>
    `;
     div.innerHTML=htmldata;
     document.body.appendChild(div);
     let dlt=div.querySelector(".remove");
     let edit=div.querySelector(".edit");
    //  --------------remove--------------
     dlt.addEventListener("click",function(){
      div.remove();
      datasave();
     })
     let text=div.querySelector(".text");
     let main=div.querySelector(".min");
    //  --------------edit-------------
     edit.addEventListener("click",()=>{
        text.value=main.innerHTML;
        text.style.display="block";
        main.style.display="none";       
     })
     if(data!=""){
      text.style.display="none";
      main.style.display="block";
    
     }
    //  ---------------textarea-------------
     text.addEventListener("change",()=>{
          main.style.display="block";
          main.innerHTML=text.value;
          text.style.display="none";
          text.value="";
          datasave();
        })
        function datasave(){
          let data=document.querySelectorAll(".min");
          let arr=[];
       data.forEach((note)=>{
          return arr.push(note.innerHTML);
       });
        localStorage.setItem("name",JSON.stringify(arr));
     }
      } 
      // ------------getdata--------------    
      let ndata=JSON.parse(localStorage.getItem('name'));
      if(ndata){
        ndata.forEach((text)=>{add_note(text)}); 
      }