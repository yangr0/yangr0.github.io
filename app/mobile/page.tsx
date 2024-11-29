import React from "react";

const Mobile = () => {
 return (
  <div className='flex flex-col text-center gap-3 items-center justify-center bg-black text-white h-screen px-4'>
   <TriangleAlert className='size-12 text-[#9F6000]' />
   <h1 className='text-xl font-extrabold text-[#9F6000]'>
    Website Not Accessible on Mobile Devices
   </h1>
   <p>
    Sorry😢, our website is not accessible on mobile devices. Please
    use a desktop or laptop to access the site.
   </p>
  </div>
 );
};

export default Page;
