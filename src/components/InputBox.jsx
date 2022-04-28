import React, { useRef } from 'react'
import { createTheme, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function InputBox({ source, updateQuery , query, updateSource, updateData }) {

      const sourceRef = useRef(null)
      const inputRef = useRef(null)
      
      const sources = [
            'Tous',
            'Le Monde',
            'Le Figaro',
            'Humanité',
            'La Croix',
            'La Tribune',
            'Les Echos',
            'Libération'
      ]

      const sendData = async (e) => {
            e.preventDefault()
            if(!query) return 

            updateData()
            inputRef.current.value = ''
            sourceRef.current.value = 'Tous'
      }
    

      return (
            <form className='w-full flex flex-col px-5'>
                  <div className='flex md:flex-row my-10 flex-col gap-3'>
                        <select 
                              ref={sourceRef}
                              onChange={(e) => updateSource(e.target.value)}
                              defaultValue='source'
                              className='flex-[0.2] lg:flex-[0.1] min-h-[56px] bg-transparent border-b-[1px] border-gray-900 outline-0'>
                                    <option value='source' disabled='disabled'>Source</option>
                                    {sources.map((name) => (
                                          <option
                                                key={name}
                                                value={name}
                                          >
                                          {name}
                                          </option>
                                    ))}
                        </select>
                        <input className='flex-[0.9] md:flex-[0.9] p-3 min-h-[56px] outline-0 border-b-[1px] border-gray-900 bg-transparent' ref={inputRef}  onChange={(e) => updateQuery(e.target.value)} placeholder='Rechercher ...' />
                  </div>
                  
                  <button onClick={sendData} type='submit' className='self-center w-full md:w-1/2 min-h-[56px] glow-on-hover'>ÊTRE SMART</button>
            </form>
      )
}

export default InputBox