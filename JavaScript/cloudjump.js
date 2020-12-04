// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


function jumpingOnClouds(c) {
    
    let current = 0;
    let jumps = 0
    while (current !== c.length-1){
        if(c[current+2] ==0 ){
            current += 2
            jumps +=1
        } else {
            current+=1
            jumps +=1
        }
    }
    return jumps
}