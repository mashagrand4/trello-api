import {getBoards, setBoards} from "./helpers/boards";
import ResultFormatter from "./helpers/resultFormatter";

export default {
    getAllBoards: () => {
        return new Promise(async (resolve, reject) => {
            const data = await getBoards();

            resolve(new ResultFormatter(data));
        });
    },

    getBoardByName: boardName => {
        return new Promise(async (resolve, reject) => {
            const boards = await getBoards();

            let board = boards.find(board => {
                return board.name === boardName;
            });

            resolve(new ResultFormatter(board));
        });
    },

    createBoard: newBoard => {
        return new Promise(async (resolve, reject) => {
            let boards = await getBoards();

            const board = boards.find(board => {
                return board.name === newBoard.name;
            });

            if (board) {
                resolve(new ResultFormatter(undefined , '400'));
            } else {
                boards.push(newBoard);
                await setBoards(boards);

                resolve(new ResultFormatter(newBoard));
            }
        });
    },

    updateBoard: newBoard => {
        return new Promise(async (resolve, reject) => {
            let boards = await getBoards();
            let updatedBoard;

            boards = boards.map((board) => {
                if (board.name === newBoard.name) {
                    updatedBoard = {
                        ...board,
                        ...newBoard
                    };
                    return updatedBoard;
                }
                return board;
            });

            await setBoards(boards);

            resolve(new ResultFormatter(updatedBoard));
        });
    },

    deleteBoard: boardName => {
        return new Promise(async (resolve, reject) => {
           let boards = await getBoards();

           boards = boards.filter((board) => {
               return board.name !== boardName;
           });

           resolve(setBoards(boards));
        });
    }
};