var i = 0;
var correctCount = 0 ;
var data;

const request = new XMLHttpRequest();
 request.open("get","test.json")         
 request.onload = () =>{
     try{

     
     data=JSON.parse(request.responseText)
     generate(0,data)
     }
     catch(e){
         console.warn("could not load json");
     }
 };
 request.send();


function generate(index,data) {
    
    document.getElementById("question").innerHTML = data[index].q;
    document.getElementById("optt1").innerHTML = data[index].a;
    document.getElementById("optt2").innerHTML = data[index].b;
    document.getElementById("optt3").innerHTML = data[index].c;
    document.getElementById("optt4").innerHTML = data[index].d;
   
}

function checkAnswer() {
    
    if (document.getElementById("a").checked && data[i].a == data[i].answer) {
       correctCount++;
      
    }
    if (document.getElementById("b").checked && data[i].b == data[i].answer) {
        correctCount++;
        
    }
    if (document.getElementById("c").checked && data[i].c == data[i].answer) {
        correctCount++;
        
    }
    if (document.getElementById("d").checked && data[i].d == data[i].answer) {
        correctCount++;
        
    }
    // increment i for next question
    i++;
    if(data.length-1 < i){
        document.write("<body style='background-color:rgb(97, 226, 71);'>");
        document.write("<div style='background-color: rgb(97, 226, 71);font-size:25px;text-align:center;'>Your score is : "+correctCount+"</div>");
        document.write("</body>");
    }
    // callback to generate
   
    document.getElementById("a").checked=false;
    document.getElementById("b").checked=false;
    document.getElementById("c").checked=false;
    document.getElementById("d").checked=false;
    
    generate(i,data);
    
}
