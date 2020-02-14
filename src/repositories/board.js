import {getBoards, setBoards} from "./helpers/boards";

export default {
    getAllBoards: async () => {
        return await getBoards();
    },

    getBoardByName: async boardName => {
        const boards = await getBoards();

        const board = boards.find(board => {
            return board.name === boardName;
        });

        if (!board) {
            throw new Error(`Board with name: ${boardName} does not exist!`);
        }

        return board;
    },

    createBoard: async boardData => {
        let boards = await getBoards();
        const newBoard = {
            name: boardData.name,
            description: boardData.description,
            color: boardData.color,
            create_at: boardData.create_at
        };

        const board = boards.find(board => {
            return board.name === newBoard.name;
        });

        if (board) {
            throw new Error(`Board with name: ${newBoard.name} already exists!`);
        }

        boards.push(newBoard);

        await setBoards(boards);

        return newBoard;
    },

    updateBoard: async newBoard => {
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
    },

    deleteBoard: async boardName => {
           let boards = await getBoards();

           boards = boards.filter((board) => {
               return board.name !== boardName;
           });

           await setBoards(boards);
    }
};