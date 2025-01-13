import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Features from "~/components/widgets/Features";

import Hero from "~/components/widgets/Hero";
import Stats from "~/components/widgets/Stats";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
 
      <Features id="Exchanges"
        highlight="Exchanges"
        title="Where to Buy KOIN"
        subtitle="We're currently listed on Chainge, KRC20Swap, Kaspiano and KSPR Bot with more exchanges coming soon."
        items={[
        
        ]}
      />
<section id="roadmap">
<Image

                src="/images/roadmap.jpg"
                layout="constrained"
                width={1920}
                height={1080}
                alt="Qwind Hero Image (Cool dog)"
                class="mx-auto w-full h-auto rounded-md"
                priority={true}
                breakpoints={[320, 480, 640, 768, 1024]}
              />
              </section>


   
     <section id="tokenomics">
      <Stats/>
      </section>
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
      {/* <CallToAction /> */}
      <div class="h-2 bg-white dark:bg-gray-900 w-full"></div>
      <section id="team">
      <Image id="team"
                src="/images/team.jpg"
                layout="constrained"
                width={1920}
                height={1080}
                alt="Qwind Hero Image (Cool dog)"
                class="mx-auto w-full h-auto rounded-t-md"
                priority={true}
                breakpoints={[320, 480, 640, 768, 1024]}
              />
              </section>
                    <div class="h-2 bg-white dark:bg-gray-900 w-full"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
