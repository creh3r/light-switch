import React from 'react';
import Tile from '../Tile';

type GridProps = {
  data: number[][],
  clickHandler: (coord: number[]) => void,
};

/**
 * Render a grid row
 *
 * @param row - The current row
 * @param rowIndex - The index of the current row
 * @param clickHandler - The click handler to pass to a tile
 */
function renderRow(row: number[], rowIndex: number, clickHandler: (coord: number[]) => void) {
  return (
    <div className="grid__row" key={rowIndex.toString()}>
      { row.map((col: number, columnIndex: number) => (
        <Tile
          key={columnIndex.toString()}
          isActive={!!col}
          clickHandler={() => clickHandler([rowIndex, columnIndex])}
        />
      ))}
    </div>
  );
}

/**
 * Render the game grid
 *
 * @param data - The game data as 2D array
 * @param clickHandler - The click handler
 */
function Grid({ data, clickHandler }: GridProps) {
  return (
    <div className="grid">
      <div className="grid__inner">
        { data.map((row: number[], rowIndex: number) => renderRow(row, rowIndex, clickHandler)) }
      </div>
    </div>
  );
}

export default Grid;
