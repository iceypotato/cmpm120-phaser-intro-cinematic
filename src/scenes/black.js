class BlackScene extends Phaser.Scene {
    constructor() {
        super("start")
    }
    preload() {
        this.cameras.main.setBackgroundColor(0)
    }
    create() {
        let click = this.add.text(phaserCfg.width / 2, phaserCfg.height / 2, "Click anywhere to start")
        click.setFontFamily("Comic Sans MS")
        click.setAlign("center")
        click.setFontSize(100)
        click.setOrigin(0.5, 0.5)
        this.input.on(Phaser.Input.Events.POINTER_DOWN, () => {this.scene.start("splash screen")})
        let fullscreenKey = this.input.keyboard.addKey("F")
        fullscreenKey.on("down", function() {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        }, this)
    }
}