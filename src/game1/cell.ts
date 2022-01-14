import { Container, Graphics } from "pixi.js";
import { Ball } from "./ball";
import gameconfig from "./gameconfig.json";

export class Cell extends Container {
  public cellsball: Ball;
  private _row: number;
  private _column: number;

  public constructor(row: number, column: number) {
    super();
    this._row = row;
    this._column = column;
    this.createCell();
  }

  public get row(): number {
    return this._row;
  }

  public get column(): number {
    return this._column;
  }

  public createCell(): void {
    const rect = new Graphics();
    rect.beginFill(0x858585);
    rect.drawRoundedRect(
      -gameconfig.cellWidth / 2,
      -gameconfig.cellWidth / 2,
      gameconfig.cellWidth,
      gameconfig.cellWidth,
      0
    );

    this.addChild(rect);
  }

  public placeBall(ball: Ball): void {
    this.cellsball = ball;
    this.addChild(ball);
  }

  public removeBall(): void {
    this.cellsball.destroy();
    this.cellsball = null;
  }

  public isEmpty(): boolean {
    if (this.cellsball) {
      return true;
    } else {
      return false;
    }
  }
}
