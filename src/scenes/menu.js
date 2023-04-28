class TitleScene extends Phaser.Scene {

    constructor() {
        super("title")
    }

    preload() {
        this.load.path = "./assets/"
        this.load.image("halo", "halo ring kakkoi.png")
        this.load.image("title", "title.png")
        this.load.image("mc", "master_chief_halo_infinite scuffed.png")
        
        this.load.audio("xenogenesis", "TheFatRat - Xenogenesis cut.wav")
    }

    create() {
        
        let delay = 0
        this.cameras.main.fadeIn(1500)
        let halobg = this.add.sprite(300, phaserCfg.height / 2 - 400, "halo")
        // halobg.scaleX = 2.742
        // halobg.scaleY = 2.742
        halobg.scaleX = 5
        halobg.scaleY = 5

        let title = this.add.sprite(phaserCfg.width / 2, -100, "title")

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

        // Sequence stuff
        menuMusic.setVolume(0.1)
        menuMusic.play()
        this.add.tween({
            targets: halobg,
            x: phaserCfg.width / 4 * 3,
            duration: 3000,
        })
        this.add.tween({
            targets: halobg,
            x: phaserCfg.width / 2,
            y: phaserCfg.height / 2,
            scale: 2.742,
            duration: 100,
            delay: delay += 3400
        })
        this.add.tween({
            targets: title,
            duration: 400,
            y: 200,
            delay: delay
        })
        this.add.tween({
            targets: title,
            duration: 400,
            delay: delay,
            repeat: -1,
            scale: 1.2,
            yoyo: true,
        })
        this.time.delayedCall(delay += 200, () => {
            triagnal1.setAlpha(1)
        })
        this.time.delayedCall(delay, () => {
            ellipse1.setAlpha(1)
        })
        this.add.tween({
            targets: triagnal1,
            duration: 1000,
            repeat: -1,
            angle: 360,
        })
        this.add.tween({
            targets: ellipse1,
            duration: 400,
            repeat: -1,
            angle: 360,
        })
        this.add.tween({
            targets: mc,
            delay: 3700,
            duration: 500,
            y: 1080
        })
        this.add.tween({
            targets: [play],
            delay: delay += 1500,
            duration: 500,
            y: 545
        })
        this.add.tween({
            targets: [credits],
            delay: delay += 500,
            duration: 500,
            y: 545 + 100
        })
        this.add.tween({
            targets: [quit],
            delay: delay += 500,
            duration: 500,
            y: 545 + 200
        })

    }

    update() {
        let menuMusic = this.sound.get("xenogenesis")
        if (!menuMusic.isPlaying) {
            menuMusic.play()
            menuMusic.setSeek(3.5)
        }
        // this.input.on(Phaser.Input.Events.POINTER_DOWN, () => {console.log(this.input.x, this.input.y)})
        
    }

}