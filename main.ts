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
    for (let index = 0; index < 3; index++) {
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
        pause(100)
    }
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
    showIntroduction("50 points to WIN")
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
let asteroids2 = [img`
    . . . . . . . . . e e d . . . . 
    . . . . . . d e e e f d e e . . 
    . . . e e d d f e 4 f f f e e . 
    . . e e e f f f e 4 4 f f e e e 
    d e e e f f f f e e 4 4 e d e e 
    e e e b f f f d 4 e e 4 4 4 e e 
    e 4 4 b b d 4 b e e e e e e e e 
    4 f e 4 4 b b 4 e e e e e f f e 
    4 d f e 4 4 e e 4 e 4 e f f f e 
    e 4 d 4 4 e e e e 4 4 f f f d 4 
    . 4 e 4 4 e f f 4 4 b d f f e 4 
    . . e e b 4 f f f 4 b b e e 6 e 
    . . . e b b 4 f f 6 6 4 b 6 e . 
    . . . e e b b b 6 6 4 e e e e . 
    . . . . e e 4 b b e e e . . . . 
    . . . . . e e e e e e . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . e e e e . . 
    . e e e e e . e e e e e f e e . 
    e e 4 e e e e e d f f e f f e e 
    e 4 f 4 4 e e 4 f f e 4 4 f f e 
    e 4 d f 4 4 e 4 e e e 4 4 4 4 e 
    e b e f 4 4 4 4 4 e e e e e e e 
    e b b 4 4 e f d 4 e e e d e e e 
    . e b b 4 b e f 4 4 4 d d e e . 
    . . . . 4 4 b b b 4 4 d 4 e . . 
    . . . . e b e 4 4 e e b . . . . 
    . . . . b b e e 4 b b 4 . . . . 
    . . . . b b 4 b 4 6 4 . . . . . 
    . . . . e b b b 6 6 e . . . . . 
    . . . . . e 4 6 6 b e . . . . . 
    . . . . . . . e e e . . . . . . 
    `, img`
    . . . . . . e e e . . . . . . . 
    . . . . . 4 4 4 e e e . . . . . 
    . . . e 4 e f 4 4 4 4 e . . . . 
    . . e 4 e f f f 4 f f 4 e . . . 
    . e e 4 e e f 4 4 e f f 4 e . . 
    . 4 b 4 4 e 6 4 4 e e f 4 e e e 
    . 4 b b b 6 4 b b 4 4 e 4 f f e 
    . . 4 b b 4 f f b b 4 4 e f f e 
    e . 4 4 4 e e f e b 4 4 e f 4 e 
    e e 4 4 4 e e 4 4 4 b b 4 e 4 e 
    4 e 4 b b 4 4 6 4 b b 6 b b e . 
    b 4 e b b b 6 b e . e e 4 e . . 
    b 4 e e 4 b b 4 e . . . . . . . 
    b b 4 e 4 b 4 4 . . . . . . . . 
    4 b 6 b b 4 e . . . . . . . . . 
    . 4 4 b e . . . . . . . . . . . 
    `, img`
    . . . . . . . e e e 4 e . . . . 
    . . e e b b b 4 e 4 4 4 e . . . 
    . e e 4 b 4 e b 4 4 4 b e e . . 
    . e 4 b e f f f b 4 b b b 4 . . 
    . e 4 e f f f d 4 b b b b b 4 . 
    . e 4 d f f d e 4 b b b b b 4 . 
    e e e 4 e e e e 4 b e f d b e e 
    e e 4 4 4 e e e 4 e f f e b b 4 
    e e 4 b 6 4 e e 4 f f e e b b 4 
    e 4 b e d 6 e e 4 4 4 b b e b e 
    e 4 e f f 4 e e 4 f 4 e e e b . 
    e 4 d f e e b 4 f f e b e e e . 
    . e b e e e e b f e 4 b b 4 e . 
    . . 4 b b b b b b b b b b b e . 
    . . . e e e e b b b b b e e . . 
    . . . . . . . . e b b e . . . . 
    `]
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
game.onUpdateInterval(7000, function () {
    pause(100)
    projectile2 = sprites.createProjectileFromSide(asteroids2[randint(0, asteroids.length - 1)], 90, 90)
    projectile2.setKind(SpriteKind.Enemy)
    projectile2.x = randint(10, 150)
    projectile2 = sprites.createProjectileFromSide(asteroids2[randint(0, asteroids.length - 1)], -90, 90)
    projectile2.setKind(SpriteKind.Enemy)
    projectile2.x = randint(10, 150)
})
game.onUpdateInterval(2000, function () {
    projectile2 = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    projectile2.setKind(SpriteKind.Enemy)
    projectile2.x = randint(10, 150)
})
forever(function () {
    if (info.score() >= 50) {
        game.over(true, effects.slash)
    }
})
