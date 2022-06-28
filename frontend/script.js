const date=document.getElementById('date')
const day=document.getElementById('day')
const description=document.getElementById('description')
const submit=document.getElementById('submit').setAttribute('onClick','postDay()')
const ol=document.querySelector('ol')



function getAllDays(){
    fetch('/days').then((res)=>res.json()).then((data)=>{
       
        data.forEach((x)=>{
        
        const li=document.createElement('li')
        const date=new Date(x.date)
        li.appendChild(document.createTextNode( date.getDate().toString() + "/" + ((date.getMonth()+1).toString() )+ "/" + date.getFullYear().toString() + ", " + x.day.toString()))
        const ul=document.createElement('ul')
        const li2=document.createElement('li')
        li2.appendChild(document.createTextNode(x.description.toString()))
        ul.appendChild(li2)
        li.appendChild(ul)
        ol.appendChild(li)
        
        })
    })
}

function postDay(){
    const d={
        date:date.value,
        day:day.value,
        description:description.value 
    }
    fetch('/day',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',

        },
        body:JSON.stringify(d)
    }).then((res)=>res.json()).then((data)=>{
             if(data.Success == true){
                const li=document.createElement('li')
                li.appendChild(document.createTextNode(d.date.toString() + "," + d.day.toString()))
                const ul=document.createElement('ul')
                const li2=document.createElement('li')
                li2.appendChild(document.createTextNode(d.description.toString()))
                ul.appendChild(li2)
                li.appendChild(ul)
                ol.appendChild(li)
             }
    })
}



getAllDays()