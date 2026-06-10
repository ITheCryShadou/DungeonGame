import * as Phaser from "phaser";
import noxIdleSheet from "../../assets/game/heroes/nox/Nox-Idle.png";
import noxWalkSheet from "../../assets/game/heroes/nox/Nox-Walk.png";
import noxRunSheet from "../../assets/game/heroes/nox/Nox-Run.png";
import noxDashSheet from "../../assets/game/heroes/nox/Nox-Dash.png";
import noxAttackSheet from "../../assets/game/heroes/nox/Nox-Attack.png";
import noxSkillAttackSheet from "../../assets/game/heroes/nox/Nox-SkillAttack.png";
import noxSuperAttackSheet from "../../assets/game/heroes/nox/Nox-SuperAttack.png";
import noxDamagedSheet from "../../assets/game/heroes/nox/Nox-DamageTaken.png";
import noxDeathSheet from "../../assets/game/heroes/nox/Nox-Death.png";
import noxArcaneOrbProjectile from "../../assets/game/heroes/nox/Nox-ArcaneOrbProjectile.png";
import noxCrystalShardProjectile from "../../assets/game/heroes/nox/Nox-CrystalShardProjectile.png";
import noxDashShadowProjectile from "../../assets/game/heroes/nox/Nox-DashShadowProjectile.png";
import noxHitImpactEffect from "../../assets/game/heroes/nox/Nox-HitImpactEffect.png";
import noxLargeMagicWaveProjectile from "../../assets/game/heroes/nox/Nox-LargeMagicWaveProjectile.png";
import noxMagicBoltProjectile from "../../assets/game/heroes/nox/Nox-MagicBoltProjectile.png";
import noxSmallMagicArcProjectile from "../../assets/game/heroes/nox/Nox-SmallMagicArcProjectile.png";
import noxSuperSpellBurstProjectile from "../../assets/game/heroes/nox/Nox-SuperSpellBurstProjectile.png";
import rivenIdleSheet from "../../assets/game/heroes/riven/Riven-Idle.png";
import rivenWalkSheet from "../../assets/game/heroes/riven/Riven-Walk.png";
import rivenRunSheet from "../../assets/game/heroes/riven/Riven-Run.png";
import rivenDashSheet from "../../assets/game/heroes/riven/Riven-Dash.png";
import rivenAttackSheet from "../../assets/game/heroes/riven/Riven-Attack.png";
import rivenSkillSheet from "../../assets/game/heroes/riven/Riven-Skill.png";
import rivenSuperAttackSheet from "../../assets/game/heroes/riven/Riven-SuperAttack.png";
import rivenDamagedSheet from "../../assets/game/heroes/riven/Riven-TakeDamage.png";
import rivenDeathSheet from "../../assets/game/heroes/riven/Riven-Death.png";
import rivenDaggerProjectile from "../../assets/game/heroes/riven/Riven-DaggerProjectile.png";
import rivenDashTrailProjectile from "../../assets/game/heroes/riven/Riven-DashTrailProjectile.png";
import rivenImpactHitEffect from "../../assets/game/heroes/riven/Riven-ImpactHitEffect.png";
import rivenLargeSlashArcProjectile from "../../assets/game/heroes/riven/Riven-LargeSlashArcProjectile.png";
import rivenSkillOrbProjectile from "../../assets/game/heroes/riven/Riven-SkillOrbProjectile.png";
import rivenSmallSlashArcProjectile from "../../assets/game/heroes/riven/Riven-SmallSlashArcProjectile.png";
import rivenSuperAttackBurstProjectile from "../../assets/game/heroes/riven/Riven-SuperAttackBurstProjectile.png";
import skeletonCommonIdle from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Idle.png";
import skeletonCommonWalk from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Walk.png";
import skeletonCommonAttack from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Attack.png";
import skeletonCommonDamage from "../../assets/game/enemies/skeleton-common/SkeletonCommon-DamageTaken.png";
import skeletonCommonDeath from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Death.png";
import skeletonCommonRevive from "../../assets/game/enemies/skeleton-common/SkeletonCommon-Revive.png";
import skeletonStrongIdle from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Idle.png";
import skeletonStrongWalk from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Walk.png";
import skeletonStrongAttack from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Attack.png";
import skeletonStrongDamage from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-DamageTaken.png";
import skeletonStrongDeath from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Death.png";
import skeletonStrongRevive from "../../assets/game/enemies/skeleton-strong/SkeletonStrong-Revive.png";
import skeletonDogIdle from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Idle.png";
import skeletonDogRun from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Run.png";
import skeletonDogAttack from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Attack.png";
import skeletonDogDamage from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-DamageTaken.png";
import skeletonDogDeath from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Death.png";
import skeletonDogRevive from "../../assets/game/enemies/skeleton-dog-common/SkeletonDog-common-Revive.png";
import skeletonDogStrongIdle from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Idle.png";
import skeletonDogStrongRun from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Run.png";
import skeletonDogStrongAttack from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Attack.png";
import skeletonDogStrongDamage from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-DamageTaken.png";
import skeletonDogStrongDeath from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Death.png";
import skeletonDogStrongRevive from "../../assets/game/enemies/skeleton-dog-strong/SkeletonDog-Strong-Revive.png";
import skeletonBossIdle from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-Idle.png";
import skeletonBossWalk from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-Walk.png";
import skeletonBossAttack from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackClose.png";
import skeletonBossDamage from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-DamageTaken.png";
import skeletonBossDeath from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-Death.png";
import skeletonBossRevive from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-Revive.png";
import skeletonBossProjectile from "../../assets/game/enemies/skeleton-boss/SkeletonBoss-AttackLongProjectile.png";
import hellGolemIdle from "../../assets/game/hell/enemies/HellGolem/HellGolem-Idle.png";
import hellGolemWalk from "../../assets/game/hell/enemies/HellGolem/HellGolem-Walk.png";
import hellGolemAttack from "../../assets/game/hell/enemies/HellGolem/HellGolem-Attack.png";
import hellGolemSuperAttack from "../../assets/game/hell/enemies/HellGolem/HellGolem-SuperAttack.png";
import hellGolemDamage from "../../assets/game/hell/enemies/HellGolem/HellGolem-DamageTaken.png";
import hellGolemDeath from "../../assets/game/hell/enemies/HellGolem/HellGolem-Death.png";
import hellKillerIdle from "../../assets/game/hell/enemies/HellKiller/HellKiller-Idle.png";
import hellKillerWalk from "../../assets/game/hell/enemies/HellKiller/HellKiller-Walk.png";
import hellKillerAttack from "../../assets/game/hell/enemies/HellKiller/HellKiller-Attack.png";
import hellKillerSuperAttack from "../../assets/game/hell/enemies/HellKiller/HellKiller-SuperAttack.png";
import hellKillerDamage from "../../assets/game/hell/enemies/HellKiller/HellKiller-DamageTaken.png";
import hellKillerDeath from "../../assets/game/hell/enemies/HellKiller/HellKiller-Death.png";
import hellKillerProjectile from "../../assets/game/hell/enemies/HellKiller/HellKiller-projectile-Attack.png";
import hellKillerSuperProjectile from "../../assets/game/hell/enemies/HellKiller/HellKiller-projectile-SuperAttack1.png";
import hellTankIdle from "../../assets/game/hell/enemies/HellTank/HellTank-Idle.png";
import hellTankWalk from "../../assets/game/hell/enemies/HellTank/HellTank-Walk.png";
import hellTankAttack from "../../assets/game/hell/enemies/HellTank/HellTank-Attack.png";
import hellTankSuperAttack from "../../assets/game/hell/enemies/HellTank/HellTank-SuperAttack.png";
import hellTankDamage from "../../assets/game/hell/enemies/HellTank/HellTank-DamageTaken.png";
import hellTankDeath from "../../assets/game/hell/enemies/HellTank/HellTank-Death.png";
import hellTitanIdle from "../../assets/game/hell/enemies/HellTitan/HellTitan-Idle.png";
import hellTitanWalk from "../../assets/game/hell/enemies/HellTitan/HellTitan-Walk.png";
import hellTitanAttack from "../../assets/game/hell/enemies/HellTitan/HellTitan-Attack.png";
import hellTitanSuperAttack from "../../assets/game/hell/enemies/HellTitan/HellTitan-SuperAttack.png";
import hellTitanDamage from "../../assets/game/hell/enemies/HellTitan/HellTitan-DamageTaken.png";
import hellTitanDeath from "../../assets/game/hell/enemies/HellTitan/HellTitan-Death.png";
import impLittleIdle from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-Idle.png";
import impLittleWalk from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-Walk.png";
import impLittleAttack from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-Attack.png";
import impLittleSuperAttack from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-SuperAttack.png";
import impLittleDamage from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-DamageTaken.png";
import impLittleDeath from "../../assets/game/hell/enemies/ImpLittle/ImpLittle-Death.png";
import infernalBossP1Idle from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Idle.png";
import infernalBossP1Walk from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Walk.png";
import infernalBossP1Attack from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Attack.png";
import infernalBossP1SuperAttack from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-SuperAttack.png";
import infernalBossP1Damage from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-DamageTaken.png";
import infernalBossP1Death from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-Death.png";
import infernalBossP1FireOrb from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-FireOrbProjectile.png";
import infernalBossP1HellLance from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-HellLanceRainProjectile.png";
import infernalBossP1InfernalWaveStart from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-InfernalWaveProjectile_Start.png";
import infernalBossP1InfernalWaveEnd from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-InfernalWaveProjectile_End.png";
import infernalBossP1ScytheWaveStart from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-ScytheWaveProjectile_Start.png";
import infernalBossP1ScytheWaveEnd from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase1-ScytheWaveProjectile_End.png";
import infernalBossP2Idle from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Idle.png";
import infernalBossP2Walk from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Walk.png";
import infernalBossP2Attack from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Attack.png";
import infernalBossP2SuperAttack from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-SuperAttack.png";
import infernalBossP2ChainPrison from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-ChainPrison.png";
import infernalBossP2ChainSnare from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-ChainSnare.png";
import infernalBossP2Damage from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-DamageTaken.png";
import infernalBossP2Death from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-Death.png";
import infernalBossP2HellfireTornado from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellfireTornado.png";
import infernalBossP2SuperHellfireTornado from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-SuperHellfireTornado.png";
import infernalBossP2TornadoStart from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellFireTornadoProjectile_Start.png";
import infernalBossP2TornadoContinue from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellFireTornadoProjectile_Continue.png";
import infernalBossP2TornadoLoop from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellFireTornadoProjectile_Loop.png";
import infernalBossP2TornadoEnd from "../../assets/game/hell/enemies/InfernalBoss/InfernalBossPhase2-HellFireTornadoProjectile_End.png";
import roomBgCommon from "../../assets/game/room-bg-common.png";
import roomBgBoss from "../../assets/game/room-bg-boss.png";
import roomTunnel from "../../assets/game/room-tunnel.png";
import roomTunnelBoss from "../../assets/game/room-tunnel-boss.png";
import roomTunnelTraveler from "../../assets/game/room-tunnel-traveler.png";
import roomTunnelTravelerBoss from "../../assets/game/room-tunnel-traveler-boss.png";
import hellBgCommon from "../../assets/game/hell-bg-common.png";
import hellBgBoss from "../../assets/game/hell-bg-boss.png";
import hellTunnel from "../../assets/game/hell-tunnel.png";
import hellTunnelBoss from "../../assets/game/hell-tunnel-boss.png";
import travelerRoomBg from "../../assets/game/traveler-room-bg.png";
import awardRoomBg from "../../assets/game/special-rooms/award-room.png";
import challengeRoomBg from "../../assets/game/special-rooms/challenge-room.png";
import cursedRoomBg from "../../assets/game/special-rooms/cursed-room.png";
import restRoomBg from "../../assets/game/special-rooms/rest-room.png";
import awardTunnelBg from "../../assets/game/special-rooms/award-tunnel.png";
import challengeTunnelBg from "../../assets/game/special-rooms/challenge-tunnel.png";
import cursedTunnelBg from "../../assets/game/special-rooms/cursed-tunnel.png";
import restTunnelBg from "../../assets/game/special-rooms/rest-tunnel.png";
import dungeonChestIcon from "../../assets/game/chests/dungeon-chest-icon.png";
import dungeonChestOpenSheet from "../../assets/game/chests/dungeon-chest-open.png";
import dungeonChestOpenedIcon from "../../assets/game/chests/dungeon-chest-opened.png";
import woodenChestIcon from "../../assets/game/chests/wooden-chest-icon.png";
import woodenChestOpenSheet from "../../assets/game/chests/wooden-chest-open.png";
import blueChestIcon from "../../assets/game/chests/blue-chest-icon.png";
import blueChestOpenSheet from "../../assets/game/chests/blue-chest-open.png";
import goldenChestIcon from "../../assets/game/chests/golden-chest-icon.png";
import goldenChestOpenSheet from "../../assets/game/chests/golden-chest-open.png";
import cursedChestIcon from "../../assets/game/chests/cursed-chest-icon.png";
import cursedChestOpenSheet from "../../assets/game/chests/cursed-chest-open.png";
import healPotion from "../../assets/game/heal-potion.png";
import blueHeartHalfIcon from "../../assets/game/heart-blue-half.png";
import greenHeartHalfIcon from "../../assets/game/heart-green-half.png";
import coinIcon from "../../assets/game/coin.png";
import gemIcon from "../../assets/game/gem.png";
import tarotCardImage from "../../assets/game/tarot-card.png";
import travelerCarpet from "../../assets/game/traveler/TravelerCarpet.png";
import travelerNpc1 from "../../assets/game/traveler/Traveler-Npc1.png";
import travelerNpc2 from "../../assets/game/traveler/Traveler-Npc2.png";
import travelerNpc3 from "../../assets/game/traveler/Traveler-Npc3.png";
import travelerNpc4 from "../../assets/game/traveler/Traveler-Npc4.png";
import travelerNpc5 from "../../assets/game/traveler/Traveler-Npc5.png";
import travelerNpc6 from "../../assets/game/traveler/Traveler-Npc6.png";
import obstacleColumnBroken from "../../assets/game/obstacles/column-broken.png";
import obstacleColumnSkull from "../../assets/game/obstacles/column-skull.png";
import obstacleColumn from "../../assets/game/obstacles/column.png";
import obstacleBarrel from "../../assets/game/obstacles/barrel.png";
import obstacleBox from "../../assets/game/obstacles/box.png";
import obstaclePileStones from "../../assets/game/obstacles/pile-stones.png";
import obstacleSpike from "../../assets/game/obstacles/spike.png";
import obstacleTorch from "../../assets/game/obstacles/torch.png";
import hellColumnFlag from "../../assets/game/hell/obstacles/Column1-Flag.png";
import hellColumnSkull from "../../assets/game/hell/obstacles/Column2-Skull.png";
import hellColumnSpikes from "../../assets/game/hell/obstacles/Column3-Spikes.png";
import hellColumnBigSkull from "../../assets/game/hell/obstacles/Column4-BigSkull.png";
import hellFlag from "../../assets/game/hell/obstacles/HellFlag.png";
import hellGates from "../../assets/game/hell/obstacles/HellGates.png";
import hellRock from "../../assets/game/hell/obstacles/HellRock.png";
import hellSpikes from "../../assets/game/hell/obstacles/HellSpikes.png";
import hellTorch from "../../assets/game/hell/obstacles/HellTorch.png";
import hellTable from "../../assets/game/hell/obstacles/Table.png";
import icyBgCommon from "../../assets/game/icy/room-bg/IcyKingdom-common.png";
import icyBgBoss from "../../assets/game/icy/room-bg/IcyKingdom-Boss.png";
import icyTunnelBg from "../../assets/game/icy/room-bg/IcyKingdomTunnelBg.png";
import frostBladeWarriorIdle from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Idle.png";
import frostBladeWarriorWalk from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Walk.png";
import frostBladeWarriorRun from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Run.png";
import frostBladeWarriorAttack from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Attack.png";
import frostBladeWarriorSuperAttack from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-SuperAttack.png";
import frostBladeWarriorDamage from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-DamageTaken.png";
import frostBladeWarriorDeath from "../../assets/game/icy/Enemy/FrostBladeWarrior/FrostBladeWarrior-Death.png";
import frostPriestIdle from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-Idle.png";
import frostPriestWalk from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-Walk.png";
import frostPriestRun from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-Run.png";
import frostPriestAttack from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-Attack.png";
import frostPriestSuperAttack from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-SuperAttack.png";
import frostPriestDamage from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-DamageTaken.png";
import frostPriestDeath from "../../assets/game/icy/Enemy/FrostPriest/FrostPriest-Death.png";
import frostPriestProjectileSpawn from "../../assets/game/icy/Enemy/FrostPriest/FrostPriestProjectile-Spawn.png";
import frostPriestProjectileFly from "../../assets/game/icy/Enemy/FrostPriest/FrostPriestProjectile-Fly.png";
import frostPriestProjectileImpact from "../../assets/game/icy/Enemy/FrostPriest/FrostPriestProjectile-Impact.png";
import frostPriestProjectileChargedShot from "../../assets/game/icy/Enemy/FrostPriest/FrostPriestProjectile-ChargedShot.png";
import frostPriestProjectileChargedExplosion from "../../assets/game/icy/Enemy/FrostPriest/FrostPriestProjectile-ChargedShotExplosion.png";
import frozenKnightIdle from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-Idle.png";
import frozenKnightWalk from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-Walk.png";
import frozenKnightRun from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-Run.png";
import frozenKnightAttack from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-Attack.png";
import frozenKnightSuperAttack from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-SuperAttack.png";
import frozenKnightDamage from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-DamageTaken.png";
import frozenKnightDeath from "../../assets/game/icy/Enemy/FrozenKnight/FrozenKnight-Death.png";
import iceAxeTitanIdle from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-Idle.png";
import iceAxeTitanWalk from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-Walk.png";
import iceAxeTitanRun from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-Run.png";
import iceAxeTitanAttack from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-Attack.png";
import iceAxeTitanSuperAttack from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-SuperAttack.png";
import iceAxeTitanDamage from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-DamageTaken.png";
import iceAxeTitanDeath from "../../assets/game/icy/Enemy/IceAxeTitan/IceAxeTitan-Death.png";
import icebladeMasterIdle from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-Idle.png";
import icebladeMasterWalk from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-Walk.png";
import icebladeMasterRun from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-Run.png";
import icebladeMasterAttack from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-Attack.png";
import icebladeMasterSuperAttack from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-SuperAttack.png";
import icebladeMasterDamage from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-DamageTaken.png";
import icebladeMasterDeath from "../../assets/game/icy/Enemy/IcebladeMaster/IcebladeMaster-Death.png";
import iceWraithIdle from "../../assets/game/icy/Enemy/IceWraith/IceWraith-Idle.png";
import iceWraithWalk from "../../assets/game/icy/Enemy/IceWraith/IceWraith-Walk.png";
import iceWraithRun from "../../assets/game/icy/Enemy/IceWraith/IceWraith-Run.png";
import iceWraithAttack from "../../assets/game/icy/Enemy/IceWraith/IceWraith-Attack.png";
import iceWraithSuperAttack from "../../assets/game/icy/Enemy/IceWraith/IceWraith-SuperAttack.png";
import iceWraithDamage from "../../assets/game/icy/Enemy/IceWraith/IceWraith-DamageTaken.png";
import iceWraithDeath from "../../assets/game/icy/Enemy/IceWraith/IceWraith-Death.png";
import iceWraithProjectileCharge from "../../assets/game/icy/Enemy/IceWraith/IceWraithProjectile-Charge.png";
import iceWraithProjectileFly from "../../assets/game/icy/Enemy/IceWraith/IceWraithProjectile-Fly.png";
import iceWraithProjectileImpact from "../../assets/game/icy/Enemy/IceWraith/IceWraithProjectile-Impact.png";
import iceWraithProjectileNova from "../../assets/game/icy/Enemy/IceWraith/IceWraithProjectile-Nova.png";
import frostTyrantIdle from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Idle.png";
import frostTyrantWalk from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Walk.png";
import frostTyrantRun from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Run.png";
import frostTyrantAttack from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Attack.png";
import frostTyrantHeavyAttack from "../../assets/game/icy/Enemy/Boss/FrostTyrant-HeavyAttack.png";
import frostTyrantRangedAttack from "../../assets/game/icy/Enemy/Boss/FrostTyrant-RangedAttack.png";
import frostTyrantSuperAttack from "../../assets/game/icy/Enemy/Boss/FrostTyrant-SuperAttack.png";
import frostTyrantDamage from "../../assets/game/icy/Enemy/Boss/FrostTyrant-DamageTaken.png";
import frostTyrantDeath from "../../assets/game/icy/Enemy/Boss/FrostTyrant-Death.png";
import frostTyrantIntoIceStart from "../../assets/game/icy/Enemy/Boss/FrostTyranthIntoIce-Start.png";
import frostTyrantIntoIceEnd from "../../assets/game/icy/Enemy/Boss/FrostTyranthIntoIce-End.png";
import frostTyrantIceLance from "../../assets/game/icy/Enemy/Boss/FrostTyrantProjectile-IceLance.png";
import frostTyrantFrostOrb from "../../assets/game/icy/Enemy/Boss/FrostTyrantProjectile-FrostOrb.png";
import matriarchSoul from "../../assets/game/icy/Enemy/Boss/FrostTyrantProjectile-MatriarchSoul.png";
import matriarchSoulAppear from "../../assets/game/icy/Enemy/Boss/MatriarchSoul-Appear.png";
import matriarchSoulDeath from "../../assets/game/icy/Enemy/Boss/MatriarchSoul-Death.png";
import matriarchSoulShardBurst from "../../assets/game/icy/Enemy/Boss/MatriarchSoulProjectile-ShardBurst.png";
import matriarchSoulBlizzardImpact from "../../assets/game/icy/Enemy/Boss/MatriarchSoulProjectile-BlizzardImpact.png";
import fallingIceSpikeIndicator from "../../assets/game/icy/Mechanics/FallingIceSpikeIndikator-Projectile.png";
import fallingIceSpikeTrap from "../../assets/game/icy/Mechanics/FallingIceSpikeTrap-Projectile.png";
import frostSpikeTrap from "../../assets/game/icy/Mechanics/FrostSpikeTrap-Projectile.png";
import icyChainedTotem from "../../assets/game/icy/obstacles/ChainedIceTotem.png";
import icyCrackedObelisk from "../../assets/game/icy/obstacles/CrackedIcyObelisk.png";
import icyFrostedBrazier from "../../assets/game/icy/obstacles/FrostedBrazier.png";
import icyRunePedestal from "../../assets/game/icy/obstacles/FrostRunePedestal.png";
import icySarcophagus from "../../assets/game/icy/obstacles/FrozenSarcophagus.png";
import icyStonePillar from "../../assets/game/icy/obstacles/FrozenStonePillar.png";
import icyFrostStatue from "../../assets/game/icy/obstacles/RuinedFrostStatue.png";
import icySnowCrate from "../../assets/game/icy/obstacles/SnowCoveredCrate.png";
import icySpikedMound from "../../assets/game/icy/obstacles/SpikedIceMound.png";
import {
  GAME_RULES,
  ENEMY_TYPES,
  PLAYER_BASE_STATS,
  TAROT_CARDS,
} from "../config/gameBalance";
import {
  createTravelerShop as createTravelerShopSystem,
  checkTravelerInteraction as checkTravelerInteractionSystem,
  openShop as openShopSystem,
  rollTravelerCards as rollTravelerCardsSystem,
  pickWeightedTravelerCard as pickWeightedTravelerCardSystem,
  closeShop as closeShopSystem,
  buyShopCard as buyShopCardSystem,
} from "../systems/shop/merchantSystem";
import { rerollShop as rerollShopSystem } from "../systems/shop/rerollSystem";
import {
  advanceCampaignStage as advanceCampaignStageSystem,
  createRunSummary as createRunSummarySystem,
  winRun as winRunSystem,
} from "../systems/campaign/campaignSystem";
import {
  getBossCurseMultiplier as getBossCurseMultiplierSystem,
  getCampaignEnemyHealthMultiplier as getCampaignEnemyHealthMultiplierSystem,
  getCampaignEnemySpeedMultiplier as getCampaignEnemySpeedMultiplierSystem,
} from "../systems/campaign/scalingSystem";
import {
  getEnemyDisplaySize as getEnemyDisplaySizeHelper,
  getEnemyName as getEnemyNameHelper,
} from "../entities/enemies/enemyHelpers";
import { createPlayer as createPlayerSystem } from "../entities/player/playerFactory";
import {
  playHeroAnimation as playHeroAnimationSystem,
  registerPlayerStrips as registerPlayerStripsSystem,
} from "../entities/player/playerAnimations";
import { movePlayer as movePlayerSystem } from "../entities/player/playerMovement";
import {
  attack as attackSystem,
  castBurningWave as castBurningWaveSystem,
  fireHeroProjectile as fireHeroProjectilePlayerSystem,
} from "../entities/player/playerAttack";
import {
  castNoxSkill as castNoxSkillSystem,
  castRivenSkill as castRivenSkillSystem,
  castSkill as castSkillSystem,
  createHeroHitImpact as createHeroHitImpactSystem,
  createNoxAnimatedEffect as createNoxAnimatedEffectSystem,
  createNoxHitImpact as createNoxHitImpactSystem,
  createRivenAnimatedEffect as createRivenAnimatedEffectSystem,
  createRivenHitImpact as createRivenHitImpactSystem,
  fireNoxShardProjectile as fireNoxShardProjectileSystem,
  getSkillDamage as getSkillDamageSystem,
} from "../entities/player/playerSkills";
import {
  createInfernalDashTrail as createInfernalDashTrailSystem,
  getEffectiveRollCooldown as getEffectiveRollCooldownSystem,
  roll as rollSystem,
  tryUseDashCardEffect as tryUseDashCardEffectSystem,
} from "../entities/player/playerDash";
import {
  addGreenHearts as addGreenHeartsSystem,
  addTempHearts as addTempHeartsSystem,
  applyPlayerDamage as applyPlayerDamagePlayerSystem,
  decreaseMaxHearts as decreaseMaxHeartsSystem,
  grantSpawnProtection as grantSpawnProtectionSystem,
  healPlayer as healPlayerSystem,
  healToFull as healToFullSystem,
  increaseMaxHearts as increaseMaxHeartsSystem,
  takeEnemyHit as takeEnemyHitPlayerSystem,
  takeProjectileHit as takeProjectileHitPlayerSystem,
} from "../entities/player/playerHealth";
import {
  handlePlayerActionInput as handlePlayerActionInputSystem,
  setupPlayerInput as setupPlayerInputSystem,
} from "../systems/player/playerInputSystem";
import { enableProjectileAttack as enableProjectileAttackSystem } from "../systems/player/playerUpgradeSystem";
import { createEnemy as createEnemyFactory } from "../entities/enemies/enemyFactory";
import {
  getActiveBoss as getActiveBossBossHelper,
  isBossOrBossMinionType,
} from "../entities/bosses/bossHelpers";
import { createBoss as createBossFactory } from "../entities/bosses/bossFactory";
import {
  playBossAnimation as playBossAnimationSystem,
  registerBossStrips as registerBossStripsSystem,
} from "../entities/bosses/bossAnimations";
import {
  createInfernalTornado as createInfernalTornadoBoss,
} from "../entities/bosses/InfernalBoss";
import {
  spawnMatriarchSoul as spawnMatriarchSoulBoss,
  unfreezeFrostTyrant as unfreezeFrostTyrantBoss,
} from "../entities/bosses/FrostTyrant";
import {
  playEnemyAnimation as playEnemyAnimationSystem,
  registerAllEnemyStrips as registerAllEnemyStripsSystem,
  registerEnemyStrips as registerEnemyStripsSystem,
} from "../entities/enemies/enemyAnimations";
import {
  getIcyMovementLoopKeys as getIcyMovementLoopKeysSystem,
  shouldFrozenKnightBlock,
  shouldUseIcyMovementLoop as shouldUseIcyMovementLoopSystem,
} from "../entities/enemies/icyEnemies";
import { createEnemies as createEnemiesSystem } from "../systems/enemies/enemySpawnSystem";
import {
  getEnemySpeed as getEnemySpeedSystem,
  moveEnemies as moveEnemiesSystem,
  moveEnemyByMode as moveEnemyByModeSystem,
  spawnFrostPriestCrystal as spawnFrostPriestCrystalSystem,
  tryFrostPriestCrystals as tryFrostPriestCrystalsSystem,
  tryIceWraithTeleportShot as tryIceWraithTeleportShotSystem,
  updateEnemyAi as updateEnemyAiSystem,
  updateIcyEnemyAi as updateIcyEnemyAiSystem,
} from "../systems/enemies/enemyAiSystem";
import { tryHellKillerProjectile as tryHellKillerProjectileSystem } from "../systems/enemies/enemyAttackSystem";
import {
  createIceWraithNova as createIceWraithNovaSystem,
  defeatEnemy as defeatEnemySystem,
  summonBossSkeletons as summonBossSkeletonsSystem,
  tryReviveEnemy as tryReviveEnemySystem,
} from "../systems/enemies/enemyDeathSystem";
import { updateBossAi as updateBossAiSystem } from "../systems/bosses/bossAiSystem";
import {
  castHellLanceRain as castHellLanceRainSystem,
  castInfernalChain as castInfernalChainSystem,
  castInfernalTornadoAttack as castInfernalTornadoAttackSystem,
  castMatriarchBlizzard as castMatriarchBlizzardSystem,
  castMatriarchShardBurst as castMatriarchShardBurstSystem,
} from "../systems/bosses/bossAttackSystem";
import { tryBossProjectile as tryBossProjectileSystem } from "../systems/bosses/bossSystem";
import {
  tryInfernalBossAttack as tryInfernalBossAttackSystem,
  updateInfernalBossAi as updateInfernalBossAiSystem,
  updateInfernalTornado as updateInfernalTornadoSystem,
} from "../systems/bosses/infernalBossAi";
import {
  tryFrostTyrantAttack as tryFrostTyrantAttackSystem,
  updateFrostTyrantAi as updateFrostTyrantAiSystem,
} from "../systems/bosses/frostTyrantAi";
import { updateMatriarchSoulAi as updateMatriarchSoulAiSystem } from "../systems/bosses/matriarchSoulAi";
import {
  triggerFrostTyrantIce as triggerFrostTyrantIceSystem,
  triggerInfernalPhaseTwo as triggerInfernalPhaseTwoSystem,
  tryTriggerBossPhaseFromDamage as tryTriggerBossPhaseFromDamageSystem,
} from "../systems/bosses/bossPhaseSystem";
import {
  completeChallengeRoom as completeChallengeRoomSystem,
  startChallengeRoom as startChallengeRoomSystem,
  updateChallengeRoom as updateChallengeRoomSystem,
} from "../systems/challenge/challengeSystem";
import {
  getChallengeDashBlockReason as getChallengeDashBlockReasonSystem,
  getChallengeDashStatusText as getChallengeDashStatusTextSystem,
} from "../systems/challenge/challengeModifiers";
import {
  createChallengeSpawnIndicator as createChallengeSpawnIndicatorSystem,
  shouldMakeChallengeEnemyElite as shouldMakeChallengeEnemyEliteSystem,
  spawnChallengeWave as spawnChallengeWaveSystem,
} from "../systems/challenge/challengeWaveSystem";
import {
  getEligibleTarotCards as getEligibleTarotCardsSystem,
  applyChosenCard as applyChosenCardSystem,
} from "../systems/tarot/tarotSystem";
import { applyGenericCardUpgrade as applyGenericCardUpgradeSystem } from "../systems/tarot/tarotEffects";
import {
  getCardMaxLevel as getCardMaxLevelSystem,
  getGenericUpgradeDescription as getGenericUpgradeDescriptionSystem,
  prepareCardForOffer as prepareCardForOfferSystem,
  toRoman as toRomanSystem,
  upgradeRandomCard as upgradeRandomCardSystem,
} from "../systems/tarot/tarotUpgradeSystem";
import {
  applyCardSynergy as applyCardSynergySystem,
  applyMixedIceSynergies as applyMixedIceSynergiesSystem,
} from "../systems/tarot/synergySystem";
import {
  cleanseCurse as cleanseCurseSystem,
  takeBloodPriceReward as takeBloodPriceRewardSystem,
  takeBossHungerReward as takeBossHungerRewardSystem,
  takeCursedRareCard as takeCursedRareCardSystem,
  takeDarkSpeedReward as takeDarkSpeedRewardSystem,
  takeFocusBuildReward as takeFocusBuildRewardSystem,
  takeFragilePowerReward as takeFragilePowerRewardSystem,
  takeMeditateReward as takeMeditateRewardSystem,
  takePoisonGiftReward as takePoisonGiftRewardSystem,
  takeRepairSoulReward as takeRepairSoulRewardSystem,
} from "../systems/tarot/cursedEffects";
import {
  grantBossCard as grantBossCardSystem,
  offerTarotChoice as offerTarotChoiceSystem,
  showCardRewardBanner as showCardRewardBannerSystem,
} from "../systems/tarot/cardRewardSystem";
import {
  getIncomingDamage as getIncomingDamageSystem,
  shouldAvoidDamage,
  shouldTriggerFrozenGuard,
} from "../systems/combat/dodgeSystem";
import {
  applyEnemyBleed as applyEnemyBleedStatus,
  applyEnemyBurn as applyEnemyBurnStatus,
  applyEnemyChill as applyEnemyChillStatus,
  applyEnemyPoison as applyEnemyPoisonStatus,
  applyEnemySlow as applyEnemySlowStatus,
  extendEnemyChill as extendEnemyChillStatus,
  getChillDuration as getChillDurationStatus,
} from "../systems/combat/statusEffectsSystem";
import {
  createEnemyProjectileImpact as createEnemyProjectileImpactSystem,
  fireAnimatedEnemyProjectile as fireAnimatedEnemyProjectileSystem,
  fireBossProjectile as fireBossProjectileSystem,
  fireEnemyProjectile as fireEnemyProjectileSystem,
  updateHeroProjectile as updateHeroProjectileSystem,
  updateProjectiles as updateProjectilesSystem,
} from "../systems/combat/projectileSystem";
import {
  createAshExplosion as createAshExplosionSystem,
  createCrystalStepTrail as createCrystalStepTrailSystem,
  createFrostNova as createFrostNovaSystem,
  createFrozenAfterimage as createFrozenAfterimageSystem,
  createPoisonCloud as createPoisonCloudSystem,
  createShieldEcho as createShieldEchoSystem,
  createSteamBurst as createSteamBurstSystem,
  releaseIceShards as releaseIceShardsSystem,
  spreadBurn as spreadBurnSystem,
  spreadPoison as spreadPoisonSystem,
} from "../systems/effects/combatEffectsSystem";
import {
  showDamageNumber as showDamageNumberSystem,
  showFloatingText as showFloatingTextSystem,
} from "../systems/effects/visualEffectsSystem";
import { createFloorPlan } from "../systems/dungeon/dungeonGenerator";
import {
  applyCursedChestPenalty as applyCursedChestPenaltySystem,
  chooseChestType as chooseChestTypeSystem,
  maybeSpawnChest as maybeSpawnChestSystem,
  openChest as openChestSystem,
} from "../systems/rewards/chestSystem";
import {
  collectPickup as collectPickupSystem,
  createChestLootByType as createChestLootByTypeSystem,
  dropChestLoot as dropChestLootSystem,
  rollCoinAmount as rollCoinAmountSystem,
  spawnCurrency as spawnCurrencySystem,
  spawnGreenHeartPickup as spawnGreenHeartPickupSystem,
  spawnPotion as spawnPotionSystem,
  spawnPreparedTarotPickup as spawnPreparedTarotPickupSystem,
  spawnTarotPickup as spawnTarotPickupSystem,
  spawnTempHeartPickup as spawnTempHeartPickupSystem,
} from "../systems/rewards/lootSystem";
import { getRoomTexture as getRoomTextureSystem, getTunnelTexture as getTunnelTextureSystem } from "../systems/rooms/roomBackgroundSystem";
import {
  createEventChoice as createEventChoiceSystem,
  createEventRoomChoices as createEventRoomChoicesSystem,
  getEventRoomChoices as getEventRoomChoicesSystem,
  resolveEventChoice as resolveEventChoiceSystem,
} from "../systems/rooms/eventRoomSystem";
import {
  addObstacle as addObstacleSystem,
  addWall as addWallSystem,
  clearFloorObjects as clearFloorObjectsSystem,
  drawRoom as drawRoomSystem,
  getCurrentRoomType as getCurrentRoomTypeSystem,
  getRoomTypeAt as getRoomTypeAtSystem,
  isEventRoom as isEventRoomSystem,
  startRoom as startRoomSystem,
} from "../systems/rooms/roomSystem";
import {
  checkPlayerInteractions as checkPlayerInteractionsSystem,
  createExit as createExitSystem,
  isPlayerTouchingExit as isPlayerTouchingExitSystem,
  revealEventExit as revealEventExitSystem,
  tryLeaveFloor as tryLeaveFloorSystem,
} from "../systems/rooms/roomTransitionSystem";
import {
  checkTunnelExit as checkTunnelExitSystem,
  createTunnelPlayer as createTunnelPlayerSystem,
  enterTunnel as enterTunnelSystem,
  finishTunnel as finishTunnelSystem,
  moveTunnelPlayer as moveTunnelPlayerSystem,
  updateTunnel as updateTunnelSystem,
} from "../systems/rooms/tunnelSystem";
import { getSpecialRoomLabel } from "../systems/rooms/specialRoomSystem";
import {
  createIcyRoomTraps as createIcyRoomTrapsSystem,
  updateIcyHazards as updateIcyHazardsSystem,
} from "../systems/traps/trapSystem";
import { spawnFallingIceSpike as spawnFallingIceSpikeSystem } from "../systems/traps/fallingIceSpikeTrap";
import { advanceFrameAnimation } from "../utils/animationHelpers";
import {
  findSafePoint,
  getObjectBounds,
  getWalkableBounds,
  isPointInBounds,
  isPointInsideRect,
  keepInsideBounds,
} from "../utils/collisionHelpers";

