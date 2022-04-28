import React from 'react'
import SkeletonElement from './SkeletonElement'

function SkeletonArticle() {
      return (
            <div className='flex bg-white scale-1  p-5 min-w-[300px] max-w-[500px] rounded-md hover:scale-[1.1] transition-all duration-200 ease-out'>
                  <div className='flex justify-center w-full gap-5'>
                        <div className='flex flex-col w-1/2 justify-between'>
                              <SkeletonElement type='title'/>
                              <SkeletonElement type='text'/>
                              <SkeletonElement type='text'/>
                              <SkeletonElement type='text'/>
                              <SkeletonElement type='text'/>
                              <SkeletonElement type='text'/>
                        </div>

                        <SkeletonElement className='w-1/2' type='thumbnail' />
                  </div>
            </div>
      )
}

export default SkeletonArticle