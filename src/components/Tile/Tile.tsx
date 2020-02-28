import React from 'react';

type TileProps = {
  isActive: boolean,
  clickHandler: () => void,
};

/**
 * Render a grid tile
 *
 * @param isActive - Check if current tile is active
 * @param children - The click handler
 */
function Tile({ isActive, clickHandler }: TileProps) {
  return (
    <div
      onClick={() => clickHandler()}
      onKeyDown={() => clickHandler()}
      role="button"
      aria-label="Tile"
      tabIndex={0}
      className={(isActive ? 'tile tile--isActive' : 'tile')}
    />
  );
}

export default Tile;
