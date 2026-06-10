import { BOSS_CARDS, ENEMY_TYPES, GAME_RULES, HEROES, PLAYER_BASE_STATS, TAROT_CARDS } from "./gameBalance";
import tarotDefault from "../../assets/game/tarot-card.png";
import tarotHeart from "../../assets/game/tarot-card-heal.png";
import tarotHell from "../../assets/game/tarot-card-hell.png";
import tarotHellBonus from "../../assets/game/tarot-card-hell-bonus.png";
import tarotSkeleton from "../../assets/game/tarot-card-skeleton.png";
import tarotCursed from "../../assets/game/tarot-card-cursed.png";
import tarotHero from "../../assets/game/tarot-card-hero.png";
import tarotBoss from "../../assets/game/tarot-card-boss.png";
import tarotFrost from "../../assets/game/tarot-card-frost.png";
import tarotFrost1 from "../../assets/game/tarot-card-frost-1.png";
import tarotFrost2 from "../../assets/game/tarot-card-frost-2.png";
import tarotFrost3 from "../../assets/game/tarot-card-frost-3.png";
import tarotSwamp1 from "../../assets/game/tarot-card-swamp-1.png";
import tarotSwamp2 from "../../assets/game/tarot-card-swamp-2.png";
import tarotSwamp3 from "../../assets/game/tarot-card-swamp-3.png";
import tarotHeaven1 from "../../assets/game/tarot-card-heaven-1.png";
import tarotHeaven2 from "../../assets/game/tarot-card-heaven-2.png";
import tarotHeaven3 from "../../assets/game/tarot-card-heaven-3.png";
import tarotAqua1 from "../../assets/game/tarot-card-aqua-1.png";
import tarotAqua2 from "../../assets/game/tarot-card-aqua-2.png";
import tarotAqua3 from "../../assets/game/tarot-card-aqua-3.png";
import noxIcon from "../../assets/game/heroes/nox/Nox-Icon.png";
import noxIdle from "../../assets/game/heroes/nox/Nox-Idle.png";
import noxWalk from "../../assets/game/heroes/nox/Nox-Walk.png";
import noxRun from "../../assets/game/heroes/nox/Nox-Run.png";
import noxDash from "../../assets/game/heroes/nox/Nox-Dash.png";
import noxAttack from "../../assets/game/heroes/nox/Nox-Attack.png";
import noxSkillAttack from "../../assets/game/heroes/nox/Nox-SkillAttack.png";
import noxSuperAttack from "../../assets/game/heroes/nox/Nox-SuperAttack.png";
import noxDamage from "../../assets/game/heroes/nox/Nox-DamageTaken.png";
import noxDeath from "../../assets/game/heroes/nox/Nox-Death.png";
import noxArcaneOrbProjectile from "../../assets/game/heroes/nox/Nox-ArcaneOrbProjectile.png";
import noxCrystalShardProjectile from "../../assets/game/heroes/nox/Nox-CrystalShardProjectile.png";
import noxDashShadowProjectile from "../../assets/game/heroes/nox/Nox-DashShadowProjectile.png";
import noxHitImpactEffect from "../../assets/game/heroes/nox/Nox-HitImpactEffect.png";
import noxLargeMagicWaveProjectile from "../../assets/game/heroes/nox/Nox-LargeMagicWaveProjectile.png";
import noxMagicBoltProjectile from "../../assets/game/heroes/nox/Nox-MagicBoltProjectile.png";
import noxSmallMagicArcProjectile from "../../assets/game/heroes/nox/Nox-SmallMagicArcProjectile.png";
import noxSuperSpellBurstProjectile from "../../assets/game/heroes/nox/Nox-SuperSpellBurstProjectile.png";
import rivenIcon from "../../assets/game/heroes/riven/Riven-Icon.png";
import rivenIdle from "../../assets/game/heroes/riven/Riven-Idle.png";
import rivenWalk from "../../assets/game/heroes/riven/Riven-Walk.png";
import rivenRun from "../../assets/game/heroes/riven/Riven-Run.png";
import rivenDash from "../../assets/game/heroes/riven/Riven-Dash.png";
import rivenAttack from "../../assets/game/heroes/riven/Riven-Attack.png";
import rivenSkill from "../../assets/game/heroes/riven/Riven-Skill.png";
import rivenSuperAttack from "../../assets/game/heroes/riven/Riven-SuperAttack.png";
import rivenDamage from "../../assets/game/heroes/riven/Riven-TakeDamage.png";
import rivenDeath from "../../assets/game/heroes/riven/Riven-Death.png";
import rivenDaggerProjectile from "../../assets/game/heroes/riven/Riven-DaggerProjectile.png";
import rivenDashTrailProjectile from "../../assets/game/heroes/riven/Riven-DashTrailProjectile.png";
import rivenImpactHitEffect from "../../assets/game/heroes/riven/Riven-ImpactHitEffect.png";
import rivenLargeSlashArcProjectile from "../../assets/game/heroes/riven/Riven-LargeSlashArcProjectile.png";
import rivenSkillOrbProjectile from "../../assets/game/heroes/riven/Riven-SkillOrbProjectile.png";
import rivenSmallSlashArcProjectile from "../../assets/game/heroes/riven/Riven-SmallSlashArcProjectile.png";
import rivenSuperAttackBurstProjectile from "../../assets/game/heroes/riven/Riven-SuperAttackBurstProjectile.png";
import skeletonIcon from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Icon.png";
import skeletonIdle from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Idle.png";
import skeletonWalk from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Walk.png";
import skeletonAttack from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Attack.png";
import skeletonCrit from "../../assets/game/enemies/skeleton-common/SkeletonCommon-AttackCrit.png";
import skeletonDamage from "../../assets/game/enemies/skeleton-common/SkeletonCommon-DamageTaken.png";
import skeletonDeath from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Death.png";
import skeletonRevive from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Revive.png";
import guardIcon from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Icon.png";
import guardIdle from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Idle.png";
import guardWalk from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Walk.png";
import guardRun from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Run.png";
import guardAttack from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Attack.png";
import guardClose from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-AttackClose.png";
import guardCrit from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-AttackCrit.png";
import guardDamage from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-DamageTaken.png";
import guardDeath from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Death.png";
import guardRevive from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Revive.png";
import dogIcon from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Icon.png";
import dogIdle from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Idle.png";
import dogRun from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Run.png";
import dogAttack from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Attack.png";
import dogCrit from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-AttackCrit.png";
import dogDamage from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-DamageTaken.png";
import dogDeath from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Death.png";
import dogRevive from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Revive.png";
import dogStrongIcon from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Icon.png";
import dogStrongIdle from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Idle.png";
import dogStrongRun from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Run.png";
import dogStrongAttack from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Attack.png";
import dogStrongCrit from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-AttackCrit.png";
import dogStrongDash from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Dash.png";
import dogStrongDamage from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-DamageTaken.png";
import dogStrongDeath from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Death.png";
import dogStrongRevive from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Revive.png";
import dogStrongProjectile from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-AttackCritProjectile.png";
import skeletonBossIcon from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-Icon.png";
import skeletonBossIdle from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-Idle.png";
import skeletonBossWalk from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-Walk.png";
import skeletonBossAttack from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackClose.png";
import skeletonBossLong from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackLong.png";
import skeletonBossDamage from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-DamageTaken.png";
import skeletonBossDeath from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-Death.png";
import skeletonBossRevive from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-Revive.png";
import skeletonBossProjectile from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackLongProjectile.png";
import impIcon from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-Icon.png";
import impIdle from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-Idle.png";
import impRun from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-Run.png";
import impAttack from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-Attack.png";
import impSuper from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-SuperAttack.png";
import impDamage from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-DamageTaken.png";
import impDeath from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-Death.png";
import killerIcon from "../../assets/game/hell/enemies/HellKiller/HellKiller-Icon.png";
import killerIdle from "../../assets/game/hell/enemies/HellKiller/HellKiller-Idle.png";
import killerWalk from "../../assets/game/hell/enemies/HellKiller/HellKiller-Walk.png";
import killerRun from "../../assets/game/hell/enemies/HellKiller/HellKiller-Run.png";
import killerAttack from "../../assets/game/hell/enemies/HellKiller/HellKiller-Attack.png";
import killerSuper from "../../assets/game/hell/enemies/HellKiller/HellKiller-SuperAttack.png";
import killerDamage from "../../assets/game/hell/enemies/HellKiller/HellKiller-DamageTaken.png";
import killerDeath from "../../assets/game/hell/enemies/HellKiller/HellKiller-Death.png";
import killerProjectile from "../../assets/game/hell/enemies/HellKiller/HellKiller-projectile-Attack.png";
import killerSuperProjectile from "../../assets/game/hell/enemies/HellKiller/HellKiller-projectile-SuperAttack1.png";
import golemIcon from "../../assets/game/hell/enemies/HellGolem/HellGolem-Icon.png";
import golemIdle from "../../assets/game/hell/enemies/HellGolem/HellGolem-Idle.png";
import golemWalk from "../../assets/game/hell/enemies/HellGolem/HellGolem-Walk.png";
import golemRun from "../../assets/game/hell/enemies/HellGolem/HellGolem-Run.png";
import golemAttack from "../../assets/game/hell/enemies/HellGolem/HellGolem-Attack.png";
import golemSuper from "../../assets/game/hell/enemies/HellGolem/HellGolem-SuperAttack.png";
import golemDamage from "../../assets/game/hell/enemies/HellGolem/HellGolem-DamageTaken.png";
import golemDeath from "../../assets/game/hell/enemies/HellGolem/HellGolem-Death.png";
import tankIcon from "../../assets/game/hell/enemies/HellTank/HellTank-Icon.png";
import tankIdle from "../../assets/game/hell/enemies/HellTank/HellTank-Idle.png";
import tankWalk from "../../assets/game/hell/enemies/HellTank/HellTank-Walk.png";
import tankRun from "../../assets/game/hell/enemies/HellTank/HellTank-Run.png";
import tankAttack from "../../assets/game/hell/enemies/HellTank/HellTank-Attack.png";
import tankSuper from "../../assets/game/hell/enemies/HellTank/HellTank-SuperAttack.png";
import tankDamage from "../../assets/game/hell/enemies/HellTank/HellTank-DamageTaken.png";
import tankDeath from "../../assets/game/hell/enemies/HellTank/HellTank-Death.png";
import titanIcon from "../../assets/game/hell/enemies/HellTitan/HellTitan-Icon.png";
import titanIdle from "../../assets/game/hell/enemies/HellTitan/HellTitan-Idle.png";
import titanWalk from "../../assets/game/hell/enemies/HellTitan/HellTitan-Walk.png";
import titanRun from "../../assets/game/hell/enemies/HellTitan/HellTitan-Run.png";
import titanAttack from "../../assets/game/hell/enemies/HellTitan/HellTitan-Attack.png";
import titanSuper from "../../assets/game/hell/enemies/HellTitan/HellTitan-SuperAttack.png";
import titanDamage from "../../assets/game/hell/enemies/HellTitan/HellTitan-DamageTaken.png";
import titanDeath from "../../assets/game/hell/enemies/HellTitan/HellTitan-Death.png";
import infernalIcon from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Icon.png";
import infernalP1Idle from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Idle.png";
import infernalP1Walk from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Walk.png";
import infernalP1Attack from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Attack.png";
import infernalP1Super from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-SuperAttack.png";
import infernalP1Death from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Death.png";
import infernalP2Idle from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Idle.png";
import infernalP2Attack from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Attack.png";
import infernalP2Super from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-SuperAttack.png";
import infernalTornado from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellfireTornado.png";
import infernalSuperTornado from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-SuperHellfireTornado.png";
import frostBladeWarriorIcon from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Icon.png";
import frostBladeWarriorIdle from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Idle.png";
import frostBladeWarriorWalk from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Walk.png";
import frostBladeWarriorAttack from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Attack.png";
import frostBladeWarriorSuper from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-SuperAttack.png";
import frostBladeWarriorDeath from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Death.png";
import frostPriestIcon from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-Icon.png";
import frostPriestIdle from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-Idle.png";
import frostPriestWalk from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-Walk.png";
import frostPriestAttack from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-Attack.png";
import frostPriestSuper from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-SuperAttack.png";
import frostPriestProjectileSpawn from "../../assets/game/icy/Enemy/FrostPriest/FrostPriestProjectile-Spawn.png";
import frostPriestProjectileFly from "../../assets/game/icy/Enemy/FrostPriest/FrostPriestProjectile-Fly.png";
import frostPriestProjectileImpact from "../../assets/game/icy/Enemy/FrostPriest/FrostPriestProjectile-Impact.png";
import frozenKnightIcon from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-Icon.png";
import frozenKnightIdle from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-Idle.png";
import frozenKnightWalk from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-Walk.png";
import frozenKnightAttack from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-Attack.png";
import frozenKnightSuper from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-SuperAttack.png";
import iceAxeTitanIcon from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-Icon.png";
import iceAxeTitanIdle from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-Idle.png";
import iceAxeTitanWalk from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-Walk.png";
import iceAxeTitanRun from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-Run.png";
import iceAxeTitanSuper from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-SuperAttack.png";
import icebladeMasterIcon from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-Icon.png";
import icebladeMasterIdle from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-Idle.png";
import icebladeMasterRun from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-Run.png";
import icebladeMasterAttack from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-Attack.png";
import icebladeMasterSuper from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-SuperAttack.png";
import iceWraithIcon from "../../assets/game/icy/Enemy/IceWraith/IceWraith-Icon.png";
import iceWraithIdle from "../../assets/game/icy/Enemy/IceWraith/IceWraith-Idle.png";
import iceWraithWalk from "../../assets/game/icy/Enemy/IceWraith/IceWraith-Walk.png";
import iceWraithSuper from "../../assets/game/icy/Enemy/IceWraith/IceWraith-SuperAttack.png";
import iceWraithNova from "../../assets/game/icy/Enemy/IceWraith/IceWraithProjectile-Nova.png";
import frostTyrantIcon from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Icon.png";
import frostTyrantIdle from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Idle.png";
import frostTyrantWalk from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Walk.png";
import frostTyrantAttack from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Attack.png";
import frostTyrantRanged from "../../assets/game/icy/Enemy/Boss/FrostTyrant-RangedAttack.png";
import frostTyrantSuper from "../../assets/game/icy/Enemy/Boss/FrostTyrant-SuperAttack.png";
import frostTyrantIceStart from "../../assets/game/icy/Enemy/Boss/FrostTyranthIntoIce-Start.png";
import frostTyrantIceEnd from "../../assets/game/icy/Enemy/Boss/FrostTyranthIntoIce-End.png";
import frostTyrantDeath from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Death.png";
import matriarchSoulIcon from "../../assets/game/icy/Enemy/Boss/FrostTyranthIntoIce-Icon.png";
import matriarchSoulSprite from "../../assets/game/icy/Enemy/Boss/FrostTyrantProjectile-MatriarchSoul.png";
import matriarchSoulAppear from "../../assets/game/icy/Enemy/Boss/MatriarchSoul-Appear.png";
import matriarchSoulDeath from "../../assets/game/icy/Enemy/Boss/MatriarchSoul-Death.png";

