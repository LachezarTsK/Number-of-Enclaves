
public class Solution {

    private static final int WATER = 0;
    private static final int LAND = 1;
    private static final int UPDATE_AS_OPEN_LAND = 2;
    private int rows;
    private int columns;

    public int numEnclaves(int[][] grid) {
        rows = grid.length;
        columns = grid[0].length;
        markAllAreasOfOpenLand(grid);
        int countNumberOfLandEnclaves = 0;

        for (int r = 1; r < rows - 1; r++) {
            for (int c = 1; c < columns - 1; c++) {
                if (grid[r][c] == LAND) {
                    countNumberOfLandEnclaves++;
                }
            }
        }
        return countNumberOfLandEnclaves;
    }

    public void markAllAreasOfOpenLand(int[][] grid) {
        for (int r = 0; r < rows; r++) {
            if (grid[r][0] == LAND) {
                markOpenLand(grid, r, 0);
            }
            if (grid[r][columns - 1] == LAND) {
                markOpenLand(grid, r, columns - 1);
            }
        }

        for (int c = 0; c < columns; c++) {
            if (grid[0][c] == LAND) {
                markOpenLand(grid, 0, c);
            }
            if (grid[rows - 1][c] == LAND) {
                markOpenLand(grid, rows - 1, c);
            }
        }
    }

    private void markOpenLand(int[][] grid, int r, int c) {

        grid[r][c] = UPDATE_AS_OPEN_LAND;
        if (r - 1 >= 0 && grid[r - 1][c] == LAND) {
            markOpenLand(grid, r - 1, c);
        }
        if (r + 1 < rows && grid[r + 1][c] == LAND) {
            markOpenLand(grid, r + 1, c);
        }
        if (c - 1 >= 0 && grid[r][c - 1] == LAND) {
            markOpenLand(grid, r, c - 1);
        }
        if (c + 1 < columns && grid[r][c + 1] == LAND) {
            markOpenLand(grid, r, c + 1);
        }
    }
}
