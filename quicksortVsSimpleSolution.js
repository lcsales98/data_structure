var arrayD = []

for (let n = 0; n < 10000; n++){
    arrayD.push(Math.floor(Math.random()*200))
}

const quicksort = (a) => {
    if (!a.length) {
        return []
    }

    if (a.length === 1) {
        return a
    }

    let arr1 = [], arr2 = []

    for(let i = 0; a.length > i; i++) {
        a[0] > a[i] ? arr1.push(a[i]) : arr2.push(a[i])
    }

    let arr2Sorted
    setTimeout(() => {
        arr2Sorted = quicksort(arr2)
    }, 0)
    
    return quicksort(arr1).concat(a[0], arr2Sorted)
}

const complexitySolution = (a) => {
    console.log(a)
    let defaultV

    for(let i = 0; a.length > i; i++) {
        if(i == 0) defaultV = a[i]
        
        if (a[i] < defaultV) defaultV = a[i]
    }
    console.log(defaultV)
    return defaultV
}

function simpleSolution(a) {
    console.log(a)
    let defaultV
    for(let i = 0; a.length > i; i++) {
        if (i === 0) defaultV = a[i] 
        
        if (a[i] < defaultV) defaultV = a[i]
    }
    console.log(defaultV)    
    return defaultV
}

// console.time('simpleSolution')
// simpleSolution(arrayD)
// process.nextTick(() => console.timeEnd('simpleSolution'))

console.time('quicksort')
complexitySolution(quicksort(arrayD))
process.nextTick(() => console.timeEnd('quicksort'))

// console.time('sort js')
// complexitySolution(arrayD.sort())
// process.nextTick(() => console.timeEnd('sort js'))

process.nextTick(() => process.exit())