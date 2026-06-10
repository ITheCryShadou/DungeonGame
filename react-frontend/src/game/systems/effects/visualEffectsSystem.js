import * as Phaser from "phaser";

export function showDamageNumber(scene, enemy, amount, { isCritical = false, isBurn = false } = {}) {
  const value = amount >= 1 ? amount.toFixed(1).replace(".0", "") : amount.toFixed(2);
  const color = isBurn ? "#ff8a3d" : isCritical ? "#ffd36b" : "#f7efff";
  const size = isCritical ? 22 : 16;
  scene.showFloatingText(
    enemy.x + Phaser.Math.Between(-10, 10),
    enemy.y - enemy.displayHeight * 0.36,
    value,
    color,
    size
  );
}

export function showFloatingText(scene, x, y, text, color = "#f7efff", fontSize = 16) {
  const label = scene.add
    .text(x, y, text, {
      fontFamily: "monospace",
      fontSize: `${fontSize}px`,
      color,
      stroke: "#08090e",
      strokeThickness: 4,
    })
    .setOrigin(0.5)
    .setDepth(80);

  scene.tweens.add({
    targets: label,
    y: y - 42,
    alpha: 0,
    scaleX: 1.12,
    scaleY: 1.12,
    duration: 760,
    ease: "Cubic.easeOut",
    onComplete: () => label.destroy(),
  });
}

