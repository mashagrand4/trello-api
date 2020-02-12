import {readFile, writeToFile} from "./files";

const filePath = './src/store/boards.json';
let currentBoards;

export const getBoards = async () => {
    if(!currentBoards) {
        const boards = await readFile(filePath);
        if (boards) {
            return JSON.parse(boards);
        }

        return [];
    }

    return currentBoards;
};

export const setBoards = async boards => {
    const data = JSON.stringify(boards, null, 4);

    try {
        await writeToFile(filePath, data);
        currentBoards = boards;

        return(200);
    }
    catch(err) {
        return err;
    }
};