import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage =
  "/images/koin2.png";

export default component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-2 rounded-md">

<section class="relative rounded-md not-prose mx-1.5 my-1.5 bg-white/90 dark:bg-gray-900/90">

      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 pointer-events-none"></div>
        <div class="py-8 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
         
         
          <a href="#Exchanges" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-5 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">KOIN live on KRC-20 Swap!</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
              
          <h1 class="text-5xl md:text-7xl font-bold leading-tighter tracking-tighter text-primary mb-4 font-heading dark:text-gray-200">

<span class="text-primary-600">KOIN The King Of Kaspa</span>
</h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
            <p class="text-xl mb-6 dark:text-slate-300">
                  Everyone needs some <span class="font-semibold">KOIN</span> in their wallet.
                </p>

                <div class=" sm:max-w-md m-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">
                  <div class="flex w-full">
                  <a href="#Exchanges" 

   class="btn-primary w-full bg-primary-600 hover:bg-primary dark:bg-primary-600 py-2 rounded-md text-center block">
  Buy $KOIN
</a>
                  </div>
                  <div class="flex w-full">
                  <a href="https://t.me/+Zhe2fvsS1WQyNTA0" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="btn-primary w-full bg-[#B6B6B6] hover:bg-primary dark:bg-[#B6B6B6] py-2 rounded-md text-center block">
  Join Our Community
</a>

                  </div>
          
                </div>

            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={coverImage}
              layout="constrained"
              width={500}
              height={500}
              alt="Qwind Hero Image (Cools dog)"
              class="mx-auto lg:mr-0 object-fit w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
});
