import fs from "fs";
import ServerError from "../errors/ServerError";

export const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) reject(new ServerError(err.message));

            resolve(data.toString());
        });
    });
};

export const writeToFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) reject(new ServerError(err.message));

            resolve();
        });
    });
};