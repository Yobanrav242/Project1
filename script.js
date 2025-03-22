const video1=document.getElementById('pro1');
const video2=document.getElementById('pro2');
const video3=document.getElementById('pro3');
const hoversign=document.querySelector('.hover-sign')

const vidlist=[video1,video2,video3];

// sidebar element
const sidebar=document.querySelector('.sidebar');
const menu=document.querySelector('.menu-icon');
const closes=document.querySelector('.close-icon')

vidlist.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();        
        hoversign.classList.add("active")
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        hoversign.classList.remove("active")
    })
})

// sidebar element
menu.addEventListener("click",function(){
    sidebar.classList.add("open-sidebar")
    
})
closes.addEventListener("click",function(){
    sidebar.classList.add("close-sidebar")
})