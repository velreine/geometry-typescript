import { Square } from './square';

export class Quadrant extends Square {

    private _side = 1;

    constructor(side: number) {
        super();
        this._side = side;
    }

    public Area(): number {
        return (this._side * this._side);
    }

    public Circumference(): number {
        return (4 * this._side);
    }

}
