import { useState } from "react";

//Sawyer C Smith
//LAB 3

export default function ColorBox (props) {
    //initial color making, explained *sorta* in the comment below
    let randColor = Math.floor(Math.random() * props.colors.length);

    useState(randColor); 
    
    //I use the random number made above to get the initial color for each box when it loads
    return <div id={"colorBox" + props.id} style={{backgroundColor: props.colors[randColor]}} className="colorBox" onClick={() => {
        /*
            I've probably done this very differently than expected so I will attempt to explain...

            they way that I added them all into the "grid" pattern means they are a part of an array of <ColorBox>
            for some reason unknown to me, it complains if there is no "key" variable, I added said key variable
            as the spot I am currently at while adding them through a for loop.

            because of that, I can use that to make each ColorBox have a unique id, and subsequently use that
            to update the colours when they're clicked if I pass that value through a different prop. 
            in this case, I just named it "id" since that is what I am using it for.
            (im not using the prop.key as it errors out telling me it will return undefined)

            when I create the specific ColorBox, inside of the div that I am returning the id is set to:
                colorBox (which is what I had it before I figured this out)
                with the id passed throught the props appended to the end of it, making it unique from the others

            There is also the classname there, as originally I was using the id as colorbox to set my CSS styling,
            however since I changed the id into my identifyer it also has the classname of colorBox so I can keep 
            "uniform" css styling across each of the squares

            when the div gets clicked it runs the function which:
                regenerates the random number (limited to the size of the colors data provided)
                sets the background color to the random point in the colors data you gave us (gotten from the rand number)

            
        */
        randColor = Math.floor(Math.random() * props.colors.length);
        document.getElementById("colorBox" + props.id).style.backgroundColor = props.colors[randColor];
    }}>
        
    </div>
    
}
