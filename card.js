// body light dark start
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
// body light dark End


document.getElementById('cardOne').style.display ='block';
document.getElementById('cardTwo').style.display ='none';
document.getElementById('cardThree').style.display ='none';
document.getElementById('layout1btn').style.backgroundColor ='#606060';
document.getElementById('layout2btn').style.backgroundColor ='#E0E0E0';
document.getElementById('layout3btn').style.backgroundColor ='#E0E0E0';


const lay1=document.getElementById('layout1btn').addEventListener('click', function(){
    document.getElementById('layout1btn').style.backgroundColor ='#606060';
    document.getElementById('layout2btn').style.backgroundColor ='#E0E0E0';
    document.getElementById('layout3btn').style.backgroundColor ='#E0E0E0';

    // card one
    document.getElementById('cardOne').style.display ='block';
    document.getElementById('cardTwo').style.display ='none';
    document.getElementById('cardThree').style.display ='none';
    
  })

   const lay2 =document.getElementById('layout2btn').addEventListener('click', function(){
     document.getElementById('layout2btn').style.backgroundColor ='#606060';
     document.getElementById('layout1btn').style.backgroundColor ='#E0E0E0';
     document.getElementById('layout3btn').style.backgroundColor ='#E0E0E0';
     // card two
    document.getElementById('cardOne').style.display ='none';
    document.getElementById('cardTwo').style.display ='block';
    document.getElementById('cardThree').style.display ='none';
}) 

  const lay3= document.getElementById('layout3btn').addEventListener('click', function(){
    document.getElementById('layout3btn').style.backgroundColor ='#606060';
    document.getElementById('layout2btn').style.backgroundColor ='#E0E0E0';
    document.getElementById('layout1btn').style.backgroundColor ='#E0E0E0';
    // card three
    document.getElementById('cardOne').style.display ='none';
    document.getElementById('cardTwo').style.display ='none';
    document.getElementById('cardThree').style.display ='block';
  })




