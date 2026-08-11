function countHashtags(caption) {
    if(typeof caption!="string"){
        return "Invalid"
    }
    let splitCaption = caption.split(" ")
    let hashtagCount = [];

    for(let i=0;i<splitCaption.length;i++){
        if(splitCaption[i].startsWith("#")){
            hashtagCount.push(splitCaption[i])
        }
    }
    let longestTag = "";
    for(let i=0;i<hashtagCount.length;i++){
        let count=hashtagCount[i].slice(1);
        if(count.length>longestTag.length){
            longestTag=count;
        }
    }
     
    return {hashtagCount:hashtagCount.length===0? 0 :hashtagCount.length, longestTag:hashtagCount.length===0? "" : longestTag };
}
console.log(countHashtags("#ai #ml data science"))