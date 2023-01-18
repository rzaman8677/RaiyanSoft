import java.util.ArrayList;
public class NumberPuzzle {
	private int[][] copiedPuzzle;
	NumberPuzzle(int[][] nums){
		copiedPuzzle = new int[3][3];
		int rowNum = 0;
		for(int[]row: nums) {
			int colNum = 0;
			for(int item: row) {
				copiedPuzzle[rowNum][colNum] = item;
				colNum+=1;
			}
			rowNum+=1;
		}
	}
	
	public int getNum(int row, int column) {
		return copiedPuzzle[row-1][column-1];
	}
	
	public int emptyRow() {
		int zeroRow = 0;
		int row = 0;
		for(int[] rowNum: copiedPuzzle) {
			for(int item: rowNum) {
				if(item == 0) {
					zeroRow = row+1;
				}
			}
			row+=1;
		}
		return zeroRow;
	}
	
	public int emptyCol() {
		int zeroCol = 0;
		for(int[] rowNum: copiedPuzzle) {
			int col = 0;
			for(int item: rowNum) {
				if(item == 0) {
					zeroCol = col+1;
				}
				col+=1;
			}
		}
		return zeroCol;
	}
	public boolean solved() {
		boolean solved = true;
		for(int row = 0; row < 3; row++) {
			for(int col = 0; col < 3; col++) {
				int actualRow = row + 1;
				int actualCol = col + 1;
				int actualVal = 0;
				if(actualRow == 1) {
					actualVal = 0 + actualCol;
				} else if(actualRow == 2) {
					actualVal = 3 + actualCol;
				} else if(actualRow == 3){
					actualVal = 6 + actualCol;
				}
				if(!(copiedPuzzle[row][col] == actualVal)) {
					solved = false;
				}
			}
		}
		return solved;
	}
	public NumberPuzzle slide(String dir) {
		int[][] newCopiedPuzzle = new int[3][3];
		if(canSlide(dir)) {
			int rowNum = 0;
			for(int[]row: copiedPuzzle) {
				int colNum = 0;
				for(int item: row) {
					newCopiedPuzzle[rowNum][colNum] = item;
					colNum+=1;
				}
				rowNum+=1;
			}
			if(dir.equals("U")) {
				newCopiedPuzzle[emptyRow()-1][emptyCol()-1] = copiedPuzzle[emptyRow()][emptyCol()-1];
				newCopiedPuzzle[emptyRow()][emptyCol()-1] = copiedPuzzle[emptyRow()-1][emptyCol()-1];
			} else if(dir.equals("D")) {
				newCopiedPuzzle[emptyRow()-1][emptyCol()-1] = copiedPuzzle[emptyRow()-2][emptyCol()-1];
				newCopiedPuzzle[emptyRow()-2][emptyCol()-1] = copiedPuzzle[emptyRow()-1][emptyCol()-1];
			} else if(dir.equals("L")) {
				newCopiedPuzzle[emptyRow()-1][emptyCol()-1] = copiedPuzzle[emptyRow()-1][emptyCol()];
				newCopiedPuzzle[emptyRow()-1][emptyCol()] = copiedPuzzle[emptyRow()-1][emptyCol()-1];
			} else if(dir.equals("R")) {
				newCopiedPuzzle[emptyRow()-1][emptyCol()-1] = copiedPuzzle[emptyRow()-1][emptyCol()-2];
				newCopiedPuzzle[emptyRow()-1][emptyCol()-2] = copiedPuzzle[emptyRow()-1][emptyCol()-1];
			} 
		}
		NumberPuzzle newPuzzle = new NumberPuzzle(newCopiedPuzzle);
		return newPuzzle;
	}
	public boolean canSlide(String dir) {
		if(!(dir.equals("U") || dir.equals("D") || dir.equals("R") || dir.equals("L"))) {
			return false;
		}
		else if(dir.equals("U")) {
			if(emptyRow() == 3) {
				return false;
			} else {
				return true;
			}
		} else if(dir.equals("D")){
			if(emptyRow()==1) {
				return false;
			} else {
				return true;
			}
		} else if(dir.equals("R")) {
			if(emptyCol() == 1) {
				return false;
			} else {
				return true;
			}
		} else {
			if(emptyCol() == 3) {
				return false;
			} else {
				return true;
			}
		}
	}
	public boolean equals(NumberPuzzle other) {
		boolean equal = true;
		for(int rows = 1; rows < 4; rows++) {
			for(int cols = 1; cols < 4; cols++) {
				if(!(other.getNum(rows, cols) == getNum(rows, cols))) {
					equal = false;
				}
			}
		}
		return equal;
	}
    public String solveNumberPuzzle(ArrayList<NumberPuzzle> 
	restricted, int maxMoves) {
		if(solved()) {
			return "";
		} 
        if(maxMoves == 0) {
            return null;
        }
        ArrayList<NumberPuzzle> newRestricted = new ArrayList<NumberPuzzle>();
        for(NumberPuzzle puzzle: restricted) {
            newRestricted.add(puzzle);
        }
        newRestricted.add(this);
        if(canSlide("U")) {
            NumberPuzzle newPuzzle = slide("U");
            if(!(newRestricted.contains(newPuzzle))) {
                String result = newPuzzle.solveNumberPuzzle(newRestricted, maxMoves-1);
                if(result != null) {
                    return "U" + result;
                }
            }
        }
        if(canSlide("D")) {
            NumberPuzzle newPuzzle = slide("D");
            if(!(newRestricted.contains(newPuzzle))) {
                String result = newPuzzle.solveNumberPuzzle(newRestricted, maxMoves-1);
                if(result != null) {
                    return "D" + result;
                }
            }
        }
        if(canSlide("L")) {
            NumberPuzzle newPuzzle = slide("L");
            if(!(newRestricted.contains(newPuzzle))) {
                String result = newPuzzle.solveNumberPuzzle(newRestricted, maxMoves-1);
                if(result != null) {
                    return "L" + result;
                }
            }
        }
        if(canSlide("R")) {
            NumberPuzzle newPuzzle = slide("R");
            if(!(newRestricted.contains(newPuzzle))) {
                String result = newPuzzle.solveNumberPuzzle(newRestricted, maxMoves-1);
                if(result != null) {
                    return "R" + result;
                }
            }
        }
        return null;
	}
}