import React,{useState,useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import {EditorTabs,FilterTabs, DecalTypes} from '../config/constants'
import {fadeAnimation, slideAnimation} from '../config/motion'

import AIPicker from '../components/AIPicker'
import ColorPicker from '../components/ColorPicker'
import Tab from '../components/Tab'
import FilePicker from '../components/FilePicker'
import CustomBtn from '../components/CustomBtn'

function Custom() {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
{!snap.intro && (
  <>
  {/* Sidebar tab */}
    <motion.div 
    key={"custom"}
    className="absolute top-0 left-0 z-10"
    {...slideAnimation('left')}
    >
      <div className='flex items-center min-h-screen'>
        <div className='editortabs-container tabs'>
          {EditorTabs.map((tab) => (
            <Tab 
            key={tab.name}
            tab={tab}
            handleClick={() => {}}
            />
          ))}
        </div>
      </div>

    </motion.div>
            {/* Button back */}
    <motion.div 
    className='absolute z-10 top-5 right-5'
    {...fadeAnimation}
    >
      <CustomBtn
      type={'filled'}
      title='Go Back'
      handleClick={() => state.intro = true}
      customStyles='w-fit px-4 py-2.5 font-bold text-sm'
      />
    </motion.div>
            {/* Filter tabs */}
    <motion.div className='filtertabs-container'
    {...slideAnimation('up')}
    >
      <div className='filtertabs-container'>
        {FilterTabs.map((tab) => (
          <Tab
          key={tab.name}
          tab={tab}
          isFilterTab
          isActiveTab=''
          handleClick={() => {}}
          />
        ))}
      </div>
    </motion.div>
  </>
)}
    </AnimatePresence>
  )
}

export default Custom