abstract class MyGraphicsPrimitive2D {

  protected constructor(
    public rectangleArea: {
      maxLeftTopBorder: { x: number, y: number },
      maxRightBottomBorder: { x: number, y: number }
    }) {
    this.rectangleArea = rectangleArea;
  }

  abstract getRectangleArea(): void;

  static movePrimitive(): void {
    console.log('move')
  };
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  protected constructor(
    protected square: number,
    public rectangleArea: {
      maxLeftTopBorder: { x: number, y: number },
      maxRightBottomBorder: { x: number, y: number }
    }) {
    super(rectangleArea)
  }

  abstract getSquare(): number
}

class MyCircle extends MyAreaPrimitive2D {
  constructor(
    private circleCenter: number,
    private circleRadius: number, protected square: number,
    public rectangleArea: {
      maxLeftTopBorder: { x: number, y: number },
      maxRightBottomBorder: { x: number, y: number }
    }) {
    super(square, rectangleArea);
  }
  getRectangleArea(): any {
    return {
      leftTopBorder: this.rectangleArea.maxLeftTopBorder,
      rightTopBorder: this.rectangleArea.maxRightBottomBorder
    }
  };
  getSquare(): number {
    return 3.14 * this.circleRadius ** 2
  }

}

class MyRectangle extends MyAreaPrimitive2D {
  constructor(
    private height: number,
    private width: number,
    private leftTopBorder: number,
    private rightBottomBorder: number,
    public rectangleArea: {
      maxLeftTopBorder: { x: number, y: number },
      maxRightBottomBorder: { x: number, y: number }
    },
    protected square: number) {
    super(square, rectangleArea);
  }

  getSquare(): number {
    return this.height * this.width
  };
  getRectangleArea(): any {
    return {
      leftTopBorder: this.rectangleArea.maxLeftTopBorder,
      rightTopBorder: this.rectangleArea.maxRightBottomBorder
    }
  };
}


