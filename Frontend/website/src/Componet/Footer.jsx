import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e1e1e] overflow-hidden relative min-h-screen">
      <div className="relative -mt-20 w-full h-[420px]">
        <img
          src="/Vector-3.png"
          alt="layer 1"
          className="absolute top-0 left-0 w-full object-cover z-40"
        />

        <img
          src="/Vector-2.png"
          alt="layer 2"
          className="absolute top-6 left-0 w-full object-cover z-30"
        />

        <img
          src="/Vector1.png"
          alt="layer 3"
          className="absolute top-12 left-0 w-full object-cover z-20"
        />

        <img
          src="/Vector.png"
          alt="layer 4"
          className="absolute top-20 left-0 w-full object-cover z-10"
        />
      </div>
<div className='flex mt-10 justify-center'>
          <div className='text-center mt-10 text-white flex gap-20' >
        <a href="" className=''>home</a>
        <a href="">how its works</a>
        <a href="">find peer</a>
      </div>

</div>

<div className='flex justify-center gap-10 mt-6'>
    <div>
        <img src="/LogoGroup.png" alt="" />
    </div>
    <div className='ml-30'>
        <img src="/SocialMedia.png" alt="" />

    </div>

    <div className='text-white'>
        <p>2021 tokners.All rights reserved</p>
        <p>orignal design by RRK</p>
    </div>
</div>


    </footer>
  );
};

export default Footer;
