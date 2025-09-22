import Phaser from 'phaser';
import { BootScene } from '../scenes/BootScene';
import { PreloaderScene } from '../scenes/PreloaderScene';
import { GameScene } from '../scenes/GameScene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, PreloaderScene, GameScene],
  parent: 'phaser-game',
};
