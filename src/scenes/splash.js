class SplashScene extends Phaser.Scene {

    constructor() {
        super("splash screen")
    }

    preload() {
        this.load.path = "./assets/"

        this.load.image("splash", "splash.png")
        this.load.image("poggers", "poggers with glasses.png")

        this.load.audio("woo", "woo.mp3")

        this.cameras.main.setBackgroundColor(0xffffff)
    }

    create() {
        // let graphics = this.add.graphics()
        // graphics.fillStyle(0x00ffff)

        let studio = this.add.sprite(phaserCfg.width / 2 , phaserCfg.height / 2, "splash")
        studio.alpha = 0
        studio.scaleY = 0.5
        studio.scaleX = 0.5

        let poggers = this.add.sprite(phaserCfg.width / 2 + 200, phaserCfg.height / 2, "poggers")
        poggers.alpha = 0
        poggers.scaleX = 0.4
        poggers.scaleY = 0.4

        

        this.cameras.main.fadeIn(1000)

        this.add.tween({
            targets: studio,
            delay: 2000,
            alpha: 1,
        })

        let wooAudio = this.sound.add("woo")
        this.add.tween({
            targets: [wooAudio, poggers],
            volume: 1,
            delay: 4000,
            alpha: 1,
            duration: 0,
            onStart: function() {
                wooAudio.play()
            }
        })

        this.add.tween({
            targets: [studio, poggers],
            alpha: 0,
            delay: 5500,
        })
        this.time.delayedCall(6500, () => this.scene.start("title"))
    }

    update() {

    }

}