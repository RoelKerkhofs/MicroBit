let getal_1 = 0
let getal_2 = 0
basic.forever(function () {
    getal_1 = Math.randomRange(1, 10)
    basic.showNumber(getal_1)
    basic.showString("x")
    getal_2 = Math.randomRange(1, 10)
    basic.showNumber(getal_2)
    basic.showString("=")
    while (!(input.buttonIsPressed(Button.A))) {
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.showNumber(getal_1 * getal_2)
    }
    while (!(input.buttonIsPressed(Button.B))) {
        basic.showIcon(IconNames.Heart)
    }
})