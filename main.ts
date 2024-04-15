radio.setGroup(77)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    radio.sendValue("T", input.temperature())
    radio.sendValue("L", input.lightLevel())
    basic.pause(500)
})
