

function Cards({item}) {
    
   
  return (
   <>
   <div className="mt-4 my-3 p-3">
   <div className="card w-92  bg-base-100 shadow-xl hover:shadow-lg hover:shadow-gray-400 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.Category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="p-3 badge badge-outline">${item.price}</div> 
      <div className="cursor-pointer p-3 badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
   </>
  )
}

export default Cards
