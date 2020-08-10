import { Square } from './square'
// TODO: Fix me.
export class Trapez extends Square {

    private _a: number = 1;
    private _b: number = 1;
    private _c: number = 1;
    private _d: number = 1;

    private _height = 0;

    constructor(a: number, b: number, c: number, d: number) {
        super();
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }

    public Area(): number {
        return (0.5 * (this._a + this._c) * this._height)
    }

    public Circumference(): number {
        throw 'Trapez::Circumference() not yet implemented';
        return 0;
    }
}
