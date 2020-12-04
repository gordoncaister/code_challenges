function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if (!A.includes(1)){
        return 1
    }
    
    for (let i = 1; i < Math.max(...A)+1; i++){
        if (A.includes(i) === false){
            return i
        } if ( i === Math.max(...A)){
            return i+1
        } 
        
    }
}


console.log(solution([1,3,4,5,6]))