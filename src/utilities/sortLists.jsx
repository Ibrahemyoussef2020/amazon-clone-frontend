
const ascending = 'ascending';
const descending = 'descending';

const manageTitles = (item,prop)=>{
    const lowerCaseItem = item[prop] && item[prop].toLowerCase() 
    const charCodeItem = item[prop] && lowerCaseItem.charCodeAt(0)
    return charCodeItem
} 


const sortLists = (hierarchy,prop,list,letterly=false) => {

    

    if (prop === 'latest') {
        list.reverse()
    }
    else if (letterly && hierarchy === ascending) {
        list.sort((a,b) => manageTitles(b,prop) - manageTitles(a,prop))
    }

    else if (letterly && hierarchy === descending) {
        list.sort((a,b) => manageTitles(a,prop) - manageTitles(b,prop) )
    }
    
    else if (hierarchy === ascending) {
        list.sort((a,b) => b[prop] - a[prop])
    }

    else if(hierarchy === descending){     
        list.sort((a,b) => a[prop] - b[prop])
    }

    

}

export {
    ascending,
    descending,
}

export default sortLists