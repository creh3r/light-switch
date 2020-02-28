import React, { useState, useCallback } from 'react';
import Grid from '../../components/Grid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Data from './data';

/**
 * Render the game board
 */
const Game = () => {
  const [gridData, setGridData] = useState(Data.INIT);
  const [gameTitle, setGameTitle] = useState(Data.START_TITLE);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [clicks, setClicks] = useState(0);

  /**
   * Get a random grid from data
   */
  function getRandomGrid() {
    return Data.LEVEL[Math.floor(Data.LEVEL.length * Math.random())];
  }

  /**
   * Reset the game
   */
  const resetGame = useCallback(() => {
    setClicks(0);
    setGameWon(false);
    setGameInProgress(true);
    setGridData(getRandomGrid());
    setGameTitle(Data.RUNNING_TITLE);
  }, []);

  /**
   * Check if every element in array was set truthy
   */
  function checkIfGameWon(currentGrid: number[][]) {
    const gridFlattened = currentGrid.flat();
    if (!(gridFlattened.some((v) => v !== gridFlattened[0]))) {
      setGameWon(true);
      setGameTitle(Data.VICTORY_TITLE);
    }
  }

  /**
   * Handle click on grid items
   */
  const clickTile = useCallback((coord: number[]) => {
    if (!gameWon && gameInProgress) {
      const row = coord[0];
      const col = coord[1];
      const currentGrid = gridData.map((arr) => arr.slice());

      // Check if row - 1 is out of bounds
      if (row - 1 >= 0) {
        currentGrid[row - 1][col] = 1 - currentGrid[row - 1][col];
      }

      // Check if row + 1 is out of bounds
      if (row + 1 <= currentGrid.length - 1) {
        currentGrid[row + 1][col] = 1 - currentGrid[row + 1][col];
      }

      // Check if col - 1 is out of bounds
      if (col - 1 >= 0) {
        currentGrid[row][col - 1] = 1 - currentGrid[row][col - 1];
      }

      // Check if col + 1 is out of bounds
      if (col + 1 <= currentGrid.length - 1) {
        currentGrid[row][col + 1] = 1 - currentGrid[row][col + 1];
      }

      // Toggle clicked tile
      currentGrid[row][col] = 1 - currentGrid[row][col];

      // Set grid to new calculated grid
      setGridData(currentGrid);

      checkIfGameWon(currentGrid);

      // Increase click count
      setClicks((c) => c + 1);
    }
  }, [gridData, gameWon, gameInProgress]);

  /**
   * Handle click on header button
   */
  const clickHeader = useCallback(() => {
    if (gameInProgress) {
      resetGame();
    }
  }, [gameInProgress, resetGame]);

  /**
   * Handle click on footer button
   */
  const clickFooter = useCallback(() => {
    resetGame();
  }, [resetGame]);

  return (
    <div className={`game ${gameWon ? 'game--won' : ''}`}>
      <Header title={gameTitle}>
        {
          gameInProgress && <Button title="Reset" clickHandler={clickHeader} theme="blank" />
        }
      </Header>
      <Grid data={gridData} clickHandler={clickTile} />
      <Footer>
        {
          !gameInProgress ? <Button title="New game" clickHandler={clickFooter} /> : `${clicks} buttons pressed`
        }
      </Footer>
    </div>
  );
};

export default Game;
