var colors = generateRandomColors(6);
var squares =document.querySelectorAll(".square");
var pickColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickColor;

for(var i = 0; i < squares.length; i++)
{
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function()
    {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        if(clickedColor===pickColor)
        {
            messageDisplay.textContent ="Correct";
            changeColors(clickedColor);
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent ="Try Again ";
        }
        
        //compare color to pickColor
    })

}

function changeColors(color)
{
    
    //loop through all squares
    for(var i=0; i<squares.length; i++)
    {
        //change each color to match color
        
        squares[i].style.backgroundColor = color;
        
    }
}


function pickColor()
{
    var random = Math.floor(Math.random() * colors.length );
    return colors[random]; 
}


function generateRandomColors(num)
{
    //make an array

    var arr = []
    //add num random color to arr

    for(var i=0; i<num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
        
        //return that array
    return arr;
}

function randomColor()
{
    //pick a red color from 0 - 255
    var r = Math.floor(Math.random() * 256 );
    //pick a green color from 0 - 255
    var g = Math.floor(Math.random() * 256 );
    //pick a blue color from 0 - 255
    var b =  Math.floor(Math.random() * 256 );
    return "rgb(" + r + ", " + g + ", " + b + ")";
}