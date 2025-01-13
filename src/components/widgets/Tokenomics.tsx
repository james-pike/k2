import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import Stats from './Stats';
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"KOIN Tokenomics"}
        subtitle={"Fairly launched and community driven."}
        highlight={"Tokenomics"}
      />
      {/* Page content goes here */}
    </PageWrapper>

<section class="bg-white dark:bg-gray-900">
<div class=" mx-auto  ">
<div class="py-2  mx-auto  dark:bg-gray-900  lg:py-2 lg:px-2">
 
  <Stats/>

       <Image
       
                  src="/images/ranks.jpg"
                  layout="constrained"
                  width={1920}
                  height={1080}
                  alt="Qwind Hero Image (Cool dog)"
                  class="mx-auto w-full h-auto rounded-md"
                  priority={true}
                  breakpoints={[320, 480, 640, 768, 1024]}
                />

  </div>
</div>

</section>
</div>
  );
});



