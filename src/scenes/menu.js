class TitleScene extends Phaser.Scene {

    constructor() {
        super("title")
    }

    preload() {
        this.load.path = "./assets/"
        this.load.image("halo", "halo ring kakkoi.png")
        this.load.image("title", "title.png")
        this.load.image("mc", "master_chief_halo_infinite scuffed.png")
        
        this.load.audio("xenogenesis", "TheFatRat - Xenogenesis cut.wav", {instances: 2})
    }

    create() {
        window.currentscene = this
        let fullscreenKey = this.input.keyboard.addKey("F")
        fullscreenKey.on("down", function() {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        }, this)
        let delay = 0
        this.cameras.main.fadeIn(1500)
        let halobg = this.add.sprite(300, phaserCfg.height / 2 - 400, "halo")
        // halobg.scaleX = 2.742
        // halobg.scaleY = 2.742
        halobg.scaleX = 5
        halobg.scaleY = 5

        let title = this.add.sprite(phaserCfg.width / 2, -110, "title")

        let mc = this.add.sprite(phaserCfg.width / 2, phaserCfg.height + 300, "mc")
        mc.scaleX = 2

        let menuMusic = this.sound.add("xenogenesis")

        let ellipse1 = this.add.ellipse(327, 527, 200, 150, 0xff8600)
        ellipse1.alpha = 0
        let triagnal1 = this.add.isotriangle(1638, 533, 150, 200, false, 0x27187e, 0x758bfd, 0xaeb8fe)
        triagnal1.alpha = 0
        // let triangle = this.add.polygon(400, 500, [[1,1],[0.5, 2],[1,2],], 0x27187e)

        let play = this.add.text(942, phaserCfg.height + 100, "Play")
        play.setFontFamily("Impact")
        play.setAlign("center")
        play.setFontSize(100)
        play.setOrigin(0.5,0.5)
        play.setInteractive()
        play.on(Phaser.Input.Events.POINTER_OVER, function() {
            play.setColor("red")
        })
        play.on(Phaser.Input.Events.POINTER_OUT, function() {
            play.setColor("white")
        })
        play.on(Phaser.Input.Events.POINTER_DOWN, () => {
            menuMusic.stop()
            this.scene.start("game")
        })

        let credits = this.add.text(942, phaserCfg.height + 200, "Credits")
        credits.setFontFamily("Impact")
        credits.setAlign("center")
        credits.setFontSize(100)
        credits.setOrigin(0.5,0.5)
        
        let quit = this.add.text(942, phaserCfg.height + 300, "Quit")
        quit.setFontFamily("Impact")
        quit.setAlign("center")
        quit.setFontSize(100)
        quit.setOrigin(0.5,0.5)

        menuMusic.addMarker({
            name: "intro skip",
            start: 3.5,
        })
        menuMusic.play({
            volume: 0.1
        })
        menuMusic.on("complete", () => {
            menuMusic.play("intro skip",{
                volume: 0.1,
                loop: true,
            })
        })
        let buttons = this.tweens.chain({
            paused: true,
            tweens: [
                {
                    targets: play,
                    duration: 500,
                    delay: 500,
                    y: 545
                },
                {
                    targets: credits,
                    duration: 500,
                    y: 545 + 100
                },
                {
                    targets: quit,
                    duration: 500,
                    y: 545 + 200
                }
            ]
        })
        let tc4 = this.tweens.add({
                paused: true,
                targets: mc,
                duration: 500,
                y: 1080
            })
        let tc3 = this.tweens.chain({
            paused: true,
            tweens: [
                {
                    targets: ellipse1,
                    alpha: 1,
                    duration: 0
                },
                {
                    targets: ellipse1,
                    duration: 400,
                    repeat: -1,
                    angle: 360,
                }
            ]
        })
        let tc2 = this.tweens.chain({
            paused: true,
            tweens: [
                {
                    targets: triagnal1,
                    alpha: 1,
                    duration: 0
                },
                {
                    targets: triagnal1,
                    duration: 1000,
                    repeat: -1,
                    angle: 360,
                },
            ],
        })
        let tc1 = this.tweens.chain({
            tweens: [
                {
                    targets: halobg,
                    x: phaserCfg.width / 4 * 3,
                    duration: 3000,
                },
                {
                    targets: halobg,
                    x: phaserCfg.width / 2,
                    y: phaserCfg.height / 2,
                    scale: 2.742,
                    duration: 100,
                    delay: 400
                },
                {
                    targets: title,
                    duration: 400,
                    y: 200,
                    onComplete: () => {
                        tc2.resume()
                        tc3.resume()
                        tc4.resume()
                        buttons.resume()
                    }
                },
                {
                    targets: title,
                    duration: 400,
                    repeat: -1,
                    scale: 1.2,
                    yoyo: true,
                },
            ],
        })
    }

    update() {
        
    }

}