import React from 'react'
import {getMergeSortAnimations} from '../mySortingsAlgo/sortingAlgos'
import './SortingVisualiser.css'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 25.5;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 45;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'torquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualiser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
            array.push(randomIntFromInterval(5,500));//we are allowing duplicate values
        }
        this.setState({ array}); //same as {array:array}
    }

    quickSort(){

    }

    mergeSort2(){
        // // to avoid 5 > 100 in js, we use sort((a,b)=>a-b)
        // // otherwise it will be giving false values
        // const javascriptSortingArray = this.state.array.slice().sort((a,b)=>a-b);
        // const sortedArray = sortingAlgos.mergeSort(this.state.array);
        // // console.log(sortedArray);
        // console.log(arraysAreEqual(javascriptSortingArray, sortedArray));

        const animations = getMergeSortAnimations(this.state.array);
        for(let i=0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [barOneInx, barTwoInx] = animations[i];
                const barOneStyle = arrayBars[barOneInx].style;
                const barTwoStyle = arrayBars[barTwoInx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() =>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() =>{
                    const [barOneInx, newHeight] = animations[i];
                    const barOneStyle =  arrayBars[barOneInx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    heapSort(){

    }
    
    bubbleSort(){

    }



  render() {
    const {array} = this.state;
    return (
      <div className="array-container">
          {array.map((value,indx)=>(
            <div 
                className="array-bar" 
                key={indx} 
                style={{height: `${value}px`,}}>
                {value}
            </div>
                
          ))}
          <br />
          <button onClick={()=>this.resetArray()}>Regenerate</button>
          <button onClick={()=>this.quickSort()}>quickSort</button>
          <button onClick={()=>this.mergeSort2()}>mergeSort</button>
          <button onClick={()=>this.heapSort()}>heapsort</button>
          <button onClick={()=>this.bubbleSort()}>bubbleSort</button>
      </div>
    )
  }
}

function randomIntFromInterval(min1, max1){
    //included min and max1
    //we are allowing duplicate values
    return Math.floor( Math.random() * (max1 - min1 + 1) + min1);
}

// function arraysAreEqual(arrayOne, arrayTwo)
// {
//     // console.log(arrayOne);
//     // console.log(arrayTwo);
//     if(arrayOne.length !== arrayTwo.length)
//     {
//         return false;
//     }
//     for(var i=0;i<arrayTwo.length;i++)
//     {
//         if(arrayTwo[i]!==arrayOne[i])
//         {
//             return false;
//         }
//     }
//     return true;
// }

// export default SortingVisualiser