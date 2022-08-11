
let High = document.getElementById("Highest")


function getMax(count){
    return Math.max(count)
}


const step = function(N){
    let count = 0;
    
    
    
    
    for (let i = 2; i <= N; i++) {
        let n = i;
        if (i <= N){
            
        }
            console.log("iterasjon " + i)        

     
        while(n !== 1){
                 console.log("n: " + n)
            
            if (n % 2  === 0) {
                n = n / 2;
            }

            else {
                n = (n * 3) + 1;
            }
            count++;
            
            
        }
    
        
        // console.log()
    
}
    return count;
    
}



document.getElementById("run-btn").addEventListener("click", function() {
	input = document.getElementById("input").value;
	document.getElementById("output").innerHTML = step(input);
    
    
    
});
