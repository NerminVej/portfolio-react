import { data } from "../data/data.js";

const Work = () => {
    const project = data;

    
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
             <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
             <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projekte
          </p>
          <p className='py-6'>Hier ein paar meiner Projekte</p>
        </div>
       </div>
    </div>
  )
}

export default Work