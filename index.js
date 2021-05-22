class KY029 {
    constructor(pin1 = false, pin2 = false, pin3 = false) {
        this.gnd = pin1
        this.red = pin2
        this.green = pin3
        this.color = this.setColor()
    }

    setColor() {
        return this.gnd ? `#${ this.red == false ? "00" : "FF" }${ this.green == false ? "00" : "FF" }${ "00" }` : "#000000"
    }

    draw(ctx, X, Y) {
        ctx.fillStyle = "#505050"
        ctx.fillRect(X + 15, Y + 13, 150, 75)
        ctx.fillStyle = "#909090"
        ctx.fillRect(X, Y + 25, 40, 10)
        ctx.fillRect(X, Y + 45, 40, 10)
        ctx.fillRect(X, Y + 65, 40, 10)
        ctx.fillStyle = this.color
        ctx.fillRect(X + 164, Y + 22, 5, 55)
        ctx.fillRect(X + 164, Y + 32, 40, 35)

        ctx.font = "20px Arial"
        ctx.fillStyle = "white"
        ctx.fillText("KY-029", X + 80, Y + 55)
        ctx.font = "10px Arial"
        ctx.fillText("-", X + 43, Y + 33)
        ctx.fillText("S", X + 43, Y + 73)
    }
}