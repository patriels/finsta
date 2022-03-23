import postObj from './posts.json'
import pauseObj from './pause-posts.json'
let currIndex : number = 0;
let pauseIndex : number = 0;
const  getPosts = (number : number, pause : boolean) => {
    let loadedPosts : Object[] = [];
    
    if(pause && currIndex > 0){
        loadedPosts.push(pauseObj.posts[pauseIndex]);
        pauseIndex++;
    }
    for(let i = currIndex; i < currIndex + number; i++){
        loadedPosts.push(postObj.posts[i]);
    }

    currIndex += number;
    return loadedPosts;
}
export default getPosts;