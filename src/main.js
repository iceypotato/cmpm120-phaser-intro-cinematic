let phaserCfg = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: [
        // BlackScene,
        // SplashScene,
        // TitleScene,
        GameScene
    ]
}

function main() {
    let phazerGame = new Phaser.Game(phaserCfg)
}

// var config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     physics: {
//       default: "arcade",
//       arcade: {
//         gravity: { y: 200 }
//       }
//     },
//     scene: {
//       preload: preload,
//       create: create
//     },
//     callbacks: {
//       postBoot: function (game) {
//         // In v3.15, you have to override Phaser's default styles
//         game.canvas.style.width = '100%';
//         game.canvas.style.height = '100%';
//       }
//     }
// };

main()