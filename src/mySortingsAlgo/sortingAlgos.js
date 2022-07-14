// export const getAnimations

// export const mergeSort = (array, startInd, endInd , animations=[]) =>
// {
//     // if(array.length === 1) return array;
//     if(startInd === endInd) return array;
//     // const middleElement = Math.floor(array.length / 2);
//     const middleElement = Math.floor(( endInd - startInd + 1) / 2);
//     // const firstHalf = mergeSort(array.slice(0, middleElement));
//     const firstHalf = mergeSort(array, startInd, middleElement, animations);
//     // const secondHalf = mergeSort(array.slice(middleElement));
//     const secondHalf = mergeSort(array, middleElement+1, endInd, animations);
//     // let i=0,j=0;
//     let i =startInd, j =middleElement+1;
//     const sortedArray= [];
//     // while( i < firstHalf.length && j < secondHalf.length )
//     while( i < middleElement && j < endInd )
//     {
//         if(firstHalf[i] < secondHalf[j])
//         {
//             sortedArray.push(firstHalf[i++]);
//         }
//         else
//         {
//             sortedArray.push(secondHalf[j++]);
//         }
//     }
//     while(i < firstHalf.length){ sortedArray.push(firstHalf[i++]);}
//     while(j < secondHalf.length){ sortedArray.push(secondHalf[j++]);}
//     return sortedArray;
// };

export function getMergeSortAnimations(array)
{
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainarray,startIndex,endIndex,auxilaryArray, animations)
{
    if(startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex)/2);
    mergeSortHelper(auxilaryArray, startIndex, middleIndex, mainarray, animations);
    mergeSortHelper(auxilaryArray, middleIndex + 1, endIndex, mainarray, animations);
    doMerge(mainarray, startIndex, middleIndex, endIndex, auxilaryArray, animations);
}

function doMerge(mainarray, startIndex, middleIndex, endIndex, auxilaryArray, animations) 
{
    let k = startIndex;
    let i = startIndex;
    let j= middleIndex + 1;
    while(i <= middleIndex && j <= endIndex)
    {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i,j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i,j]);
    if(auxilaryArray[i] <= auxilaryArray[j])
    {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxilaryArray[i]]);
      mainarray[k++]=auxilaryArray[i++];
    }
    else
    {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxilaryArray[j]]);
      mainarray[k++] = auxilaryArray[j++];
    }
    }
    while(i <= middleIndex)
    {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i,i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i,i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxilaryArray[i]]);
    mainarray[k++] = auxilaryArray[i++];
    }
    while(j<= endIndex)
    {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxilaryArray[j]]);
    mainarray[k++] = auxilaryArray[j++];
    }
}
