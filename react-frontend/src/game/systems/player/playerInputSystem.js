import * as Phaser from "phaser";

export function setupPlayerInput(scene) {
  scene.keys = scene.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D,
    skill: Phaser.Input.Keyboard.KeyCodes.E,
    roll: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    interact: Phaser.Input.Keyboard.KeyCodes.F,
  });
  scene.input.keyboard.addCapture([Phaser.Input.Keyboard.KeyCodes.ESC]);

  scene.input.on("pointerdown", () => scene.attack());
}

export function handlePlayerActionInput(scene, time) {
  if (Phaser.Input.Keyboard.JustDown(scene.keys.skill)) {
    scene.castSkill(time);
  }

  if (Phaser.Input.Keyboard.JustDown(scene.keys.roll)) {
    scene.roll(time);
  }
}

