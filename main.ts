controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . b . . . . . . .
        . . . . . . . . 4 b . b b b . .
        . . . . . f c 4 4 4 b 5 5 d b .
        b . . . b d 4 4 4 4 5 5 5 5 b b
        5 b . b 5 5 d d 4 4 5 5 5 5 5 b
        b 5 c b 5 5 5 d 4 4 5 5 5 5 5 c
        . b b b 5 f f b 5 4 5 5 5 5 5 c
        . . . b 5 1 f f 5 5 5 5 5 5 d c
        . . . b 5 d 1 d 5 5 d b 5 d d c
        . . . b b 5 5 5 d b 5 5 b d d c
        . . . . b b 5 5 b 5 5 5 c d d c
        . . . . . b b b b 5 5 d c d d c
        . . . . . . . . d 5 5 c d d b c
        . . . . . . . . d d c d d d c .
        . . . . . . . . d b d d b c . .
        . . . . . . . . b b b c c . . .
    `],
    0,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f f f f f . . .
        . . . . . . . f d d d d f . . .
        . . . . . . . f f f f f f . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, mySprite, 50, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . . c b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . f d 5 5 f 1 d 5 b b . . . . 
        . . c 4 d 5 f f 1 5 5 b . . . . 
        . . 4 4 d d b f d 5 5 b . . . . 
        b 4 4 4 4 4 5 5 5 d b b d d d b 
        . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
        . . b 5 5 5 5 5 d 5 5 5 5 c d b 
        . b 5 5 5 5 5 5 b 5 5 d c d d c 
        . b 5 5 5 5 5 5 5 b c c d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `],
    0,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `],
    0,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . c c b b b . . . . . . . . 
        . . c b d d b d . . . . . . . . 
        . c d d d c d d . . . . . . . . 
        c b d d c 5 5 d . . . . . . . . 
        c d d c d 5 5 b b b b . . . . . 
        c d d c 5 5 5 b 5 5 b b . . . . 
        c d d b 5 5 b d 5 5 5 b b . . . 
        c d d 5 b d 5 5 d 1 d 5 b . . . 
        c d 5 5 5 5 5 5 f f 1 5 b . . . 
        c 5 5 5 5 5 4 5 b f f 5 b b b . 
        c 5 5 5 5 5 4 4 d 5 5 5 b c 5 b 
        b 5 5 5 5 5 4 4 d d 5 5 b . b 5 
        b b 5 5 5 5 4 4 4 4 d b . . . b 
        . b d 5 5 b 4 4 4 c f . . . . . 
        . . b b b . b 4 . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        `],
    0,
    false
    )
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("get the bad 1", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let bad: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
effects.clouds.startScreenEffect()
scene.setBackgroundColor(9)
game.onUpdateInterval(4000, function () {
    bad = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    bad.setPosition(randint(scene.screenWidth(), 10), randint(0, 10))
    bad.follow(mySprite, 80)
})
