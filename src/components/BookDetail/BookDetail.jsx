import { useLoaderData, useParams } from 'react-router-dom';
import { addToReadList, addToWishlist } from '../utility/addToDb';

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();
  const book = data.find((singleBook) => singleBook.bookId === id);
  const {
    bookName,
    author,
    category,
    image,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  // console.log( typeof bookId,  typeof data,  typeof id, typeof book);

  const handleMarkAsRead =(id)=>{
    addToReadList(id);
  }

  const handleWhishlist = (id) => {
    // console.log('wishlist', id);
    addToWishlist(id);
  }


  return (
    <div className="hero py-6 md:py-13">
      <div className="hero-content flex-col lg:flex-row-reverse items-start">
        <div className="md:w-[50%] md:pl-8 md:text-center lg:text-left">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">{bookName}</h1>
            <p className="py-2">By: {author}</p>
            <div className="divider"></div>
            <div>
              <p className="pb-2">Category: {category}</p>
              <div className="divider"></div>

              {/* review  */}
              <div>
                <p className='text-left'>
                  <strong>Review: </strong>
                  <span className="text-sm ">{review}</span>
                </p>
              </div>

              {/* tags  */}
              <div>
                <div className='text-left'>
                  <strong>Tags</strong>
                  {tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="badge bg-[#F4FCF3] text-green-500 text-sm mx-2 my-4 rounded-lg"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="divider"></div>
              </div>

              {/* others detail  */}
              <div>
                <div className="flex flex-col md:flex-row justify-start items-start md:items-center">
                  <p>No of Pages:</p>
                  <span className="font-bold md:ml-6">{totalPages}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-start items-start md:items-center">
                  <p>Publisher: </p>
                  <span className="font-bold md:ml-6">{publisher}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-start items-start md:items-center">
                  <p>Year Of Publishing: </p>
                  <span className="font-bold md:ml-6">{yearOfPublishing}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-start items-start md:items-center">
                  <p>Ratting: </p>
                  <span className="font-bold md:ml-6">{rating}</span>
                </div>
              </div>

              {/* buttons */}
              <div className='mt-6'>
                <button onClick={()=> handleMarkAsRead(bookId)} className="btn mr-3 tracking-wide">Read</button>
                <button onClick={()=> handleWhishlist (bookId)} className="btn bg-cyan-500 text-white tracking-wider ml-3">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card md:w-[50%] max-w-sm  flex justify-center items-center md:justify-start md:items-start">
          <div>
            <figure>
              <img className="w-full rounded-4xl" src={image} alt={bookName} />
            </figure>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-amber-400"></div>
    </div>
  );
};

export default BookDetail;
