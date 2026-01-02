// https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

function isSolved(board) {

    const lines = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],

        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],

        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
    ];

    for (let line of lines){

        if(line[0] === 1 && line[1] === 1 && line[2] === 1){
            return 1;
        }

        if(line[0] === 2 && line[1] === 2 && line[2] === 2){
            return 2;
        }
    }

    for(let row of board){
        if(row.includes(0)){
            return -1;
        }
    }

    return 0;
}