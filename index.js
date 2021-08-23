class Traveler {
    constructor (name){
        this.name = name
        this.isHealthy = true
        this._food = 1
    }

    get food(){
        return this._food
    }

    set food(num){
        this._food = num
    }

    hunt = () =>{
        this.food += 2
        return '+2 de food'
    }

    eat = () =>{
        if( this.food <= 0){
            this.isHealthy = false
            return 'vc esta doente'
        }else{
            this.food -= 1
            return 'vc comeu'
        }
    }
}

class Wagon {
    constructor (num){
        this.capacidade = num
        this.passageiros = []
    }

    getAvailableSeatCount = () =>{
        return this.capacidade - this.passageiros.length
    }

    join = (passageiro) =>{
        if (this.getAvailableSeatCount() > 0){

            this.passageiros.push(passageiro)
        }else {
            return 'carroça cheia'
        }
    }

    shouldQuarantine = () =>{
        let result = false
        this.passageiros.forEach(item =>{
            if(!item.isHealthy){
                result = true
            }
        })
        return result
    }

    totalFood = () =>{
        if(this.passageiros.length>0){

            return this.passageiros.reduce((acc,item)=> item.food+acc,0)
        }else{
            return 'carroça vazia'
        }
        
    }
}


let wagon = new Wagon(5);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
let tadeu = new Traveler('tadeu');

wagon.join(tadeu)
wagon.join(maude)
tadeu.eat()
tadeu.eat()

//console.log(wagon.passageiros)
 
//console.log(`${wagon.shouldQuarantine()} should be 3`);
