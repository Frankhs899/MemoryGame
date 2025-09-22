import Phaser from 'phaser';

export class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene');
  }

  preload() {
    // Barra de carga
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const loadingText = this.make
      .text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Cargando...',
        style: { font: '20px monospace', fill: '#ffffff' },
      })
      .setOrigin(0.5, 0.5);
    const percentText = this.make
      .text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: { font: '18px monospace', fill: '#ffffff' },
      })
      .setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      this.scene.start('GameScene');
    });

    // Carga de assets
    this.load.image('card_back', 'assets/card_back.svg');
    for (let i = 1; i <= 6; i++) {
      this.load.image(`card_face_${i}`, `assets/card_face_${i}.svg`);
    }
  }
}