const PLAYER_STRIPS = {
  idle: { source: "noxIdleSheet", width: 1009, height: 95, frames: 9, fps: 6 },
  walk: { source: "noxWalkSheet", width: 1045, height: 91, frames: 9, fps: 10 },
  fastWalk: { source: "noxRunSheet", width: 1066, height: 88, frames: 9, fps: 13 },
  dash: { source: "noxDashSheet", width: 711, height: 93, frames: 5, fps: 14 },
  attack: { source: "noxAttackSheet", width: 1151, height: 90, frames: 9, fps: 13 },
  skillAttack: { source: "noxSkillAttackSheet", width: 1025, height: 115, frames: 8, fps: 12 },
  superAttack: { source: "noxSuperAttackSheet", width: 1255, height: 128, frames: 8, fps: 11 },
  damaged: { source: "noxDamagedSheet", width: 496, height: 93, frames: 4, fps: 10 },
  death: { source: "noxDeathSheet", width: 825, height: 93, frames: 6, fps: 8 },
};
const NOX_PROJECTILE_STRIPS = {
  arcaneOrb: { source: "noxArcaneOrbProjectile", width: 1014, height: 78, frames: 9, fps: 13 },
  crystalShard: { source: "noxCrystalShardProjectile", width: 1028, height: 71, frames: 9, fps: 13 },
  dashShadow: { source: "noxDashShadowProjectile", width: 1023, height: 83, frames: 9, fps: 14 },
  hitImpact: { source: "noxHitImpactEffect", width: 814, height: 118, frames: 7, fps: 14 },
  largeWave: { source: "noxLargeMagicWaveProjectile", width: 1116, height: 105, frames: 9, fps: 12 },
  magicBolt: { source: "noxMagicBoltProjectile", width: 1040, height: 70, frames: 9, fps: 14 },
  smallArc: { source: "noxSmallMagicArcProjectile", width: 697, height: 81, frames: 6, fps: 13 },
  superBurst: { source: "noxSuperSpellBurstProjectile", width: 1118, height: 197, frames: 7, fps: 11 },
};
const RIVEN_STRIPS = {
  idle: { source: "rivenIdleSheet", width: 911, height: 105, frames: 8, fps: 6 },
  walk: { source: "rivenWalkSheet", width: 1020, height: 95, frames: 9, fps: 10 },
  fastWalk: { source: "rivenRunSheet", width: 1045, height: 95, frames: 9, fps: 13 },
  dash: { source: "rivenDashSheet", width: 758, height: 100, frames: 6, fps: 15 },
  attack: { source: "rivenAttackSheet", width: 1140, height: 102, frames: 10, fps: 15 },
  skillAttack: { source: "rivenSkillSheet", width: 887, height: 100, frames: 8, fps: 13 },
  superAttack: { source: "rivenSuperAttackSheet", width: 1158, height: 95, frames: 10, fps: 14 },
  damaged: { source: "rivenDamagedSheet", width: 441, height: 100, frames: 4, fps: 11 },
  death: { source: "rivenDeathSheet", width: 703, height: 102, frames: 6, fps: 8 },
};
const RIVEN_PROJECTILE_STRIPS = {
  dagger: { source: "rivenDaggerProjectile", width: 1028, height: 77, frames: 9, fps: 14 },
  dashTrail: { source: "rivenDashTrailProjectile", width: 844, height: 88, frames: 8, fps: 14 },
  hitImpact: { source: "rivenImpactHitEffect", width: 663, height: 112, frames: 6, fps: 15 },
  largeSlash: { source: "rivenLargeSlashArcProjectile", width: 945, height: 116, frames: 9, fps: 13 },
  skillOrb: { source: "rivenSkillOrbProjectile", width: 925, height: 84, frames: 8, fps: 13 },
  smallSlash: { source: "rivenSmallSlashArcProjectile", width: 700, height: 74, frames: 7, fps: 14 },
  superBurst: { source: "rivenSuperAttackBurstProjectile", width: 1134, height: 184, frames: 9, fps: 12 },
};

