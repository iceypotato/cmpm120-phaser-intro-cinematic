class GameScene extends Phaser.Scene {

    constructor() {
        super("game")
    }

    preload() {
        this.load.path = "./assets/"
        this.load.image("allhuds", "all huds.jpg")
        this.load.image("leftmountain", "left mountain.png")
        this.load.image("rightmountain", "right mountain.png")
        this.load.image("middlemountain", "middle mountain.png")

        this.load.audio("celeste", "celeste bside chapter complete.wav")
        this.load.audio("fireaway", "fire again bass boosted.mp3")
    }

    create() {

        let delay = 0

        let celeste = this.sound.add("celeste")
        celeste.setVolume(0.5)

        let fireaway = this.sound.add("fireaway")
        fireaway.setVolume(0.3)

        // this.add.image(phaserCfg.width / 2, phaserCfg.height / 2, "allhuds")
        this.add.sprite(phaserCfg.width / 4, phaserCfg.height / 2, "leftmountain")
        this.add.sprite(phaserCfg.width / 4 * 3, phaserCfg.height / 2, "rightmountain")
        this.add.sprite(phaserCfg.width / 2, phaserCfg.height / 2, "middlemountain")

        let onceuponatime = this.add.text(phaserCfg.width / 2, phaserCfg.height / 4 * 3 + 40, "Once upon a time...")
        onceuponatime.setFontFamily("Century Gothic")
        onceuponatime.setFontSize(48)
        onceuponatime.setAlign("center")
        onceuponatime.setOrigin(0.5, 0.5)

        let youdied = this.add.text(phaserCfg.width / 2, phaserCfg.height / 4 * 3 + 150, "You died and I lived\nthe end\n(died of cringe)")
        youdied.setFontFamily("Comic Sans MS")
        youdied.setFontSize(48)
        youdied.setAlign("center")
        youdied.setOrigin(0.5, 0.5)
        youdied.setAlpha(0)

        // let theend = this.add.text(phaserCfg.width / 2, phaserCfg.height / 4 * 3 + 200, "the end")
        // theend.setFontFamily("Century Gothic")
        // theend.setFontSize(48)
        // theend.setAlign("center")
        // theend.setOrigin(0.5, 0.5)
        // theend.setAlpha(0)

        fireaway.play()

        // Effects that require timing
        // this.tweens.add({
        //     targets: youdied,
        //     alpha: 1,
        //     duration: 500,
        //     delay: delay += 2000
        // })
        this.tweens.add({
            targets: youdied,
            alpha: 1,
            duration: 500,
            delay: delay += 4000,
            onStart: () => fireaway.stop(),
            onComplete: () => {celeste.play()}
        })
    }

}