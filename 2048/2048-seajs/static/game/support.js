define(function(require,exports,module){
    var support={};
    support.documentWidth = window.screen.availWidth;
    support.gridContainerWidth = 0.92 * support.documentWidth;
    support.cellSideLength = 0.18 * support.documentWidth;
    support.cellSpace = 0.04 * support.documentWidth;

    support.getPostTop=function(i,j) {
        return support.cellSpace + i * (support.cellSpace + support.cellSideLength);
    };

    support.getPostLeft=function(i,j) {
        return support.cellSpace + j * (support.cellSpace + support.cellSideLength);
    };

    support.getNumberBackgroundColor=function(number) {
        switch(number) {
            case 2:return "#eee4da";break;
            case 4:return "#ede0c8";break;
            case 8:return "#f2b179";break;
            case 16:return "#f59563";break;
            case 32:return "#f67c5f";break;
            case 64:return "#f65e3b";break;
            case 128:return "#edcf72";break;
            case 256:return "#edcc61";break;
            case 512:return "#9c0";break;
            case 1024:return "#33b5e5";break;
            case 2048:return "#09c";break;
            case 4096:return "#a6c";break;
            case 8192:return "#93c";break;
        }

        return 'black';
    };

    support.getNumberColor=function (number) {
        if (number <= 4) {
            return '#776e65';
        }
        return 'white';
    };

    support.nospace=function(board) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (board[i][j] === 0) {
                    return false;
                }
            }
        }
        return true;
    };

    support.canMoveLeft=function(board) {
        for (var i = 0; i < 4; i++) {
            for (var j = 1; j < 4; j++) {
                if (board[i][j] !== 0) {
                    if (board[i][j-1] === 0 || board[i][j-1] === board[i][j]) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    support.canMoveUp =function(board) {
        for (var j = 0; j < 4; j++) {
            for (var i = 1; i < 4; i++) {
                if (board[i][j] !== 0) {
                    if (board[i-1][j] === 0 || board[i-1][j] === board[i][j]) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    support.canMoveRight =function(board) {
        for (var i = 0; i < 4; i++) {
            for (var j = 2; j >= 0; j--) {
                if (board[i][j] !== 0) {
                    if (board[i][j+1] === 0 || board[i][j+1] === board[i][j]) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    support.canMoveDown =function(board) {
        for (var j = 0; j < 4; j++) {
            for (var i = 2; i >= 0; i--) {
                if (board[i][j] !== 0) {
                    if (board[i+1][j] === 0 || board[i+1][j] === board[i][j]) {
                        return true;
                    }
                }
            }
        }
    };

    support.noBlockHorizontal=function(row,col1,col2,board) {
        for (var i = col1 + 1; i < col2; i++) {
            if (board[row][i] !== 0) {
                return false;
            }
        }
        return true;
    };

    support.noBlockVertical=function(col,row1,row2,board) {
        for (var i = row1 + 1; i < row2; i++) {
            if (board[i][col] !== 0) {
                return false;
            }
        }
        return true;
    };

    support.nomove =function(board) {
        if (support.canMoveUp(board) || support.canMoveRight(board) || support.canMoveDown(board) || support.canMoveLeft(board)) {
            return false;
        }
        return true;
    };
    module.exports=support;
});