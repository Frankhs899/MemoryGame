import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.cameras.main.setBackgroundColor('#24252a');

    const cardTypes = Array.from({ length: 6 }, (_, i) => `card_face_${i + 1}`);
    const deck = [...cardTypes, ...cardTypes];
    Phaser.Utils.Array.Shuffle(deck);

    const gridRows = 3;
    const gridCols = 4;
    const cardWidth = 100;
    const cardHeight = 150;
    const cardSpacing = 20;
    const offsetX =
      (this.cameras.main.width - gridCols * (cardWidth + cardSpacing)) / 2 +
      cardWidth / 2;
    const offsetY =
      (this.cameras.main.height - gridRows * (cardHeight + cardSpacing)) / 2 +
      cardHeight / 2;

    this.cards = this.add.group();

    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const x = offsetX + col * (cardWidth + cardSpacing);
        const y = offsetY + row * (cardHeight + cardSpacing);

        const card = this.add.sprite(x, y, 'card_back');
        card.setInteractive();
      }
    }
  }
}