const ICY_IMAGE_ASSETS = [
  ["icyBgCommon", icyBgCommon],
  ["icyBgBoss", icyBgBoss],
  ["icyTunnelBg", icyTunnelBg],
  ["frostBladeWarriorIdle", frostBladeWarriorIdle],
  ["frostBladeWarriorWalk", frostBladeWarriorWalk],
  ["frostBladeWarriorRun", frostBladeWarriorRun],
  ["frostBladeWarriorAttack", frostBladeWarriorAttack],
  ["frostBladeWarriorSuperAttack", frostBladeWarriorSuperAttack],
  ["frostBladeWarriorDamage", frostBladeWarriorDamage],
  ["frostBladeWarriorDeath", frostBladeWarriorDeath],
  ["frostPriestIdle", frostPriestIdle],
  ["frostPriestWalk", frostPriestWalk],
  ["frostPriestRun", frostPriestRun],
  ["frostPriestAttack", frostPriestAttack],
  ["frostPriestSuperAttack", frostPriestSuperAttack],
  ["frostPriestDamage", frostPriestDamage],
  ["frostPriestDeath", frostPriestDeath],
  ["frostPriestProjectileSpawn", frostPriestProjectileSpawn],
  ["frostPriestProjectileFly", frostPriestProjectileFly],
  ["frostPriestProjectileImpact", frostPriestProjectileImpact],
  ["frostPriestProjectileChargedShot", frostPriestProjectileChargedShot],
  ["frostPriestProjectileChargedExplosion", frostPriestProjectileChargedExplosion],
  ["frozenKnightIdle", frozenKnightIdle],
  ["frozenKnightWalk", frozenKnightWalk],
  ["frozenKnightRun", frozenKnightRun],
  ["frozenKnightAttack", frozenKnightAttack],
  ["frozenKnightSuperAttack", frozenKnightSuperAttack],
  ["frozenKnightDamage", frozenKnightDamage],
  ["frozenKnightDeath", frozenKnightDeath],
  ["iceAxeTitanIdle", iceAxeTitanIdle],
  ["iceAxeTitanWalk", iceAxeTitanWalk],
  ["iceAxeTitanRun", iceAxeTitanRun],
  ["iceAxeTitanAttack", iceAxeTitanAttack],
  ["iceAxeTitanSuperAttack", iceAxeTitanSuperAttack],
  ["iceAxeTitanDamage", iceAxeTitanDamage],
  ["iceAxeTitanDeath", iceAxeTitanDeath],
  ["icebladeMasterIdle", icebladeMasterIdle],
  ["icebladeMasterWalk", icebladeMasterWalk],
  ["icebladeMasterRun", icebladeMasterRun],
  ["icebladeMasterAttack", icebladeMasterAttack],
  ["icebladeMasterSuperAttack", icebladeMasterSuperAttack],
  ["icebladeMasterDamage", icebladeMasterDamage],
  ["icebladeMasterDeath", icebladeMasterDeath],
  ["iceWraithIdle", iceWraithIdle],
  ["iceWraithWalk", iceWraithWalk],
  ["iceWraithRun", iceWraithRun],
  ["iceWraithAttack", iceWraithAttack],
  ["iceWraithSuperAttack", iceWraithSuperAttack],
  ["iceWraithDamage", iceWraithDamage],
  ["iceWraithDeath", iceWraithDeath],
  ["iceWraithProjectileCharge", iceWraithProjectileCharge],
  ["iceWraithProjectileFly", iceWraithProjectileFly],
  ["iceWraithProjectileImpact", iceWraithProjectileImpact],
  ["iceWraithProjectileNova", iceWraithProjectileNova],
  ["frostTyrantIdle", frostTyrantIdle],
  ["frostTyrantWalk", frostTyrantWalk],
  ["frostTyrantRun", frostTyrantRun],
  ["frostTyrantAttack", frostTyrantAttack],
  ["frostTyrantHeavyAttack", frostTyrantHeavyAttack],
  ["frostTyrantRangedAttack", frostTyrantRangedAttack],
  ["frostTyrantSuperAttack", frostTyrantSuperAttack],
  ["frostTyrantDamage", frostTyrantDamage],
  ["frostTyrantDeath", frostTyrantDeath],
  ["frostTyrantIntoIceStart", frostTyrantIntoIceStart],
  ["frostTyrantIntoIceEnd", frostTyrantIntoIceEnd],
  ["frostTyrantIceLance", frostTyrantIceLance],
  ["frostTyrantFrostOrb", frostTyrantFrostOrb],
  ["matriarchSoul", matriarchSoul],
  ["matriarchSoulAppear", matriarchSoulAppear],
  ["matriarchSoulDeath", matriarchSoulDeath],
  ["matriarchSoulShardBurst", matriarchSoulShardBurst],
  ["matriarchSoulBlizzardImpact", matriarchSoulBlizzardImpact],
  ["fallingIceSpikeIndicator", fallingIceSpikeIndicator],
  ["fallingIceSpikeTrap", fallingIceSpikeTrap],
  ["frostSpikeTrap", frostSpikeTrap],
  ["icyChainedTotem", icyChainedTotem],
  ["icyCrackedObelisk", icyCrackedObelisk],
  ["icyFrostedBrazier", icyFrostedBrazier],
  ["icyRunePedestal", icyRunePedestal],
  ["icySarcophagus", icySarcophagus],
  ["icyStonePillar", icyStonePillar],
  ["icyFrostStatue", icyFrostStatue],
  ["icySnowCrate", icySnowCrate],
  ["icySpikedMound", icySpikedMound],
];

