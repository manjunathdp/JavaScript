// Class representing a general Shape (Base Class)
class Shape {
  constructor(name) {
    this.name = name; // Property accessible to all derived classes
  }

  // Abstract method (convention in JavaScript)
  calculateArea() {
    throw new Error(
      "You must implement the calculateArea method in the derived class"
    );
  }

  // Common method
  describe() {
    console.log(`This is a ${this.name}`);
  }
}

// Derived class for Circle, extending Shape
class Circle extends Shape {
  constructor(radius) {
    super("Circle"); // Call parent class constructor with 'Circle' as name
    this.radius = radius; // Additional property specific to Circle
  }

  // Overriding the abstract method
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Derived class for Rectangle, extending Shape
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle"); // Call parent class constructor with 'Rectangle' as name
    this.width = width;
    this.height = height;
  }

  // Overriding the abstract method
  calculateArea() {
    return this.width * this.height;
  }
}

// Encapsulation Example - Private Fields in ES2021
class Square {
  #sideLength; // Private field (not accessible outside)

  constructor(sideLength) {
    this.#sideLength = sideLength;
  }

  // Public method to access private field
  calculateArea() {
    return Math.pow(this.#sideLength, 2);
  }
}

// Polymorphism example using an array of shapes
const shapes = [
  new Circle(5), // Circle with radius 5
  new Rectangle(4, 6), // Rectangle with width 4 and height 6
  new Square(4), // Square with side length 4
];

// Loop through shapes array and calculate area
shapes.forEach((shape) => {
  if (shape instanceof Shape || shape instanceof Square) {
    console.log(
      `Area of the ${shape.name || "Square"}: ${shape.calculateArea()}`
    );
  }
});
