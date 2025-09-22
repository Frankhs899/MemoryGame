import Phaser from 'phaser';
import { BootScene } from '../scenes/BootScene';
import { PreloaderScene } from '../scenes/PreloaderScene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, PreloaderScene],
  parent: 'phaser-game',
};
