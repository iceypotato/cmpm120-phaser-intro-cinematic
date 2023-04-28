class BlackScene extends Phaser.Scene {
    constructor() {
        super("start")
    }
    preload() {
        this.cameras.main.setBackgroundColor(0)
    }
    create() {
        let click = this.add.text(phaserCfg.width / 2 - 500, phaserCfg.height / 2, "Click anywhere to start")
        click.setFontFamily("Comic Sans MS")
        click.setAlign("center")
        click.setFontSize(100)
        this.input.on(Phaser.Input.Events.POINTER_DOWN, () => {this.scene.start("splash screen")})
    }
}