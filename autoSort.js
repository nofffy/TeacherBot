const fs = require('fs');
objectArray =  JSON.parse(fs.readFileSync("tasks.JSON","utf-8"))

function arrayMove(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};


const sortByVal = function sortByVal(objectArray) {
    for (let step = 0; step < objectArray.length; step++) {
        for (let index = 0; index < (objectArray.length-1) - step; index++){
            console.log(Object.keys(objectArray[index+1])[0]);
            if (Object.keys(objectArray[index])[0] > Object.keys(objectArray[index+1])[0]){
                arrayMove(objectArray, index+1, index )
            }
        }
    }
    return objectArray;
}

//fs.writeFileSync("tasks.JSON", JSON.stringify(data));

module.exports.sortByVal = sortByVal;