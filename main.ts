namespace SpriteKind {
    export const nada = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const shootstyle = SpriteKind.create()
}
function asteroides () {
    if (Math.percentChance(25)) {
        asteroide = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c . . . . . . 
            . . . . . c a a a a . . . . . . 
            . . . . . a a f f b a . . . . . 
            . . . . c a b f f c b . . . . . 
            . . . . c b b b a f c b . . . . 
            . . . . c b a c a b b b . . . . 
            . . . . . b b f f a a c . . . . 
            . . . . . . a a b b c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        asteroide.setPosition(randint(10, 150), 0)
        asteroide.setVelocity(0, 40)
        pause(1000)
    }
    if (Math.percentChance(25)) {
        asteroide = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c . . . . . . . . 
            . . . . c a f b c . . . . . . . 
            . . . . b f f b c c . . . . . . 
            . . . a a f b a b a c . . . . . 
            . . . c a c b b f f b . . . . . 
            . . . . b f f b f a b . . . . . 
            . . . . a f f b b b a . . . . . 
            . . . . . a b b c c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        asteroide.setPosition(randint(10, 150), 0)
        asteroide.setVelocity(0, 60)
        pause(1000)
    }
    if (Math.percentChance(25)) {
        asteroide = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . a b a a . . . . . . 
            . . . . . c b a f c a c . . . . 
            . . . . c b b b f f a c c . . . 
            . . . . b b f a b b a a c . . . 
            . . . . c b f f b a f c a . . . 
            . . . . . c a a c b b a . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        asteroide.setPosition(randint(10, 150), 0)
        asteroide.setVelocity(0, 50)
        pause(1000)
    }
    if (Math.percentChance(25)) {
        asteroide = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c b a c . . . . . . 
            . . . . c c b c f a c . . . . . 
            . . . . a f b b b a c . . . . . 
            . . . . a f f b a f c c . . . . 
            . . . . c b b a f f c . . . . . 
            . . . . . b b a f a . . . . . . 
            . . . . . . c b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        asteroide.setPosition(randint(10, 150), 0)
        asteroide.setVelocity(0, 30)
        pause(1000)
    }
}
function Boss2 () {
    game.splash("WHAT ANOTHER ONE?!")
    boss_2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 f 
        f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 f 1 2 1 2 1 1 2 1 2 1 f 1 f 
        f f 1 1 2 2 2 2 2 2 2 2 1 1 f f 
        f 1 1 1 1 2 2 2 2 2 2 1 1 1 1 f 
        f f f 1 1 2 1 2 2 1 2 1 1 f f f 
        . . . f f 1 1 1 1 1 1 f f . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.Boss)
    scaling.scaleToPercent(boss_2, 920, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    boss_2.setPosition(80, 0)
    statusbar = statusbars.create(160, 2, StatusBarKind.EnemyHealth)
    statusbar.setColor(7, 2)
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.value = 150
}
function aligenisnas () {
    if (Math.percentChance(25)) {
        asteroide = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f d 1 d d f . . . . . 
            . . . f f d 1 d d 1 d f f . . . 
            . f f f d 1 d d 1 d d 1 f f f . 
            f 2 2 2 f d d 1 d d 1 f 2 2 2 f 
            f 2 2 2 3 f f f f f f 3 2 2 2 f 
            . f 2 2 2 2 1 2 2 1 2 2 2 2 f . 
            . . f f 2 2 2 2 2 2 2 2 f f . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        asteroide.setPosition(randint(10, 150), 0)
        asteroide.setVelocity(0, 40)
        pause(1000)
    }
    if (Math.percentChance(25)) {
        asteroide = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f d 1 d d f . . . . . 
            . . . f f d 1 d d 1 d f f . . . 
            . f f f d 1 d d 1 d d 1 f f f . 
            f 8 8 8 f d d 1 d d 1 f 8 8 8 f 
            f 8 8 8 9 f f f f f f 9 8 8 8 f 
            . f 8 8 8 8 1 8 8 1 8 8 8 8 f . 
            . . f f 8 8 8 8 8 8 8 8 f f . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        asteroide.setPosition(randint(10, 150), 0)
        asteroide.setVelocity(0, 60)
        pause(1000)
    }
    if (Math.percentChance(25)) {
        asteroide = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f d 1 d d f . . . . . 
            . . . f f d 1 d d 1 d f f . . . 
            . f f f d 1 d d 1 d d 1 f f f . 
            f 4 4 4 f d d 1 d d 1 f 4 4 4 f 
            f 4 4 4 5 f f f f f f 5 4 4 4 f 
            . f 4 4 4 4 1 4 4 1 4 4 4 4 f . 
            . . f f 4 4 4 4 4 4 4 4 f f . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        asteroide.setPosition(randint(10, 150), 0)
        asteroide.setVelocity(0, 50)
        pause(1000)
    }
    if (Math.percentChance(25)) {
        asteroide = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f d 1 d d f . . . . . 
            . . . f f d 1 d d 1 d f f . . . 
            . f f f d 1 d d 1 d d 1 f f f . 
            f 7 7 7 f d d 1 d d 1 f 7 7 7 f 
            f 7 7 7 5 f f f f f f 5 7 7 7 f 
            . f 7 7 7 7 1 7 7 1 7 7 7 7 f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        asteroide.setPosition(randint(10, 150), 0)
        asteroide.setVelocity(0, 30)
        pause(1000)
    }
}
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Right)) {
        if (start == 0) {
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . . 8 9 9 8 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . 6 8 8 8 8 6 . . . . . 
                . f f . 6 6 8 8 8 8 6 6 . f f . 
                . f f 8 6 6 6 8 8 6 6 6 8 f f . 
                . f 8 8 6 6 6 8 8 6 6 6 8 8 f . 
                . 8 8 8 6 6 6 8 8 6 6 6 8 8 8 . 
                8 8 8 8 6 6 6 b b 6 6 6 8 8 8 8 
                8 8 8 8 6 6 6 b b 6 6 6 8 8 8 8 
                . 8 . . . f f b b f f . . . 8 . 
                . . . . . f b b b b f . . . . . 
                `, SpriteKind.Player))
            scaling.scaleToPercent(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(115, 108)
            start += 1
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
            game.splash("Player 2 joined in")
            score_p2 = 0
            life_p2 = 3
            music.play(music.createSoundEffect(WaveShape.Square, 3398, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Right)) {
        if (start_p3 == 0) {
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . 5 9 9 5 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . 4 5 5 5 5 4 . . . . . 
                . f f . 4 4 5 5 5 5 4 4 . f f . 
                . f f 5 4 4 4 5 5 4 4 4 5 f f . 
                . f 5 5 4 4 4 5 5 4 4 4 5 5 f . 
                . 5 5 5 4 4 4 5 5 4 4 4 5 5 5 . 
                5 5 5 5 4 4 4 b b 4 4 4 5 5 5 5 
                5 5 5 5 4 4 4 b b 4 4 4 5 5 5 5 
                . 5 . . . 1 1 b b 1 1 . . . 5 . 
                . . . . . 1 b b b b 1 . . . . . 
                `, SpriteKind.Player))
            scaling.scaleToPercent(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 100, 0)
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(67, 108)
            start_p3 += 1
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setStayInScreen(true)
            game.splash("Player 3 joined in")
            score_p3 = 0
            life_p3 = 3
            music.play(music.createSoundEffect(WaveShape.Square, 3398, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.Right)) {
        if (start_p4 == 0) {
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . 7 7 7 7 . . . . . . 
                . . . . . . 7 9 9 7 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . e 7 7 7 7 e . . . . . 
                . f f . e e 7 7 7 7 e e . f f . 
                . f f 7 e e e 7 7 e e e 7 f f . 
                . f 7 7 e e e 7 7 e e e 7 7 f . 
                . 7 7 7 e e e 7 7 e e e 7 7 7 . 
                7 7 7 7 e e e b b e e e 7 7 7 7 
                7 7 7 7 e e e b b e e e 7 7 7 7 
                . 7 . . . d d b b d d . . . 7 . 
                . . . . . d b b b b d . . . . . 
                `, SpriteKind.Player))
            scaling.scaleToPercent(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 100, 0)
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(90, 108)
            start_p4 += 1
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setStayInScreen(true)
            game.splash("Player 4 joined in")
            score_p4 = 0
            life_p4 = 3
            music.play(music.createSoundEffect(WaveShape.Square, 3398, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    }
})
function Explosion () {
    explosion_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nada)
    explosion_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nada)
    explosion_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nada)
    explosion_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nada)
    explosion_1.setPosition(22, 25)
    explosion_2.setPosition(47, 29)
    explosion_3.setPosition(121, 13)
    explosion_4.setPosition(93, 37)
    sprites.destroy(boss, effects.spray, 1800)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    for (let index = 0; index < 4; index++) {
        animation.runImageAnimation(
        explosion_1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . . 3 1 1 1 1 1 1 1 1 3 . . . 
            . . . . 3 1 1 1 1 1 1 3 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 3 3 1 1 2 . . . . 
            . . . . 3 3 3 2 2 2 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 . . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . 3 3 . . 3 1 3 . . 3 3 . . . 
            . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
            . . . 3 1 3 3 1 3 2 1 3 . . . . 
            3 3 3 3 2 1 3 1 1 1 3 . . . . . 
            3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
            . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
            . . . . . 2 1 1 1 3 3 2 3 3 3 . 
            . . . . 3 1 3 1 3 1 2 . . . . . 
            . . . 3 1 3 2 1 3 3 1 3 . . . . 
            . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
            . . 3 3 . . 3 1 3 . . 3 3 . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 3 3 . . . . . . . . 
            `,img`
            . . 3 3 . . . 3 3 . . . . . . . 
            . 3 1 1 2 . . 3 1 3 . . 3 3 3 . 
            . 3 1 1 2 . . 3 1 3 . 3 1 1 3 . 
            . . 3 2 2 . . 2 1 2 . 2 1 1 3 . 
            . 3 3 . . . . . 2 2 . 2 2 2 . . 
            3 1 1 2 2 . . . . . . . 3 3 . . 
            3 1 1 1 2 . . . . . . 2 1 1 3 3 
            3 1 1 2 . . . . . . 3 1 1 1 1 3 
            . 3 2 2 . . . . . . . 2 1 1 3 . 
            . . . . . . . 2 . . . . 3 3 . . 
            . . 2 2 2 . 2 1 2 . . 2 2 2 . . 
            . 3 1 1 2 2 3 1 1 2 . 2 1 1 3 3 
            3 1 1 1 2 2 1 1 1 2 . 2 1 1 1 3 
            3 1 1 3 . . 3 1 3 . . . 3 1 1 3 
            3 3 3 . . . . 3 3 . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 3 . . . . . 
            . . . . . 3 . . . . 3 3 . . . . 
            . . . . 3 3 . . . . . 3 . . . . 
            . . . . 3 . . . 3 . . . . . . . 
            . . . . . . . . 3 . . . . . . . 
            . 3 . . . . . . . . . . 3 . . . 
            3 3 . . . . . . . . . . 3 3 . . 
            3 . . . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 . . . 3 . . . . . 3 . . 
            . . 3 3 . . . 3 . . . . . 3 3 . 
            . . 3 . . . . 3 . . . . . . 3 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        150,
        false
        )
        animation.runImageAnimation(
        explosion_2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . 9 1 1 9 . . . . . . 
            . . . . . . 9 1 1 9 . . . . . . 
            . . 9 8 8 9 1 1 1 1 9 8 8 . . . 
            . . 9 9 1 1 1 1 1 1 1 1 9 9 . . 
            . . 9 9 1 1 1 1 1 1 1 1 9 9 . . 
            . . . 9 1 1 1 1 1 1 1 1 9 . . . 
            . . . . 9 1 1 1 1 1 1 9 . . . . 
            . . . . 8 1 1 1 1 1 1 8 . . . . 
            . . . . 8 1 1 9 9 1 1 8 . . . . 
            . . . . 9 9 9 8 8 8 9 9 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . 9 1 1 9 . . . . . . 
            . . . . . 8 1 1 1 1 8 . . . . . 
            . . . . . 8 1 1 1 1 8 . . . . . 
            . . . . . . 9 1 1 9 . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 9 9 . . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . 9 9 . . 9 1 9 . . 9 9 . . . 
            . . 9 1 9 . 9 1 9 8 9 1 9 . . . 
            . . . 9 1 9 9 1 9 8 1 9 . . . . 
            9 9 9 9 8 1 9 1 1 1 9 . . . . . 
            9 1 1 1 1 1 1 1 1 8 9 9 9 9 9 9 
            . 9 9 9 8 9 1 1 1 1 1 1 1 1 1 9 
            . . . . . 8 1 1 1 9 9 8 9 9 9 . 
            . . . . 9 1 9 1 9 1 8 . . . . . 
            . . . 9 1 9 8 1 9 9 1 9 . . . . 
            . . 9 1 9 . 8 1 9 . 9 1 9 . . . 
            . . 9 9 . . 9 1 9 . . 9 9 . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 9 . . . . . . . . 
            `,img`
            . . 9 9 . . . 9 9 . . . . . . . 
            . 9 1 1 8 . . 9 1 9 . . 9 9 9 . 
            . 9 1 1 8 . . 9 1 9 . 9 1 1 9 . 
            . . 9 8 8 . . 8 1 8 . 8 1 1 9 . 
            . 9 9 . . . . . 8 8 . 8 8 8 . . 
            9 1 1 8 8 . . . . . . . 9 9 . . 
            9 1 1 1 8 . . . . . . 8 1 1 9 9 
            9 1 1 8 . . . . . . 9 1 1 1 1 9 
            . 9 8 8 . . . . . . . 8 1 1 9 . 
            . . . . . . . 8 . . . . 9 9 . . 
            . . 8 8 8 . 8 1 8 . . 8 8 8 . . 
            . 9 1 1 8 8 9 1 1 8 . 8 1 1 9 9 
            9 1 1 1 8 8 1 1 1 8 . 8 1 1 1 9 
            9 1 1 9 . . 9 1 9 . . . 9 1 1 9 
            9 9 9 . . . . 9 9 . . . . 9 9 . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 9 . . . . . 
            . . . . . 9 . . . . 9 9 . . . . 
            . . . . 9 9 . . . . . 9 . . . . 
            . . . . 9 . . . 9 . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . 9 . . . . . . . . . . 9 . . . 
            9 9 . . . . . . . . . . 9 9 . . 
            9 . . . . . . . . . . . . 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . 9 . . . 9 . . . . . 9 . . 
            . . 9 9 . . . 9 . . . . . 9 9 . 
            . . 9 . . . . 9 . . . . . . 9 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        150,
        false
        )
        animation.runImageAnimation(
        explosion_3,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 1 1 5 . . . . . . 
            . . . . . . 5 1 1 5 . . . . . . 
            . . 5 4 4 5 1 1 1 1 5 4 4 . . . 
            . . 5 5 1 1 1 1 1 1 1 1 5 5 . . 
            . . 5 5 1 1 1 1 1 1 1 1 5 5 . . 
            . . . 5 1 1 1 1 1 1 1 1 5 . . . 
            . . . . 5 1 1 1 1 1 1 5 . . . . 
            . . . . 4 1 1 1 1 1 1 4 . . . . 
            . . . . 4 1 1 5 5 1 1 4 . . . . 
            . . . . 5 5 5 4 4 4 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 5 1 1 5 . . . . . . 
            . . . . . 4 1 1 1 1 4 . . . . . 
            . . . . . 4 1 1 1 1 4 . . . . . 
            . . . . . . 5 1 1 5 . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . 5 1 5 . . . . . . . 
            . . 5 5 . . 5 1 5 . . 5 5 . . . 
            . . 5 1 5 . 5 1 5 4 5 1 5 . . . 
            . . . 5 1 5 5 1 5 4 1 5 . . . . 
            5 5 5 5 4 1 5 1 1 1 5 . . . . . 
            5 1 1 1 1 1 1 1 1 4 5 5 5 5 5 5 
            . 5 5 5 4 5 1 1 1 1 1 1 1 1 1 5 
            . . . . . 4 1 1 1 5 5 4 5 5 5 . 
            . . . . 5 1 5 1 5 1 4 . . . . . 
            . . . 5 1 5 4 1 5 5 1 5 . . . . 
            . . 5 1 5 . 4 1 5 . 5 1 5 . . . 
            . . 5 5 . . 5 1 5 . . 5 5 . . . 
            . . . . . . 5 1 5 . . . . . . . 
            . . . . . . 5 1 5 . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            `,img`
            . . 5 5 . . . 5 5 . . . . . . . 
            . 5 1 1 4 . . 5 1 5 . . 5 5 5 . 
            . 5 1 1 4 . . 5 1 5 . 5 1 1 5 . 
            . . 5 4 4 . . 4 1 4 . 4 1 1 5 . 
            . 5 5 . . . . . 4 4 . 4 4 4 . . 
            5 1 1 4 4 . . . . . . . 5 5 . . 
            5 1 1 1 4 . . . . . . 4 1 1 5 5 
            5 1 1 4 . . . . . . 5 1 1 1 1 5 
            . 5 4 4 . . . . . . . 4 1 1 5 . 
            . . . . . . . 4 . . . . 5 5 . . 
            . . 4 4 4 . 4 1 4 . . 4 4 4 . . 
            . 5 1 1 4 4 5 1 1 4 . 4 1 1 5 5 
            5 1 1 1 4 4 1 1 1 4 . 4 1 1 1 5 
            5 1 1 5 . . 5 1 5 . . . 5 1 1 5 
            5 5 5 . . . . 5 5 . . . . 5 5 . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 5 . . . . . 
            . . . . . 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . . 5 . . . . 
            . . . . 5 . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . 5 . . . . . . . . . . 5 . . . 
            5 5 . . . . . . . . . . 5 5 . . 
            5 . . . . . . . . . . . . 5 . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 . . . 5 . . . . . 5 . . 
            . . 5 5 . . . 5 . . . . . 5 5 . 
            . . 5 . . . . 5 . . . . . . 5 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        150,
        false
        )
        animation.runImageAnimation(
        explosion_4,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 1 1 7 . . . . . . 
            . . . . . . 7 1 1 7 . . . . . . 
            . . 7 5 5 7 1 1 1 1 7 5 5 . . . 
            . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
            . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
            . . . 7 1 1 1 1 1 1 1 1 7 . . . 
            . . . . 7 1 1 1 1 1 1 7 . . . . 
            . . . . 5 1 1 1 1 1 1 5 . . . . 
            . . . . 5 1 1 7 7 1 1 5 . . . . 
            . . . . 7 7 7 5 5 5 7 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 7 1 1 7 . . . . . . 
            . . . . . 5 1 1 1 1 5 . . . . . 
            . . . . . 5 1 1 1 1 5 . . . . . 
            . . . . . . 7 1 1 7 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 7 7 . . . . . . . . 
            . . . . . . 7 1 7 . . . . . . . 
            . . 7 7 . . 7 1 7 . . 7 7 . . . 
            . . 7 1 7 . 7 1 7 5 7 1 7 . . . 
            . . . 7 1 7 7 1 7 5 1 7 . . . . 
            7 7 7 7 5 1 7 1 1 1 7 . . . . . 
            7 1 1 1 1 1 1 1 1 5 7 7 7 7 7 7 
            . 7 7 7 5 7 1 1 1 1 1 1 1 1 1 7 
            . . . . . 5 1 1 1 7 7 5 7 7 7 . 
            . . . . 7 1 7 1 7 1 5 . . . . . 
            . . . 7 1 7 5 1 7 7 1 7 . . . . 
            . . 7 1 7 . 5 1 7 . 7 1 7 . . . 
            . . 7 7 . . 7 1 7 . . 7 7 . . . 
            . . . . . . 7 1 7 . . . . . . . 
            . . . . . . 7 1 7 . . . . . . . 
            . . . . . . 7 7 . . . . . . . . 
            `,img`
            . . 7 7 . . . 7 7 . . . . . . . 
            . 7 1 1 5 . . 7 1 7 . . 7 7 7 . 
            . 7 1 1 5 . . 7 1 7 . 7 1 1 7 . 
            . . 7 5 5 . . 5 1 5 . 5 1 1 7 . 
            . 7 7 . . . . . 5 5 . 5 5 5 . . 
            7 1 1 5 5 . . . . . . . 7 7 . . 
            7 1 1 1 5 . . . . . . 5 1 1 7 7 
            7 1 1 5 . . . . . . 7 1 1 1 1 7 
            . 7 5 5 . . . . . . . 5 1 1 7 . 
            . . . . . . . 5 . . . . 7 7 . . 
            . . 5 5 5 . 5 1 5 . . 5 5 5 . . 
            . 7 1 1 5 5 7 1 1 5 . 5 1 1 7 7 
            7 1 1 1 5 5 1 1 1 5 . 5 1 1 1 7 
            7 1 1 7 . . 7 1 7 . . . 7 1 1 7 
            7 7 7 . . . . 7 7 . . . . 7 7 . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 7 . . . . . 
            . . . . . 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . . 7 . . . . 
            . . . . 7 . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . 7 . . . . . . . . . . 7 . . . 
            7 7 . . . . . . . . . . 7 7 . . 
            7 . . . . . . . . . . . . 7 . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 . . . 7 . . . . . 7 . . 
            . . 7 7 . . . 7 . . . . . 7 7 . 
            . . 7 . . . . 7 . . . . . . 7 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        150,
        false
        )
    }
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    boss_1_killed += 1
    statusbar.setBarSize(0, 0)
    pause(1800)
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        if (life_p1 > 0) {
            if (n_of_projectil < 1) {
                if (shoot_style_1 == 0) {
                    music.setVolume(100)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    projectile = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . 2 1 1 1 1 2 . . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . . 2 1 1 1 1 3 . . . . . 
                        . . . . . 2 3 1 1 1 2 . . . . . 
                        . . . . . . 3 1 1 3 2 . . . . . 
                        . . . . . . 2 3 1 2 . . . . . . 
                        . . . . . . 2 3 1 2 . . . . . . 
                        . . . . . . . 3 1 3 . . . . . . 
                        . . . . . . . 3 1 3 . . . . . . 
                        . . . . . . . . 3 . . . . . . . 
                        . . . . . . . 3 . 3 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
                    projectile.setVelocity(0, -70)
                    projectile.setFlag(SpriteFlag.AutoDestroy, true)
                    n_of_projectil += 1
                    pause(200)
                }
                if (shoot_style_1 == 1) {
                    music.setVolume(100)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    projectile_1_1 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . 2 1 1 1 1 2 . . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . . 2 1 1 1 1 3 . . . . . 
                        . . . . . 2 3 1 1 1 2 . . . . . 
                        . . . . . . 3 1 1 3 2 . . . . . 
                        . . . . . . 2 3 1 2 . . . . . . 
                        . . . . . . 2 3 1 2 . . . . . . 
                        . . . . . . . 3 1 3 . . . . . . 
                        . . . . . . . 3 1 3 . . . . . . 
                        . . . . . . . . 3 . . . . . . . 
                        . . . . . . . 3 . 3 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_1_2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . 2 1 1 1 1 2 . . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . 2 1 1 1 1 1 1 2 . . . . 
                        . . . . . 2 1 1 1 1 3 . . . . . 
                        . . . . . 2 3 1 1 1 2 . . . . . 
                        . . . . . . 3 1 1 3 2 . . . . . 
                        . . . . . . 2 3 1 2 . . . . . . 
                        . . . . . . 2 3 1 2 . . . . . . 
                        . . . . . . . 3 1 3 . . . . . . 
                        . . . . . . . 3 1 3 . . . . . . 
                        . . . . . . . . 3 . . . . . . . 
                        . . . . . . . 3 . 3 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_1_1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
                    projectile_1_2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
                    projectile_1_1.setVelocity(10, -70)
                    projectile_1_2.setVelocity(-10, -70)
                    projectile_1_1.setFlag(SpriteFlag.AutoDestroy, true)
                    projectile_1_2.setFlag(SpriteFlag.AutoDestroy, true)
                    n_of_projectil += 1
                    pause(200)
                }
            }
        }
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        if (life_p2 > 0 && life_p2 <= 3) {
            if (n_of_projectil2 < 1) {
                if (shoot_style_2 == 0) {
                    music.setVolume(100)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    projectile_2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 8 8 8 8 . . . . . . 
                        . . . . . 8 1 1 1 1 8 . . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . . 8 1 1 1 1 9 . . . . . 
                        . . . . . 8 9 1 1 1 8 . . . . . 
                        . . . . . . 9 1 1 9 8 . . . . . 
                        . . . . . . 8 9 1 8 . . . . . . 
                        . . . . . . 8 9 1 8 . . . . . . 
                        . . . . . . . 9 1 9 . . . . . . 
                        . . . . . . . 9 1 9 . . . . . . 
                        . . . . . . . . 9 . . . . . . . 
                        . . . . . . . 9 . 9 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
                    projectile_2.setVelocity(0, -70)
                    projectile_2.setFlag(SpriteFlag.AutoDestroy, true)
                    n_of_projectil2 += 1
                    pause(200)
                }
                if (shoot_style_2 == 1) {
                    music.setVolume(100)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    projectile_2_1 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 8 8 8 8 . . . . . . 
                        . . . . . 8 1 1 1 1 8 . . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . . 8 1 1 1 1 9 . . . . . 
                        . . . . . 8 9 1 1 1 8 . . . . . 
                        . . . . . . 9 1 1 9 8 . . . . . 
                        . . . . . . 8 9 1 8 . . . . . . 
                        . . . . . . 8 9 1 8 . . . . . . 
                        . . . . . . . 9 1 9 . . . . . . 
                        . . . . . . . 9 1 9 . . . . . . 
                        . . . . . . . . 9 . . . . . . . 
                        . . . . . . . 9 . 9 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_2_2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 8 8 8 8 . . . . . . 
                        . . . . . 8 1 1 1 1 8 . . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . 8 1 1 1 1 1 1 8 . . . . 
                        . . . . . 8 1 1 1 1 9 . . . . . 
                        . . . . . 8 9 1 1 1 8 . . . . . 
                        . . . . . . 9 1 1 9 8 . . . . . 
                        . . . . . . 8 9 1 8 . . . . . . 
                        . . . . . . 8 9 1 8 . . . . . . 
                        . . . . . . . 9 1 9 . . . . . . 
                        . . . . . . . 9 1 9 . . . . . . 
                        . . . . . . . . 9 . . . . . . . 
                        . . . . . . . 9 . 9 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_2_1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
                    projectile_2_2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
                    projectile_2_1.setVelocity(10, -70)
                    projectile_2_2.setVelocity(-10, -70)
                    projectile_2_1.setFlag(SpriteFlag.AutoDestroy, true)
                    projectile_2_2.setFlag(SpriteFlag.AutoDestroy, true)
                    n_of_projectil2 += 1
                    pause(200)
                }
            }
        }
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
        if (life_p3 > 0 && life_p3 <= 3) {
            if (n_of_pew_3 < 1) {
                if (shoot_style_3 == 0) {
                    music.setVolume(100)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    projectile_3 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . 4 1 1 1 1 4 . . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . . 4 1 1 1 1 5 . . . . . 
                        . . . . . 4 5 1 1 1 4 . . . . . 
                        . . . . . . 5 1 1 5 4 . . . . . 
                        . . . . . . 4 5 1 4 . . . . . . 
                        . . . . . . 4 5 1 4 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . 5 . 5 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_3.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
                    projectile_3.setVelocity(0, -70)
                    projectile_3.setFlag(SpriteFlag.AutoDestroy, true)
                    n_of_pew_3 += 1
                    pause(200)
                }
                if (shoot_style_3 == 1) {
                    music.setVolume(100)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    projectile_3_1 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . 4 1 1 1 1 4 . . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . . 4 1 1 1 1 5 . . . . . 
                        . . . . . 4 5 1 1 1 4 . . . . . 
                        . . . . . . 5 1 1 5 4 . . . . . 
                        . . . . . . 4 5 1 4 . . . . . . 
                        . . . . . . 4 5 1 4 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . 5 . 5 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_3_2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . 4 1 1 1 1 4 . . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . 4 1 1 1 1 1 1 4 . . . . 
                        . . . . . 4 1 1 1 1 5 . . . . . 
                        . . . . . 4 5 1 1 1 4 . . . . . 
                        . . . . . . 5 1 1 5 4 . . . . . 
                        . . . . . . 4 5 1 4 . . . . . . 
                        . . . . . . 4 5 1 4 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . 5 . 5 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_3_1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
                    projectile_3_2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
                    projectile_3_1.setVelocity(10, -70)
                    projectile_3_2.setVelocity(-10, -70)
                    projectile_3_1.setFlag(SpriteFlag.AutoDestroy, true)
                    projectile_3_2.setFlag(SpriteFlag.AutoDestroy, true)
                    n_of_pew_3 += 1
                    pause(200)
                }
            }
        }
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
        if (life_p4 > 0 && life_p4 <= 3) {
            if (n_of_pew_4 < 1) {
                if (shoot_style_4 == 0) {
                    music.setVolume(100)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    projectile_4 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 7 7 7 7 . . . . . . 
                        . . . . . 7 1 1 1 1 7 . . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . . 7 1 1 1 1 5 . . . . . 
                        . . . . . 7 5 1 1 1 7 . . . . . 
                        . . . . . . 5 1 1 5 7 . . . . . 
                        . . . . . . 7 5 1 7 . . . . . . 
                        . . . . . . 7 5 1 7 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . 5 . 5 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_4.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
                    projectile_4.setVelocity(0, -70)
                    projectile_4.setFlag(SpriteFlag.AutoDestroy, true)
                    n_of_pew_4 += 1
                    pause(200)
                }
                if (shoot_style_4 == 1) {
                    music.setVolume(100)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    projectile_4_1 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 7 7 7 7 . . . . . . 
                        . . . . . 7 1 1 1 1 7 . . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . . 7 1 1 1 1 5 . . . . . 
                        . . . . . 7 5 1 1 1 7 . . . . . 
                        . . . . . . 5 1 1 5 7 . . . . . 
                        . . . . . . 7 5 1 7 . . . . . . 
                        . . . . . . 7 5 1 7 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . 5 . 5 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_4_2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 7 7 7 7 . . . . . . 
                        . . . . . 7 1 1 1 1 7 . . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . 7 1 1 1 1 1 1 7 . . . . 
                        . . . . . 7 1 1 1 1 5 . . . . . 
                        . . . . . 7 5 1 1 1 7 . . . . . 
                        . . . . . . 5 1 1 5 7 . . . . . 
                        . . . . . . 7 5 1 7 . . . . . . 
                        . . . . . . 7 5 1 7 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . 5 1 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . 5 . 5 . . . . . . 
                        `, SpriteKind.Projectile)
                    projectile_4_1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
                    projectile_4_2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
                    projectile_4_1.setVelocity(5, -70)
                    projectile_4_2.setVelocity(-5, -70)
                    projectile_4_1.setFlag(SpriteFlag.AutoDestroy, true)
                    projectile_4_2.setFlag(SpriteFlag.AutoDestroy, true)
                    n_of_pew_4 += 1
                    pause(200)
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    statusbar.value += -1
    sprites.destroy(sprite, effects.fire, 100)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.shootstyle, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.starField, 100)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        shoot_style_1 = 1
        pause(30000)
        shoot_style_1 = 0
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        shoot_style_2 = 1
        pause(30000)
        shoot_style_2 = 0
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        shoot_style_3 = 1
        pause(30000)
        shoot_style_3 = 0
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))) {
        shoot_style_4 = 1
        pause(30000)
        shoot_style_4 = 0
    }
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    Explosion()
})
function Boss1 () {
    game.splash("THE BOSS IS COMING")
    music.play(music.stringPlayable("F G F F A A - - ", 240), music.PlaybackMode.InBackground)
    boss = sprites.create(img`
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 e e e e e e 8 8 . . . 
        . . . 8 6 e e e e e e 6 8 . . . 
        . . . 6 6 f f f f f f 6 6 . . . 
        . . . 6 e e e e e e e e 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . e 6 6 6 6 6 6 6 6 6 6 e . . 
        . e . 6 1 f 6 6 6 6 f 1 6 . e . 
        . e . . 4 4 4 4 4 4 4 4 . . e . 
        e . e . . 4 4 4 4 4 4 . . e . e 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Boss)
    scaling.scaleToPercent(boss, 920, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    boss.setPosition(80, -30)
    boss.setVelocity(0, 2)
    statusbar = statusbars.create(160, 2, StatusBarKind.EnemyHealth)
    statusbar.setColor(7, 2)
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.value = 100
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        if (life_p1 < 3) {
            life_p1 += 1
            sprites.destroy(otherSprite, effects.hearts, 100)
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        }
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        if (life_p2 < 3) {
            life_p2 += 1
            sprites.destroy(otherSprite, effects.hearts, 100)
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        }
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        if (life_p3 < 3) {
            life_p3 += 1
            sprites.destroy(otherSprite, effects.hearts, 100)
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        }
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))) {
        if (life_p4 < 3) {
            life_p4 += 1
            sprites.destroy(otherSprite, effects.hearts, 100)
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        }
    }
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    if (sprite == projectile) {
        n_of_projectil += -1
    }
    if (sprite == projectile_1_1) {
        n_of_projectil += -1
    }
    if (sprite == projectile_1_2) {
        n_of_projectil += -1
    }
    if (sprite == projectile_2) {
        n_of_projectil2 += -1
    }
    if (sprite == projectile_2_1) {
        n_of_projectil2 += -1
    }
    if (sprite == projectile_2_2) {
        n_of_projectil2 += -1
    }
    if (sprite == projectile_3) {
        n_of_pew_3 += -1
    }
    if (sprite == projectile_3_1) {
        n_of_pew_3 += -1
    }
    if (sprite == projectile_3_2) {
        n_of_pew_3 += -1
    }
    if (sprite == projectile_4) {
        n_of_pew_4 += -1
    }
    if (sprite == projectile_4_1) {
        n_of_pew_4 += -1
    }
    if (sprite == projectile_4_2) {
        n_of_pew_4 += -1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    if (Math.percentChance(5)) {
        shoot_style_sprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 5 5 . . . . . . . 
            . . . . . 4 2 4 2 5 . . . . . . 
            . . . . . 4 2 4 2 4 . . . . . . 
            . . . . . e 3 4 3 4 . . . . . . 
            . . . . . . e e 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.shootstyle)
        shoot_style_sprite.setPosition(otherSprite.x, otherSprite.y)
        shoot_style_sprite.setVelocity(0, 20)
    }
    if (life_p1 < 3 || (life_p2 < 3 || (life_p3 < 3 || life_p4 < 3))) {
        if (Math.percentChance(10)) {
            life_drop = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 5 5 . . . . . . . 
                . . . . . 4 2 4 2 5 . . . . . . 
                . . . . . 4 2 2 2 4 . . . . . . 
                . . . . . e 4 2 4 4 . . . . . . 
                . . . . . . e e 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            life_drop.setPosition(otherSprite.x, otherSprite.y)
            life_drop.setVelocity(0, 20)
        }
    }
    if (sprite == projectile) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p1 += 0.5
    }
    if (sprite == projectile_1_1) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p1 += 0.5
    }
    if (sprite == projectile_1_2) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p1 += 0.5
    }
    if (sprite == projectile_2) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p2 += 0.5
    }
    if (sprite == projectile_2_1) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p2 += 0.5
    }
    if (sprite == projectile_2_2) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p2 += 0.5
    }
    if (sprite == projectile_3) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p3 += 0.5
    }
    if (sprite == projectile_3_1) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p3 += 0.5
    }
    if (sprite == projectile_3_2) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p3 += 0.5
    }
    if (sprite == projectile_4) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p4 += 0.5
    }
    if (sprite == projectile_4_1) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p4 += 0.5
    }
    if (sprite == projectile_4_2) {
        sprites.destroy(otherSprite, effects.fire, 100)
        sprites.destroy(sprite, effects.ashes, 100)
        score_p4 += 0.5
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        sprites.destroy(otherSprite, effects.fire, 100)
        life_p1 += -1
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        sprites.destroy(otherSprite, effects.fire, 100)
        life_p2 += -1
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        sprites.destroy(otherSprite, effects.fire, 100)
        life_p3 += -1
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))) {
        sprites.destroy(otherSprite, effects.fire, 100)
        life_p4 += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        life_p1 += -1
        pause(500)
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        life_p2 += -1
        pause(500)
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        life_p3 += -1
        pause(500)
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))) {
        life_p4 += -1
        pause(500)
    }
})
let mySprite4: Sprite = null
let mySprite_4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let life_sprite: Sprite = null
let mySprite: Sprite = null
let life_drop: Sprite = null
let shoot_style_sprite: Sprite = null
let projectile_4_2: Sprite = null
let projectile_4_1: Sprite = null
let shoot_style_4 = 0
let projectile_3_2: Sprite = null
let projectile_3_1: Sprite = null
let shoot_style_3 = 0
let projectile_2_2: Sprite = null
let projectile_2_1: Sprite = null
let shoot_style_2 = 0
let projectile_1_2: Sprite = null
let projectile_1_1: Sprite = null
let shoot_style_1 = 0
let boss: Sprite = null
let explosion_4: Sprite = null
let explosion_3: Sprite = null
let explosion_2: Sprite = null
let explosion_1: Sprite = null
let start_p4 = 0
let start_p3 = 0
let statusbar: StatusBarSprite = null
let boss_2: Sprite = null
let asteroide: Sprite = null
let n_of_pew_4 = 0
let score_p4 = 0
let n_of_pew_3 = 0
let score_p3 = 0
let n_of_projectil2 = 0
let n_of_projectil = 0
let score_p2 = 0
let projectile_4: Sprite = null
let projectile_3: Sprite = null
let projectile_2: Sprite = null
let projectile: Sprite = null
let life_p4 = 0
let life_p3 = 0
let life_p2 = 0
let life_p1 = 0
let start = 0
start = 0
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccc1cccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccdddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddeeeee
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddeeeeee
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddeeecccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddeeccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccdddeeccccc
    ccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddeeccccc
    ccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddeeccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddeeccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddeeecccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddeeeeee
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddeeeee
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddeeedd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddecedd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddeeeedd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddeceddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddeeeddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddd
    ccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
music.setVolume(20)
music.play(music.createSong(hex`0014000408020700001c00010a006400f401640000040000000000000000000000000005000004240000000400011204000800010f08001000010c10001400010f14001800010f18002000011204001c00100500640000041e000004000000000000000000000000000a0400044e0000000400011604000800011208000c0001120c001000010f18001c0001161c002000011420002400011224002800010f28003000010830003400010c34003800010d38003c00010f3c004000011205001c000f0a006400f4010a0000040000000000000000000000000000000002490008001000012a14001600012a16001800011d18001a0001271a001c0001241c001e0001271e002000012420002800011d2800300002051630003200012432003400012034003600012406001c00010a006400f40164000004000000000000000000000000000000000254000200040001270600080001240c000e00012712001400012428002900012a29002a0001272a002b00012a2b002c0001272c002d00012a2d002e0001272e002f00012a2f003000012c3a003c0001243e004000012707001c00020a006400f40164000004000000000000000000000000000000000306000e001000011d08001c000e050046006603320000040a002d000000640014000132000201000248000000020001270400060001240a000c00012710001200012414001800012020002200012722002400012424002600012726002800012436003800012738003a0001243c003e00012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80068000000010002040a0400050001040800090002040a0c000d0001041000110002040a1400150001041800190002040a1c001d0001042000210002040a2400250001042800290002040a2c002d0001043000310002040a3400350001043800390002040a3c003d000104`), music.PlaybackMode.LoopingInBackground)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 9 9 2 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . 4 2 2 2 2 4 . . . . . 
    . f f . 4 4 2 2 2 2 4 4 . f f . 
    . f f 2 4 4 4 2 2 4 4 4 2 f f . 
    . f 2 2 4 4 4 2 2 4 4 4 2 2 f . 
    . 2 2 2 4 4 4 2 2 4 4 4 2 2 2 . 
    2 2 2 2 4 4 4 3 3 4 4 4 2 2 2 2 
    2 2 2 2 4 4 4 3 3 4 4 4 2 2 2 2 
    . 2 . . . 8 8 3 3 8 8 . . . 2 . 
    . . . . . 8 3 3 3 3 8 . . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(45, 108)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
let score_p1 = 0
life_p1 = 3
life_p2 = 4
life_p3 = 4
life_p4 = 4
projectile = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nada)
projectile_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nada)
projectile_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nada)
projectile_4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nada)
let life_sprite_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nada)
let life_sprite_4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nada)
let life_sprite_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nada)
projectile = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nada)
scaling.scaleToPercent(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
score_p2 = -1
n_of_projectil = 0
n_of_projectil2 = 0
score_p3 = -1
n_of_pew_3 = 0
score_p4 = -1
n_of_pew_4 = 0
let boss_1_killed = 0
forever(function () {
    if (score_p1 < 10 || (score_p2 < 10 || (score_p3 < 10 || score_p4 < 10))) {
        if (boss_1_killed == 0) {
            asteroides()
        }
    }
    if (score_p1 >= 10 || (score_p2 >= 10 || (score_p3 >= 10 || score_p4 >= 10))) {
        if (boss_1_killed == 0) {
            Boss1()
            pauseUntil(() => boss_1_killed == 1)
        }
    }
    if (score_p1 <= 11 || (score_p2 <= 11 || (score_p3 <= 11 || score_p4 <= 11))) {
        if (boss_1_killed == 1) {
            aligenisnas()
        }
    }
    if (score_p1 >= 20 || (score_p2 >= 20 || (score_p3 >= 20 || score_p4 >= 20))) {
        if (boss_1_killed == 1) {
            Boss2()
            pauseUntil(() => boss_1_killed == 2)
        }
    }
})
forever(function () {
    if (score_p1 == 0) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 . . 2 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 2 . . 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 1) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 2) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 2 2 . . . . . . . . 
            . . . . 2 2 2 . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 3) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 4) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 . . . . . . . . . . 
            . . . . 2 2 . 2 2 . . . . . . . 
            . . . . 2 2 . 2 2 . . . . . . . 
            . . . . 2 2 . 2 2 . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 5) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 . . . . . . . . . . 
            . . . . 2 2 . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 6) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 . . . . . . . . . 
            . . . . 2 2 . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 7) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 2 2 . . . . . . . . 
            . . . . 2 2 2 . . . . . . . . . 
            . . . . 2 2 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 8) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 . . . . . 2 2 . . . . 
            . . . 2 2 . . . . . 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 9) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 10) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . 2 2 2 2 . . . . 
            . . 2 2 2 . . 2 2 2 2 2 2 . . . 
            . . . 2 2 . 2 2 2 . . 2 2 2 . . 
            . . . 2 2 . 2 2 . . . . 2 2 . . 
            . . . 2 2 . 2 2 . . . . 2 2 . . 
            . . . 2 2 . 2 2 . . . . 2 2 . . 
            . . . 2 2 . 2 2 . . . . 2 2 . . 
            . . . 2 2 . 2 2 . . . . 2 2 . . 
            . . . 2 2 . 2 2 2 . . 2 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 . . 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 11) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . 2 2 2 . . . 2 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . 2 2 2 2 . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 12) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . 2 2 2 2 2 . . . 
            . . 2 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . . . . . . 2 2 . . 
            . . . 2 2 . . . . . . 2 2 2 . . 
            . . . 2 2 . . . . . 2 2 2 . . . 
            . . . 2 2 . . . . 2 2 2 . . . . 
            . . . 2 2 . . . 2 2 2 . . . . . 
            . . . 2 2 . . 2 2 2 . . . . . . 
            . . 2 2 2 2 . 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 13) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . 2 2 2 2 2 . . . 
            . . 2 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . . . . . . 2 2 . . 
            . . . 2 2 . . . . 2 2 2 2 2 . . 
            . . . 2 2 . . . . . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 . . 2 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 14) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . 2 2 . . . . . . . 
            . . 2 2 2 . . 2 2 . . . . . . . 
            . . . 2 2 . . 2 2 . 2 2 . . . . 
            . . . 2 2 . . 2 2 . 2 2 . . . . 
            . . . 2 2 . . 2 2 . 2 2 . . . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . . . . 2 2 . . . . 
            . . . 2 2 . . . . . 2 2 . . . . 
            . . . 2 2 . . . . . 2 2 . . . . 
            . . 2 2 2 2 . . . . 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 15) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . 2 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 . . . . . . . 
            . . . 2 2 . . 2 2 . . . . . . . 
            . . . 2 2 . . 2 2 . . . . . . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . . . . . . 2 2 . . 
            . . . 2 2 . . . . . . . 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 . 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 16) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . 2 2 2 2 2 . . . 
            . . 2 2 2 . . 2 2 2 2 2 2 . . . 
            . . . 2 2 . . 2 2 2 . . . . . . 
            . . . 2 2 . . 2 2 . . . . . . . 
            . . . 2 2 . . 2 2 2 2 2 2 . . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 . . 2 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 17) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . 2 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . . . . . . 2 2 . . 
            . . . 2 2 . . . . . . 2 2 2 . . 
            . . . 2 2 . . . . . 2 2 2 . . . 
            . . . 2 2 . . . . . 2 2 . . . . 
            . . . 2 2 . . . . 2 2 2 . . . . 
            . . . 2 2 . . . 2 2 2 . . . . . 
            . . . 2 2 . . 2 2 2 . . . . . . 
            . . 2 2 2 2 . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 18) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . 2 2 2 2 2 . . . 
            . . 2 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . . 2 2 2 2 2 . . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 . . 2 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 19) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . 2 2 2 2 2 . . . 
            . . 2 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 . . . 2 2 . . 
            . . . 2 2 . . 2 2 2 2 2 2 2 . . 
            . . . 2 2 . . . 2 2 2 2 2 2 . . 
            . . . 2 2 . . . . . . . 2 2 . . 
            . . . 2 2 . . . . . . 2 2 2 . . 
            . . . 2 2 . . . 2 2 2 2 2 2 . . 
            . . 2 2 2 2 . . 2 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p1 == 20) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . 2 2 2 2 2 . . . . 2 2 2 2 . . 
            2 2 2 2 2 2 2 . . 2 2 2 2 2 2 . 
            2 2 . . . 2 2 . 2 2 2 . . 2 2 2 
            2 2 . . . 2 2 . 2 2 . . . . 2 2 
            . . . . . 2 2 . 2 2 . . . . 2 2 
            . . . . 2 2 2 . 2 2 . . . . 2 2 
            . . . 2 2 2 . . 2 2 . . . . 2 2 
            . . 2 2 2 . . . 2 2 . . . . 2 2 
            . 2 2 2 . . . . 2 2 2 . . 2 2 2 
            2 2 2 . . . . . . 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 . . . 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    mySprite.setPosition(10, 10)
    if (life_p1 == 3) {
        sprites.destroy(life_sprite)
        life_sprite = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff222fff222ff...ff222fff222ff...ff222fff222ff.
            ..f22222f22222f...f22222f22222f...f22222f22222f.
            ..f22222221122f...f22222221122f...f22222221122f.
            ..f22222221122f...f22222221122f...f22222221122f.
            ..f22222222222f...f22222222222f...f22222222222f.
            ..ff222222222ff...ff222222222ff...ff222222222ff.
            ...ff2222222ff.....ff2222222ff.....ff2222222ff..
            ....ff22222ff.......ff22222ff.......ff22222ff...
            .....ff222ff.........ff222ff.........ff222ff....
            ......ff2ff...........ff2ff...........ff2ff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p1 == 2) {
        sprites.destroy(life_sprite)
        life_sprite = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff222fff222ff...ff222fff222ff...ffcccfffcccff.
            ..f22222f22222f...f22222f22222f...fcccccfcccccf.
            ..f22222221122f...f22222221122f...fcccccccccccf.
            ..f22222221122f...f22222221122f...fcccccccccccf.
            ..f22222222222f...f22222222222f...fcccccccccccf.
            ..ff222222222ff...ff222222222ff...ffcccccccccff.
            ...ff2222222ff.....ff2222222ff.....ffcccccccff..
            ....ff22222ff.......ff22222ff.......ffcccccff...
            .....ff222ff.........ff222ff.........ffcccff....
            ......ff2ff...........ff2ff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p1 == 1) {
        sprites.destroy(life_sprite)
        life_sprite = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff222fff222ff...ffcccfffcccff...ffcccfffcccff.
            ..f22222f22222f...fcccccfcccccf...fcccccfcccccf.
            ..f22222221122f...fcccccccccccf...fcccccccccccf.
            ..f22222221122f...fcccccccccccf...fcccccccccccf.
            ..f22222222222f...fcccccccccccf...fcccccccccccf.
            ..ff222222222ff...ffcccccccccff...ffcccccccccff.
            ...ff2222222ff.....ffcccccccff.....ffcccccccff..
            ....ff22222ff.......ffcccccff.......ffcccccff...
            .....ff222ff.........ffcccff.........ffcccff....
            ......ff2ff...........ffcff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p1 == 0) {
        sprites.destroy(life_sprite)
        life_sprite = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ffcccfffcccff...ffcccfffcccff...ffcccfffcccff.
            ..fcccccfcccccf...fcccccfcccccf...fcccccfcccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..ffcccccccccff...ffcccccccccff...ffcccccccccff.
            ...ffcccccccff.....ffcccccccff.....ffcccccccff..
            ....ffcccccff.......ffcccccff.......ffcccccff...
            .....ffcccff.........ffcccff.........ffcccff....
            ......ffcff...........ffcff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        if (start == 1 || (start_p3 == 1 || start_p4 == 1)) {
            game.splash("Player 1 is dead")
        }
        life_p1 = -1
    }
    life_sprite.setPosition(24, 24)
})
forever(function () {
    if (score_p2 == -1) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 0) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 . . 8 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 8 . . 8 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 1) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 2) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . . . . . . 8 8 . . . . . 
            . . . . . . . . 8 8 8 . . . . . 
            . . . . . . . 8 8 8 . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . 8 8 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 3) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . . . . . . 8 8 . . . . . 
            . . . . . . 8 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 8 . . . . . 
            . . . . . . . . . 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 4) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 8 8 . . . . . . . . . . 
            . . . . 8 8 . 8 8 . . . . . . . 
            . . . . 8 8 . 8 8 . . . . . . . 
            . . . . 8 8 . 8 8 . . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 5) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 . . . . . . . . . . 
            . . . . 8 8 . . . . . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . 8 8 . . . . . 
            . . . . . . . . . 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 6) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . 8 8 . . . . . . . . . . 
            . . . . 8 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 7) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . 8 8 . . . . . 
            . . . . . . . . 8 8 8 . . . . . 
            . . . . . . . 8 8 8 . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . 8 8 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . 8 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 8) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . . 8 8 . . . . . 8 8 . . . . 
            . . . 8 8 . . . . . 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 9) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . 8 8 . . . . . 
            . . . . . . . . 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 10) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 . . . 8 8 8 8 . . . . 
            . . 8 8 8 . . 8 8 8 8 8 8 . . . 
            . . . 8 8 . 8 8 8 . . 8 8 8 . . 
            . . . 8 8 . 8 8 . . . . 8 8 . . 
            . . . 8 8 . 8 8 . . . . 8 8 . . 
            . . . 8 8 . 8 8 . . . . 8 8 . . 
            . . . 8 8 . 8 8 . . . . 8 8 . . 
            . . . 8 8 . 8 8 . . . . 8 8 . . 
            . . . 8 8 . 8 8 8 . . 8 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 . . 8 8 8 8 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 11) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . 8 8 8 . . . 8 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 8 8 . . . . 
            . . . 8 8 8 8 . . 8 8 8 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 12) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 . . . 8 8 8 8 8 . . . 
            . . 8 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . . . . . . 8 8 . . 
            . . . 8 8 . . . . . . 8 8 8 . . 
            . . . 8 8 . . . . . 8 8 8 . . . 
            . . . 8 8 . . . . 8 8 8 . . . . 
            . . . 8 8 . . . 8 8 8 . . . . . 
            . . . 8 8 . . 8 8 8 . . . . . . 
            . . 8 8 8 8 . 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 13) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 . . . 8 8 8 8 8 . . . 
            . . 8 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . . . . . . 8 8 . . 
            . . . 8 8 . . . . 8 8 8 8 8 . . 
            . . . 8 8 . . . . . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 . . 8 8 8 8 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 14) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 . . 8 8 . . . . . . . 
            . . 8 8 8 . . 8 8 . . . . . . . 
            . . . 8 8 . . 8 8 . 8 8 . . . . 
            . . . 8 8 . . 8 8 . 8 8 . . . . 
            . . . 8 8 . . 8 8 . 8 8 . . . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . . . . 8 8 . . . . 
            . . . 8 8 . . . . . 8 8 . . . . 
            . . . 8 8 . . . . . 8 8 . . . . 
            . . 8 8 8 8 . . . . 8 8 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 15) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . 8 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 . . . . . . . 
            . . . 8 8 . . 8 8 . . . . . . . 
            . . . 8 8 . . 8 8 . . . . . . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . . . . . . 8 8 . . 
            . . . 8 8 . . . . . . . 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 . 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 16) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 . . . 8 8 8 8 8 . . . 
            . . 8 8 8 . . 8 8 8 8 8 8 . . . 
            . . . 8 8 . . 8 8 8 . . . . . . 
            . . . 8 8 . . 8 8 . . . . . . . 
            . . . 8 8 . . 8 8 8 8 8 8 . . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 . . 8 8 8 8 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 17) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . 8 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . . . . . . 8 8 . . 
            . . . 8 8 . . . . . . 8 8 8 . . 
            . . . 8 8 . . . . . 8 8 8 . . . 
            . . . 8 8 . . . . . 8 8 . . . . 
            . . . 8 8 . . . . 8 8 8 . . . . 
            . . . 8 8 . . . 8 8 8 . . . . . 
            . . . 8 8 . . 8 8 8 . . . . . . 
            . . 8 8 8 8 . 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 18) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 . . . 8 8 8 8 8 . . . 
            . . 8 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . . 8 8 8 8 8 . . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 . . 8 8 8 8 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 19) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 . . . 8 8 8 8 8 . . . 
            . . 8 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 . . . 8 8 . . 
            . . . 8 8 . . 8 8 8 8 8 8 8 . . 
            . . . 8 8 . . . 8 8 8 8 8 8 . . 
            . . . 8 8 . . . . . . . 8 8 . . 
            . . . 8 8 . . . . . . 8 8 8 . . 
            . . . 8 8 . . . 8 8 8 8 8 8 . . 
            . . 8 8 8 8 . . 8 8 8 8 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p2 == 20) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . 8 8 8 8 8 . . . . 8 8 8 8 . . 
            8 8 8 8 8 8 8 . . 8 8 8 8 8 8 . 
            8 8 . . . 8 8 . 8 8 8 . . 8 8 8 
            8 8 . . . 8 8 . 8 8 . . . . 8 8 
            . . . . . 8 8 . 8 8 . . . . 8 8 
            . . . . 8 8 8 . 8 8 . . . . 8 8 
            . . . 8 8 8 . . 8 8 . . . . 8 8 
            . . 8 8 8 . . . 8 8 . . . . 8 8 
            . 8 8 8 . . . . 8 8 8 . . 8 8 8 
            8 8 8 . . . . . . 8 8 8 8 8 8 . 
            8 8 8 8 8 8 8 . . . 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    mySprite2.setPosition(150, 10)
    if (life_p2 == 3) {
        sprites.destroy(life_sprite_2)
        life_sprite_2 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff888fff888ff...ff888fff888ff...ff888fff888ff.
            ..f88888f88888f...f88888f88888f...f88888f88888f.
            ..f88888881188f...f88888881188f...f88888881188f.
            ..f88888881188f...f88888881188f...f88888881188f.
            ..f88888888888f...f88888888888f...f88888888888f.
            ..ff888888888ff...ff888888888ff...ff888888888ff.
            ...ff8888888ff.....ff8888888ff.....ff8888888ff..
            ....ff88888ff.......ff88888ff.......ff88888ff...
            .....ff888ff.........ff888ff.........ff888ff....
            ......ff8ff...........ff8ff...........ff8ff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p2 == 2) {
        sprites.destroy(life_sprite_2)
        life_sprite_2 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff888fff888ff...ff888fff888ff...ffcccfffcccff.
            ..f88888f88888f...f88888f88888f...fcccccfcccccf.
            ..f88888881188f...f88888881188f...fcccccccccccf.
            ..f88888881188f...f88888881188f...fcccccccccccf.
            ..f88888888888f...f88888888888f...fcccccccccccf.
            ..ff888888888ff...ff888888888ff...ffcccccccccff.
            ...ff8888888ff.....ff8888888ff.....ffcccccccff..
            ....ff88888ff.......ff88888ff.......ffcccccff...
            .....ff888ff.........ff888ff.........ffcccff....
            ......ff8ff...........ff8ff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p2 == 1) {
        sprites.destroy(life_sprite_2)
        life_sprite_2 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff888fff888ff...ffcccfffcccff...ffcccfffcccff.
            ..f88888f88888f...fcccccfcccccf...fcccccfcccccf.
            ..f88888881188f...fcccccccccccf...fcccccccccccf.
            ..f88888881188f...fcccccccccccf...fcccccccccccf.
            ..f88888888888f...fcccccccccccf...fcccccccccccf.
            ..ff888888888ff...ffcccccccccff...ffcccccccccff.
            ...ff8888888ff.....ffcccccccff.....ffcccccccff..
            ....ff88888ff.......ffcccccff.......ffcccccff...
            .....ff888ff.........ffcccff.........ffcccff....
            ......ff8ff...........ffcff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p2 == 0) {
        sprites.destroy(life_sprite_2)
        life_sprite_2 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ffcccfffcccff...ffcccfffcccff...ffcccfffcccff.
            ..fcccccfcccccf...fcccccfcccccf...fcccccfcccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..ffcccccccccff...ffcccccccccff...ffcccccccccff.
            ...ffcccccccff.....ffcccccccff.....ffcccccccff..
            ....ffcccccff.......ffcccccff.......ffcccccff...
            .....ffcccff.........ffcccff.........ffcccff....
            ......ffcff...........ffcff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
        game.splash("Player 2 is dead")
        life_p2 = -1
    }
    life_sprite_2.setPosition(136, 24)
})
forever(function () {
    if (score_p3 == -1) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 0) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 . . 5 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 5 . . 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 1) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 2) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . . . . . . 5 5 . . . . . 
            . . . . . . . . 5 5 5 . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . 5 5 5 . . . . . . . . 
            . . . . 5 5 5 . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 3) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . . . . . . 5 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . . . . 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 4) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 . . . . . . . . . . 
            . . . . 5 5 . 5 5 . . . . . . . 
            . . . . 5 5 . 5 5 . . . . . . . 
            . . . . 5 5 . 5 5 . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 5) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 . . . . . . . . . . 
            . . . . 5 5 . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . 5 5 . . . . . 
            . . . . . . . . . 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 6) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 . . . . . . . . . 
            . . . . 5 5 . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 7) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . 5 5 . . . . . 
            . . . . . . . . 5 5 5 . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . 5 5 5 . . . . . . . . 
            . . . . 5 5 5 . . . . . . . . . 
            . . . . 5 5 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 8) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 . . . . . 5 5 . . . . 
            . . . 5 5 . . . . . 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 9) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 . . . 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . 5 5 . . . . . 
            . . . . . . . . 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 10) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . . 5 5 5 5 . . . . 
            . . 5 5 5 . . 5 5 5 5 5 5 . . . 
            . . . 5 5 . 5 5 5 . . 5 5 5 . . 
            . . . 5 5 . 5 5 . . . . 5 5 . . 
            . . . 5 5 . 5 5 . . . . 5 5 . . 
            . . . 5 5 . 5 5 . . . . 5 5 . . 
            . . . 5 5 . 5 5 . . . . 5 5 . . 
            . . . 5 5 . 5 5 . . . . 5 5 . . 
            . . . 5 5 . 5 5 5 . . 5 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 . . 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 11) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . 5 5 5 . . . 5 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . 5 5 5 5 . . 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 12) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . . 5 5 5 5 5 . . . 
            . . 5 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . . . . . 5 5 5 . . 
            . . . 5 5 . . . . . 5 5 5 . . . 
            . . . 5 5 . . . . 5 5 5 . . . . 
            . . . 5 5 . . . 5 5 5 . . . . . 
            . . . 5 5 . . 5 5 5 . . . . . . 
            . . 5 5 5 5 . 5 5 5 5 5 5 5 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 13) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . . 5 5 5 5 5 . . . 
            . . 5 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . . . 5 5 5 5 5 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 . . 5 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 14) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . 5 5 . . . . . . . 
            . . 5 5 5 . . 5 5 . . . . . . . 
            . . . 5 5 . . 5 5 . 5 5 . . . . 
            . . . 5 5 . . 5 5 . 5 5 . . . . 
            . . . 5 5 . . 5 5 . 5 5 . . . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . . . . 5 5 . . . . 
            . . . 5 5 . . . . . 5 5 . . . . 
            . . . 5 5 . . . . . 5 5 . . . . 
            . . 5 5 5 5 . . . . 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 15) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . 5 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 . . . . . . . 
            . . . 5 5 . . 5 5 . . . . . . . 
            . . . 5 5 . . 5 5 . . . . . . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 . 5 5 5 5 5 5 5 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 16) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . . 5 5 5 5 5 . . . 
            . . 5 5 5 . . 5 5 5 5 5 5 . . . 
            . . . 5 5 . . 5 5 5 . . . . . . 
            . . . 5 5 . . 5 5 . . . . . . . 
            . . . 5 5 . . 5 5 5 5 5 5 . . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 . . 5 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 17) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . 5 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . . . . . 5 5 5 . . 
            . . . 5 5 . . . . . 5 5 5 . . . 
            . . . 5 5 . . . . . 5 5 . . . . 
            . . . 5 5 . . . . 5 5 5 . . . . 
            . . . 5 5 . . . 5 5 5 . . . . . 
            . . . 5 5 . . 5 5 5 . . . . . . 
            . . 5 5 5 5 . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 18) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . . 5 5 5 5 5 . . . 
            . . 5 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . . 5 5 5 5 5 . . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 . . 5 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 19) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . . 5 5 5 5 5 . . . 
            . . 5 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 . . . 5 5 . . 
            . . . 5 5 . . 5 5 5 5 5 5 5 . . 
            . . . 5 5 . . . 5 5 5 5 5 5 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . . . . . 5 5 5 . . 
            . . . 5 5 . . . 5 5 5 5 5 5 . . 
            . . 5 5 5 5 . . 5 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p3 == 20) {
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . 5 5 5 5 5 . . . . 5 5 5 5 . . 
            5 5 5 5 5 5 5 . . 5 5 5 5 5 5 . 
            5 5 . . . 5 5 . 5 5 5 . . 5 5 5 
            5 5 . . . 5 5 . 5 5 . . . . 5 5 
            . . . . . 5 5 . 5 5 . . . . 5 5 
            . . . . 5 5 5 . 5 5 . . . . 5 5 
            . . . 5 5 5 . . 5 5 . . . . 5 5 
            . . 5 5 5 . . . 5 5 . . . . 5 5 
            . 5 5 5 . . . . 5 5 5 . . 5 5 5 
            5 5 5 . . . . . . 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 . . . 5 5 5 5 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    mySprite3.setPosition(10, 39)
    if (life_p3 == 3) {
        sprites.destroy(life_sprite_3)
        life_sprite_3 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff555fff555ff...ff555fff555ff...ff555fff555ff.
            ..f55555f55555f...f55555f55555f...f55555f55555f.
            ..f55555551155f...f55555551155f...f55555551155f.
            ..f55555551155f...f55555551155f...f55555551155f.
            ..f55555555555f...f55555555555f...f55555555555f.
            ..ff555555555ff...ff555555555ff...ff555555555ff.
            ...ff5555555ff.....ff5555555ff.....ff5555555ff..
            ....ff55555ff.......ff55555ff.......ff55555ff...
            .....ff555ff.........ff555ff.........ff555ff....
            ......ff5ff...........ff5ff...........ff5ff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p3 == 2) {
        sprites.destroy(life_sprite_3)
        life_sprite_3 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff555fff555ff...ff555fff555ff...ffcccfffcccff.
            ..f55555f55555f...f55555f55555f...fcccccfcccccf.
            ..f55555551155f...f55555551155f...fcccccccccccf.
            ..f55555551155f...f55555551155f...fcccccccccccf.
            ..f55555555555f...f55555555555f...fcccccccccccf.
            ..ff555555555ff...ff555555555ff...ffcccccccccff.
            ...ff5555555ff.....ff5555555ff.....ffcccccccff..
            ....ff55555ff.......ff55555ff.......ffcccccff...
            .....ff555ff.........ff555ff.........ffcccff....
            ......ff5ff...........ff5ff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p3 == 1) {
        sprites.destroy(life_sprite_3)
        life_sprite_3 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff555fff555ff...ffcccfffcccff...ffcccfffcccff.
            ..f55555f55555f...fcccccfcccccf...fcccccfcccccf.
            ..f55555551155f...fcccccccccccf...fcccccccccccf.
            ..f55555551155f...fcccccccccccf...fcccccccccccf.
            ..f55555555555f...fcccccccccccf...fcccccccccccf.
            ..ff555555555ff...ffcccccccccff...ffcccccccccff.
            ...ff5555555ff.....ffcccccccff.....ffcccccccff..
            ....ff55555ff.......ffcccccff.......ffcccccff...
            .....ff555ff.........ffcccff.........ffcccff....
            ......ff5ff...........ffcff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p3 == 0) {
        sprites.destroy(life_sprite_3)
        life_sprite_3 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ffcccfffcccff...ffcccfffcccff...ffcccfffcccff.
            ..fcccccfcccccf...fcccccfcccccf...fcccccfcccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..ffcccccccccff...ffcccccccccff...ffcccccccccff.
            ...ffcccccccff.....ffcccccccff.....ffcccccccff..
            ....ffcccccff.......ffcccccff.......ffcccccff...
            .....ffcccff.........ffcccff.........ffcccff....
            ......ffcff...........ffcff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
        game.splash("Player 3 is dead")
        life_p3 = -1
    }
    life_sprite_3.setPosition(24, 53)
})
forever(function () {
    if (score_p4 == -1) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 0) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 . . 7 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 7 . . 7 7 7 . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 1) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 2) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . . . . . 7 7 7 . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . 7 7 7 . . . . . . . . 
            . . . . 7 7 7 . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 3) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . . . 7 7 7 7 7 . . . . . 
            . . . . . . 7 7 7 7 7 . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 4) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 . . . . . . . . . . 
            . . . . 7 7 . 7 7 . . . . . . . 
            . . . . 7 7 . 7 7 . . . . . . . 
            . . . . 7 7 . 7 7 . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 5) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 . . . . . . . . . . 
            . . . . 7 7 . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 6) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 . . . . . . . . . 
            . . . . 7 7 . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 7) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . . . . . 7 7 7 . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . 7 7 7 . . . . . . . . 
            . . . . 7 7 7 . . . . . . . . . 
            . . . . 7 7 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 8) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 . . . . . 7 7 . . . . 
            . . . 7 7 . . . . . 7 7 . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 9) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 . . . 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . . . . . 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 10) {
        sprites.destroy(mySprite_4)
        mySprite_4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . . 7 7 7 7 . . . . 
            . . 7 7 7 . . 7 7 7 7 7 7 . . . 
            . . . 7 7 . 7 7 7 . . 7 7 7 . . 
            . . . 7 7 . 7 7 . . . . 7 7 . . 
            . . . 7 7 . 7 7 . . . . 7 7 . . 
            . . . 7 7 . 7 7 . . . . 7 7 . . 
            . . . 7 7 . 7 7 . . . . 7 7 . . 
            . . . 7 7 . 7 7 . . . . 7 7 . . 
            . . . 7 7 . 7 7 7 . . 7 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 . . 7 7 7 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 11) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . 7 7 7 . . . 7 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 7 7 . . . . 
            . . . 7 7 7 7 . . 7 7 7 7 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 12) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . . 7 7 7 7 7 . . . 
            . . 7 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . . . . . . 7 7 . . 
            . . . 7 7 . . . . . . 7 7 7 . . 
            . . . 7 7 . . . . . 7 7 7 . . . 
            . . . 7 7 . . . . 7 7 7 . . . . 
            . . . 7 7 . . . 7 7 7 . . . . . 
            . . . 7 7 . . 7 7 7 . . . . . . 
            . . 7 7 7 7 . 7 7 7 7 7 7 7 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 13) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . . 7 7 7 7 7 . . . 
            . . 7 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . . . . . . 7 7 . . 
            . . . 7 7 . . . . 7 7 7 7 7 . . 
            . . . 7 7 . . . . . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 . . 7 7 7 7 7 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 14) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . 7 7 . . . . . . . 
            . . 7 7 7 . . 7 7 . . . . . . . 
            . . . 7 7 . . 7 7 . 7 7 . . . . 
            . . . 7 7 . . 7 7 . 7 7 . . . . 
            . . . 7 7 . . 7 7 . 7 7 . . . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . . . . 7 7 . . . . 
            . . . 7 7 . . . . . 7 7 . . . . 
            . . . 7 7 . . . . . 7 7 . . . . 
            . . 7 7 7 7 . . . . 7 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 15) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . 7 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 . . . . . . . 
            . . . 7 7 . . 7 7 . . . . . . . 
            . . . 7 7 . . 7 7 . . . . . . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . . . . . . 7 7 . . 
            . . . 7 7 . . . . . . . 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 . 7 7 7 7 7 7 7 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 16) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . . 7 7 7 7 7 . . . 
            . . 7 7 7 . . 7 7 7 7 7 7 . . . 
            . . . 7 7 . . 7 7 7 . . . . . . 
            . . . 7 7 . . 7 7 . . . . . . . 
            . . . 7 7 . . 7 7 7 7 7 7 . . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 . . 7 7 7 7 7 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 17) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . 7 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . . . . . . 7 7 . . 
            . . . 7 7 . . . . . . 7 7 7 . . 
            . . . 7 7 . . . . . 7 7 7 . . . 
            . . . 7 7 . . . . . 7 7 . . . . 
            . . . 7 7 . . . . 7 7 7 . . . . 
            . . . 7 7 . . . 7 7 7 . . . . . 
            . . . 7 7 . . 7 7 7 . . . . . . 
            . . 7 7 7 7 . 7 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 18) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . . 7 7 7 7 7 . . . 
            . . 7 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . . 7 7 7 7 7 . . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 . . 7 7 7 7 7 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 19) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . . 7 7 7 7 7 . . . 
            . . 7 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 . . . 7 7 . . 
            . . . 7 7 . . 7 7 7 7 7 7 7 . . 
            . . . 7 7 . . . 7 7 7 7 7 7 . . 
            . . . 7 7 . . . . . . . 7 7 . . 
            . . . 7 7 . . . . . . 7 7 7 . . 
            . . . 7 7 . . . 7 7 7 7 7 7 . . 
            . . 7 7 7 7 . . 7 7 7 7 7 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    if (score_p4 == 20) {
        sprites.destroy(mySprite4)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . 7 7 7 7 7 . . . . 7 7 7 7 . . 
            7 7 7 7 7 7 7 . . 7 7 7 7 7 7 . 
            7 7 . . . 7 7 . 7 7 7 . . 7 7 7 
            7 7 . . . 7 7 . 7 7 . . . . 7 7 
            . . . . . 7 7 . 7 7 . . . . 7 7 
            . . . . 7 7 7 . 7 7 . . . . 7 7 
            . . . 7 7 7 . . 7 7 . . . . 7 7 
            . . 7 7 7 . . . 7 7 . . . . 7 7 
            . 7 7 7 . . . . 7 7 7 . . 7 7 7 
            7 7 7 . . . . . . 7 7 7 7 7 7 . 
            7 7 7 7 7 7 7 . . . 7 7 7 7 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.nada)
    }
    mySprite_4.setPosition(150, 39)
    if (life_p4 == 3) {
        sprites.destroy(life_sprite_4)
        life_sprite_4 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff777fff777ff...ff777fff777ff...ff777fff777ff.
            ..f77777f77777f...f77777f77777f...f77777f77777f.
            ..f77777771177f...f77777771177f...f77777771177f.
            ..f77777771177f...f77777771177f...f77777771177f.
            ..f77777777777f...f77777777777f...f77777777777f.
            ..ff777777777ff...ff777777777ff...ff777777777ff.
            ...ff7777777ff.....ff7777777ff.....ff7777777ff..
            ....ff77777ff.......ff77777ff.......ff77777ff...
            .....ff777ff.........ff777ff.........ff777ff....
            ......ff7ff...........ff7ff...........ff7ff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p4 == 2) {
        sprites.destroy(life_sprite_4)
        life_sprite_4 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff777fff777ff...ff777fff777ff...ffcccfffcccff.
            ..f77777f77777f...f77777f77777f...fcccccfcccccf.
            ..f77777771177f...f77777771177f...fcccccccccccf.
            ..f77777771177f...f77777771177f...fcccccccccccf.
            ..f77777777777f...f77777777777f...fcccccccccccf.
            ..ff777777777ff...ff777777777ff...ffcccccccccff.
            ...ff7777777ff.....ff7777777ff.....ffcccccccff..
            ....ff77777ff.......ff77777ff.......ffcccccff...
            .....ff777ff.........ff777ff.........ffcccff....
            ......ff7ff...........ff7ff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p4 == 1) {
        sprites.destroy(life_sprite_4)
        life_sprite_4 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ff777fff777ff...ffcccfffcccff...ffcccfffcccff.
            ..f77777f77777f...fcccccfcccccf...fcccccfcccccf.
            ..f77777771177f...fcccccccccccf...fcccccccccccf.
            ..f77777771177f...fcccccccccccf...fcccccccccccf.
            ..f77777777777f...fcccccccccccf...fcccccccccccf.
            ..ff777777777ff...ffcccccccccff...ffcccccccccff.
            ...ff7777777ff.....ffcccccccff.....ffcccccccff..
            ....ff77777ff.......ffcccccff.......ffcccccff...
            .....ff777ff.........ffcccff.........ffcccff....
            ......ff7ff...........ffcff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
    }
    if (life_p4 == 0) {
        sprites.destroy(life_sprite_4)
        life_sprite_4 = sprites.create(img`
            ................................................
            ................................................
            ...fffff.fffff.....fffff.fffff.....fffff.fffff..
            ..ffcccfffcccff...ffcccfffcccff...ffcccfffcccff.
            ..fcccccfcccccf...fcccccfcccccf...fcccccfcccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..fcccccccccccf...fcccccccccccf...fcccccccccccf.
            ..ffcccccccccff...ffcccccccccff...ffcccccccccff.
            ...ffcccccccff.....ffcccccccff.....ffcccccccff..
            ....ffcccccff.......ffcccccff.......ffcccccff...
            .....ffcccff.........ffcccff.........ffcccff....
            ......ffcff...........ffcff...........ffcff.....
            .......fff.............fff.............fff......
            ................................................
            ................................................
            `, SpriteKind.nada)
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
        game.splash("Player 4 is dead")
        life_p4 = -1
    }
    life_sprite_4.setPosition(136, 53)
})
forever(function () {
    if (life_p1 < 0 && ((life_p2 < 0 || life_p2 == 4) && ((life_p3 < 0 || life_p3 == 4) && (life_p4 < 0 || life_p4 == 4)))) {
        music.stopAllSounds()
        pause(100)
        music.setVolume(100)
        music.play(music.createSoundEffect(WaveShape.Noise, 1685, 1, 255, 0, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        pause(1250)
        music.play(music.createSoundEffect(WaveShape.Triangle, 1, 5000, 255, 0, 250, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        pause(250)
        music.play(music.createSoundEffect(WaveShape.Triangle, 1, 5000, 255, 0, 250, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.setVolume(0)
        game.setGameOverMessage(false, "Mission failed")
        game.gameOver(false)
    }
})
forever(function () {
    if (boss_1_killed == 2) {
        game.setGameOverMessage(true, "MISSION COMPLETED")
        game.gameOver(true)
    }
})
