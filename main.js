var list = document.getElementById('pl')
var textbox = document.getElementById('s')
var sub = document.getElementById('sub')
//Settings
sub.addEventListener('click', function (){
   var lirig = document.createElement('li')
   lirig.innerHTML = textbox.value
   list.appendChild(lirig)
   textbox.value = ''
})
// listens to a click on the button to execute code