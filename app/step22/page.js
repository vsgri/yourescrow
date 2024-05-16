'use client'

import { Button, Input, LargeTitle, Spinner, Steps, Subheadline, Text } from "@telegram-apps/telegram-ui";
import { MainButton } from "@tma.js/sdk";

export default function Page() {
  return (
    <main className="h-full w-full p-4">
      <div>
        <Steps count={3} progress={2}/>
        <LargeTitle>Order j3q945t8</LargeTitle>
        <Subheadline>Description and some shit</Subheadline>
      </div>
      <div className="flex flex-col h-4/5 justify-center items-center">
        <Text>https://binance.com/</Text>
      </div>
      <MainButton text="Accepted" />
    </main>
  );
}
