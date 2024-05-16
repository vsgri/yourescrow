'use client'

import { Button, Headline, Input, LargeTitle, List, Placeholder, Select, Subheadline, Text, Textarea } from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { MainButton } from "@tma.js/sdk";

export default function Page() {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <Placeholder header="Attention! A disclaimer is generally any statement intended to specify or delimit the scope of rights and obligations that may be exercised and enforced by parties in a legally recognized relationship. In contrast to other terms for legally operative language, the term disclaimer usually implies situations that involve some level of uncertainty, waiver, or risk.">
        <img
          alt="Telegram sticker"
          className="blt0jZBzpxuR4oDhJc8s"
          src="https://xelene.me/telegram.gif"
        />
      </Placeholder>
      <MainButton text="Agree" />
    </main>
  );
}
