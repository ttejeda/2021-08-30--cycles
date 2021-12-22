class Cycle{

    cycleS(number){
        let den = 1;
        let total = 0;
        for(let i = 1; i <= number; i++){
            if(i%2 == 1){
                total += 4/den;
            } else {
                total -= 4/den
            }
            den += 2;
        }

      return total;
    }

    cycleE(number){
        let den = 1;
        let total = 0;
        for(let i = 1; i <= number; i++){
            if(i == 1){
                total = 1;
            } else {
                den *= i - 1
                total += 1/den;
            }
        }

      return total;
    }
}

let d = new Cycle();
console.log(d.cycleS(100));
console.log(d.cycleE(100));