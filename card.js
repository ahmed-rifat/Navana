document.getElementById('layout1btn').addEventListener('click', function(){
    document.getElementById('layout1btn').style.backgroundColor ='#606060';
    document.getElementById('layout2btn').style.backgroundColor ='#E0E0E0';
    document.getElementById('layout3btn').style.backgroundColor ='#E0E0E0';
    
  })

  document.getElementById('layout2btn').addEventListener('click', function(){
     document.getElementById('layout2btn').style.backgroundColor ='#606060';
     document.getElementById('layout1btn').style.backgroundColor ='#E0E0E0';
     document.getElementById('layout3btn').style.backgroundColor ='#E0E0E0';
}) 

  document.getElementById('layout3btn').addEventListener('click', function(){
    document.getElementById('layout3btn').style.backgroundColor ='#606060';
    document.getElementById('layout2btn').style.backgroundColor ='#E0E0E0';
    document.getElementById('layout1btn').style.backgroundColor ='#E0E0E0';
  })




