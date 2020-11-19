function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let smallest = Math.max(...A)
    console.log(smallest)
    for (let i = 0; i < Math.max(...[A]); i++){
        console.log(i)
        if (A.includes(i) === false){
            smallest = i;
            break;
        }
    }
    return smallest
}

console.log(solution([1,3,4,5,6]))