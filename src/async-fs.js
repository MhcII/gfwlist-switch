const fs = require('fs');

exports.exists = function (path) {
    return new Promise((resolve) => {
        fs.exists(path, (exists) => {
            resolve(exists);
        });
    });
}
exports.stat = function (path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    });
}
exports.readFile = function (path, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
exports.writeFile = function (file, data, options) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, options, (err) => {
            (err ? reject : resolve)(err);
        });
    });
}
