import SkeletonArticle from '../skeletons/SkeletonArticle'
import './Articles.css'
function Articles({ result }) {
      return (

            <section className='w-full grid place-content-center cardGrid p-10'>
                  {result && result.map((el) => (
                        <div key={el.title} className='group card-shadow flex m-auto items-center flex-col 
                        border-[1px] border-gray-300 scale-1 w-full  
                        hover:rounded-lg h-[350px] min-w-[300px] overflow-hidden
                        bg-white p-4 shadow-gray-300 shadow-xl
                        hover:scale-[1.02] transition-all duration-200 ease-in-out'>
                              <a href={el.url} target='_blank' rel='noreferrer' className='flex flex-col justify-around h-full'>
                                    <img className='group-hover:hidden block transition duration-200 ease-out object-contain h-[175px]' src={el.photoUrl} alt="" />
                                    <h2 className='block font-semibold text-md '>{el.title}</h2>
                                    <p className='hidden group-hover:block  text-sm '>{el.description}</p>
                                    {/* TODO: ADD a card footer for the source name */}
                              </a>
                        </div>
                  ))}

                  {!result && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <SkeletonArticle key={n} />)}
                   
                  
             </section>
      )
}

export default Articles