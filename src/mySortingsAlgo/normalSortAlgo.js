export function getNormalSortAnimations(array){
    const animations = []
    if(array.length <= 1) return array
    const auxiliaryArray = array.slice()
    normalSortHelper(array,0,array.length-1,auxiliaryArray, animations)
    return animations;
}

function normalSortHelper(mainarray,startIndex,endIndex,auxilaryArray, animations){
    if(startIndex === endIndex) return;
    const firstElement = mainarray[startIndex];
    doCompareAndExchange(mainarray,startIndex,firstElement,endIndex,auxilaryArray,animations);
}

function doCompareAndExchange(mainarray, startIndex, firstElement, endIndex, auxilaryArray, animations) {
    // let k = startIndex;
    // let i = startIndex;
    let j = startIndex+1;
    // while(i<= endIndex && j<= endIndex) {
    //     animations.push([i,j]);
    //     animations.push([i,j]);

    // }
    let mini = firstElement;
    while(j<= endIndex) {
        if(mini > mainarray[j]){
            mini = mainarray[j]
        }
        j++;
    }
}