function stat(label, value) {
  return { label, value };
}

function enemyStats(enemyId) {
  const enemy = ENEMY_TYPES[enemyId];
  return [
    stat("HP", enemy.health),
    stat("Damage", `${GAME_RULES.enemyHitDamage} heart`),
    stat("Speed", Math.round(enemy.speed)),
    stat("AI", enemy.aiStyle),
    stat("Attack cd", `${enemy.damageCooldown}ms`),
  ];
}

function heroStats(heroId) {
  return [
    stat("HP", `${GAME_RULES.maxHearts} hearts`),
    stat("Damage", PLAYER_BASE_STATS.attackDamage),
    stat("Speed", PLAYER_BASE_STATS.speed),
    stat("Crit", `${Math.round(PLAYER_BASE_STATS.critChance * 100)}%`),
    stat("Attack cd", `${PLAYER_BASE_STATS.attackCooldown}ms`),
    stat("Skill cd", `${PLAYER_BASE_STATS.skillCooldown / 1000}s`),
    stat("Price", `${HEROES[heroId].price} coins`),
  ];
}

const ARCHIVE_ANIMATION_META = {
  nox: {
    Idle: { frames: 9, fps: 6 },
    Walk: { frames: 9, fps: 10 },
    Run: { frames: 9, fps: 13 },
    Dash: { frames: 5, fps: 14 },
    Attack: { frames: 9, fps: 13 },
    "Skill attack": { frames: 8, fps: 12 },
    "Super attack": { frames: 8, fps: 11 },
    "Damage taken": { frames: 4, fps: 10 },
    Death: { frames: 6, fps: 8 },
    "Magic bolt projectile": { frames: 9, fps: 14 },
    "Arcane orb projectile": { frames: 9, fps: 13 },
    "Crystal shard projectile": { frames: 9, fps: 13 },
    "Dash shadow projectile": { frames: 9, fps: 14 },
    "Hit impact effect": { frames: 7, fps: 14 },
    "Large magic wave projectile": { frames: 9, fps: 12 },
    "Small magic arc projectile": { frames: 6, fps: 13 },
    "Super spell burst projectile": { frames: 7, fps: 11 },
  },
  riven: {
    Idle: { frames: 8, fps: 6 },
    Walk: { frames: 9, fps: 10 },
    Run: { frames: 9, fps: 13 },
    Dash: { frames: 6, fps: 15 },
    Attack: { frames: 10, fps: 15 },
    Skill: { frames: 8, fps: 13 },
    "Super attack": { frames: 10, fps: 14 },
    "Damage taken": { frames: 4, fps: 11 },
    Death: { frames: 6, fps: 8 },
    "Dagger projectile": { frames: 9, fps: 14 },
    "Dash trail projectile": { frames: 8, fps: 14 },
    "Hit impact effect": { frames: 6, fps: 15 },
    "Large slash projectile": { frames: 9, fps: 13 },
    "Skill orb projectile": { frames: 8, fps: 13 },
    "Small slash projectile": { frames: 7, fps: 14 },
    "Super burst projectile": { frames: 9, fps: 12 },
  },
  skeleton: {
    Idle: { frames: 4, fps: 5 },
    Walk: { frames: 7, fps: 9 },
    Attack: { frames: 5, fps: 12 },
    "Critical attack": { frames: 5, fps: 12 },
    "Damage taken": { frames: 5, fps: 11 },
    Death: { frames: 7, fps: 9 },
    Revive: { frames: 6, fps: 9 },
  },
  guard: {
    Idle: { frames: 4, fps: 5 },
    Walk: { frames: 4, fps: 8 },
    Run: { frames: 4, fps: 8 },
    Attack: { frames: 5, fps: 12 },
    "Close attack": { frames: 1, fps: 1 },
    "Critical attack": { frames: 5, fps: 12 },
    "Damage taken": { frames: 4, fps: 11 },
    Death: { frames: 7, fps: 9 },
    Revive: { frames: 5, fps: 8 },
  },
  dog: {
    Idle: { frames: 4, fps: 5 },
    Run: { frames: 4, fps: 11 },
    Attack: { frames: 5, fps: 13 },
    "Critical attack": { frames: 5, fps: 13 },
    "Damage taken": { frames: 5, fps: 11 },
    Death: { frames: 5, fps: 9 },
    Revive: { frames: 5, fps: 9 },
  },
  dogStrong: {
    Idle: { frames: 1, fps: 1 },
    Run: { frames: 3, fps: 7 },
    Dash: { frames: 5, fps: 11 },
    Attack: { frames: 5, fps: 13 },
    "Critical attack": { frames: 5, fps: 13 },
    "Damage taken": { frames: 5, fps: 11 },
    Death: { frames: 5, fps: 9 },
    Revive: { frames: 5, fps: 9 },
    Projectile: { frames: 1, fps: 1 },
  },
  boss: {
    Idle: { frames: 4, fps: 5 },
    Walk: { frames: 3, fps: 6 },
    "Close attack": { frames: 1, fps: 1 },
    "Long attack": { frames: 1, fps: 1 },
    "Damage taken": { frames: 5, fps: 10 },
    Death: { frames: 4, fps: 8 },
    Revive: { frames: 5, fps: 7 },
    Projectile: { frames: 1, fps: 1 },
  },
  impLittle: {
    Idle: { frames: 8, fps: 7 },
    Run: { frames: 8, fps: 11 },
    Attack: { frames: 5, fps: 13 },
    "Super attack": { frames: 5, fps: 12 },
    "Damage taken": { frames: 6, fps: 12 },
    Death: { frames: 6, fps: 9 },
  },
  hellKiller: {
    Idle: { frames: 8, fps: 6 },
    Walk: { frames: 8, fps: 9 },
    Run: { frames: 8, fps: 10 },
    Attack: { frames: 8, fps: 12 },
    "Super attack": { frames: 10, fps: 11 },
    "Damage taken": { frames: 6, fps: 11 },
    Death: { frames: 8, fps: 9 },
    Projectile: { frames: 5, fps: 8 },
    "Super projectile": { frames: 5, fps: 8 },
  },
  hellGolem: {
    Idle: { frames: 1, fps: 1 },
    Walk: { frames: 8, fps: 8 },
    Run: { frames: 8, fps: 9 },
    Attack: { frames: 10, fps: 13 },
    "Super attack": { frames: 10, fps: 11 },
    "Damage taken": { frames: 6, fps: 11 },
    Death: { frames: 8, fps: 9 },
  },
  hellTank: {
    Idle: { frames: 8, fps: 5 },
    Walk: { frames: 8, fps: 7 },
    Run: { frames: 8, fps: 8 },
    Attack: { frames: 10, fps: 11 },
    "Super attack": { frames: 10, fps: 10 },
    "Damage taken": { frames: 6, fps: 10 },
    Death: { frames: 6, fps: 8 },
  },
  hellTitan: {
    Idle: { frames: 8, fps: 5 },
    Walk: { frames: 8, fps: 7 },
    Run: { frames: 8, fps: 8 },
    Attack: { frames: 10, fps: 11 },
    "Super attack": { frames: 10, fps: 9 },
    "Damage taken": { frames: 6, fps: 10 },
    Death: { frames: 8, fps: 8 },
  },
  infernalBoss: {
    "Phase 1 idle": { frames: 8, fps: 6 },
    "Phase 1 walk": { frames: 9, fps: 8 },
    "Phase 1 attack": { frames: 11, fps: 12 },
    "Phase 1 super": { frames: 11, fps: 10 },
    "Phase 1 death": { frames: 8, fps: 8 },
    "Phase 2 idle": { frames: 8, fps: 6 },
    "Phase 2 attack": { frames: 11, fps: 13 },
    "Phase 2 super": { frames: 11, fps: 11 },
    Tornado: { frames: 11, fps: 10 },
    "Super tornado": { frames: 11, fps: 9 },
  },
  frostBladeWarrior: {
    Idle: { frames: 8, fps: 6 },
    Walk: { frames: 9, fps: 9 },
    Attack: { frames: 8, fps: 12 },
    "Super attack": { frames: 10, fps: 11 },
    Death: { frames: 9, fps: 8 },
  },
  frostPriest: {
    Idle: { frames: 8, fps: 5 },
    Walk: { frames: 9, fps: 7 },
    Attack: { frames: 10, fps: 11 },
    "Super attack": { frames: 10, fps: 10 },
    "Crystal spawn": { frames: 7, fps: 8 },
    "Crystal fly": { frames: 8, fps: 11 },
    "Crystal impact": { frames: 8, fps: 12 },
  },
  frozenKnight: {
    Idle: { frames: 8, fps: 5 },
    Walk: { frames: 9, fps: 8 },
    Attack: { frames: 10, fps: 11 },
    "Super attack": { frames: 10, fps: 10 },
  },
  iceAxeTitan: {
    Idle: { frames: 8, fps: 5 },
    Walk: { frames: 8, fps: 7 },
    Run: { frames: 8, fps: 12 },
    "Super attack": { frames: 10, fps: 10 },
  },
  icebladeMaster: {
    Idle: { frames: 8, fps: 6 },
    Run: { frames: 9, fps: 13 },
    Attack: { frames: 9, fps: 13 },
    "Super attack": { frames: 10, fps: 12 },
  },
  iceWraith: {
    Idle: { frames: 8, fps: 6 },
    Walk: { frames: 8, fps: 8 },
    "Ranged attack": { frames: 10, fps: 10 },
    "Death nova": { frames: 10, fps: 12 },
  },
  frostTyrant: {
    Idle: { frames: 5, fps: 5 },
    Walk: { frames: 6, fps: 7 },
    Attack: { frames: 10, fps: 11 },
    "Ranged attack": { frames: 10, fps: 10 },
    "Super attack": { frames: 10, fps: 9 },
    "Ice shell start": { frames: 7, fps: 8 },
    "Ice shell end": { frames: 7, fps: 8 },
    Death: { frames: 10, fps: 8 },
  },
  matriarchSoul: {
    Idle: { frames: 1, fps: 1 },
    Appear: { frames: 8, fps: 8 },
    Death: { frames: 7, fps: 8 },
  },
};

