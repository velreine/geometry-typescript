export class Rectangle {

    private _a: number;
    private _b: number;

    constructor(a: number, b: number){
        this._a = a;
        this._b = b;
    }

    public Area(): number {
        return (this._a * this._b);
    }

    public Circumference(): number {
      
        return 2 * (Number(this._a) + Number(this._b));
    }


}