const HERO_STRIPS = {
  nox: PLAYER_STRIPS,
  riven: RIVEN_STRIPS,
};
const CHEST_STRIPS = {
  dungeon: { source: "dungeonChestOpenSheet", width: 1396, height: 195, frames: 8, fps: 12 },
  wooden: { source: "woodenChestOpenSheet", width: 1496, height: 232, frames: 8, fps: 12 },
  blue: { source: "blueChestOpenSheet", width: 1492, height: 220, frames: 8, fps: 12 },
  golden: { source: "goldenChestOpenSheet", width: 1489, height: 220, frames: 8, fps: 12 },
  cursed: { source: "cursedChestOpenSheet", width: 1476, height: 219, frames: 8, fps: 12 },
};
const CHEST_TYPES = {
  dungeon: {
    icon: "dungeonChestIcon",
    openPrefix: "chestOpenDungeon",
    finalTexture: "dungeonChestOpenedIcon",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 72,
    openHeight: 82,
  },
  wooden: {
    icon: "woodenChestIcon",
    openPrefix: "chestOpenWooden",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 76,
    openHeight: 82,
  },
  blue: {
    icon: "blueChestIcon",
    openPrefix: "chestOpenBlue",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 76,
    openHeight: 82,
  },
  golden: {
    icon: "goldenChestIcon",
    openPrefix: "chestOpenGolden",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 76,
    openHeight: 82,
  },
  cursed: {
    icon: "cursedChestIcon",
    openPrefix: "chestOpenCursed",
    displayWidth: 74,
    displayHeight: 72,
    openWidth: 76,
    openHeight: 82,
  },
};
const ENEMY_STRIPS = {
  skeleton: {
    idle: { source: "skeletonCommonIdle", width: 457, height: 135, frames: 4, fps: 5 },
    walk: { source: "skeletonCommonWalk", width: 692, height: 132, frames: 7, fps: 9 },
    attack: { source: "skeletonCommonAttack", width: 596, height: 137, frames: 5, fps: 12 },
    damaged: { source: "skeletonCommonDamage", width: 567, height: 121, frames: 5, fps: 11 },
    death: { source: "skeletonCommonDeath", width: 740, height: 121, frames: 7, fps: 9 },
    revive: { source: "skeletonCommonRevive", width: 669, height: 121, frames: 6, fps: 9 },
  },
  guard: {
    idle: { source: "skeletonStrongIdle", width: 373, height: 114, frames: 4, fps: 5 },
    walk: { source: "skeletonStrongWalk", width: 373, height: 117, frames: 4, fps: 8 },
    attack: { source: "skeletonStrongAttack", width: 538, height: 104, frames: 5, fps: 12 },
    damaged: { source: "skeletonStrongDamage", width: 370, height: 129, frames: 4, fps: 11 },
    death: { source: "skeletonStrongDeath", width: 680, height: 111, frames: 7, fps: 9 },
    revive: { source: "skeletonStrongRevive", width: 544, height: 149, frames: 5, fps: 8 },
  },
  dog: {
    idle: { source: "skeletonDogIdle", width: 682, height: 92, frames: 4, fps: 5 },
    walk: { source: "skeletonDogRun", width: 712, height: 97, frames: 4, fps: 11 },
    attack: { source: "skeletonDogAttack", width: 676, height: 104, frames: 5, fps: 13 },
    damaged: { source: "skeletonDogDamage", width: 704, height: 114, frames: 5, fps: 11 },
    death: { source: "skeletonDogDeath", width: 718, height: 71, frames: 5, fps: 9 },
    revive: { source: "skeletonDogRevive", width: 680, height: 94, frames: 5, fps: 9 },
  },
  dogStrong: {
    idle: { source: "skeletonDogStrongIdle", width: 115, height: 107, frames: 1, fps: 1 },
    walk: { source: "skeletonDogStrongRun", width: 474, height: 100, frames: 3, fps: 7 },
    attack: { source: "skeletonDogStrongAttack", width: 705, height: 97, frames: 5, fps: 13 },
    damaged: { source: "skeletonDogStrongDamage", width: 653, height: 105, frames: 5, fps: 11 },
    death: { source: "skeletonDogStrongDeath", width: 647, height: 95, frames: 5, fps: 9 },
    revive: { source: "skeletonDogStrongRevive", width: 558, height: 107, frames: 5, fps: 9 },
  },
  boss: {
    idle: { source: "skeletonBossIdle", width: 502, height: 153, frames: 4, fps: 5 },
    walk: { source: "skeletonBossWalk", width: 378, height: 146, frames: 3, fps: 6 },
    attack: { source: "skeletonBossAttack", width: 77, height: 149, frames: 1, fps: 1 },
    damaged: { source: "skeletonBossDamage", width: 455, height: 127, frames: 5, fps: 10 },
    death: { source: "skeletonBossDeath", width: 544, height: 132, frames: 4, fps: 8 },
    revive: { source: "skeletonBossRevive", width: 515, height: 135, frames: 5, fps: 7 },
  },
  hellGolem: {
    idle: { source: "hellGolemIdle", width: 927, height: 94, frames: 8, fps: 6 },
    walk: { source: "hellGolemWalk", width: 922, height: 97, frames: 8, fps: 8 },
    attack: { source: "hellGolemAttack", width: 1335, height: 123, frames: 10, fps: 13 },
    superAttack: { source: "hellGolemSuperAttack", width: 1343, height: 123, frames: 10, fps: 11 },
    damaged: { source: "hellGolemDamage", width: 734, height: 97, frames: 6, fps: 11 },
    death: { source: "hellGolemDeath", width: 1074, height: 108, frames: 8, fps: 9 },
  },
  hellKiller: {
    idle: { source: "hellKillerIdle", width: 886, height: 108, frames: 8, fps: 6 },
    walk: { source: "hellKillerWalk", width: 1023, height: 105, frames: 8, fps: 9 },
    attack: { source: "hellKillerAttack", width: 1027, height: 105, frames: 8, fps: 12 },
    superAttack: { source: "hellKillerSuperAttack", width: 1380, height: 123, frames: 10, fps: 11 },
    damaged: { source: "hellKillerDamage", width: 640, height: 93, frames: 6, fps: 11 },
    death: { source: "hellKillerDeath", width: 973, height: 86, frames: 8, fps: 9 },
  },
  hellTank: {
    idle: { source: "hellTankIdle", width: 1099, height: 116, frames: 8, fps: 5 },
    walk: { source: "hellTankWalk", width: 1087, height: 101, frames: 8, fps: 7 },
    attack: { source: "hellTankAttack", width: 1432, height: 114, frames: 10, fps: 11 },
    superAttack: { source: "hellTankSuperAttack", width: 1371, height: 123, frames: 10, fps: 10 },
    damaged: { source: "hellTankDamage", width: 621, height: 110, frames: 6, fps: 10 },
    death: { source: "hellTankDeath", width: 789, height: 113, frames: 6, fps: 8 },
  },
  hellTitan: {
    idle: { source: "hellTitanIdle", width: 966, height: 127, frames: 8, fps: 5 },
    walk: { source: "hellTitanWalk", width: 959, height: 128, frames: 8, fps: 7 },
    attack: { source: "hellTitanAttack", width: 1390, height: 119, frames: 10, fps: 11 },
    superAttack: { source: "hellTitanSuperAttack", width: 1383, height: 149, frames: 10, fps: 9 },
    damaged: { source: "hellTitanDamage", width: 856, height: 108, frames: 6, fps: 10 },
    death: { source: "hellTitanDeath", width: 1348, height: 121, frames: 8, fps: 8 },
  },
  impLittle: {
    idle: { source: "impLittleIdle", width: 866, height: 114, frames: 8, fps: 7 },
    walk: { source: "impLittleWalk", width: 971, height: 114, frames: 8, fps: 11 },
    attack: { source: "impLittleAttack", width: 595, height: 117, frames: 5, fps: 13 },
    superAttack: { source: "impLittleSuperAttack", width: 579, height: 97, frames: 5, fps: 12 },
    damaged: { source: "impLittleDamage", width: 759, height: 108, frames: 6, fps: 12 },
    death: { source: "impLittleDeath", width: 651, height: 116, frames: 6, fps: 9 },
  },
  infernalBoss: {
    idle: { source: "infernalBossP1Idle", width: 946, height: 105, frames: 8, fps: 6 },
    walk: { source: "infernalBossP1Walk", width: 1101, height: 103, frames: 9, fps: 8 },
    attack: { source: "infernalBossP1Attack", width: 1469, height: 117, frames: 11, fps: 12 },
    superAttack: { source: "infernalBossP1SuperAttack", width: 1469, height: 135, frames: 11, fps: 10 },
    damaged: { source: "infernalBossP1Damage", width: 779, height: 98, frames: 7, fps: 10 },
    death: { source: "infernalBossP1Death", width: 1046, height: 94, frames: 8, fps: 8 },
  },
  infernalBossPhase2: {
    idle: { source: "infernalBossP2Idle", width: 950, height: 116, frames: 8, fps: 6 },
    walk: { source: "infernalBossP2Walk", width: 1106, height: 101, frames: 9, fps: 9 },
    attack: { source: "infernalBossP2Attack", width: 1467, height: 117, frames: 11, fps: 13 },
    superAttack: { source: "infernalBossP2SuperAttack", width: 1475, height: 136, frames: 11, fps: 11 },
    chainPrison: { source: "infernalBossP2ChainPrison", width: 1326, height: 172, frames: 10, fps: 10 },
    chainSnare: { source: "infernalBossP2ChainSnare", width: 1379, height: 181, frames: 10, fps: 10 },
    hellfireTornado: { source: "infernalBossP2HellfireTornado", width: 1489, height: 184, frames: 11, fps: 10 },
    superHellfireTornado: { source: "infernalBossP2SuperHellfireTornado", width: 1490, height: 219, frames: 11, fps: 9 },
    damaged: { source: "infernalBossP2Damage", width: 807, height: 107, frames: 7, fps: 11 },
    death: { source: "infernalBossP2Death", width: 1062, height: 97, frames: 8, fps: 8 },
  },
  frostBladeWarrior: {
    idle: { source: "frostBladeWarriorIdle", width: 937, height: 113, frames: 8, fps: 6 },
    walk: { source: "frostBladeWarriorWalk", width: 1072, height: 113, frames: 8, fps: 9 },
    run: { source: "frostBladeWarriorRun", width: 1072, height: 113, frames: 8, fps: 11 },
    attack: { source: "frostBladeWarriorAttack", width: 1060, height: 119, frames: 8, fps: 12 },
    superAttack: { source: "frostBladeWarriorSuperAttack", width: 1437, height: 134, frames: 10, fps: 11 },
    damaged: { source: "frostBladeWarriorDamage", width: 637, height: 104, frames: 5, fps: 10 },
    death: { source: "frostBladeWarriorDeath", width: 1152, height: 86, frames: 9, fps: 8 },
  },
  frostPriest: {
    idle: { source: "frostPriestIdle", width: 992, height: 116, frames: 8, fps: 5 },
    walk: { source: "frostPriestWalk", width: 1041, height: 112, frames: 8, fps: 7 },
    run: { source: "frostPriestRun", width: 1077, height: 112, frames: 8, fps: 9 },
    attack: { source: "frostPriestAttack", width: 1208, height: 112, frames: 10, fps: 11 },
    superAttack: { source: "frostPriestSuperAttack", width: 1409, height: 125, frames: 10, fps: 10 },
    damaged: { source: "frostPriestDamage", width: 659, height: 97, frames: 5, fps: 10 },
    death: { source: "frostPriestDeath", width: 1011, height: 88, frames: 8, fps: 8 },
  },
  frozenKnight: {
    idle: { source: "frozenKnightIdle", width: 960, height: 105, frames: 8, fps: 5 },
    walk: { source: "frozenKnightWalk", width: 1096, height: 105, frames: 8, fps: 8 },
    run: { source: "frozenKnightRun", width: 1089, height: 105, frames: 8, fps: 10 },
    attack: { source: "frozenKnightAttack", width: 1305, height: 109, frames: 10, fps: 11 },
    superAttack: { source: "frozenKnightSuperAttack", width: 1387, height: 109, frames: 10, fps: 10 },
    damaged: { source: "frozenKnightDamage", width: 713, height: 109, frames: 5, fps: 10 },
    death: { source: "frozenKnightDeath", width: 1040, height: 106, frames: 8, fps: 8 },
  },
  iceAxeTitan: {
    idle: { source: "iceAxeTitanIdle", width: 1036, height: 117, frames: 8, fps: 5 },
    walk: { source: "iceAxeTitanWalk", width: 1042, height: 117, frames: 7, fps: 7 },
    run: { source: "iceAxeTitanRun", width: 1042, height: 117, frames: 7, fps: 10 },
    attack: { source: "iceAxeTitanAttack", width: 1208, height: 117, frames: 9, fps: 10 },
    superAttack: { source: "iceAxeTitanSuperAttack", width: 1379, height: 131, frames: 10, fps: 10 },
    damaged: { source: "iceAxeTitanDamage", width: 652, height: 97, frames: 5, fps: 10 },
    death: { source: "iceAxeTitanDeath", width: 1372, height: 91, frames: 10, fps: 8 },
  },
  icebladeMaster: {
    idle: { source: "icebladeMasterIdle", width: 926, height: 116, frames: 8, fps: 6 },
    walk: { source: "icebladeMasterWalk", width: 1063, height: 116, frames: 8, fps: 9 },
    run: { source: "icebladeMasterRun", width: 1068, height: 116, frames: 8, fps: 11 },
    attack: { source: "icebladeMasterAttack", width: 1145, height: 113, frames: 9, fps: 13 },
    superAttack: { source: "icebladeMasterSuperAttack", width: 1398, height: 113, frames: 10, fps: 12 },
    damaged: { source: "icebladeMasterDamage", width: 648, height: 108, frames: 5, fps: 11 },
    death: { source: "icebladeMasterDeath", width: 1031, height: 91, frames: 8, fps: 8 },
  },
  iceWraith: {
    idle: { source: "iceWraithIdle", width: 930, height: 130, frames: 8, fps: 6 },
    walk: { source: "iceWraithWalk", width: 1046, height: 130, frames: 8, fps: 8 },
    attack: { source: "iceWraithAttack", width: 1264, height: 120, frames: 10, fps: 11 },
    superAttack: { source: "iceWraithSuperAttack", width: 1413, height: 120, frames: 10, fps: 10 },
    damaged: { source: "iceWraithDamage", width: 588, height: 101, frames: 5, fps: 10 },
    death: { source: "iceWraithDeath", width: 1037, height: 94, frames: 8, fps: 8 },
  },
  frostTyrant: {
    idle: { source: "frostTyrantIdle", width: 826, height: 154, frames: 5, fps: 5 },
    walk: { source: "frostTyrantWalk", width: 981, height: 154, frames: 6, fps: 7 },
    run: { source: "frostTyrantRun", width: 1053, height: 143, frames: 7, fps: 10 },
    attack: { source: "frostTyrantAttack", width: 1416, height: 149, frames: 10, fps: 11 },
    heavyAttack: { source: "frostTyrantHeavyAttack", width: 1446, height: 208, frames: 10, fps: 10 },
    rangedAttack: { source: "frostTyrantRangedAttack", width: 1446, height: 208, frames: 10, fps: 10 },
    superAttack: { source: "frostTyrantSuperAttack", width: 1448, height: 229, frames: 10, fps: 9 },
    intoIceStart: { source: "frostTyrantIntoIceStart", width: 1019, height: 306, frames: 7, fps: 8 },
    intoIceEnd: { source: "frostTyrantIntoIceEnd", width: 1019, height: 306, frames: 7, fps: 8 },
    damaged: { source: "frostTyrantDamage", width: 1446, height: 191, frames: 10, fps: 10 },
    death: { source: "frostTyrantDeath", width: 1446, height: 240, frames: 10, fps: 8 },
  },
  matriarchSoul: {
    idle: { source: "matriarchSoul", width: 370, height: 884, frames: 1, fps: 1 },
    appear: { source: "matriarchSoulAppear", width: 1480, height: 614, frames: 8, fps: 8 },
    attack: { source: "matriarchSoulShardBurst", width: 1010, height: 209, frames: 7, fps: 11 },
    superAttack: { source: "matriarchSoulBlizzardImpact", width: 1015, height: 258, frames: 7, fps: 10 },
    damaged: { source: "matriarchSoul", width: 370, height: 884, frames: 1, fps: 1 },
    death: { source: "matriarchSoulDeath", width: 1371, height: 589, frames: 7, fps: 8 },
  },
};

const ICY_PROJECTILE_STRIPS = {
  frostPriestSpawn: { source: "frostPriestProjectileSpawn", width: 948, height: 124, frames: 7, fps: 8 },
  frostPriestFly: { source: "frostPriestProjectileFly", width: 1038, height: 82, frames: 8, fps: 11 },
  frostPriestImpact: { source: "frostPriestProjectileImpact", width: 1089, height: 139, frames: 8, fps: 12 },
  frostPriestChargedShot: { source: "frostPriestProjectileChargedShot", width: 1385, height: 105, frames: 10, fps: 12 },
  frostPriestChargedExplosion: { source: "frostPriestProjectileChargedExplosion", width: 1409, height: 172, frames: 10, fps: 12 },
  iceWraithCharge: { source: "iceWraithProjectileCharge", width: 1085, height: 168, frames: 8, fps: 10 },
  iceWraithFly: { source: "iceWraithProjectileFly", width: 1063, height: 117, frames: 8, fps: 11 },
  iceWraithImpact: { source: "iceWraithProjectileImpact", width: 1385, height: 166, frames: 10, fps: 12 },
  iceWraithNova: { source: "iceWraithProjectileNova", width: 1385, height: 180, frames: 10, fps: 12 },
  frostTyrantIceLance: { source: "frostTyrantIceLance", width: 997, height: 213, frames: 7, fps: 12 },
  frostTyrantFrostOrb: { source: "frostTyrantFrostOrb", width: 992, height: 218, frames: 7, fps: 10 },
  matriarchSoulShard: { source: "matriarchSoulShardBurst", width: 1010, height: 209, frames: 7, fps: 12 },
  matriarchSoulBlizzard: { source: "matriarchSoulBlizzardImpact", width: 1015, height: 258, frames: 7, fps: 11 },
  fallingIceSpikeIndicator: { source: "fallingIceSpikeIndicator", width: 1653, height: 243, frames: 10, fps: 12 },
  fallingIceSpikeTrap: { source: "fallingIceSpikeTrap", width: 1624, height: 482, frames: 10, fps: 13 },
  frostSpikeTrap: { source: "frostSpikeTrap", width: 1649, height: 129, frames: 10, fps: 10 },
};

function createEnemyKeys(prefix, strips) {
  return Object.fromEntries(
    Object.entries(strips).map(([name, strip]) => [
      name,
      Array.from({ length: strip.frames }, (_, index) => `${prefix}${capitalize(name)}${index}`),
    ])
  );
}

function createHeroKeys(strips) {
  return Object.fromEntries(
    Object.entries(strips).map(([name, strip]) => [
      name,
      Array.from({ length: strip.frames }, (_, index) => `hero${capitalize(name)}${index}`),
    ])
  );
}