function addAnimationMeta(entries) {
  return entries.map((entry) => ({
    ...entry,
    animations: entry.animations.map((animation) => ({
      ...animation,
      ...(ARCHIVE_ANIMATION_META[entry.id]?.[animation.label] ?? { frames: 1, fps: 1 }),
    })),
  }));
}

const TAROT_BG_VARIANTS = {
  frost: [tarotFrost1, tarotFrost2, tarotFrost3],
  poison: [tarotSwamp1, tarotSwamp2, tarotSwamp3],
  crit: [tarotHeaven1, tarotHeaven2, tarotHeaven3],
  blueHeart: [tarotAqua1, tarotAqua2, tarotAqua3],
};

function stableTarotVariant(card, images) {
  const key = card.id ?? card.title ?? "";
  const hash = Array.from(key).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return images[hash % images.length];
}

function tarotBg(card) {
  if (card.theme === "cursed" || card.rarity === "cursed") return tarotCursed;
  if (card.theme === "hero" || card.rarity === "hero") return tarotHero;
  if (card.theme === "boss" || card.rarity === "boss") return tarotBoss;
  if (card.build === "poison") return stableTarotVariant(card, TAROT_BG_VARIANTS.poison);
  if (card.build === "crit") return stableTarotVariant(card, TAROT_BG_VARIANTS.crit);
  if (card.build === "ice" || card.theme === "frost") return stableTarotVariant(card, TAROT_BG_VARIANTS.frost);
  if (card.build === "blueHeart") return stableTarotVariant(card, TAROT_BG_VARIANTS.blueHeart);
  if (card.theme === "heart") return tarotHeart;
  if (card.theme === "hell") return tarotHell;
  if (card.theme === "hellBonus") return tarotHellBonus;
  if (card.theme === "skeleton") return tarotSkeleton;
  if (card.theme === "frost") return tarotFrost;
  return tarotDefault;
}

