import colors from "../data/data"
import ColorBox from "./ColorBox"

//Sawyer C Smith
//LAB 3

export default function ColorBoxContainer() {
    let colArr = [];
    for(let x = 0; x < 25; x++){
        //has "key" because it was giving me a *every child must have unique key identifyer*
        colArr[x] = <ColorBox key={x} colors={colors} id={x} />
    }
      
    return <div id="colContainer">
        {colArr.map((colArrOut, index) => (
           colArrOut
        ))}
    </div>;
}