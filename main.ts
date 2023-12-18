input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSoundExpression(WaveShape.Noise, 1, 1, 255, 90, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)))
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    led.setBrightness(255)
    basic.showString("ACHTUNG ")
})