function tarotType(card) {
  if (card.rarity === "boss") return "Boss Card";
  if (card.rarity === "hero") return "Hero Card";
  if (card.rarity === "cursed") return "Cursed Tarot";
  if (card.build === "ice") return "Ice Tarot";
  if (card.build === "fire") return "Fire Tarot";
  if (card.build === "blueHeart") return "Blue Heart Tarot";
  if (card.build === "crit") return "Crit Tarot";
  if (card.build === "poison") return "Poison Tarot";
  return "Tarot";
}

export const ARCHIVE_TAROT = [...TAROT_CARDS, ...BOSS_CARDS].map((card) => ({
  id: card.id,
  name: card.title,
  icon: tarotBg(card),
  type: tarotType(card),
  description: card.description,
  rarity: card.rarity ?? "common",
  stats: [
    { label: "Rarity", value: card.rarity ?? "common" },
    { label: "Build", value: card.build ?? card.theme ?? "neutral" },
    { label: "Background", value: card.theme ?? "default" },
  ],
  animations: [
    { label: "Card background", image: tarotBg(card), frames: 1, fps: 1 },
  ],
  attacks: [
    card.description,
    ...(card.levels ?? []).map((level, index) => `${level.title ?? `${card.title} ${index + 1}`}: ${level.description}`),
  ],
}));

