let index = 0

function changeColors(){
    let colors = ["red","blue","orange","yellow","green","purple"]

    document.body.style.background = colors[index++]

    if(index > colors.length - 1){
        index = 0
    }
    
    console.log("Hello World!")

}