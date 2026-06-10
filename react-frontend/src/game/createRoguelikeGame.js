import * as Phaser from "phaser";
import RoguelikeScene from "./scenes/RoguelikeScene";

export function createRoguelikeGame(parent, callbacks) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: 1024,
    height: 640,
    backgroundColor: "#11131b",
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
      },
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [new RoguelikeScene(callbacks)],
  });
}
