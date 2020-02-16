import fs from "fs";

export const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) reject(err);

            resolve(data.toString());
        });
    });
};

export const writeToFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) reject(err);

            resolve();
        });
    });
};