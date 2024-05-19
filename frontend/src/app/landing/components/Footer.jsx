import React from 'react'

const Footer = () => {
  return (


<footer class="bg-background border-t-2 border-white text-white">
    <div class="mx-auto w-full px-8 lg:px-20 pr-10 p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a class="flex items-center">
                  <img src="./logo.png" alt="logo" className='max-sm:-ml-4'/>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-[1.05rem] font-semibold text-gray-200 uppercase">LINKS</h2>
                  <ul class="text-gray-200 font-medium">
                      <li class="mb-4">
                          <a class="hover:underline">Services</a>
                      </li>
                      <li class="mb-4">
                          <a class="hover:underline">Products</a>
                      </li>
                      <li class="mb-4">
                          <a class="hover:underline">Contact us</a>
                      </li>
                  </ul>
              </div>
              <div className='xl:-ml-8'>
                  <h2 class="mb-6 text-[1.05rem] font-semibold text-gray-200 uppercase">CONNECT</h2>
                  <ul class="text-gray-300 font-medium">
                      <li class="mb-4">
                          <a class="hover:underline" href='mailto:opctrading7@gmail.com'>Opctrading7@gmail.com</a>
                      </li>
                      <li class="mb-4">
                          <a class="hover:underline" href='tel:+2519607533'>+2519607533</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-[1.05rem] font-semibold text-gray-200 uppercase ">LOCATION</h2>
                  <ul class="text-gray-300  font-medium">
                      <li class="mb-4">
                        <p className='w-64'>Kebena, Next to Ras Amba Hotel,
                        Image Building, Ground Floor</p>
                      </li>

                  </ul>
              </div>
          </div>
      </div>

    </div>
</footer>

  )
}

export default Footer