export const ARCHIVE_HEROES = addAnimationMeta([
  {
    id: "nox",
    name: "Nox",
    icon: noxIcon,
    type: "Hero",
    description: "Remodeled void mage. Nox fights with precise magic strikes, an air strike skill, and an optional shop upgrade that unlocks a stronger projectile pattern.",
    stats: heroStats("nox"),
    animations: [
      { label: "Idle", image: noxIdle },
      { label: "Walk", image: noxWalk },
      { label: "Run", image: noxRun },
      { label: "Dash", image: noxDash },
      { label: "Attack", image: noxAttack },
      { label: "Skill attack", image: noxSkillAttack },
      { label: "Super attack", image: noxSuperAttack },
      { label: "Damage taken", image: noxDamage },
      { label: "Death", image: noxDeath },
      { label: "Magic bolt projectile", image: noxMagicBoltProjectile },
      { label: "Arcane orb projectile", image: noxArcaneOrbProjectile },
      { label: "Crystal shard projectile", image: noxCrystalShardProjectile },
      { label: "Dash shadow projectile", image: noxDashShadowProjectile },
      { label: "Hit impact effect", image: noxHitImpactEffect },
      { label: "Large magic wave projectile", image: noxLargeMagicWaveProjectile },
      { label: "Small magic arc projectile", image: noxSmallMagicArcProjectile },
      { label: "Super spell burst projectile", image: noxSuperSpellBurstProjectile },
    ],
    attacks: [
      "LMB: close magic strike.",
      "E: Skill Attack sends a large magic wave forward and damages enemies around the impact.",
      "Shop upgrade: Void Barrage adds animated Nox projectiles to LMB, every third shot adds an arcane orb, and E fires extra crystal shards.",
    ],
  },
  {
    id: "riven",
    name: "Riven",
    icon: rivenIcon,
    type: "Hero",
    description: "Remodeled blade fighter with fast slash chains, dagger projectiles, animated hit impacts, and a stronger awakened skill from the traveler.",
    stats: heroStats("riven"),
    animations: [
      { label: "Idle", image: rivenIdle },
      { label: "Walk", image: rivenWalk },
      { label: "Run", image: rivenRun },
      { label: "Dash", image: rivenDash },
      { label: "Attack", image: rivenAttack },
      { label: "Skill", image: rivenSkill },
      { label: "Super attack", image: rivenSuperAttack },
      { label: "Damage taken", image: rivenDamage },
      { label: "Death", image: rivenDeath },
      { label: "Dagger projectile", image: rivenDaggerProjectile },
      { label: "Dash trail projectile", image: rivenDashTrailProjectile },
      { label: "Hit impact effect", image: rivenImpactHitEffect },
      { label: "Large slash projectile", image: rivenLargeSlashArcProjectile },
      { label: "Skill orb projectile", image: rivenSkillOrbProjectile },
      { label: "Small slash projectile", image: rivenSmallSlashArcProjectile },
      { label: "Super burst projectile", image: rivenSuperAttackBurstProjectile },
    ],
    attacks: [
      "LMB: animated melee slash with a hit impact effect.",
      "Projectile upgrade: dagger projectiles and every third attack sends a larger blade arc.",
      "E: forward slash and skill orb.",
      "Shop upgrade: Ember Blade awakens Super Attack, adds burst visuals, faster projectiles, and extra dagger follow-ups.",
    ],
  },
]);

