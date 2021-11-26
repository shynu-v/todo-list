
window.addEventListener("load",load);

function load(){
            var xhttp = new XMLHttpRequest ();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4&&this.status==200){
             response =JSON.parse(this.responseText);
        
             var list="";
             for (let i = 0; i <response.length; i++) {
                 if(response[i].completed===true){
                 list += `<li><input  type="checkbox" checked disabled><label  class="strikethrough" >${response[i].title}</label></li>`;
                 disabled += 1 
                     
             }else{
                 list += `<li><input  type="checkbox" onchange="check()"><label  class="strikethrough" >${response[i].title}</label></li>`;
             }
          }
          document.getElementById("list").innerHTML= list;
              }
        }
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
}
var disabled=0




function check(){
   

        var promise = new Promise(function(resolve,reject){
        
    
       
         var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked ');

       
        var checked = checkboxes.length-disabled;
        if(checked==5){
            resolve();
        }   
    
    });
    promise.then(function(){
        setTimeout(function(){
            alert("Five Tasks have been Successfully Completed ");
        },100)
    })
}