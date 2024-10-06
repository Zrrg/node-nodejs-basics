import fs from 'fs'
const path = './src/fs/files/'
const file = 'fileToRead.txt'

const read = async (source) => {
    try {
    const data = await fs.promises.readFile(source, 'utf8') 
        try {
            console.log(data)
        } catch (error) {
            console.error("FS Operation failed", error)
        }
    } catch {
        console.error("FS Operation failed")
    }
}


await read(path + file);