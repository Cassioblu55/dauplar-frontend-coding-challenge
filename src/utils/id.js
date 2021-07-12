import {isNumeric} from './number'

export function makeId(n=null){
    n = isNumeric(n) && n > 0 ? n : 2

    let myId="";
    for(let i=0; i<n; i++ ){
        myId += Math.random().toString(36).substring(2, 15);
    }

    return myId+"";
}