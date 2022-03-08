
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    this.WATER = 0;
    this.LAND = 1;
    this.UPDATE_AS_OPEN_LAND = 2;

    this.rows = grid.length;
    this.columns = grid[0].length;
    markAllAreasOfOpenLand(grid);
    let countNumberOfLandEnclaves = 0;

    for (let r = 1; r < this.rows - 1; r++) {
        for (let c = 1; c < this.columns - 1; c++) {
            if (grid[r][c] === this.LAND) {
                countNumberOfLandEnclaves++;
            }
        }
    }
    return countNumberOfLandEnclaves;
};

/**
 * @param {number[][]} grid
 */
function markAllAreasOfOpenLand(grid) {
    for (let r = 0; r < this.rows; r++) {
        if (grid[r][0] === this.LAND) {
            markOpenLand(grid, r, 0);
        }
        if (grid[r][this.columns - 1] === this.LAND) {
            markOpenLand(grid, r, this.columns - 1);
        }
    }

    for (let c = 0; c < this.columns; c++) {
        if (grid[0][c] === this.LAND) {
            markOpenLand(grid, 0, c);
        }
        if (grid[this.rows - 1][c] === this.LAND) {
            markOpenLand(grid, this.rows - 1, c);
        }
    }
}

/**
 * @param {number[][]} grid
 * @param {number} r
 * @param {number} c
 */
function markOpenLand(grid, r, c) {

    grid[r][c] = this.UPDATE_AS_OPEN_LAND;
    if (r - 1 >= 0 && grid[r - 1][c] === this.LAND) {
        markOpenLand(grid, r - 1, c);
    }
    if (r + 1 < this.rows && grid[r + 1][c] === this.LAND) {
        markOpenLand(grid, r + 1, c);
    }
    if (c - 1 >= 0 && grid[r][c - 1] === this.LAND) {
        markOpenLand(grid, r, c - 1);
    }
    if (c + 1 < this.columns && grid[r][c + 1] === this.LAND) {
        markOpenLand(grid, r, c + 1);
    }
}
