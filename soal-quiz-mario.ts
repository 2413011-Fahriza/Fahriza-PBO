class Mario {
    hp : number;
    speed : number;
    positionx : number;
    positiony : number;
    invincible : boolean;
    currentform : string;


    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string) {
        this.hp = hp;
        this.speed = speed;
        this.positionx = positionx;
        this.positiony = positiony;
        this.invincible = invincible;
        this.currentform = currentform;

    }

    bergerakKanan () : string {
        this.positionx = this.positionx += this.speed;
        return `Mario maju sebanyak ${this.positionx} block`;
    }

    bergerakKiri () : string {
        this.positionx = this.positionx -= this.speed;
        return `Mario mundur sebanyak ${this.positionx} block`;
    }

    superMushroom () : string {
        this.hp = this.hp += 1;
        this.currentform  = "superMario";
        return `HP bertambah jadi ${this.hp}, mario menjadi ${this.currentform}`;
    }

    fireFlower () : string {
        this.hp = this.hp += 1;
        this.currentform  = "fireMario";
        return `HP bertambah jadi ${this.hp}, mario menjadi ${this.currentform} dan dapat menmbakkan bola api`;
    }

    superStar () : string {
        this.invincible = true;
        return `Mario menjadi invincible, dan mario kebal terhadap serangan`;
    }

}

class superMario extends Mario {
    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string) {
        super (hp, speed, positionx, positiony, invincible, currentform)
    }

    superStar () : string {
        this.invincible = true;
        return `superMario jadi invincible, dan superMario kebal terhadap serangan`;
    }

    diSerang () : string {
        if(this.invincible == true){
            return `superMario kebal serangan`;
        }
        else {
            this.hp = this.hp -= 1;
            this.currentform = "mario";
            return `HP berkurang jadi ${this.hp}, superMario menjadi ${this.currentform}`;
        }
    }

}

class fireMario extends Mario {
    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string) {
        super (hp, speed, positionx, positiony, invincible, currentform)
    }

    superStar () : string {
        this.invincible = true;
        return `fireMario jadi invincible, dan fireMario kebal terhadap serangan`;
    }

    diSerang () : string {
        if(this.invincible == true){
            return `fireMario kebal serangan`;
        }
        else {
            this.hp = this.hp -= 1;
            this.currentform = "mario";
            return `HP berkurang jadi ${this.hp}, fireMario menjadi ${this.currentform} dan tidak dapat menembakkan api`;
        }
    }

}

const mario = new Mario (1, 5, 0, 0, false, "mario");
const supermario = new superMario (2, 5, 0, 0, false, "superMario");
const firemario = new fireMario (2, 5, 0, 0, false, "fireMario");

console.log(mario.bergerakKanan());