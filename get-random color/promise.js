function greating(name, callback){
    console.log(`Hello ${name}`)
    callback()
}
function goodbye(){
    console.log(`goodbye`)
}
greating('siki' , goodbye)

function featchData(callback){
    setTimeout(() => {
        const data = {
            name :'siki',
            age : 44
        }
        callback(data)
    }, 2000)
}
function displayData(data){
    console.log("featchData", data)
}
featchData(displayData)

