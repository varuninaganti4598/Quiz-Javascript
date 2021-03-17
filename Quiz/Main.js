/*
function q1(){
    var count=0;
localStorage.setItem("score",count)
    let a1=document.getElementById("op1")
    let a2=document.getElementById("op2")
    let a3=document.getElementById("op3")
    if(a1.checked==true && a2.checked==true & a3.checked==true){
        return alert("Select one option")
    }
    else if(a1.checked==true){
        var out=document.getElementById("op1").value;
        alert(`${out} is Wrong answer`)
    }
    else if(a2.checked==true){
        var out=document.getElementById("op2").value;
        alert(`${out} is Wrong answer`)
    }
    var out=document.getElementById("op3").checked;
    if(out){
            localStorage.setItem("score",count+=1)
            
        }
        
        
        location.assign("q2.html")
    
    }


function q2(){
   
    let a1=document.getElementById("op1")
    let a2=document.getElementById("op2")
    let a3=document.getElementById("op3")
    if(a1.checked==true && a2.checked==true & a3.checked==true){
        return alert("Select one option")
    }
    var out=document.getElementById("op1").checked;
    if(out){
            var count=localStorage.getItem("score")
            localStorage.setItem("score",parseInt(count)+1)
            
        }
        
    else if(a2.checked==true){
        var out=document.getElementById("op2").value;
        return alert(`${out} is Wrong answer`)
    }
    else if(a3.checked==true){
        var out=document.getElementById("op3").value;
        
        return alert(`${out} is wrong answer`)
        
    }
}
function q3(){
    let a1=document.getElementById("op1")
    let a2=document.getElementById("op2")
    let a3=document.getElementById("op3")
    if(a1.checked==true && a2.checked==true & a3.checked==true){
        return alert("Select one option")
    }
    else if(a1.checked==true){
        var out=document.getElementById("op1").value;
       
        return alert(`${out} is wrong answer`)
    }
    var out=document.getElementById("op2").checked;
    if(out){
            var count=localStorage.getItem("score")
            localStorage.setItem("score",parseInt(count)+1)
            
        }
    else if(a3.checked==true){
        var out=document.getElementById("op3").value;
        
        return alert(`${out} is wrong answer`)
        
    }
}
function q4(){
    let a1=document.getElementById("op1")
    let a2=document.getElementById("op2")
    let a3=document.getElementById("op3")
    if(a1.checked==true && a2.checked==true & a3.checked==true){
        return alert("Select one option")
    }
    else if(a1.checked==true){
        var out=document.getElementById("op1").value;
       
        return alert(`${out} is wrong answer`)
    }
    var out=document.getElementById("op2").checked;
    if(out){
            var count=localStorage.getItem("score")
            localStorage.setItem("score",parseInt(count)+1)
            
        }
    else if(a3.checked==true){
        var out=document.getElementById("op3").value;
        
        return alert(`${out} is wrong answer`)
        
    }
}
function q5(){
    let a1=document.getElementById("op1")
    let a2=document.getElementById("op2")
    let a3=document.getElementById("op3")
    if(a1.checked==true && a2.checked==true & a3.checked==true){
        return alert("Select one option")
    }
    else if(a1.checked==true){
        var out=document.getElementById("op1").value;
       
        return alert(`${out} is wrong answer`)
    }
    else if(a2.checked==true){
        var out=document.getElementById("op2").value;
        
        return alert(`${out} is wrong answer`)
    }
    var out=document.getElementById("op3").checked;
    if(out){
            var count=localStorage.getItem("score")
            localStorage.setItem("score",parseInt(count)+1)
            
        }
        
}

function res(){
    var count=localStorage.getItem("score")
    document.getElementById("final").innerHTML=count
}
*/
function result(){
    let ans=["op3","op1","op2","op2","op3","op1","op2","op3","op1","op1"];
    var qno=document.getElementsByTagName('p')[0].id;
    if(qno==1){
        let count=0;
        localStorage.setItem("marks",count);
    }
    for(let i=1;i<11;i++){
        if(i==qno){
            var out=document.getElementById(ans[i-1]).checked;
            var out1=document.getElementById(ans[i-1]).value;
            alert(`${out1} is correct answer`)
        }
    }
    if(out){
        let count=localStorage.getItem("marks")
        localStorage.setItem("marks",parseInt(count)+1)
        
    }
}
function res(){
    var cou=localStorage.getItem("marks")
    document.getElementById("final").innerHTML=cou
}