namespace SpriteKind {
    export const laNave = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.laNave, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
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
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
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
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
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
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
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
    info.changeScoreBy(2)
    info.changeLifeBy(1)
})
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
let nave: Sprite = null
let projectile2: Sprite = null
let ship: Sprite = null
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
    nave.y = randint(10, 150)
})
game.onUpdateInterval(2000, function () {
    projectile2 = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    projectile2.setKind(SpriteKind.Enemy)
    projectile2.x = randint(10, 150)
})
forever(function () {
    if (info.score() >= 20) {
        game.over(true)
    }
})
