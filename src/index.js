const afs = require('./async-fs');
const Base64 = require('js-base64').Base64;

// 打开 origin.txt
async function readOrigin() {
    const path = './src/origin.txt';
    // 文件是否存在
    const exists = await afs.exists(path);
    if (!exists) {
        return undefined;
    }
    // 是否文件
    const stats = await afs.stat(path);
    if (!stats.isFile()) {
        return undefined;
    }
    // 读取
    return afs.readFile(path);
}

async function writeGfwList(data) {
    const path = './dist/gfwlist.txt';
    await afs.writeFile(path, data);
}

async function main() {
    let data = await readOrigin();
    data = Base64.encode(data);
    await writeGfwList(data);
}

main()
    .catch((err) => {
        console.log(err.message);
    });
