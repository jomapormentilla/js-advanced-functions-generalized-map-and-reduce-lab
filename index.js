// Add your functions here

function map( arr, func ) {
    let newArr = []
    for( let i=0; i<arr.length; i++ ){
        newArr.push(func( arr[i] ))
    }
    return newArr
}

function reduce( arr, func, start ) {
    let result
    let i
    if (!!start){
        result = start
        i = 0
    } else {
        result = arr[0]
        i = 1
    }

    for( i; i<arr.length; i++ ){
        result = func( arr[i], result )
    }
    return result
}