/* Range is 0 to 9 */
const min = 1;
const max = 9;

const source = [1 ,4 ,1 ,2 ,7 ,5 ,2, 9, 4, 7, 8, 1, 1, 4, 7, 3 ,3];
const temp = [];
const dest = []; 

source.forEach(index => {
    if (temp[index] === undefined) {
        temp[index] = 1;
        return;
    }

    temp[index]++; 
});

for(let index=min;index<max + 1;index++) {
    if (temp[index] === undefined) {
        temp[index] = 0;
    }

    if (index > min) {
        temp[index] = temp[index] + temp[index - 1];
    }
}

source.forEach(value => {
    dest[temp[value]-1] = value;
    temp[value]--;
});

console.log(dest);