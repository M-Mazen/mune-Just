let container = document.querySelector("nav .container");
let container2=document.querySelector(".n .container");
function getQuestions() {
  let myRequest = new XMLHttpRequest();
  
  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      
      const [...obj] = JSON.parse(this.responseText);
      console.log(obj.length)
      // Create Bullets + Set Questions Count
      for (let i = 0; i < obj.length; i++){
        let Pcont =document.createTextNode(`${obj[i].price} ريال `);
        console.log( obj[i].imgName)
        console.log( obj[i].price)
        console.log( obj[i].imgAlt)
        let info = document.createElement("div");
        let img = document.createElement("img");
        let text = document.createElement("div");
        img.alt = obj[i].imgAlt;
           img.src = obj[i].imgName;
           
           info.append(img)
           text.className = "text";
           let h3 = document.createElement("h3");
           
           let content =document.createTextNode(` ${obj[i].imgAlt} `);
           h3.appendChild(content);
           
           let p = document.createElement("p");
           console.log(...p.innerHTML);
           
           p.appendChild(Pcont)
           
           text.appendChild(h3, p);
           text.appendChild(p);
           info.appendChild(text,p)
           info.className = "info-box";
           
     
             
             container.append(info);
            
        console.log([p.innerHTML])
        
      
        
        
        
        
      }
      
    }
      };
      
      
      myRequest.open("GET", "main.json", true);
      myRequest.send();
    }
    getQuestions();
    
    // function creTimge() {
      
      //   for (let i = 0; i < obj.length; i++){
        //     let info = document.createElement("div");
    //     info.className("info-box");
    //       container.append(info);
    
    
    //   }
    // }
 