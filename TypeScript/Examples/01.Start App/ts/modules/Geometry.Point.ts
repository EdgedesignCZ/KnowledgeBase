module Geometry {
    export class Point
    {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        getDist() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
}