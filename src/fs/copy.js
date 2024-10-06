import fs from 'fs'
const source = './src/fs/files'
const destination = './src/fs/files_copy'

 
// fs.cp(src, dest[, options], callback) = Asynchronously copies the entire directory structure from src to dest, including subdirectories and files.
// throws error if source don't exist by default
// error on exist throws error if destination exists

const copy = async (src, dest) => {
        fs.promises.cp(src, dest, {force:false, errorOnExist:true, recursive:true })
            .then( () => {
                console.log("Copied")
            })
            .catch( (err) => {
                console.error("FS operation failed", err)
            })
        }
             


await copy(source, destination);
