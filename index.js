class KY029 {
    constructor(ctx, X = 0, Y = 0, GND = false, RED = 0, GREEN = 0) {
        this._R = RED;
        this._G = GREEN;
        this._gnd = GND;

        this._ctx = ctx;
        this._x = X;
        this._y = Y;
        this._c = this.setColor();
    }

    setColor() {
        this._c = "#" + 
        (((Number(this._gnd) * 255 * this._R) . toString(16) == "0") ? "00" : ((Number(this._gnd) * 255 * this._R) . toString(16))) + 
        (((Number(this._gnd) * 255 * this._G) . toString(16) == "0") ? "00" : ((Number(this._gnd) * 255 * this._G) . toString(16))) + "00";
    }

    changeState(GND = false, RED = 0, GREEN = 0) {
        this._R = RED;
        this._G = GREEN;
        this._gnd = GND;
        this.setColor();
    }

    draw() {
        console.log(this._c);

        this._ctx.fillStyle = "#505050";
        this._ctx.fillRect(this._x + 15, this._y + 13, 150, 75);

        this._ctx.font = "20px Arial";
        this._ctx.fillStyle = "white";
        this._ctx.fillText("KY-029", this._x + 80, this._y + 55);

        this._ctx.font = "10px Arial";
        this._ctx.fillText("-", this._x + 43, this._y + 33);
        this._ctx.fillText("S", this._x + 43, this._y + 73);

        this._ctx.fillStyle = "#909090";
        this._ctx.fillRect(this._x, this._y + 25, 40, 10);
        this._ctx.fillRect(this._x, this._y + 45, 40, 10);
        this._ctx.fillRect(this._x, this._y + 65, 40, 10);

        this._ctx.fillStyle = this._c;
        this._ctx.fillRect(this._x + 164, this._y + 22, 5, 55);
        this._ctx.fillRect(this._x + 164, this._y + 32, 40, 35);
    }
}