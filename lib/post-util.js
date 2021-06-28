import fs from "fs";
import path from "path";

const postDirectory = path.join(process.cwd(), "Blog-Posts");

function getPostData(fileName){
    const filePath
    fs.readFileSync(fileName)
}

function getAllPosts() {
    const postFiles = fs.readdirSync(postDirectory);
    
}

export default getAllPosts;
