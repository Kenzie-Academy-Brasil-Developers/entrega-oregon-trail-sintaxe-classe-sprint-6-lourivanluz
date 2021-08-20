class Traveler {
    constructor (name){
        this.name = name
        this.isHealthy = true
        this.food = 1
    }

    hunt = () =>{
        this.food += 2
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
