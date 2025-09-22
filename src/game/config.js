import Phaser from 'phaser';
import { BootScene } from '../scenes/BootScene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene],
  parent: 'phaser-game',
};
