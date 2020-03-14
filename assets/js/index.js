// Characters
// Wallace
// Robin

/* function Character(config) {
    this.character = config.el
}

Character.prototype.set = function() {
    this.character.set()
}

const fighterOne = new Character({ el: wallace })
const fighterTwo = new Character({ el: robin })
console.log(fighterOne)
console.log(fighterTwo)

function startCount(n) {
    let count = n

    return {
        increase: function() {
            count = count + 1
        },
        decrease: function() {
            count = count - 1
        },
        getCount: function() {
            return count
        }
    }
} */

let bots = [
    {
        name: 'Wallace',
        life: 100,
        attack: 16,
        points: 0
    },
    {
        name: 'Robin',
        life: 100,
        attack: 13,
        points: 0
    }
]

let round = 1

function attack() {
    let turn = 1 // Wallace attack turn

    if(bots[0].life > 0 && bots[1].life > 0) {
        if(turn === 1) {
            bots[1].life -= bots[0].attack
            if(bots[1].life <= 0) {
                alert(`Lost: ${bots[1].name}, Life: ${bots[1].life}`)
            }
            console.log(`Turn: ${turn}`)
            console.log(`Round: ${round} - Bot: ${bots[1].name}, Life: ${bots[1].life}, Attack: ${bots[1].attack}`)
            turn = 0
        }
        if(turn === 0) {
            bots[0].life -= bots[1].attack
            if(bots[0].life <= 0) {
                alert(`Lost: ${bots[0].name}, Life: ${bots[0].life}`)
            }
            console.log(`Turn: ${turn}`)
            console.log(`Round: ${round} - Bot: ${bots[0].name}, Life: ${bots[0].life}, Attack: ${bots[0].attack}`)
            turn = 1
        }
        round++
    }
}

const button = document.querySelector("button")
button.onclick = () => attack()

//let counter = startCount(9)
//counter.increase()
//console.log(counter.getCount())