import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  // preload() {
  //   this.load.image('taikodrummaster', '/assets/pics/taikodrummaster.jpg');
  // }

  create() {
    this.scene.start('PreloaderScene');
    // this.add.image(400, 300, 'taikodrummaster');
  }
}
