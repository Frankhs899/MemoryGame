import Phaser from 'phaser';
import { useEffect, useRef } from 'react';
import { config } from './game/config';

function PhaserGame() {
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current) return;

    const game = new Phaser.Game(config);
    gameRef.current = game;

    return () => {
      game.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id='phaser-game' />;
}

export default PhaserGame;
