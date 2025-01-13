import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark = false } = props;

  return (
    <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 pb-10 md:pb-20 lg:pb-24",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        <div class="grid grid-cols-1 gap-5 md:grid-cols-3 pt-4">
  <a href="https://t.me/kspr_home_bot?start=WdRcvw" target="_blank">
    <img width="720" height="332" src="/images/ksprbot.png" alt="KSPR Bot" class="w-full h-48 object-cover rounded-md hover:opacity-80"/>
  </a>
  <a href="https://dapp.chainge.finance/?fromChain=KAS&toChain=KAS&fromToken=KAS&toToken=KOIN_krc20" target="_blank">
    <img width="2400" height="1260" src="/images/chainge.png" alt="Chainge" class="w-full h-48 object-cover rounded-md hover:opacity-80"/>
  </a>
  <a href="https://www.kaspiano.com/token/koin?ref=koin" target="_blank">
    <img width="540" height="540" src="/images/kaspacom.jpg" alt="Kaspiano" class="w-full h-48 object-cover rounded-md hover:opacity-80"/>
  </a>
  <a href="https://krc20swap.com" target="_blank">
    <img width="540" height="540" src="/images/krc20swap.jpg" alt="KRC-20 Swap" class="w-full h-48 object-fit rounded-md hover:opacity-80"/>
  </a>
  
</div>
      </div>
    </section>
  );
});
