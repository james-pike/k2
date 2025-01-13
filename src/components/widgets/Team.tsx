import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"Meet the KOIN Team"}
        subtitle={"An experienced team with support from a growing community."}
        highlight={"Team"}
      />
      {/* Page content goes here */}
    </PageWrapper>

<section class="bg-white dark:bg-gray-900">
<div class=" mx-auto  ">
<div class="py-2  mx-auto  dark:bg-gray-900  lg:py-2 lg:px-2">
 
  
<Image
    src="/images/team.jpg"
    layout="constrained"
    width={1920}
    height={1080}
    alt="Full-Width Hero Image"
    class="w-full h-auto object-cover rounded-sm"
    priority={true}
  />


  </div>
</div>

</section>
</div>
  );
});



