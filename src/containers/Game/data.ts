/**
 * Grid schema
 *
 *   C C C C C
 * R 0 0 0 0 0
 * R 0 1 1 1 0
 * R 0 1 0 1 0
 * R 0 1 1 1 0
 * R 0 0 0 0 0
 */

// Empty grid ([row[col]])
const INIT = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

// Game levels ([row[col]])
const LEVEL = [
  [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ],
  [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
];

const START_TITLE = 'switches';
const RUNNING_TITLE = 'tap a switch';
const VICTORY_TITLE = 'victory';
const ABORT_TITLE = 'abort';
const RESTART_TITLE = 'restart';

export default {
  INIT,
  LEVEL,
  START_TITLE,
  RUNNING_TITLE,
  VICTORY_TITLE,
  ABORT_TITLE,
  RESTART_TITLE,
};
