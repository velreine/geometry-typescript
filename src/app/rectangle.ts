export class Rectangle {

    private _a = 1;
    private _b = 1;

    constructor(a: number, b: number){
        this._a = a;
        this._b = b;
    }

    public Area(): number {
        return (this._a * this._b);
    }

    public Circumference(): number {
        return (2 * (this._a + this._b));
    }


}
