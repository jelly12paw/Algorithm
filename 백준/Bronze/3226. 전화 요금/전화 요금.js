const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './3226.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseNum = +input[0];
let cost = 0;

for (let i = 1; i <= testCaseNum; i++) {
    const arr = input[i].split(' ').map((item, idx) => idx === 0 ? item.split(':').map((i) => +i) : +item);
    let mincost = 0;
    if (arr[0][1] + arr[1] > 60) {
        if (arr[0][0] + 1 === 19) {
            mincost += (arr[0][1] + arr[1] - 60) * 5
            mincost += (60 - arr[0][1]) * 10
        }
        else if (arr[0][0] + 1 === 7 ) {
            mincost += (arr[0][1] + arr[1] - 60) * 10
            mincost += (60 - arr[0][1]) * 5
        }
        else if (arr[0][0] + 1 >= 19 | arr[0][0] + 1 < 7) {
            mincost += arr[1] * 5
        }
        else if (arr[0][0] + 1 < 19 | arr[0][0] >= 7) {
            mincost += arr[1] * 10
        }
    } else {
        if (arr[0][0] >= 19 | arr[0][0] < 7) {
            mincost += arr[1] * 5
        } else {
            mincost += arr[1] * 10
        }
    }
    cost += mincost
    mincost = 0
}
console.log(cost);