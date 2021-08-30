class Cycle{
    
    constructor(){
        this._s = 4;
        this._e = 1;
    }

    cycleS(number){
        let d = 3;
        for(d; d <= number; d +=4){
            this._s -= 4/d;
        }

        d = 5;
        for(d; d <= number; d += 4){
            this._s += 4/d;
        }

      return this._s;
    }

    cycleE(number){
        let e = 1;
        for(let i = 1; i <= number; i++){
            e *= i;
            this._e += 1/e;
        }

      return this._e;
    }
}

let d = new Cycle();
console.log(d.cycleS(100));
console.log(d.cycleE(100));