function capitalize(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

const HERO_COLOR = 0xb98cff;
const TRAVELER_KEYS = [
  "travelerNpc1",
  "travelerNpc2",
  "travelerNpc3",
  "travelerNpc4",
  "travelerNpc5",
  "travelerNpc6",
];
const ENEMY_FRAME_KEYS = {
  skeleton: "enemySkeletonIdle0",
  guard: "enemyGuardIdle0",
  dog: "enemyDogIdle0",
  dogStrong: "enemyDogStrongIdle0",
  boss: "enemyBossIdle0",
  hellGolem: "enemyHellGolemIdle0",
  hellKiller: "enemyHellKillerIdle0",
  hellTank: "enemyHellTankIdle0",
  hellTitan: "enemyHellTitanIdle0",
  impLittle: "enemyImpLittleIdle0",
  infernalBoss: "enemyInfernalBossIdle0",
  frostBladeWarrior: "enemyFrostBladeWarriorIdle0",
  frostPriest: "enemyFrostPriestIdle0",
  frozenKnight: "enemyFrozenKnightIdle0",
  iceAxeTitan: "enemyIceAxeTitanIdle0",
  icebladeMaster: "enemyIcebladeMasterIdle0",
  iceWraith: "enemyIceWraithIdle0",
  frostTyrant: "enemyFrostTyrantIdle0",
  matriarchSoul: "enemyMatriarchSoulIdle0",
};

const ICY_WALK_ANCHOR_PROFILES = {
  enemyFrostBladeWarrior: { footBandRatio: 0.24 },
  enemyFrostPriest: { footBandRatio: 0.25 },
  enemyFrozenKnight: { footBandRatio: 0.22 },
  enemyIceAxeTitan: { footBandRatio: 0.2 },
  enemyIcebladeMaster: { footBandRatio: 0.28 },
  enemyIceWraith: { footBandRatio: 0.3 },
};

const ICY_MOVEMENT_LOOP_FRAMES = {
  frostBladeWarrior: [0, 1, 2, 3, 4, 5, 6, 7],
  frostPriest: [0, 1, 2, 3, 4, 5, 6, 7],
  frozenKnight: [0, 1, 2, 3, 4, 5, 6, 7],
  iceAxeTitan: [0, 1, 2, 3, 4, 5, 6],
  icebladeMaster: [0, 1, 2, 3, 4, 5, 6, 7],
  iceWraith: [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
};

const SPECIAL_ROOM_TEXTURES = {
  award: "awardRoomBg",
  challenge: "challengeRoomBg",
  cursed: "cursedRoomBg",
  rest: "restRoomBg",
};

const SPECIAL_TUNNEL_TEXTURES = {
  award: "awardTunnelBg",
  challenge: "challengeTunnelBg",
  cursed: "cursedTunnelBg",
  rest: "restTunnelBg",
};

const CHALLENGE_DASH_RULES = [
  {
    id: "cooldown2",
    label: "Dash cooldown x2",
    detail: "Dash returns slower",
  },
  {
    id: "oneCharge",
    label: "Dash one charge",
    detail: "One dash for the trial",
  },
  {
    id: "disabledStart",
    label: "Dash wakes late",
    detail: "Dash locked first 25s",
  },
  {
    id: "eliteKill",
    label: "Dash from elite",
    detail: "Kill the elite to restore dash",
  },
];

const CHALLENGE_VARIANTS = [
  {
    id: "easy",
    title: "Easy Trial",
    detail: "Fewer enemies, normal reward",
    waves: 3,
    timeLimit: 50_000,
    speedMultiplier: 1.18,
    healthMultiplier: 0.95,
    extraEnemies: -1,
    reward: "normal",
  },
  {
    id: "hard",
    title: "Hard Trial",
    detail: "More enemies, rare reward",
    waves: 4,
    timeLimit: 48_000,
    speedMultiplier: 1.35,
    healthMultiplier: 1.2,
    extraEnemies: 1,
    reward: "rare",
  },
  {
    id: "insane",
    title: "Insane Trial",
    detail: "Elite enemies, cursed or epic reward",
    waves: 3,
    timeLimit: 42_000,
    speedMultiplier: 1.48,
    healthMultiplier: 1.55,
    extraEnemies: 1,
    aroundPlayer: true,
    eliteEnemies: true,
    reward: "insane",
  },
];
const ANIMATION_KEYS = {
  skeleton: createEnemyKeys("enemySkeleton", ENEMY_STRIPS.skeleton),
  guard: createEnemyKeys("enemyGuard", ENEMY_STRIPS.guard),
  dog: createEnemyKeys("enemyDog", ENEMY_STRIPS.dog),
  dogStrong: createEnemyKeys("enemyDogStrong", ENEMY_STRIPS.dogStrong),
  boss: createEnemyKeys("enemyBoss", ENEMY_STRIPS.boss),
  hellGolem: createEnemyKeys("enemyHellGolem", ENEMY_STRIPS.hellGolem),
  hellKiller: createEnemyKeys("enemyHellKiller", ENEMY_STRIPS.hellKiller),
  hellTank: createEnemyKeys("enemyHellTank", ENEMY_STRIPS.hellTank),
  hellTitan: createEnemyKeys("enemyHellTitan", ENEMY_STRIPS.hellTitan),
  impLittle: createEnemyKeys("enemyImpLittle", ENEMY_STRIPS.impLittle),
  infernalBoss: createEnemyKeys("enemyInfernalBoss", ENEMY_STRIPS.infernalBoss),
  infernalBossPhase2: createEnemyKeys("enemyInfernalBossPhase2", ENEMY_STRIPS.infernalBossPhase2),
  frostBladeWarrior: createEnemyKeys("enemyFrostBladeWarrior", ENEMY_STRIPS.frostBladeWarrior),
  frostPriest: createEnemyKeys("enemyFrostPriest", ENEMY_STRIPS.frostPriest),
  frozenKnight: createEnemyKeys("enemyFrozenKnight", ENEMY_STRIPS.frozenKnight),
  iceAxeTitan: createEnemyKeys("enemyIceAxeTitan", ENEMY_STRIPS.iceAxeTitan),
  icebladeMaster: createEnemyKeys("enemyIcebladeMaster", ENEMY_STRIPS.icebladeMaster),
  iceWraith: createEnemyKeys("enemyIceWraith", ENEMY_STRIPS.iceWraith),
  frostTyrant: createEnemyKeys("enemyFrostTyrant", ENEMY_STRIPS.frostTyrant),
  matriarchSoul: createEnemyKeys("enemyMatriarchSoul", ENEMY_STRIPS.matriarchSoul),
};

const HIT_INVULNERABILITY_MS = 500;
const SPAWN_INVULNERABILITY_MS = 2000;
const SKELETON_REVIVE_CHANCE = 0.35;
const SKELETON_REVIVE_HEALTH_RATIO = 0.5;
const BOSS_REVIVE_HEALTH_RATIO = 0.3;
const INFERNAL_PHASE_TWO_TRIGGER = 0.2;
const INFERNAL_PHASE_TWO_HEAL = 0.7;
const INFERNAL_MAX_TORNADOES = 5;
const FROST_TYRANT_ICE_TRIGGER = 0.3;
const FROST_TYRANT_SOUL_HEALTH = 25;

const OBSTACLE_TEXTURES = {
  columnBroken: "obstacleColumnBroken",
  columnSkull: "obstacleColumnSkull",
  column: "obstacleColumn",
  barrel: "obstacleBarrel",
  box: "obstacleBox",
  pileStones: "obstaclePileStones",
  spike: "obstacleSpike",
  torch: "obstacleTorch",
  hellColumnFlag: "hellColumnFlag",
  hellColumnSkull: "hellColumnSkull",
  hellColumnSpikes: "hellColumnSpikes",
  hellColumnBigSkull: "hellColumnBigSkull",
  hellFlag: "hellFlag",
  hellGates: "hellGates",
  hellRock: "hellRock",
  hellSpikes: "hellSpikes",
  hellTorch: "hellTorch",
  hellTable: "hellTable",
  icyChainedTotem: "icyChainedTotem",
  icyCrackedObelisk: "icyCrackedObelisk",
  icyFrostedBrazier: "icyFrostedBrazier",
  icyRunePedestal: "icyRunePedestal",
  icySarcophagus: "icySarcophagus",
  icyStonePillar: "icyStonePillar",
  icyFrostStatue: "icyFrostStatue",
  icySnowCrate: "icySnowCrate",
  icySpikedMound: "icySpikedMound",
};

export default class RoguelikeScene extends Phaser.Scene {
  constructor(callbacks = {}) {
    super("RoguelikeScene");
    this.callbacks = callbacks;
    this.heroId = callbacks.heroId ?? "nox";
    this.levelId = callbacks.levelId ?? "skeleton";
    this.levelSequence = callbacks.levelSequence ?? [this.levelId];
    this.stageIndex = 0;
    this.levelId = this.levelSequence[this.stageIndex] ?? this.levelId;
    this.heroStrips = HERO_STRIPS[this.heroId] ?? HERO_STRIPS.nox;
    this.heroAnimationKeys = createHeroKeys(this.heroStrips);
  }

  preload() {
    this.load.image("noxIdleSheet", noxIdleSheet);
    this.load.image("noxWalkSheet", noxWalkSheet);
    this.load.image("noxRunSheet", noxRunSheet);
    this.load.image("noxDashSheet", noxDashSheet);
    this.load.image("noxAttackSheet", noxAttackSheet);
    this.load.image("noxSkillAttackSheet", noxSkillAttackSheet);
    this.load.image("noxSuperAttackSheet", noxSuperAttackSheet);
    this.load.image("noxDamagedSheet", noxDamagedSheet);
    this.load.image("noxDeathSheet", noxDeathSheet);
    this.load.image("noxArcaneOrbProjectile", noxArcaneOrbProjectile);
    this.load.image("noxCrystalShardProjectile", noxCrystalShardProjectile);
    this.load.image("noxDashShadowProjectile", noxDashShadowProjectile);
    this.load.image("noxHitImpactEffect", noxHitImpactEffect);
    this.load.image("noxLargeMagicWaveProjectile", noxLargeMagicWaveProjectile);
    this.load.image("noxMagicBoltProjectile", noxMagicBoltProjectile);
    this.load.image("noxSmallMagicArcProjectile", noxSmallMagicArcProjectile);
    this.load.image("noxSuperSpellBurstProjectile", noxSuperSpellBurstProjectile);
    this.load.image("rivenIdleSheet", rivenIdleSheet);
    this.load.image("rivenWalkSheet", rivenWalkSheet);
    this.load.image("rivenRunSheet", rivenRunSheet);
    this.load.image("rivenDashSheet", rivenDashSheet);
    this.load.image("rivenAttackSheet", rivenAttackSheet);
    this.load.image("rivenSkillSheet", rivenSkillSheet);
    this.load.image("rivenSuperAttackSheet", rivenSuperAttackSheet);
    this.load.image("rivenDamagedSheet", rivenDamagedSheet);
    this.load.image("rivenDeathSheet", rivenDeathSheet);
    this.load.image("rivenDaggerProjectile", rivenDaggerProjectile);
    this.load.image("rivenDashTrailProjectile", rivenDashTrailProjectile);
    this.load.image("rivenImpactHitEffect", rivenImpactHitEffect);
    this.load.image("rivenLargeSlashArcProjectile", rivenLargeSlashArcProjectile);
    this.load.image("rivenSkillOrbProjectile", rivenSkillOrbProjectile);
    this.load.image("rivenSmallSlashArcProjectile", rivenSmallSlashArcProjectile);
    this.load.image("rivenSuperAttackBurstProjectile", rivenSuperAttackBurstProjectile);
    this.load.image("skeletonCommonIdle", skeletonCommonIdle);
    this.load.image("skeletonCommonWalk", skeletonCommonWalk);
    this.load.image("skeletonCommonAttack", skeletonCommonAttack);
    this.load.image("skeletonCommonDamage", skeletonCommonDamage);
    this.load.image("skeletonCommonDeath", skeletonCommonDeath);
    this.load.image("skeletonCommonRevive", skeletonCommonRevive);
    this.load.image("skeletonStrongIdle", skeletonStrongIdle);
    this.load.image("skeletonStrongWalk", skeletonStrongWalk);
    this.load.image("skeletonStrongAttack", skeletonStrongAttack);
    this.load.image("skeletonStrongDamage", skeletonStrongDamage);
    this.load.image("skeletonStrongDeath", skeletonStrongDeath);
    this.load.image("skeletonStrongRevive", skeletonStrongRevive);
    this.load.image("skeletonDogIdle", skeletonDogIdle);
    this.load.image("skeletonDogRun", skeletonDogRun);
    this.load.image("skeletonDogAttack", skeletonDogAttack);
    this.load.image("skeletonDogDamage", skeletonDogDamage);
    this.load.image("skeletonDogDeath", skeletonDogDeath);
    this.load.image("skeletonDogRevive", skeletonDogRevive);
    this.load.image("skeletonDogStrongIdle", skeletonDogStrongIdle);
    this.load.image("skeletonDogStrongRun", skeletonDogStrongRun);
    this.load.image("skeletonDogStrongAttack", skeletonDogStrongAttack);
    this.load.image("skeletonDogStrongDamage", skeletonDogStrongDamage);
    this.load.image("skeletonDogStrongDeath", skeletonDogStrongDeath);
    this.load.image("skeletonDogStrongRevive", skeletonDogStrongRevive);
    this.load.image("skeletonBossIdle", skeletonBossIdle);
    this.load.image("skeletonBossWalk", skeletonBossWalk);
    this.load.image("skeletonBossAttack", skeletonBossAttack);
    this.load.image("skeletonBossDamage", skeletonBossDamage);
    this.load.image("skeletonBossDeath", skeletonBossDeath);
    this.load.image("skeletonBossRevive", skeletonBossRevive);
    this.load.image("skeletonBossProjectile", skeletonBossProjectile);
    this.load.image("hellGolemIdle", hellGolemIdle);
    this.load.image("hellGolemWalk", hellGolemWalk);
    this.load.image("hellGolemAttack", hellGolemAttack);
    this.load.image("hellGolemSuperAttack", hellGolemSuperAttack);
    this.load.image("hellGolemDamage", hellGolemDamage);
    this.load.image("hellGolemDeath", hellGolemDeath);
    this.load.image("hellKillerIdle", hellKillerIdle);
    this.load.image("hellKillerWalk", hellKillerWalk);
    this.load.image("hellKillerAttack", hellKillerAttack);
    this.load.image("hellKillerSuperAttack", hellKillerSuperAttack);
    this.load.image("hellKillerDamage", hellKillerDamage);
    this.load.image("hellKillerDeath", hellKillerDeath);
    this.load.image("hellKillerProjectile", hellKillerProjectile);
    this.load.image("hellKillerSuperProjectile", hellKillerSuperProjectile);
    this.load.image("hellTankIdle", hellTankIdle);
    this.load.image("hellTankWalk", hellTankWalk);
    this.load.image("hellTankAttack", hellTankAttack);
    this.load.image("hellTankSuperAttack", hellTankSuperAttack);
    this.load.image("hellTankDamage", hellTankDamage);
    this.load.image("hellTankDeath", hellTankDeath);
    this.load.image("hellTitanIdle", hellTitanIdle);
    this.load.image("hellTitanWalk", hellTitanWalk);
    this.load.image("hellTitanAttack", hellTitanAttack);
    this.load.image("hellTitanSuperAttack", hellTitanSuperAttack);
    this.load.image("hellTitanDamage", hellTitanDamage);
    this.load.image("hellTitanDeath", hellTitanDeath);
    this.load.image("impLittleIdle", impLittleIdle);
    this.load.image("impLittleWalk", impLittleWalk);
    this.load.image("impLittleAttack", impLittleAttack);
    this.load.image("impLittleSuperAttack", impLittleSuperAttack);
    this.load.image("impLittleDamage", impLittleDamage);
    this.load.image("impLittleDeath", impLittleDeath);
    this.load.image("infernalBossP1Idle", infernalBossP1Idle);
    this.load.image("infernalBossP1Walk", infernalBossP1Walk);
    this.load.image("infernalBossP1Attack", infernalBossP1Attack);
    this.load.image("infernalBossP1SuperAttack", infernalBossP1SuperAttack);
    this.load.image("infernalBossP1Damage", infernalBossP1Damage);
    this.load.image("infernalBossP1Death", infernalBossP1Death);
    this.load.image("infernalBossP1FireOrb", infernalBossP1FireOrb);
    this.load.image("infernalBossP1HellLance", infernalBossP1HellLance);
    this.load.image("infernalBossP1InfernalWaveStart", infernalBossP1InfernalWaveStart);
    this.load.image("infernalBossP1InfernalWaveEnd", infernalBossP1InfernalWaveEnd);
    this.load.image("infernalBossP1ScytheWaveStart", infernalBossP1ScytheWaveStart);
    this.load.image("infernalBossP1ScytheWaveEnd", infernalBossP1ScytheWaveEnd);
    this.load.image("infernalBossP2Idle", infernalBossP2Idle);
    this.load.image("infernalBossP2Walk", infernalBossP2Walk);
    this.load.image("infernalBossP2Attack", infernalBossP2Attack);
    this.load.image("infernalBossP2SuperAttack", infernalBossP2SuperAttack);
    this.load.image("infernalBossP2ChainPrison", infernalBossP2ChainPrison);
    this.load.image("infernalBossP2ChainSnare", infernalBossP2ChainSnare);
    this.load.image("infernalBossP2Damage", infernalBossP2Damage);
    this.load.image("infernalBossP2Death", infernalBossP2Death);
    this.load.image("infernalBossP2HellfireTornado", infernalBossP2HellfireTornado);
    this.load.image("infernalBossP2SuperHellfireTornado", infernalBossP2SuperHellfireTornado);
    this.load.image("infernalBossP2TornadoStart", infernalBossP2TornadoStart);
    this.load.image("infernalBossP2TornadoContinue", infernalBossP2TornadoContinue);
    this.load.image("infernalBossP2TornadoLoop", infernalBossP2TornadoLoop);
    this.load.image("infernalBossP2TornadoEnd", infernalBossP2TornadoEnd);
    this.load.image("roomBgCommon", roomBgCommon);
    this.load.image("roomBgBoss", roomBgBoss);
    this.load.image("roomTunnel", roomTunnel);
    this.load.image("roomTunnelBoss", roomTunnelBoss);
    this.load.image("roomTunnelTraveler", roomTunnelTraveler);
    this.load.image("roomTunnelTravelerBoss", roomTunnelTravelerBoss);
    this.load.image("hellBgCommon", hellBgCommon);
    this.load.image("hellBgBoss", hellBgBoss);
    this.load.image("hellTunnel", hellTunnel);
    this.load.image("hellTunnelBoss", hellTunnelBoss);
    this.load.image("travelerRoomBg", travelerRoomBg);
    this.load.image("awardRoomBg", awardRoomBg);
    this.load.image("challengeRoomBg", challengeRoomBg);
    this.load.image("cursedRoomBg", cursedRoomBg);
    this.load.image("restRoomBg", restRoomBg);
    this.load.image("awardTunnelBg", awardTunnelBg);
    this.load.image("challengeTunnelBg", challengeTunnelBg);
    this.load.image("cursedTunnelBg", cursedTunnelBg);
    this.load.image("restTunnelBg", restTunnelBg);
    this.load.image("dungeonChestIcon", dungeonChestIcon);
    this.load.image("dungeonChestOpenSheet", dungeonChestOpenSheet);
    this.load.image("dungeonChestOpenedIcon", dungeonChestOpenedIcon);
    this.load.image("woodenChestIcon", woodenChestIcon);
    this.load.image("woodenChestOpenSheet", woodenChestOpenSheet);
    this.load.image("blueChestIcon", blueChestIcon);
    this.load.image("blueChestOpenSheet", blueChestOpenSheet);
    this.load.image("goldenChestIcon", goldenChestIcon);
    this.load.image("goldenChestOpenSheet", goldenChestOpenSheet);
    this.load.image("cursedChestIcon", cursedChestIcon);
    this.load.image("cursedChestOpenSheet", cursedChestOpenSheet);
    this.load.image("healPotion", healPotion);
    this.load.image("blueHeartHalf", blueHeartHalfIcon);
    this.load.image("greenHeartHalf", greenHeartHalfIcon);
    this.load.image("coinIcon", coinIcon);
    this.load.image("gemIcon", gemIcon);
    this.load.image("tarotCard", tarotCardImage);
    this.load.image("travelerCarpet", travelerCarpet);
    this.load.image("travelerNpc1", travelerNpc1);
    this.load.image("travelerNpc2", travelerNpc2);
    this.load.image("travelerNpc3", travelerNpc3);
    this.load.image("travelerNpc4", travelerNpc4);
    this.load.image("travelerNpc5", travelerNpc5);
    this.load.image("travelerNpc6", travelerNpc6);
    this.load.image("obstacleColumnBroken", obstacleColumnBroken);
    this.load.image("obstacleColumnSkull", obstacleColumnSkull);
    this.load.image("obstacleColumn", obstacleColumn);
    this.load.image("obstacleBarrel", obstacleBarrel);
    this.load.image("obstacleBox", obstacleBox);
    this.load.image("obstaclePileStones", obstaclePileStones);
    this.load.image("obstacleSpike", obstacleSpike);
    this.load.image("obstacleTorch", obstacleTorch);
    this.load.image("hellColumnFlag", hellColumnFlag);
    this.load.image("hellColumnSkull", hellColumnSkull);
    this.load.image("hellColumnSpikes", hellColumnSpikes);
    this.load.image("hellColumnBigSkull", hellColumnBigSkull);
    this.load.image("hellFlag", hellFlag);
    this.load.image("hellGates", hellGates);
    this.load.image("hellRock", hellRock);
    this.load.image("hellSpikes", hellSpikes);
    this.load.image("hellTorch", hellTorch);
    this.load.image("hellTable", hellTable);
    ICY_IMAGE_ASSETS.forEach(([key, source]) => this.load.image(key, source));
  }

  create() {
    this.floor = 1;
    this.room = 1;
    this.floorPlan = createFloorPlan(this.floor);
    this.maxHearts = GAME_RULES.maxHearts;
    this.hearts = this.maxHearts;
    this.tempHearts = 0;
    this.greenHearts = 0;
    this.coins = this.callbacks.startingCoins ?? 0;
    this.gems = 0;
    this.startingCoins = this.coins;
    this.runStartedAt = this.time.now;
    this.enemyKills = 0;
    this.selectedCards = [];
    this.cardLevels = {};
    this.bossRewards = [];
    this.tunnelsSinceTraveler = 0;
    this.hasProjectileAttack = false;
    this.hasNoxVoidBarrage = false;
    this.hasRivenEmberBlade = false;
    this.purchasedShopCards = new Set();
    this.shopCards = [];
    this.shopCoinRerollCost = GAME_RULES.shopCoinRerollBaseCost;
    this.shopGemRerollUsed = false;
    this.activeCurses = [];
    this.challengeActive = false;
    this.challengeCompleted = false;
    this.challengeVariant = null;
    this.challengeSpeedMultiplier = 1;
    this.challengeHealthMultiplier = 1;
    this.challengeDashRule = null;
    this.challengeDashCharges = Infinity;
    this.challengeDashDisabledUntil = 0;
    this.challengeEliteKilled = false;
    this.challengeEliteSpawned = false;
    this.dashCardCooldowns = {};
    this.lastDashCardCooldownNoticeAt = 0;
    this.focusNextTarotBuild = null;
    this.stats = { ...PLAYER_BASE_STATS };
    this.lastAttackAt = 0;
    this.lastSkillAt = 0;
    this.lastRollAt = 0;
    this.attackCounter = 0;
    this.guaranteedCritCounter = 0;
    this.lastSharpRitualAt = 0;
    this.isRolling = false;
    this.isChoosingTarot = false;
    this.isGameOver = false;
    this.invulnerableUntil = 0;
    this.registerCroppedTextures();
    this.setupPlayerInput();

    this.drawUi();
    this.startRoom();
  }

  update(time, delta) {
    if (!this.player || this.isChoosingTarot || this.isGameOver) return;

    if (this.isTransitioning) {
      this.updateTunnel(time);
      return;
    }

    this.movePlayer(time);
    this.moveEnemies(time);
    this.updateIcyHazards(time);
    this.updateProjectiles(time);
    this.updateChallengeRoom(time);
    this.updateSpriteAnimations(time);
    this.updateUi();
    this.maybeSpawnChest();
    this.checkPlayerInteractions(time);
    this.handlePlayerActionInput(time);
  }

  startRoom() {
    return startRoomSystem(this);
  }

  getCurrentRoomType() {
    return getCurrentRoomTypeSystem(this);
  }

  isEventRoom() {
    return isEventRoomSystem(this);
  }

  grantSpawnProtection() {
    return grantSpawnProtectionSystem(this, { spawnInvulnerabilityMs: SPAWN_INVULNERABILITY_MS });
  }

  clearFloorObjects() {
    return clearFloorObjectsSystem(this);
  }

  getGroupChildren(group) {
    if (!group) return [];

    try {
      return group.getChildren?.() ?? [];
    } catch {
      return group.children?.entries ?? group.children?.list ?? [];
    }
  }

  setupPlayerInput() {
    return setupPlayerInputSystem(this);
  }

  handlePlayerActionInput(time) {
    return handlePlayerActionInputSystem(this, time);
  }

  registerCroppedTextures() {
    registerPlayerStripsSystem(this);
    Object.entries(NOX_PROJECTILE_STRIPS).forEach(([name, strip]) => {
      this.registerStrip(`nox${capitalize(name)}`, strip);
    });
    Object.entries(RIVEN_PROJECTILE_STRIPS).forEach(([name, strip]) => {
      this.registerStrip(`riven${capitalize(name)}`, strip);
    });
    Object.entries(CHEST_STRIPS).forEach(([type, strip]) => {
      this.registerStrip(CHEST_TYPES[type].openPrefix, {
        ...strip,
        anchorMode: "foot",
        anchorProfile: { footBandRatio: 0.34 },
      });
    });

    registerAllEnemyStripsSystem(this, ENEMY_STRIPS);
    registerBossStripsSystem(this, ENEMY_STRIPS);
    Object.entries(ICY_PROJECTILE_STRIPS).forEach(([name, strip]) => {
      this.registerStrip(name, strip);
    });
    this.registerStrip("hellKillerProjectile", {
      source: "hellKillerProjectile",
      width: 636,
      height: 149,
      frames: 5,
      fps: 8,
    });
    this.registerStrip("hellKillerSuperProjectile", {
      source: "hellKillerSuperProjectile",
      width: 603,
      height: 86,
      frames: 5,
      fps: 8,
    });
    this.registerStrip("infernalFireOrb", { source: "infernalBossP1FireOrb", width: 435, height: 53, frames: 5, fps: 8 });
    this.registerStrip("infernalHellLance", { source: "infernalBossP1HellLance", width: 873, height: 133, frames: 7, fps: 10 });
    this.registerStrip("infernalWaveStart", { source: "infernalBossP1InfernalWaveStart", width: 1080, height: 82, frames: 8, fps: 10 });
    this.registerStrip("infernalWaveEnd", { source: "infernalBossP1InfernalWaveEnd", width: 1026, height: 71, frames: 8, fps: 10 });
    this.registerStrip("infernalScytheStart", { source: "infernalBossP1ScytheWaveStart", width: 779, height: 72, frames: 7, fps: 10 });
    this.registerStrip("infernalScytheEnd", { source: "infernalBossP1ScytheWaveEnd", width: 949, height: 68, frames: 8, fps: 10 });
    this.registerStrip("infernalTornadoStart", { source: "infernalBossP2TornadoStart", width: 1318, height: 194, frames: 8, fps: 10 });
    this.registerStrip("infernalTornadoContinue", { source: "infernalBossP2TornadoContinue", width: 1453, height: 185, frames: 8, fps: 10 });
    this.registerStrip("infernalTornadoLoop", { source: "infernalBossP2TornadoLoop", width: 1409, height: 175, frames: 8, fps: 10 });
    this.registerStrip("infernalTornadoEnd", { source: "infernalBossP2TornadoEnd", width: 1373, height: 195, frames: 8, fps: 10 });
  }

  registerHeroStrip(prefix, strip) {
    const frameWidth = Math.floor(strip.width / strip.frames);

    for (let index = 0; index < strip.frames; index += 1) {
      this.createCroppedTexture(`${prefix}${index}`, strip.source, {
        x: index * frameWidth,
        y: 0,
        width: index === strip.frames - 1 ? strip.width - index * frameWidth : frameWidth,
        height: strip.height,
      });
    }
  }

  registerEnemyStrips(prefix, strips) {
    return registerEnemyStripsSystem(this, prefix, strips, ICY_WALK_ANCHOR_PROFILES);
  }

  registerStrip(prefix, strip) {
    const frameWidth = Math.floor(strip.width / strip.frames);
    const crops = Array.from({ length: strip.frames }, (_, index) => ({
      x: index * frameWidth,
      y: 0,
      width: index === strip.frames - 1 ? strip.width - index * frameWidth : frameWidth,
      height: strip.height,
    }));

    if (strip.anchorMode === "foot") {
      this.createFootAnchoredCroppedTextures(prefix, strip.source, crops, strip.anchorProfile);
      return;
    }

    crops.forEach((crop, index) => {
      if (strip.anchorMode === "trim") {
        this.createAnchoredCroppedTexture(`${prefix}${index}`, strip.source, crop);
      } else {
        this.createCroppedTexture(`${prefix}${index}`, strip.source, crop);
      }
    });
  }

  createFootAnchoredCroppedTextures(prefix, sourceKey, crops, profile = {}) {
    const sourceImage = this.textures.get(sourceKey).getSourceImage();
    const frameData = crops.map((crop) => {
      const scanCanvas = document.createElement("canvas");
      scanCanvas.width = crop.width;
      scanCanvas.height = crop.height;
      const scanContext = scanCanvas.getContext("2d");
      scanContext.drawImage(
        sourceImage,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      const imageData = scanContext.getImageData(0, 0, crop.width, crop.height);
      const bounds = this.getOpaqueBounds(imageData.data, crop.width, crop.height);
      return {
        crop,
        scanCanvas,
        metrics: this.getFootAnchorMetrics(imageData.data, crop.width, crop.height, bounds, profile),
      };
    });

    const validMetrics = frameData.map((item) => item.metrics).filter(Boolean);
    const fallbackWidth = crops[0]?.width ?? 1;
    const fallbackHeight = crops[0]?.height ?? 1;
    const targetFootX = Math.round(this.getMedian(validMetrics.map((metrics) => metrics.footX)) ?? fallbackWidth / 2);
    const targetBottom = Math.round(this.getMedian(validMetrics.map((metrics) => metrics.bottom)) ?? fallbackHeight - 1);

    frameData.forEach((item, index) => {
      const newKey = `${prefix}${index}`;
      this.replaceGeneratedTexture(newKey);

      const canvas = document.createElement("canvas");
      canvas.width = item.crop.width;
      canvas.height = item.crop.height;
      const context = canvas.getContext("2d");
      const metrics = item.metrics;
      const offsetX = metrics ? Math.round(targetFootX - metrics.footX) : 0;
      const offsetY = metrics ? Math.round(targetBottom - metrics.bottom) : 0;
      context.drawImage(item.scanCanvas, offsetX, offsetY);
      this.textures.addCanvas(newKey, canvas);
    });
  }

  getFootAnchorMetrics(data, width, height, bounds, profile = {}) {
    if (!bounds) return null;

    const bandHeight = Math.max(8, Math.round(height * (profile.footBandRatio ?? 0.24)));
    const bandTop = Math.max(bounds.top, bounds.bottom - bandHeight);
    let left = width;
    let right = -1;
    let weightedX = 0;
    let weight = 0;

    for (let y = bandTop; y <= bounds.bottom; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha <= 8) continue;
        left = Math.min(left, x);
        right = Math.max(right, x);
        weightedX += x * alpha;
        weight += alpha;
      }
    }

    const footX = weight > 0 ? weightedX / weight : (left + right) / 2;
    return {
      footX,
      bottom: bounds.bottom,
    };
  }

  getMedian(values) {
    const sortedValues = values.filter((value) => Number.isFinite(value)).sort((a, b) => a - b);
    if (!sortedValues.length) return null;
    const middle = Math.floor(sortedValues.length / 2);
    if (sortedValues.length % 2) return sortedValues[middle];
    return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
  }

  createAnchoredCroppedTexture(newKey, sourceKey, crop) {
    this.replaceGeneratedTexture(newKey);

    const sourceImage = this.textures.get(sourceKey).getSourceImage();
    const scanCanvas = document.createElement("canvas");
    scanCanvas.width = crop.width;
    scanCanvas.height = crop.height;
    const scanContext = scanCanvas.getContext("2d");
    scanContext.drawImage(
      sourceImage,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    const imageData = scanContext.getImageData(0, 0, crop.width, crop.height);
    const bounds = this.getOpaqueBounds(imageData.data, crop.width, crop.height);
    if (!bounds) {
      this.textures.addCanvas(newKey, scanCanvas);
      return;
    }

    const contentWidth = bounds.right - bounds.left + 1;
    const contentHeight = bounds.bottom - bounds.top + 1;
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;
    const context = canvas.getContext("2d");
    const targetX = Math.round((crop.width - contentWidth) / 2);
    const targetY = Math.max(0, crop.height - contentHeight);
    context.drawImage(
      scanCanvas,
      bounds.left,
      bounds.top,
      contentWidth,
      contentHeight,
      targetX,
      targetY,
      contentWidth,
      contentHeight
    );
    this.textures.addCanvas(newKey, canvas);
  }

  getOpaqueBounds(data, width, height) {
    let left = width;
    let right = -1;
    let top = height;
    let bottom = -1;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha <= 8) continue;
        left = Math.min(left, x);
        right = Math.max(right, x);
        top = Math.min(top, y);
        bottom = Math.max(bottom, y);
      }
    }

    if (right < left || bottom < top) return null;
    return { left, right, top, bottom };
  }

  createCroppedTexture(newKey, sourceKey, crop) {
    this.replaceGeneratedTexture(newKey);

    const sourceImage = this.textures.get(sourceKey).getSourceImage();
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;

    const context = canvas.getContext("2d");
    context.drawImage(
      sourceImage,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    this.textures.addCanvas(newKey, canvas);
  }

  replaceGeneratedTexture(key) {
    if (this.textures.exists(key)) {
      this.textures.remove(key);
    }
  }

  getAliveEnemyCount() {
    return this.aliveEnemies ?? 0;
  }

  getEnemyName(type) {
    return getEnemyNameHelper(type);
  }

  getActiveBoss() {
    return getActiveBossBossHelper(this);
  }

  isBossRoom() {
    return this.floor === GAME_RULES.floorsPerLevel && this.room === this.floorPlan.roomCount;
  }

  drawRoom() {
    return drawRoomSystem(this, OBSTACLE_TEXTURES);
  }

  getRoomTexture() {
    return getRoomTextureSystem(this, SPECIAL_ROOM_TEXTURES);
  }

  addWall(x, y, width, height) {
    return addWallSystem(this, x, y, width, height);
  }

  addObstacle(obstacle) {
    return addObstacleSystem(this, obstacle, OBSTACLE_TEXTURES);
  }

  createPlayer() {
    return createPlayerSystem(this);
  }

  createEnemies() {
    return createEnemiesSystem(this);
  }

  createIcyRoomTraps() {
    return createIcyRoomTrapsSystem(this);
  }

  spawnEnemy(enemyData, { summoned = false } = {}) {
    const factory = isBossOrBossMinionType(enemyData.type) ? createBossFactory : createEnemyFactory;
    return factory(this, enemyData, { summoned }, {
      animationKeys: ANIMATION_KEYS,
      enemyFrameKeys: ENEMY_FRAME_KEYS,
      enemyStrips: ENEMY_STRIPS,
      skeletonReviveChance: SKELETON_REVIVE_CHANCE,
    });
  }

  getEnemyDisplaySize(type) {
    return getEnemyDisplaySizeHelper(type);
  }

  getCampaignEnemyHealthMultiplier() {
    return getCampaignEnemyHealthMultiplierSystem(this);
  }

  getCampaignEnemySpeedMultiplier() {
    return getCampaignEnemySpeedMultiplierSystem(this);
  }

  getBossCurseMultiplier() {
    return getBossCurseMultiplierSystem(this);
  }

  maybeSpawnChest() {
    maybeSpawnChestSystem(this, CHEST_TYPES);
  }

  chooseChestType() {
    return chooseChestTypeSystem();
  }

  openChest() {
    openChestSystem(this, CHEST_TYPES, CHEST_STRIPS);
  }

  dropChestLoot(lootX, lootY, chestType = "dungeon") {
    dropChestLootSystem(this, lootX, lootY, chestType);
  }

  findSafePickupPosition(preferredX, preferredY, radius = 24) {
    return findSafePoint({
      preferredX,
      preferredY,
      anchorX: this.chestSprite?.x ?? preferredX,
      anchorY: this.chestSprite?.y ?? preferredY,
      radius,
      bounds: this.getWalkableBounds(),
      isSafe: (x, y, safeRadius) => this.isPickupPositionSafe(x, y, safeRadius),
    });
  }

  isPickupPositionSafe(x, y, radius = 24) {
    const bounds = this.getWalkableBounds();
    if (!isPointInBounds(x, y, bounds, radius)) {
      return false;
    }

    const blockedByObstacle = this.getGroupChildren(this.obstacleGroup).some((block) => {
      const obstacleBounds = getObjectBounds(block, radius + 8);
      return isPointInsideRect(x, y, obstacleBounds);
    });
    if (blockedByObstacle) return false;

    if (this.chestSprite?.active) {
      const chestHalfWidth = Math.max(70, this.chestSprite.displayWidth * 0.62) + radius;
      const chestHalfHeight = Math.max(78, this.chestSprite.displayHeight * 0.72) + radius;
      if (isPointInsideRect(x, y, {
        left: this.chestSprite.x - chestHalfWidth,
        right: this.chestSprite.x + chestHalfWidth,
        top: this.chestSprite.y - chestHalfHeight,
        bottom: this.chestSprite.y + chestHalfHeight,
      })) return false;
    }

    return true;
  }

  createChestLootByType(chestType, lootRoll, x, y) {
    return createChestLootByTypeSystem(this, chestType, lootRoll, x, y);
  }

  applyCursedChestPenalty() {
    applyCursedChestPenaltySystem(this);
  }

  rollCoinAmount(min = GAME_RULES.coinDropMin, max = GAME_RULES.coinDropMax) {
    return rollCoinAmountSystem(min, max);
  }

  spawnPotion(x, y) {
    return spawnPotionSystem(this, x, y);
  }

  spawnTempHeartPickup(x, y, amount = 0.5) {
    return spawnTempHeartPickupSystem(this, x, y, amount);
  }

  spawnGreenHeartPickup(x, y, amount = 0.5) {
    return spawnGreenHeartPickupSystem(this, x, y, amount);
  }

  spawnTarotPickup(x, y) {
    return spawnTarotPickupSystem(this, x, y);
  }

  spawnPreparedTarotPickup(x, y, rarities = []) {
    return spawnPreparedTarotPickupSystem(this, x, y, rarities);
  }

  spawnCurrency(currency, amount, x, y) {
    return spawnCurrencySystem(this, currency, amount, x, y);
  }

  createEventRoomChoices() {
    return createEventRoomChoicesSystem(this, CHALLENGE_VARIANTS, CHALLENGE_DASH_RULES);
  }

  getEventRoomChoices(roomType) {
    return getEventRoomChoicesSystem(this, roomType, CHALLENGE_VARIANTS, CHALLENGE_DASH_RULES);
  }

  createEventChoice(choice, position) {
    return createEventChoiceSystem(this, choice, position);
  }

  startChallengeRoom(variant = Phaser.Utils.Array.GetRandom(CHALLENGE_VARIANTS)) {
    return startChallengeRoomSystem(this, variant, CHALLENGE_VARIANTS, CHALLENGE_DASH_RULES);
  }

  updateChallengeRoom(time) {
    return updateChallengeRoomSystem(this, time);
  }

  spawnChallengeWave() {
    return spawnChallengeWaveSystem(this, ENEMY_TYPES, CHALLENGE_VARIANTS[0]);
  }

  shouldMakeChallengeEnemyElite(index) {
    return shouldMakeChallengeEnemyEliteSystem(this, index);
  }

  createChallengeSpawnIndicator(x, y, onSpawn) {
    return createChallengeSpawnIndicatorSystem(this, x, y, onSpawn);
  }

  completeChallengeRoom() {
    return completeChallengeRoomSystem(this);
  }

  resolveEventChoice(marker) {
    return resolveEventChoiceSystem(this, marker);
  }

  spawnRewardChestAt(x, y) {
    if (this.chestSprite?.active) return;
    const chestType = this.chooseChestType();
    const chestConfig = CHEST_TYPES[chestType] ?? CHEST_TYPES.dungeon;
    this.chestSprite = this.add.image(x, y, chestConfig.icon).setDisplaySize(chestConfig.displayWidth, chestConfig.displayHeight).setDepth(8);
    this.chestSprite.isOpened = false;
    this.chestSprite.chestType = chestType;
    this.chestSprite.frameKeys = null;
    this.chestSprite.gameDisplayWidth = chestConfig.displayWidth;
    this.chestSprite.gameDisplayHeight = chestConfig.displayHeight;
  }

  takeCursedRareCard() {
    return takeCursedRareCardSystem(this);
  }

  takeBloodPriceReward() {
    return takeBloodPriceRewardSystem(this);
  }

  takeBossHungerReward() {
    return takeBossHungerRewardSystem(this);
  }

  takeFragilePowerReward() {
    return takeFragilePowerRewardSystem(this);
  }

  takeDarkSpeedReward() {
    return takeDarkSpeedRewardSystem(this);
  }

  takePoisonGiftReward() {
    return takePoisonGiftRewardSystem(this);
  }

  cleanseCurse() {
    return cleanseCurseSystem(this);
  }

  takeMeditateReward() {
    return takeMeditateRewardSystem(this);
  }

  takeRepairSoulReward() {
    return takeRepairSoulRewardSystem(this);
  }

  takeFocusBuildReward() {
    return takeFocusBuildRewardSystem(this);
  }

  upgradeRandomCard() {
    return upgradeRandomCardSystem(this);
  }

  buyRestHeal() {
    if (this.coins < 10) {
      this.showFloatingText(this.player.x, this.player.y - 70, "NEED 10 COINS", "#ffd36b", 16);
      return;
    }
    this.coins -= 10;
    this.healPlayer(1);
  }

  createExit() {
    return createExitSystem(this);
  }

  revealEventExit({ announce = false } = {}) {
    return revealEventExitSystem(this, { announce });
  }

  movePlayer(time) {
    return movePlayerSystem(this, time);
  }

  keepPlayerInsideRoom() {
    const bounds = this.getWalkableBounds();
    this.player.x = Phaser.Math.Clamp(this.player.x, bounds.left + 24, bounds.right - 24);
    this.player.y = Phaser.Math.Clamp(this.player.y, bounds.top + 34, bounds.bottom - 34);
  }

  moveEnemies(time) {
    return moveEnemiesSystem(this, time);
  }

  isIcyEnemy(type) {
    return [
      "frostBladeWarrior",
      "frostPriest",
      "frozenKnight",
      "iceAxeTitan",
      "icebladeMaster",
      "iceWraith",
    ].includes(type);
  }

  updateIcyEnemyAi(enemy, time, distance) {
    return updateIcyEnemyAiSystem(this, enemy, time, distance);
  }

  tryFrostPriestCrystals(enemy, time) {
    return tryFrostPriestCrystalsSystem(this, enemy, time);
  }

  spawnFrostPriestCrystal(enemy, x, y) {
    return spawnFrostPriestCrystalSystem(this, enemy, x, y);
  }

  tryIceWraithTeleportShot(enemy, time, distance) {
    return tryIceWraithTeleportShotSystem(this, enemy, time, distance);
  }

  updateEnemyAi(enemy, time, distance) {
    return updateEnemyAiSystem(this, enemy, time, distance);
  }

  tryHellKillerProjectile(enemy, time, distance) {
    return tryHellKillerProjectileSystem(this, enemy, time, distance);
  }

  fireEnemyProjectile(enemy, texture, angle, speed, size) {
    return fireEnemyProjectileSystem(this, enemy, texture, angle, speed, size);
  }

  updateInfernalBossAi(enemy, time, distance) {
    return updateInfernalBossAiSystem(this, enemy, time, distance, { phaseTwoTrigger: INFERNAL_PHASE_TWO_TRIGGER });
  }

  triggerInfernalPhaseTwo(enemy) {
    return triggerInfernalPhaseTwoSystem(this, enemy, {
      animationKeys: ANIMATION_KEYS,
      enemyStrips: ENEMY_STRIPS,
      phaseTwoHeal: INFERNAL_PHASE_TWO_HEAL,
    });
  }

  tryInfernalBossAttack(enemy, time, distance) {
    return tryInfernalBossAttackSystem(this, enemy, time, distance);
  }

  fireAnimatedEnemyProjectile(enemy, texture, framePrefix, angle, speed, size, lifetime) {
    return fireAnimatedEnemyProjectileSystem(this, enemy, texture, framePrefix, angle, speed, size, lifetime);
  }

  getFrameKeys(prefix) {
    const keys = [];
    for (let index = 0; this.textures.exists(`${prefix}${index}`); index += 1) {
      keys.push(`${prefix}${index}`);
    }
    return keys;
  }

  castHellLanceRain(enemy, count) {
    return castHellLanceRainSystem(this, enemy, count);
  }

  castInfernalChain(enemy, animationName) {
    return castInfernalChainSystem(this, enemy, animationName);
  }

  castInfernalTornadoAttack(enemy, count) {
    return castInfernalTornadoAttackSystem(this, enemy, count);
  }

  spawnInfernalTornado(enemy) {
    return createInfernalTornadoBoss(this, enemy, INFERNAL_MAX_TORNADOES);
  }

  updateFrostTyrantAi(enemy, time, distance) {
    return updateFrostTyrantAiSystem(this, enemy, time, distance, { iceTrigger: FROST_TYRANT_ICE_TRIGGER });
  }

  tryFrostTyrantAttack(enemy, time, distance) {
    return tryFrostTyrantAttackSystem(this, enemy, time, distance);
  }

  triggerFrostTyrantIce(enemy) {
    return triggerFrostTyrantIceSystem(this, enemy);
  }

  spawnMatriarchSoul(sourceBoss) {
    return spawnMatriarchSoulBoss(this, sourceBoss, FROST_TYRANT_SOUL_HEALTH);
  }

  updateMatriarchSoulAi(enemy, time) {
    return updateMatriarchSoulAiSystem(this, enemy, time);
  }

  castMatriarchShardBurst(enemy) {
    return castMatriarchShardBurstSystem(this, enemy);
  }

  castMatriarchBlizzard(enemy) {
    return castMatriarchBlizzardSystem(this, enemy);
  }

  unfreezeFrostTyrant(boss) {
    return unfreezeFrostTyrantBoss(this, boss);
  }

  updateBossAi(enemy, time, distance) {
    return updateBossAiSystem(this, enemy, time, distance);
  }

  getEnemySpeed(enemy, time) {
    return getEnemySpeedSystem(enemy, time);
  }

  moveEnemyByMode(enemy, mode, speed, time) {
    return moveEnemyByModeSystem(this, enemy, mode, speed, time);
  }

  updateProjectiles(time) {
    updateProjectilesSystem(this, time);
  }

  createEnemyProjectileImpact(projectile) {
    return createEnemyProjectileImpactSystem(this, projectile);
  }

  updateIcyHazards(time) {
    return updateIcyHazardsSystem(this, time);
  }

  spawnFallingIceSpike() {
    return spawnFallingIceSpikeSystem(this);
  }

  updateInfernalTornado(tornado) {
    return updateInfernalTornadoSystem(this, tornado);
  }

  updateHeroProjectile(projectile) {
    updateHeroProjectileSystem(this, projectile);
  }

  attack() {
    return attackSystem(this, { rivenStrips: RIVEN_PROJECTILE_STRIPS });
  }

  fireHeroProjectile(angle) {
    return fireHeroProjectilePlayerSystem(this, angle, {
      noxStrips: NOX_PROJECTILE_STRIPS,
      rivenStrips: RIVEN_PROJECTILE_STRIPS,
    });
  }

  castSkill(time) {
    return castSkillSystem(this, time);
  }

  castNoxSkill() {
    return castNoxSkillSystem(this, { noxStrips: NOX_PROJECTILE_STRIPS });
  }

  fireNoxShardProjectile(angle) {
    return fireNoxShardProjectileSystem(this, angle, { noxStrips: NOX_PROJECTILE_STRIPS });
  }

  createNoxAnimatedEffect({ prefix, strip, x, y, width, height, rotation = 0, depth = 11, selfAnimate = false }) {
    return createNoxAnimatedEffectSystem(this, { prefix, strip, x, y, width, height, rotation, depth, selfAnimate });
  }

  createNoxHitImpact(x, y, rotation = 0) {
    return createNoxHitImpactSystem(this, x, y, rotation, { noxStrips: NOX_PROJECTILE_STRIPS });
  }

  createRivenAnimatedEffect(options) {
    return createRivenAnimatedEffectSystem(this, options);
  }

  createRivenHitImpact(x, y, rotation = 0) {
    return createRivenHitImpactSystem(this, x, y, rotation, { rivenStrips: RIVEN_PROJECTILE_STRIPS });
  }

  createHeroHitImpact(x, y, rotation = 0, effect = this.heroId) {
    return createHeroHitImpactSystem(this, x, y, rotation, effect);
  }

  castRivenSkill() {
    return castRivenSkillSystem(this, { rivenStrips: RIVEN_PROJECTILE_STRIPS });
  }

  getSkillDamage(enemy, multiplier) {
    return getSkillDamageSystem(this, enemy, multiplier);
  }

  castBurningWave() {
    return castBurningWaveSystem(this);
  }

  roll(time) {
    return rollSystem(this, time, {
      noxStrips: NOX_PROJECTILE_STRIPS,
      rivenStrips: RIVEN_PROJECTILE_STRIPS,
    });
  }

  getEffectiveRollCooldown() {
    return getEffectiveRollCooldownSystem(this);
  }

  getChallengeDashBlockReason(time) {
    return getChallengeDashBlockReasonSystem(this, time);
  }

  getChallengeDashStatusText(time) {
    return getChallengeDashStatusTextSystem(this, time);
  }

  tryUseDashCardEffect(key, time, cooldown = 5000) {
    return tryUseDashCardEffectSystem(this, key, time, cooldown);
  }

  createInfernalDashTrail() {
    return createInfernalDashTrailSystem(this);
  }

  createCrystalStepTrail() {
    return createCrystalStepTrailSystem(this);
  }

  createFrozenAfterimage() {
    return createFrozenAfterimageSystem(this);
  }

  updateSpriteAnimations(time) {
    this.animateSprite(this.player, time);
    this.animateSprite(this.chestSprite, time);

    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (enemy?.isAlive) this.animateSprite(enemy, time);
    });
  }

  playHeroAnimation(name, { loop = true, lockMs = 0 } = {}) {
    return playHeroAnimationSystem(this, name, { loop, lockMs });
  }

  playEnemyAnimation(enemy, name, { loop = true, lockMs = 0 } = {}) {
    return playEnemyAnimationSystem(this, enemy, name, { loop, lockMs }, ICY_MOVEMENT_LOOP_FRAMES);
  }

  playBossAnimation(boss, name, options = {}) {
    return playBossAnimationSystem(this, boss, name, options);
  }

  shouldUseIcyMovementLoop(enemy, name, loop) {
    return shouldUseIcyMovementLoopSystem(enemy, name, loop, ICY_MOVEMENT_LOOP_FRAMES);
  }

  getIcyMovementLoopKeys(enemy, name) {
    return getIcyMovementLoopKeysSystem(enemy, name, ICY_MOVEMENT_LOOP_FRAMES);
  }

  tryBossProjectile(enemy, time) {
    return tryBossProjectileSystem(this, enemy, time);
  }

  fireBossProjectile(enemy, time, angle) {
    return fireBossProjectileSystem(this, enemy, time, angle);
  }

  animateSprite(sprite, time) {
    advanceFrameAnimation(sprite, time);
  }

  keepSpriteInsideRoom(sprite, halfWidth, halfHeight) {
    keepInsideBounds(sprite, this.getWalkableBounds(), halfWidth, halfHeight);
  }

  getWalkableBounds() {
    return getWalkableBounds(this.layout);
  }

  resolveSpriteAgainstObstacles(sprite, halfWidth, halfHeight) {
    this.getGroupChildren(this.obstacleGroup).forEach((block) => {
      const bounds = {
        left: block.x - (block.collisionWidth ?? block.displayWidth) / 2,
        right: block.x + (block.collisionWidth ?? block.displayWidth) / 2,
        top: block.y - (block.collisionHeight ?? block.displayHeight) / 2,
        bottom: block.y + (block.collisionHeight ?? block.displayHeight) / 2,
      };
      const spriteBox = {
        left: sprite.x - halfWidth,
        right: sprite.x + halfWidth,
        top: sprite.y - halfHeight,
        bottom: sprite.y + halfHeight,
      };

      const isOverlapping =
        spriteBox.right > bounds.left &&
        spriteBox.left < bounds.right &&
        spriteBox.bottom > bounds.top &&
        spriteBox.top < bounds.bottom;

      if (!isOverlapping) return;

      const pushLeft = spriteBox.right - bounds.left;
      const pushRight = bounds.right - spriteBox.left;
      const pushUp = spriteBox.bottom - bounds.top;
      const pushDown = bounds.bottom - spriteBox.top;
      const smallestPush = Math.min(pushLeft, pushRight, pushUp, pushDown);

      if (smallestPush === pushLeft) sprite.x -= pushLeft;
      if (smallestPush === pushRight) sprite.x += pushRight;
      if (smallestPush === pushUp) sprite.y -= pushUp;
      if (smallestPush === pushDown) sprite.y += pushDown;
    });
  }

  checkPlayerInteractions() {
    return checkPlayerInteractionsSystem(this);
  }

  isPlayerTouchingExit() {
    return isPlayerTouchingExitSystem(this);
  }

  damageEnemy(enemy, damage, {
    canBurn = false,
    canCrit = false,
    canSlow = false,
    isBurn = false,
    isPoison = false,
    isBleed = false,
    isFrost = false,
    isSkill = false,
  } = {}) {
    if (!enemy?.isAlive || enemy.isReviving) return;
    if (enemy.invulnerable) {
      this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.55, "IMMUNE", "#9ee7ff", 16);
      return;
    }
    if (shouldFrozenKnightBlock(enemy, { isBurn, isPoison, isBleed, isFrost })) {
      this.playEnemyAnimation(enemy, "damaged", { loop: false, lockMs: 220 });
      this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.45, "BLOCK", "#c7efff", 16);
      return;
    }

    let finalDamage = damage;
    if (!isBurn && !isPoison && !isBleed && !isFrost && this.stats.crystalBlood) {
      finalDamage *= 1 + Math.min(this.tempHearts, 5) * 0.05;
    }
    if (!isBurn && !isPoison && !isBleed && !isFrost && this.stats.huntersMark && !enemy.hasTakenHeroHit) {
      finalDamage *= 1.5;
      enemy.hasTakenHeroHit = true;
    }
    if (!isBurn && !isBleed && enemy.isChilled) {
      if (this.stats.iceBreaker && !isPoison) {
        finalDamage *= 1.2;
      }
      if (this.stats.numbingVenom && isPoison) {
        finalDamage *= 1.2;
      }
    }

    const forcedCrit = canCrit && this.stats.perfectStrike && this.guaranteedCritCounter >= 5;
    const isCritical = canCrit && (forcedCrit || Math.random() < this.stats.critChance);
    const wasChilledForCrit = Boolean(enemy.isChilled);
    if (isCritical) {
      this.guaranteedCritCounter = 0;
      finalDamage *= this.stats.critMultiplier;
      if (this.stats.flameCrit && enemy.isBurning) {
        finalDamage *= 1.4;
        enemy.burnExpiresAt = Math.max(enemy.burnExpiresAt ?? 0, this.time.now + 3000);
      }
      if (wasChilledForCrit) {
        if (this.stats.iceBreaker) {
          this.extendEnemyChill(enemy, 1000);
        }
        if (this.stats.shatterCritical) {
          finalDamage *= 1.25;
        }
      }
      if (this.stats.executionFang && enemy.health / enemy.maxHealth <= 0.3) {
        finalDamage *= 1.6;
        this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.58, "EXECUTE", "#fff2df", 18);
      }
      if (this.stats.sharpRitual && this.time.now - this.lastSharpRitualAt > 1000) {
        this.lastSharpRitualAt = this.time.now;
        this.lastSkillAt = Math.max(0, this.lastSkillAt - 500);
      }
      if (this.stats.killerTempo) {
        this.applyKillerTempo();
      }
      if (this.stats.huntersMark && !enemy.hasBleedFromMark) {
        enemy.hasBleedFromMark = true;
        this.applyEnemyBleed(enemy);
      }
    }

    enemy.health -= finalDamage;
    this.showDamageNumber(enemy, finalDamage, { isCritical, isBurn });
    if (isCritical) {
      this.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.48, "CRIT!", "#ffd36b", 22);
    }
    if (isCritical || finalDamage >= this.stats.attackDamage * 1.5 || enemy.type === "boss" || enemy.type === "infernalBoss" || enemy.type === "frostTyrant") {
      this.cameras.main.shake(isCritical ? 150 : 110, isCritical ? 0.0055 : 0.0035);
    }
    if (tryTriggerBossPhaseFromDamageSystem(this, enemy, {
      frostTyrantIce: FROST_TYRANT_ICE_TRIGGER,
      infernalPhaseTwo: INFERNAL_PHASE_TWO_TRIGGER,
    })) {
      return;
    }

    enemy.setTint(0xff5f87);
    enemy.lastDamageAt = this.time.now;
    this.playEnemyAnimation(enemy, "damaged", { loop: false, lockMs: 220 });
    this.tweens.add({
      targets: enemy,
      scaleX: 1.08,
      scaleY: 1.08,
      yoyo: true,
      duration: 80,
    });

    if (enemy.health <= 0) {
      if (isCritical && wasChilledForCrit && this.stats.shatterCritical) {
        this.releaseIceShards(enemy, 3);
      }
      if (this.tryReviveEnemy(enemy)) {
        return;
      }

      this.defeatEnemy(enemy);
      return;
    }

    if (canSlow && this.stats.enemySlowOnHit > 0) {
      this.applyEnemySlow(enemy);
    }

    if (!isBurn && !isPoison && !isBleed && !isFrost && this.stats.frostNova) {
      this.frostNovaCounter = (this.frostNovaCounter ?? 0) + 1;
      const interval = this.stats.frostNovaAttackInterval ?? 6;
      if (this.frostNovaCounter >= interval) {
        this.frostNovaCounter = 0;
        this.createFrostNova(enemy.x, enemy.y, this.stats.frostNovaDamageRatio ?? 0.15);
      }
    }

    if (!isBurn && !isPoison && !isBleed && !isFrost && this.stats.chillChance > 0 && Math.random() < this.stats.chillChance) {
      this.applyEnemyChill(enemy);
    }

    if (!isBurn && canBurn && this.stats.burnChance > 0 && Math.random() < this.stats.burnChance) {
      this.applyEnemyBurn(enemy);
    }

    if (
      !isBurn &&
      !isPoison &&
      !isBleed &&
      this.stats.poisonChance > 0 &&
      Math.random() < this.stats.poisonChance
    ) {
      this.applyEnemyPoison(enemy);
    }
  }

  applyEnemySlow(enemy) {
    applyEnemySlowStatus(this, enemy);
  }

  getChillDuration() {
    return getChillDurationStatus(this);
  }

  extendEnemyChill(enemy, amount) {
    extendEnemyChillStatus(this, enemy, amount);
  }

  applyEnemyChill(enemy, duration = this.getChillDuration()) {
    applyEnemyChillStatus(this, enemy, duration);
  }

  createFrostNova(x, y, damageRatio = 0.15) {
    return createFrostNovaSystem(this, x, y, damageRatio);
  }

  releaseIceShards(enemy, count = 5) {
    return releaseIceShardsSystem(this, enemy, count);
  }

  createSteamBurst(enemy) {
    return createSteamBurstSystem(this, enemy);
  }

  applyEnemyBurn(enemy) {
    applyEnemyBurnStatus(this, enemy);
  }

  applyEnemyPoison(enemy) {
    applyEnemyPoisonStatus(this, enemy);
  }

  applyEnemyBleed(enemy) {
    applyEnemyBleedStatus(this, enemy);
  }

  applyKillerTempo() {
    if (this.killerTempoResetAt && this.time.now < this.killerTempoResetAt) return;
    this.stats.attackCooldown *= 0.85;
    this.killerTempoResetAt = this.time.now + 2000;
    this.showFloatingText(this.player.x, this.player.y - 54, "KILLER TEMPO", "#ffd36b", 16);
    this.time.delayedCall(2000, () => {
      this.stats.attackCooldown /= 0.85;
      this.killerTempoResetAt = 0;
    });
  }

  applyQuickHandsTempo() {
    if (this.quickHandsTempoResetAt && this.time.now < this.quickHandsTempoResetAt) return;
    this.stats.attackCooldown *= 0.9;
    this.quickHandsTempoResetAt = this.time.now + 2000;
    this.showFloatingText(this.player.x, this.player.y - 52, "QUICK HANDS", "#f5f0ff", 15);
    this.time.delayedCall(2000, () => {
      this.stats.attackCooldown /= 0.9;
      this.quickHandsTempoResetAt = 0;
    });
  }

  createAshExplosion(enemy) {
    return createAshExplosionSystem(this, enemy);
  }

  spreadBurn(enemy) {
    return spreadBurnSystem(this, enemy);
  }

  createPoisonCloud(x, y) {
    return createPoisonCloudSystem(this, x, y);
  }

  spreadPoison(enemy) {
    return spreadPoisonSystem(this, enemy);
  }

  showDamageNumber(enemy, amount, { isCritical = false, isBurn = false } = {}) {
    return showDamageNumberSystem(this, enemy, amount, { isCritical, isBurn });
  }

  showFloatingText(x, y, text, color = "#f7efff", fontSize = 16) {
    return showFloatingTextSystem(this, x, y, text, color, fontSize);
  }

  tryReviveEnemy(enemy) {
    return tryReviveEnemySystem(this, enemy, {
      boss: BOSS_REVIVE_HEALTH_RATIO,
      skeleton: SKELETON_REVIVE_HEALTH_RATIO,
    });
  }

  summonBossSkeletons(boss) {
    return summonBossSkeletonsSystem(this, boss);
  }

  defeatEnemy(enemy) {
    return defeatEnemySystem(this, enemy);
  }

  createIceWraithNova(x, y) {
    return createIceWraithNovaSystem(this, x, y);
  }

  grantBossCard() {
    return grantBossCardSystem(this);
  }

  takeEnemyHit(player, enemy) {
    return takeEnemyHitPlayerSystem(this, player, enemy, { hitInvulnerabilityMs: HIT_INVULNERABILITY_MS });
  }

  takeProjectileHit(damage, time) {
    return takeProjectileHitPlayerSystem(this, damage, time, { hitInvulnerabilityMs: HIT_INVULNERABILITY_MS });
  }

  collectPickup(player, pickup) {
    collectPickupSystem(this, pickup);
  }

  healPlayer(amount) {
    return healPlayerSystem(this, amount);
  }

  addTempHearts(amount) {
    return addTempHeartsSystem(this, amount);
  }

  addGreenHearts(amount) {
    return addGreenHeartsSystem(this, amount);
  }

  createShieldEcho() {
    return createShieldEchoSystem(this);
  }

  poisonAroundPlayer(sourceEnemy = null) {
    if (sourceEnemy?.isAlive) {
      this.applyEnemyPoison(sourceEnemy);
    }
    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, enemy.x, enemy.y);
      if (distance < 125) this.applyEnemyPoison(enemy);
    });
  }

  applyPlayerDamage(damage, sourceEnemy = null) {
    return applyPlayerDamagePlayerSystem(this, damage, sourceEnemy);
  }

  getIncomingDamage(damage) {
    return getIncomingDamageSystem(damage, GAME_RULES.enemyHitDamage);
  }

  tryAvoidDamage(sourceEnemy = null) {
    return shouldAvoidDamage(this, sourceEnemy);
  }

  tryFrozenGuard() {
    if (!shouldTriggerFrozenGuard(this)) return;

    this.frozenGuardReadyAt = this.time.now + 15000;
    this.showFloatingText(this.player.x, this.player.y - 74, "FROZEN GUARD", "#9ee7ff", 16);
    this.getGroupChildren(this.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, enemy.x, enemy.y);
      if (distance < 145) this.applyEnemyChill(enemy);
    });
  }

  healToFull() {
    return healToFullSystem(this);
  }

  increaseMaxHearts(amount) {
    return increaseMaxHeartsSystem(this, amount);
  }

  decreaseMaxHearts(amount) {
    return decreaseMaxHeartsSystem(this, amount);
  }

  enableProjectileAttack() {
    return enableProjectileAttackSystem(this);
  }

  tryLeaveFloor() {
    return tryLeaveFloorSystem(this);
  }

  getRoomTypeAt(roomNumber) {
    return getRoomTypeAtSystem(this, roomNumber);
  }

  enterTunnel({ toBoss, roomType = "combat", onComplete }) {
    return enterTunnelSystem(this, { toBoss, roomType, onComplete });
  }

  showBossWarning() {
    const warning = this.add
      .text(512, 132, "WARNING: BOSS ROOM AHEAD", {
        fontFamily: "monospace",
        fontSize: "26px",
        color: "#ffcf6b",
        stroke: "#08090e",
        strokeThickness: 6,
      })
      .setOrigin(0.5)
      .setDepth(40)
      .setAlpha(0);

    this.cameras.main.shake(220, 0.004);
    this.tweens.add({
      targets: warning,
      alpha: 1,
      scaleX: 1.08,
      scaleY: 1.08,
      yoyo: true,
      repeat: 2,
      duration: 360,
      ease: "Sine.easeInOut",
    });
  }

  getTunnelTexture(toBoss) {
    return getTunnelTextureSystem(this, toBoss, SPECIAL_TUNNEL_TEXTURES);
  }

  shouldSpawnTraveler(toBoss) {
    return toBoss;
  }

  createTunnelPlayer() {
    return createTunnelPlayerSystem(this);
  }

  createTravelerShop() {
    return createTravelerShopSystem(this, TRAVELER_KEYS);
  }

  createTunnelExit() {
    this.tunnelExitZone = this.add
      .rectangle(890, 332, 88, 250, 0x6b4bb5, 0.24)
      .setStrokeStyle(2, 0xa988ff, 0.9)
      .setDepth(6);
    this.tunnelExitLabel = this.add
      .text(890, 184, "NEXT", {
        fontFamily: "monospace",
        fontSize: "14px",
        color: "#d9ccff",
      })
      .setOrigin(0.5)
      .setDepth(30);
  }

  updateTunnel(time) {
    return updateTunnelSystem(this, time);
  }

  moveTunnelPlayer(time) {
    return moveTunnelPlayerSystem(this, time);
  }

  checkTravelerInteraction() {
    return checkTravelerInteractionSystem(this);
  }

  openShop() {
    return openShopSystem(this);
  }

  getTravelerCards() {
    return this.rollTravelerCards();
  }

  rollTravelerCards({ improved = false } = {}) {
    return rollTravelerCardsSystem(this, { improved });
  }

  pickWeightedTravelerCard(pool, selectedCards, improved = false) {
    return pickWeightedTravelerCardSystem(this, pool, selectedCards, improved);
  }

  rerollShop(currency) {
    return rerollShopSystem(this, currency);
  }

  closeShop() {
    return closeShopSystem(this);
  }

  buyShopCard(cardId) {
    return buyShopCardSystem(this, cardId);
  }

  getEligibleTarotCards(sourceCards = TAROT_CARDS) {
    return getEligibleTarotCardsSystem(this, sourceCards);
  }

  getCardMaxLevel(card) {
    return getCardMaxLevelSystem(card);
  }

  prepareCardForOffer(card) {
    return prepareCardForOfferSystem(this, card);
  }

  getGenericUpgradeDescription(card, level) {
    return getGenericUpgradeDescriptionSystem(this, card, level);
  }

  applyGenericCardUpgrade(card, level) {
    return applyGenericCardUpgradeSystem(this, card, level);
  }

  applyChosenCard(card, source = "Tarot") {
    return applyChosenCardSystem(this, card, source);
  }

  showCardRewardBanner({ kicker, title, description, color = "#f7efff" }) {
    return showCardRewardBannerSystem(this, { kicker, title, description, color });
  }

  toRoman(value) {
    return toRomanSystem(value);
  }

  applyCardSynergy(card) {
    return applyCardSynergySystem(this, card);
  }

  applyMixedIceSynergies() {
    return applyMixedIceSynergiesSystem(this);
  }

  checkTunnelExit() {
    return checkTunnelExitSystem(this);
  }

  finishTunnel() {
    return finishTunnelSystem(this);
  }

  offerTarotChoice({ advanceFloor = true } = {}) {
    return offerTarotChoiceSystem(this, { advanceFloor });
  }

  drawUi() {
    this.uiText = this.add
      .text(22, 16, "", {
        fontFamily: "monospace",
        fontSize: "18px",
        color: "#f5f0ff",
      })
      .setDepth(30);

    this.helpText = this.add
      .text(22, 592, "WASD move   LMB attack   E skill   Shift dash   Clear room -> exit", {
        fontFamily: "monospace",
        fontSize: "15px",
        color: "#bdb5d9",
      })
      .setDepth(30);
  }

  updateUi() {
    if (!this.uiText) return;
    const aliveEnemies = this.getAliveEnemyCount();
    const activeBoss = this.getActiveBoss();
    const eventLabel = getSpecialRoomLabel(this.layout?.roomType);
    const roomLabel = this.isBossRoom()
      ? "Boss"
      : (eventLabel ?? `Room ${this.room}/${this.floorPlan.roomCount}`);
    const levelLabel = this.levelId === "icy" ? "Icy" : this.levelId === "hell" ? "Hell" : "Crypt";
    const stageLabel = this.levelSequence.length > 1
      ? `Stage ${this.stageIndex + 1}/${this.levelSequence.length}  `
      : "";
    this.uiText.setText(
      `${stageLabel}${levelLabel} ${this.floor}/${GAME_RULES.floorsPerLevel}   ${roomLabel}   Enemies ${aliveEnemies}`
    );
    const nextStats = {
      floor: this.floor,
      levelId: this.levelId,
      heroId: this.heroId,
      stage: this.stageIndex + 1,
      stageCount: this.levelSequence.length,
      room: this.room,
      roomCount: this.floorPlan.roomCount,
      roomTypes: this.floorPlan.roomTypes ?? [],
      currentRoomType: this.layout?.roomType ?? this.getCurrentRoomType(),
      boss: Boolean(activeBoss),
      bossType: activeBoss?.type === "frostTyrant" ? "icy" : activeBoss?.type === "infernalBoss" ? "hell" : "skeleton",
      bossName: activeBoss ? this.getEnemyName(activeBoss.type) : "",
      bossHealth: activeBoss ? Math.max(0, Number(activeBoss.health.toFixed(2))) : 0,
      bossMaxHealth: activeBoss?.maxHealth ?? 0,
      hearts: this.hearts,
      maxHearts: this.maxHearts,
      tempHearts: this.tempHearts,
      greenHearts: this.greenHearts,
      coins: this.coins,
      gems: this.gems,
      enemies: aliveEnemies,
      speed: Math.round(this.stats.speed),
      attackCooldown: Math.round(this.stats.attackCooldown),
      damage: Number(this.stats.attackDamage.toFixed(2)),
      synergies: {
        fire: this.stats.fireCards,
        blueHeart: this.stats.blueHeartCards,
        crit: this.stats.critCards,
        poison: this.stats.poisonCards,
        ice: this.stats.iceCards,
      },
      critChance: Math.round(this.stats.critChance * 100),
      dodgeChance: Math.round(Math.max(0, this.stats.dodgeChance ?? 0) * 100),
      skillCooldown: Math.round(this.stats.skillCooldown),
      skillCooldownRemaining: Math.max(
        0,
        Math.ceil((this.stats.skillCooldown - (this.time.now - this.lastSkillAt)) / 100) / 10
      ),
      projectileAttack: this.hasProjectileAttack,
    };
    const statsKey = JSON.stringify(nextStats);

    if (this.lastStatsKey !== statsKey) {
      this.lastStatsKey = statsKey;
      this.callbacks.onStatsChange?.(nextStats);
    }
  }

  createRunSummary(extra = {}) {
    return createRunSummarySystem(this, extra);
  }

  winRun() {
    return winRunSystem(this);
  }

  advanceCampaignStage() {
    return advanceCampaignStageSystem(this);
  }

  endGame(reason = "HP reached zero") {
    this.isGameOver = true;
    this.physics.pause();
    this.playHeroAnimation("death", { loop: false, lockMs: 900 });
    this.callbacks.onRunComplete?.(this.createRunSummary({
      outcome: "death",
      title: "Game Over",
      deathReason: reason,
    }));
    this.add
      .text(512, 300, "Game Over", {
        fontFamily: "monospace",
        fontSize: "46px",
        color: "#ff8ca5",
      })
      .setOrigin(0.5)
      .setDepth(40);
  }
}
