namespace SpriteKind {
    export const laNave = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.laNave, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . c d 2 d c . . . . . 
        . . . b c c d 2 2 2 d c c b . . 
        . . b d d 2 2 2 2 2 2 2 d d b . 
        . . . b c c d 2 2 2 d c c b . . 
        . . . . . . c d 2 d c . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 0, -180)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . c d 2 d c . . . . . 
        . . . b c c d 2 2 2 d c c b . . 
        . . b d d 2 2 2 2 2 2 2 d d b . 
        . . . b c c d 2 2 2 d c c b . . 
        . . . . . . c d 2 d c . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, -180, -180)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . c d 2 d c . . . . . 
        . . . b c c d 2 2 2 d c c b . . 
        . . b d d 2 2 2 2 2 2 2 d d b . 
        . . . b c c d 2 2 2 d c c b . . 
        . . . . . . c d 2 d c . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 0, 180)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . c d 2 d c . . . . . 
        . . . b c c d 2 2 2 d c c b . . 
        . . b d d 2 2 2 2 2 2 2 d d b . 
        . . . b c c d 2 2 2 d c c b . . 
        . . . . . . c d 2 d c . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 180, 180)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . c d 2 d c . . . . . 
        . . . b c c d 2 2 2 d c c b . . 
        . . b d d 2 2 2 2 2 2 2 d d b . 
        . . . b c c d 2 2 2 d c c b . . 
        . . . . . . c d 2 d c . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 180, 0)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . c d 2 d c . . . . . 
        . . . b c c d 2 2 2 d c c b . . 
        . . b d d 2 2 2 2 2 2 2 d d b . 
        . . . b c c d 2 2 2 d c c b . . 
        . . . . . . c d 2 d c . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 180, -180)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . c d 2 d c . . . . . 
        . . . b c c d 2 2 2 d c c b . . 
        . . b d d 2 2 2 2 2 2 2 d d b . 
        . . . b c c d 2 2 2 d c c b . . 
        . . . . . . c d 2 d c . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, -180, 0)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . c d 2 d c . . . . . 
        . . . b c c d 2 2 2 d c c b . . 
        . . b d d 2 2 2 2 2 2 2 d d b . 
        . . . b c c d 2 2 2 d c c b . . 
        . . . . . . c d 2 d c . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, -180, 180)
    projectile2.startEffect(effects.coolRadial, 100)
    pause(10000)
})
function introduction () {
    game.setDialogFrame(img`
        ..aaaaaaaaaaaaaaaaaaaa..
        .ac111111111111111111ca.
        ac1caaaaaaaaaaaaaaaac1ca
        a1caaaaaaaaaaaaaaaaaac1a
        a1ac1111111111111111ca1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1a111111111111111111a1a
        a1ac1111111111111111ca1a
        ac1aaaaaaaaaaaaaaaaaa1ca
        aac111111111111111111caa
        .aaaaaaaaaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaaaaaaaaa..
        `)
    game.setDialogCursor(img`
        ..........................
        ....ffff..........ffff....
        ....f11f..........f11f....
        ....f11f..........f11f....
        ....fffffff....fffffff....
        .......f11f....f11f.......
        .....fff11ffffff11fff.....
        .....f11111111111111f.....
        ...fff11111111111111fff...
        ...f1111ff111111ff1111f...
        .fff1111ff111111ff1111fff.
        .f1111111111111111111111f.
        .f1111111111111111111111f.
        .f1fff11111111111111fff1f.
        .f1f.f1ffffffffffff1f.f1f.
        .f1f.f1f..........f1f.f1f.
        .fff.fffffff..fffffff.fff.
        .......f111f..f111f.......
        .......fffff..fffff.......
        ..........................
        `)
    showIntroduction("Move with W-A-S-D and shot with Spacebar")
    showIntroduction("Press E every 10 seconds for special ability")
    showIntroduction("25 points to WIN")
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 1 c . . . . . . 
        . . . . . . c d 1 d c . . . . . 
        . . . b c c d 1 1 1 d c c b . . 
        . . b d d 1 1 1 1 1 1 1 d d b . 
        . . . b c c d 1 1 1 d c c b . . 
        . . . . . . c d 1 d c . . . . . 
        . . . . . . . c 1 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 0, -140)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 1 c . . . . . . 
        . . . . . . c d 1 d c . . . . . 
        . . . b c c d 1 1 1 d c c b . . 
        . . b d d 1 1 1 1 1 1 1 d d b . 
        . . . b c c d 1 1 1 d c c b . . 
        . . . . . . c d 1 d c . . . . . 
        . . . . . . . c 1 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 0, 140)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 1 c . . . . . . 
        . . . . . . c d 1 d c . . . . . 
        . . . b c c d 1 1 1 d c c b . . 
        . . b d d 1 1 1 1 1 1 1 d d b . 
        . . . b c c d 1 1 1 d c c b . . 
        . . . . . . c d 1 d c . . . . . 
        . . . . . . . c 1 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 140, 0)
    projectile2.startEffect(effects.coolRadial, 100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 1 c . . . . . . 
        . . . . . . c d 1 d c . . . . . 
        . . . b c c d 1 1 1 d c c b . . 
        . . b d d 1 1 1 1 1 1 1 d d b . 
        . . . b c c d 1 1 1 d c c b . . 
        . . . . . . c d 1 d c . . . . . 
        . . . . . . . c 1 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, -140, 0)
    projectile2.startEffect(effects.coolRadial, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.laNave, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
})
function showIntroduction (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(2, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
let nave2: Sprite = null
let nave: Sprite = null
let projectile2: Sprite = null
let ship: Sprite = null
introduction()
let asteroids = [sprites.space.spaceAsteroid0, sprites.space.spaceAsteroid1, sprites.space.spaceAsteroid4, sprites.space.spaceAsteroid3]
ship = sprites.create(img`
    ..........................
    ....ffff..........ffff....
    ....f11f..........f11f....
    ....f11f..........f11f....
    ....fffffff....fffffff....
    .......f11f....f11f.......
    .....fff11ffffff11fff.....
    .....f11111111111111f.....
    ...fff11111111111111fff...
    ...f1111ff111111ff1111f...
    .fff1111ff111111ff1111fff.
    .f1111111111111111111111f.
    .f1111111111111111111111f.
    .f1fff11111111111111fff1f.
    .f1f.f1ffffffffffff1f.f1f.
    .f1f.f1f..........f1f.f1f.
    .fff.fffffff..fffffff.fff.
    .......f111f..f111f.......
    .......fffff..fffff.......
    ..........................
    `, SpriteKind.Player)
ship.setStayInScreen(true)
ship.bottom = 120
controller.moveSprite(ship, 100, 100)
info.setLife(5)
effects.starField.startScreenEffect()
game.onUpdateInterval(5000, function () {
    nave = sprites.createProjectileFromSide(img`
        ...................f.....
        ..................ff.....
        ................2fff.....
        .................fbf.....
        .................fbf.....
        ................ffbf.....
        ................fddf.....
        ................fd6f.....
        ........fffff..ffd6fff..f
        .....ffff999ffff1d666ffff
        ...fffbb9999911116666d11f
        ffffbbb99999111666666dd1f
        ...fffbb99999111166666ddf
        .....ffff999ffff1d666ffff
        ........fffff..ffd6fff..f
        ................fddf.....
        ................fbdf.....
        ................ffbf.....
        .................fbf.....
        .................fbf.....
        ...............2ffff.....
        ..................ff.....
        ...................f.....
        `, -90, 0)
    nave.setKind(SpriteKind.laNave)
    nave.y = randint(40, 140)
})
game.onUpdateInterval(5000, function () {
    nave2 = sprites.createProjectileFromSide(img`
        .....f...................
        .....ff..................
        .....fff7................
        .....fbf.................
        .....fbf.................
        .....fbff................
        .....fddf................
        .....f6df................
        f..fff6dff..fffff........
        ffff666d1ffff999ffff.....
        f11d6666111199999bbfff...
        f1dd66666611199999bbbffff
        fdd66666111199999bbfff...
        ffff666d1ffff999ffff.....
        f..fff6dff..fffff........
        .....fddf................
        .....fdbf................
        .....fbff................
        .....fbf.................
        .....fbf.................
        .....ffff7...............
        .....ff..................
        .....f...................
        `, 90, 0)
    nave2.setKind(SpriteKind.laNave)
    nave2.y = randint(40, 140)
})
game.onUpdateInterval(2000, function () {
    projectile2 = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    projectile2.setKind(SpriteKind.Enemy)
    projectile2.x = randint(10, 150)
})
forever(function () {
    if (info.score() >= 25) {
        game.over(true)
    }
})
