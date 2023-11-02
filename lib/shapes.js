class Triangle {
    constructor(){
        this.color = '#FFFFFF';
    };
    setColor(color){
        this.color = color;
    };
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle {
    constructor(){
        this.color = '#FFFFFF';
    };
    setColor(color){
        this.color = color;
    };
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square {
    constructor(){
        this.color = '#FFFFFF';
    };
    setColor(color){
        this.color = color;
    };
    render(){
        return `<polygon points="60, 25 220, 25 220, 175 60, 175" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Circle, Square};