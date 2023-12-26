// Function
// Case 1: If the length of the array is 1, return the number
// Case 2: Split the array into left and right
//  Sort the left half
//  Sort the right half
//  Merge the halves
sortedArray = []

const mergeSort = (array) => {
  if (array.length == 1) {
    if (sortedArray[0] == undefined) {
      return sortedArray.push(array[0])
    }
    else if (array[0] > sortedArray[sortedArray.length-1]) {
      return sortedArray.push(array[0])
    }
    else{
    for (i = 0; i < sortedArray.length; i++) {
      if (array[0] < sortedArray[i]) {
        return sortedArray.splice(i,0,array[0])
      }
    }
  }
  }
  else {
    leftSide = array.slice(0, array.length/2)
    rightSide = array.slice(array.length/2, array.length)
    mergeSort(array.slice(0, array.length/2))
    mergeSort(array.slice(array.length/2, array.length+1)) 
    return sortedArray
  }
}

//test parameter [5,3,2,6,7,1,8,4]