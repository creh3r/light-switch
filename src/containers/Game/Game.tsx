import React from 'react';
import Grid from '../../components/Grid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

/**
 * Render the game container
 */
const Game = () => (
  <div className="game">
    <Header title="Header">
      <Button title="Reset" clickHandler={() => {}} />
    </Header>
    <Grid data={[[0, 1], [1, 0]]} clickHandler={() => {}} />
    <Footer>
      <Button title="New game" clickHandler={() => {}} />
    </Footer>
  </div>
);

export default Game;
