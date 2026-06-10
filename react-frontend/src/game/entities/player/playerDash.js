import * as Phaser from "phaser";

export function roll(scene, time, { noxStrips, rivenStrips } = {}) {
  const challengeBlockReason = scene.getChallengeDashBlockReason(time);
  if (challengeBlockReason) {
    scene.showFloatingText(scene.player.x, scene.player.y - 56, challengeBlockReason, "#ffcf6b", 14);
    return;
  }
  const rollCooldown = scene.getEffectiveRollCooldown();
  if (time - scene.lastRollAt < rollCooldown || scene.isRolling) return;

  scene.lastRollAt = time;
  if (scene.challengeActive && scene.challengeDashRule?.id === "oneCharge") {
    scene.challengeDashCharges = Math.max(0, scene.challengeDashCharges - 1);
  }
  scene.isRolling = true;
  scene.invulnerableUntil = time + scene.stats.rollDuration + 120;
  scene.player.setAlpha(0.55);
  scene.playHeroAnimation("dash", { loop: false, lockMs: scene.stats.rollDuration });
  if (scene.heroId === "riven") {
    const pointer = scene.input.activePointer;
    const angle = Phaser.Math.Angle.Between(scene.player.x, scene.player.y, pointer.worldX, pointer.worldY);
    const trail = scene.createRivenAnimatedEffect({
      prefix: "rivenDashTrail",
      strip: rivenStrips.dashTrail,
      x: scene.player.x - Math.cos(angle) * 18,
      y: scene.player.y - Math.sin(angle) * 18,
      width: 92,
      height: 48,
      rotation: angle,
      depth: 7,
      selfAnimate: true,
    }).setAlpha(0.72);
    scene.tweens.add({
      targets: trail,
      alpha: 0,
      scaleX: 1.22,
      scaleY: 1.12,
      duration: 280,
      onComplete: () => trail.destroy(),
    });
  }
  if (scene.heroId === "nox") {
    const pointer = scene.input.activePointer;
    const angle = Phaser.Math.Angle.Between(scene.player.x, scene.player.y, pointer.worldX, pointer.worldY);
    const shadow = scene.createNoxAnimatedEffect({
      prefix: "noxDashShadow",
      strip: noxStrips.dashShadow,
      x: scene.player.x,
      y: scene.player.y,
      width: 92,
      height: 44,
      rotation: angle,
      depth: 7,
      selfAnimate: true,
    }).setAlpha(0.62);
    scene.tweens.add({
      targets: shadow,
      alpha: 0,
      scaleX: 1.25,
      duration: 260,
      onComplete: () => shadow.destroy(),
    });
  }
  if (scene.stats.infernalDash && scene.tryUseDashCardEffect("infernalDash", time)) {
    scene.createInfernalDashTrail();
  }
  if (scene.stats.crystalStep && scene.tryUseDashCardEffect("crystalStep", time)) {
    scene.createCrystalStepTrail();
  }
  if (scene.stats.frozenAfterimage && scene.tryUseDashCardEffect("frozenAfterimage", time, 10000)) {
    scene.createFrozenAfterimage();
  }

  scene.time.delayedCall(scene.stats.rollDuration, () => {
    scene.isRolling = false;
    scene.player.setAlpha(1);
  });
}

export function getEffectiveRollCooldown(scene) {
  const challengeMultiplier = scene.challengeActive && scene.challengeDashRule?.id === "cooldown2" ? 2 : 1;
  return scene.stats.rollCooldown * challengeMultiplier;
}

export function getChallengeDashBlockReason(scene, time) {
  if (!scene.challengeActive || !scene.challengeDashRule) return "";
  if (scene.challengeDashRule.id === "oneCharge" && scene.challengeDashCharges <= 0) return "NO CHARGE";
  if (scene.challengeDashRule.id === "disabledStart" && time < scene.challengeDashDisabledUntil) return "DASH LOCKED";
  if (scene.challengeDashRule.id === "eliteKill" && !scene.challengeEliteKilled) return "KILL ELITE";
  return "";
}

export function getChallengeDashStatusText(scene, time) {
  if (!scene.challengeDashRule) return "Dash ready";
  if (scene.challengeDashRule.id === "cooldown2") return "Dash cd x2";
  if (scene.challengeDashRule.id === "oneCharge") return `Dash charges ${scene.challengeDashCharges}`;
  if (scene.challengeDashRule.id === "disabledStart") {
    const remaining = Math.max(0, Math.ceil((scene.challengeDashDisabledUntil - time) / 1000));
    return remaining > 0 ? `Dash in ${remaining}s` : "Dash ready";
  }
  if (scene.challengeDashRule.id === "eliteKill") return scene.challengeEliteKilled ? "Dash ready" : "Dash: kill elite";
  return scene.challengeDashRule.label;
}

export function tryUseDashCardEffect(scene, key, time, cooldown = 5000) {
  const readyAt = scene.dashCardCooldowns[key] ?? 0;
  if (time < readyAt) {
    if (time - scene.lastDashCardCooldownNoticeAt > 900) {
      scene.lastDashCardCooldownNoticeAt = time;
      const remaining = Math.ceil((readyAt - time) / 1000);
      scene.showFloatingText(scene.player.x, scene.player.y - 74, `DASH CARD ${remaining}s`, "#ff8a3d", 13);
    }
    return false;
  }
  scene.dashCardCooldowns[key] = time + cooldown;
  return true;
}

export function createInfernalDashTrail(scene) {
  const trail = scene.add
    .ellipse(scene.player.x, scene.player.y, 150, 46, 0xff6a22, 0.36)
    .setDepth(6);
  scene.fireTrailGroup?.add(trail);
  scene.tweens.add({
    targets: trail,
    alpha: 0,
    scaleX: 1.25,
    scaleY: 1.2,
    duration: 2000,
    onComplete: () => trail.destroy(),
  });
  scene.time.addEvent({
    delay: 250,
    repeat: 7,
    callback: () => {
      if (!trail.active) return;
      scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
        if (!enemy?.isAlive || enemy.isReviving) return;
        const distance = Phaser.Math.Distance.Between(trail.x, trail.y, enemy.x, enemy.y);
        if (distance < 96) scene.applyEnemyBurn(enemy);
      });
    },
  });
}

