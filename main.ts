input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("B C5 F C5 C5 C5 F C5 ", 122), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
control.inBackground(function () {
    let sprite: game.LedSprite = null
    sprite.move(1)
})
