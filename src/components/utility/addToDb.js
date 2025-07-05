

const getReadList = () => {
    const readList = localStorage.getItem('readList');
    const newReadList  = JSON.parse(readList);
    if(newReadList){
        console.log('Read List:', newReadList);
        return newReadList;
    }
    else{
        console.log('No Read List found');
        return [];
    }   

}


const addToReadList = (id) => {
    const readList = getReadList(id);
     if(readList.includes(id)){
        console.log('Book id in read list')
        return;
     }
     else{
        readList.push(id);
        const updatedReadList = JSON.stringify(readList);
        localStorage.setItem('readList', updatedReadList);
        console.log('Book id added to read list');

     }
}



const getWhishlist = () => {
    const wishlist = localStorage.getItem('wishlist');
    const newWishlist = JSON.parse(wishlist);

    if(newWishlist){
        console.log('Wishlist found getWishlist function:');
        return newWishlist;
    }
    else{
        console.log('No Wishlist found');
        return [];
    }
}


const addToWishlist = (id) => {
    // console.log('Adding to wishlist:', id);
    const wishlist = getWhishlist();

    if(wishlist.includes(id)){
        console.log('book includes in wishlist');
        return;
    }
    else{
        wishlist.push(id);
        const updateWishlist = JSON.stringify(wishlist);
        localStorage.setItem('wishlist', updateWishlist);
        console.log('Book id successfully added to wishlist');
    }
}






export { getReadList, addToReadList, getWhishlist, addToWishlist };