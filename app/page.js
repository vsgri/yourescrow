'use client'

import { Button, LargeTitle, Subheadline } from "@telegram-apps/telegram-ui";

export default function Page() {
  return (
    <main className="h-full w-full p-4 flex flex-col justify-evenly">
      <div>
        <LargeTitle>Eqyty</LargeTitle>
        <Subheadline>Description and some shit</Subheadline>
      </div>
      <div className="flex flex-col">
        <Button disabled size="l" stretched className="my-2">Buy</Button>
        <Button disabled size="l" stretched className="my-2">Sell</Button>
        <Button size="l" stretched className="my-2">Escrow</Button>
      </div>
    </main>
  );
}
