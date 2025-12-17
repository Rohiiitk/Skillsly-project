import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'


const SkillslyUse = () => {
  return (
   <div className="min-h-screen bg-black text-white">
         <div className='text-center'>
            <span className='font-bold text-white text-[60px]'>Why use</span>
<span className="text-[60px] ml-3 font-bold bg-gradient-to-r from-[#4DDCB7] to-[#B8FB70] bg-clip-text text-transparent">
  Skillsly?
</span>
   

            <p className='text-white mt-5'> 
                SkillSly isn’t just another learning platform — it’s a place where knowledge flows both ways. You <br />canexchange skills directly with the  thought full features provided.
            </p>
        </div>

      {/* FIX: Setting useWindowScroll={true} tells the component to use 
        the main browser scrollbar to drive the animation.
      */}
      <ScrollStack useWindowScroll={true}> 
        <ScrollStackItem itemClassName="bg-[#202020] text-white shadow-2xl border border-gray-700/50 p-10">
<div>
           <h2 className="text-3xl font-bold text-indigo-400 mb-4">Video Chat To connect with others !!</h2>
          <p className="text-lg">Video chat provides Users with a medium to connect with other Users and can eases the process of swapping knowledge.</p>
<div>

</div>

</div>
 
        </ScrollStackItem>




        <ScrollStackItem itemClassName="bg-[#282828] flex  text-white shadow-2xl border border-gray-700/50 p-10">
<div className='w-[50%]'>
  <h2 className="text-3xl font-bold text-indigo-400 mb-4">Card 2: Collaborate</h2>
          <p className="text-lg">Engage in real-time, interactive sessions. Share your screen, use whiteboards, and work together on projects using our built-in collaboration tools powered by Jitsi.</p>

</div>
<div className='w-[50%] pl-40 pb-20 mb-10'>
  <img src="/RealTimeChat.png" className='w-[80%] h-[180%] right-0' alt="" />

</div>
          
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-[#303030] text-white shadow-2xl border border-gray-700/50 p-10">
<div>
  <h2 className="text-3xl font-bold text-indigo-400 mb-4">Gamification</h2>
          <p className="text-lg">Earn points, unlock badges, and level up as you learn. Track progress with engaging achievements and leaderboards.</p>


</div>

<div>
  <img src="" alt="" />



</div>
          
        </ScrollStackItem>
      </ScrollStack>

      
    </div>
  )
}

export default SkillslyUse
