let x =2

function printValue() {
    console.log(x)
}

x=4
printValue()
x=6
printValue()

function outerFun (outerVar) {
    return function innerFun(innerVar){
        console.log(outerVar)
        console.log(innerVar)
    }
}

const newFun = outerFun(13)
newFun(15)