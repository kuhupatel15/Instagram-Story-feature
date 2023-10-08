var arr=[{dp:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80",img:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},
{dp:"https://images.unsplash.com/photo-1531908012224-8f8865e79a96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",img:"https://images.unsplash.com/photo-1530653535919-df7cc2bee192?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"},
{dp:"https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",img:"https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
{dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",img:"https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"}]
var clutter="";
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt=""> 
</div>`
})
document.querySelector("#top").innerHTML=clutter;
var grow=0
document.querySelector("#top").addEventListener("click",function(dets){
        
        document.querySelector("#fs").style.display="block"
        document.querySelector("#fs").style.backgroundImage=`url(${arr[dets.target.id].img})`
        setTimeout(function(){
            document.querySelector("#fs").style.display="none"
        },3000)
        if(grow<100){
            setInterval(function(){
                document.querySelector("#growth").style.width=`${grow++}%` 
            },30)
        }
        else{
            grow=0
        }
        
})

    