export const ARCHIVE_ENEMIES = addAnimationMeta([
  {
    id: "skeleton",
    name: "Common Skeleton",
    icon: skeletonIcon,
    type: "Enemy",
    description: "Basic crypt fighter. It can revive once if the revive roll succeeds, so finishing a room can be less simple than it first looks.",
    stats: enemyStats("skeleton"),
    animations: [
      { label: "Idle", image: skeletonIdle },
      { label: "Walk", image: skeletonWalk },
      { label: "Attack", image: skeletonAttack },
      { label: "Critical attack", image: skeletonCrit },
      { label: "Damage taken", image: skeletonDamage },
      { label: "Death", image: skeletonDeath },
      { label: "Revive", image: skeletonRevive },
    ],
    attacks: ["Melee slash.", "Can retreat at low HP.", "Can revive with 50% HP."],
  },
  {
    id: "guard",
    name: "Strong Skeleton",
    icon: guardIcon,
    type: "Enemy",
    description: "A heavier skeleton guard with more health and slower, more deliberate movement.",
    stats: enemyStats("guard"),
    animations: [
      { label: "Idle", image: guardIdle },
      { label: "Walk", image: guardWalk },
      { label: "Run", image: guardRun },
      { label: "Attack", image: guardAttack },
      { label: "Close attack", image: guardClose },
      { label: "Critical attack", image: guardCrit },
      { label: "Damage taken", image: guardDamage },
      { label: "Death", image: guardDeath },
      { label: "Revive", image: guardRevive },
    ],
    attacks: ["Heavy melee slash.", "Defensive guard AI.", "Can revive with 50% HP."],
  },
  {
    id: "dog",
    name: "Skeleton Hound",
    icon: dogIcon,
    type: "Enemy",
    description: "Fast skirmisher that likes to jump in, bite, and escape when low on health.",
    stats: enemyStats("dog"),
    animations: [
      { label: "Idle", image: dogIdle },
      { label: "Run", image: dogRun },
      { label: "Attack", image: dogAttack },
      { label: "Critical attack", image: dogCrit },
      { label: "Damage taken", image: dogDamage },
      { label: "Death", image: dogDeath },
      { label: "Revive", image: dogRevive },
    ],
    attacks: ["Fast bite.", "Skirmisher lunge.", "Can revive with 50% HP."],
  },
  {
    id: "dogStrong",
    name: "Strong Skeleton Hound",
    icon: dogStrongIcon,
    type: "Enemy",
    description: "A stronger hound variant with sharper lunges and a dangerous critical projectile asset.",
    stats: enemyStats("dogStrong"),
    animations: [
      { label: "Idle", image: dogStrongIdle },
      { label: "Run", image: dogStrongRun },
      { label: "Dash", image: dogStrongDash },
      { label: "Attack", image: dogStrongAttack },
      { label: "Critical attack", image: dogStrongCrit },
      { label: "Damage taken", image: dogStrongDamage },
      { label: "Death", image: dogStrongDeath },
      { label: "Revive", image: dogStrongRevive },
      { label: "Projectile", image: dogStrongProjectile },
    ],
    attacks: ["Fast bite.", "Dash lunge.", "Can revive with 50% HP."],
  },
  {
    id: "boss",
    name: "Skeleton Boss",
    icon: skeletonBossIcon,
    type: "Boss",
    description: "Crypt boss. After its first defeat it revives at 30% HP and summons skeleton support before the second phase of the fight continues.",
    stats: enemyStats("boss"),
    animations: [
      { label: "Idle", image: skeletonBossIdle },
      { label: "Walk", image: skeletonBossWalk },
      { label: "Close attack", image: skeletonBossAttack },
      { label: "Long attack", image: skeletonBossLong },
      { label: "Damage taken", image: skeletonBossDamage },
      { label: "Death", image: skeletonBossDeath },
      { label: "Revive", image: skeletonBossRevive },
      { label: "Projectile", image: skeletonBossProjectile },
    ],
    attacks: ["Close scythe attack.", "Ranged projectile attack.", "Revive summons 2-4 skeletons and up to 1 strong skeleton."],
  },
  {
    id: "impLittle",
    name: "Little Imp",
    icon: impIcon,
    type: "Enemy",
    description: "Small hell enemy built around speed. It is fragile, but it can quickly punish slow movement.",
    stats: enemyStats("impLittle"),
    animations: [
      { label: "Idle", image: impIdle },
      { label: "Run", image: impRun },
      { label: "Attack", image: impAttack },
      { label: "Super attack", image: impSuper },
      { label: "Damage taken", image: impDamage },
      { label: "Death", image: impDeath },
    ],
    attacks: ["Quick melee hit.", "Super attack burst."],
  },
  {
    id: "hellKiller",
    name: "Hell Killer",
    icon: killerIcon,
    type: "Enemy",
    description: "Ranged hell enemy. It tries to keep distance and uses projectile pressure to make the room harder to cross.",
    stats: enemyStats("hellKiller"),
    animations: [
      { label: "Idle", image: killerIdle },
      { label: "Walk", image: killerWalk },
      { label: "Run", image: killerRun },
      { label: "Attack", image: killerAttack },
      { label: "Super attack", image: killerSuper },
      { label: "Damage taken", image: killerDamage },
      { label: "Death", image: killerDeath },
      { label: "Projectile", image: killerProjectile },
      { label: "Super projectile", image: killerSuperProjectile },
    ],
    attacks: ["Ranged projectile.", "Super projectile burst.", "Retreats when pressured."],
  },
  {
    id: "hellGolem",
    name: "Hell Golem",
    icon: golemIcon,
    type: "Enemy",
    description: "Tough melee enemy with slow movement and a heavier super attack.",
    stats: enemyStats("hellGolem"),
    animations: [
      { label: "Idle", image: golemIdle },
      { label: "Walk", image: golemWalk },
      { label: "Run", image: golemRun },
      { label: "Attack", image: golemAttack },
      { label: "Super attack", image: golemSuper },
      { label: "Damage taken", image: golemDamage },
      { label: "Death", image: golemDeath },
    ],
    attacks: ["Heavy melee hit.", "Super slam attack."],
  },
  {
    id: "hellTank",
    name: "Hell Tank",
    icon: tankIcon,
    type: "Enemy",
    description: "Slow and sturdy enemy designed to block space while faster hell enemies pressure the player.",
    stats: enemyStats("hellTank"),
    animations: [
      { label: "Idle", image: tankIdle },
      { label: "Walk", image: tankWalk },
      { label: "Run", image: tankRun },
      { label: "Attack", image: tankAttack },
      { label: "Super attack", image: tankSuper },
      { label: "Damage taken", image: tankDamage },
      { label: "Death", image: tankDeath },
    ],
    attacks: ["Close hit.", "Super heavy attack."],
  },
  {
    id: "hellTitan",
    name: "Hell Titan",
    icon: titanIcon,
    type: "Enemy",
    description: "Elite hell enemy with high HP. It is slower than small enemies, but much harder to remove from the arena.",
    stats: enemyStats("hellTitan"),
    animations: [
      { label: "Idle", image: titanIdle },
      { label: "Walk", image: titanWalk },
      { label: "Run", image: titanRun },
      { label: "Attack", image: titanAttack },
      { label: "Super attack", image: titanSuper },
      { label: "Damage taken", image: titanDamage },
      { label: "Death", image: titanDeath },
    ],
    attacks: ["Elite melee attack.", "Super attack with stronger timing pressure."],
  },
  {
    id: "infernalBoss",
    name: "Infernal Boss",
    icon: infernalIcon,
    type: "Boss",
    description: "Two phase hell boss. At low HP it enters phase 2, heals to 70%, and adds tornado pressure to the fight.",
    stats: enemyStats("infernalBoss"),
    animations: [
      { label: "Phase 1 idle", image: infernalP1Idle },
      { label: "Phase 1 walk", image: infernalP1Walk },
      { label: "Phase 1 attack", image: infernalP1Attack },
      { label: "Phase 1 super", image: infernalP1Super },
      { label: "Phase 1 death", image: infernalP1Death },
      { label: "Phase 2 idle", image: infernalP2Idle },
      { label: "Phase 2 attack", image: infernalP2Attack },
      { label: "Phase 2 super", image: infernalP2Super },
      { label: "Tornado", image: infernalTornado },
      { label: "Super tornado", image: infernalSuperTornado },
    ],
    attacks: [
      "Phase 1: fire orb, lance rain, infernal wave, scythe wave.",
      "Phase 2: faster attacks, chain control, and 1-5 moving tornadoes.",
      "Super tornado attack can spawn two tornadoes at once.",
    ],
  },
  {
    id: "frostBladeWarrior",
    name: "Frost Blade Warrior",
    icon: frostBladeWarriorIcon,
    type: "Enemy",
    description: "Basic Icy Kingdom swordsman. It pressures the player with simple melee movement and occasional heavier swings.",
    stats: enemyStats("frostBladeWarrior"),
    animations: [
      { label: "Idle", image: frostBladeWarriorIdle },
      { label: "Walk", image: frostBladeWarriorWalk },
      { label: "Attack", image: frostBladeWarriorAttack },
      { label: "Super attack", image: frostBladeWarriorSuper },
      { label: "Death", image: frostBladeWarriorDeath },
    ],
    attacks: ["Melee sword attack.", "Occasional super slash."],
  },
  {
    id: "frostPriest",
    name: "Frost Priest",
    icon: frostPriestIcon,
    type: "Enemy",
    description: "Slow winter mage. Every ten seconds she creates two crystals that charge up, then fly at the hero.",
    stats: enemyStats("frostPriest"),
    animations: [
      { label: "Idle", image: frostPriestIdle },
      { label: "Walk", image: frostPriestWalk },
      { label: "Attack", image: frostPriestAttack },
      { label: "Super attack", image: frostPriestSuper },
      { label: "Crystal spawn", image: frostPriestProjectileSpawn },
      { label: "Crystal fly", image: frostPriestProjectileFly },
      { label: "Crystal impact", image: frostPriestProjectileImpact },
    ],
    attacks: ["Two delayed crystal shots.", "Small chance for a larger charged crystal explosion."],
  },
  {
    id: "frozenKnight",
    name: "Frozen Knight",
    icon: frozenKnightIcon,
    type: "Enemy",
    description: "Shielded fighter. Its shield can completely block some direct hero hits.",
    stats: enemyStats("frozenKnight"),
    animations: [
      { label: "Idle", image: frozenKnightIdle },
      { label: "Walk", image: frozenKnightWalk },
      { label: "Attack", image: frozenKnightAttack },
      { label: "Super attack", image: frozenKnightSuper },
    ],
    attacks: ["Melee attack.", "Shield block chance against normal hits."],
  },
  {
    id: "iceAxeTitan",
    name: "Ice Axe Titan",
    icon: iceAxeTitanIcon,
    type: "Enemy",
    description: "Heavy armored warrior. Roughly once every twenty seconds it can rush forward with a super axe hit.",
    stats: enemyStats("iceAxeTitan"),
    animations: [
      { label: "Idle", image: iceAxeTitanIdle },
      { label: "Walk", image: iceAxeTitanWalk },
      { label: "Run", image: iceAxeTitanRun },
      { label: "Super attack", image: iceAxeTitanSuper },
    ],
    attacks: ["Heavy melee hit.", "Cooldown-gated rush super attack."],
  },
  {
    id: "icebladeMaster",
    name: "Iceblade Master",
    icon: icebladeMasterIcon,
    type: "Enemy",
    description: "Fast dagger hunter. It mostly runs and alternates normal and super attacks at close range.",
    stats: enemyStats("icebladeMaster"),
    animations: [
      { label: "Idle", image: icebladeMasterIdle },
      { label: "Run", image: icebladeMasterRun },
      { label: "Attack", image: icebladeMasterAttack },
      { label: "Super attack", image: icebladeMasterSuper },
    ],
    attacks: ["Fast melee attack.", "Alternating super attack."],
  },
  {
    id: "iceWraith",
    name: "Ice Wraith",
    icon: iceWraithIcon,
    type: "Enemy",
    description: "Ancient winter spirit. It can teleport away from the hero and fire a ranged shot; on death it releases a nova.",
    stats: enemyStats("iceWraith"),
    animations: [
      { label: "Idle", image: iceWraithIdle },
      { label: "Walk", image: iceWraithWalk },
      { label: "Ranged attack", image: iceWraithSuper },
      { label: "Death nova", image: iceWraithNova },
    ],
    attacks: ["Teleport reposition.", "Ranged charge shot.", "Death nova hazard."],
  },
  {
    id: "frostTyrant",
    name: "Frost Tyrant",
    icon: frostTyrantIcon,
    type: "Boss",
    description: "Icy Kingdom boss. Under 30% HP it locks itself inside an ice shell and becomes immune until the Matriarch Soul is defeated.",
    stats: enemyStats("frostTyrant"),
    animations: [
      { label: "Idle", image: frostTyrantIdle },
      { label: "Walk", image: frostTyrantWalk },
      { label: "Attack", image: frostTyrantAttack },
      { label: "Ranged attack", image: frostTyrantRanged },
      { label: "Super attack", image: frostTyrantSuper },
      { label: "Ice shell start", image: frostTyrantIceStart },
      { label: "Ice shell end", image: frostTyrantIceEnd },
      { label: "Death", image: frostTyrantDeath },
    ],
    attacks: ["Close attacks and super attacks.", "Ice Lance ranged shots.", "Frost Orb extra attack.", "Ice shell phase summons Matriarch Soul."],
  },
  {
    id: "matriarchSoul",
    name: "Matriarch Soul",
    icon: matriarchSoulIcon,
    type: "Boss Helper",
    description: "Summoned during Frost Tyrant's ice shell phase. It has 25 HP and must be destroyed to continue the boss fight.",
    stats: enemyStats("matriarchSoul"),
    animations: [
      { label: "Idle", image: matriarchSoulSprite },
      { label: "Appear", image: matriarchSoulAppear },
      { label: "Death", image: matriarchSoulDeath },
    ],
    attacks: ["Clockwise shard burst with up to 8 shots.", "Blizzard pattern with two shots aimed at the hero."],
  },
]);
