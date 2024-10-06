// document.getElementById('owl').onclick = function(){
//     alert('Owl clicked');
// }

//attachEvent()
//jQuery - onEventListener

// type, timestamp, preventDefault
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


// document.getElementById('images').addEventListener('click', function(e){
//     console.log("click inside the ul");
    
// },false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     e.stopPropagation();
// },false)

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation()
// ;    console.log('Google clicked');
// },false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    // let removeIt = e.target.parentNode
    // removeIt.remove();
    // removeIt.parentNode.removeChild(removeIt)
    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})