import {Rectangle} from '../src/rectangle';

describe('Rectangle', () => {
    let rectangle = new Rectangle("red", 2, 2);

    it('color should change', () => {
        expect(rectangle.color).toEqual("red");
        rectangle.color = "blue";
        expect(rectangle.color).toEqual("blue");
    });

});