'use client'

import { Button, LargeTitle, Spinner, Steps, Subheadline, Text } from "@telegram-apps/telegram-ui";
import { MainButton } from "@tma.js/sdk-react";

export default function Page() {
  return (
    <main className="h-full w-full p-4">
      <div>
        <Steps count={3} progress={1}/>
        <LargeTitle>Order j3q945t8</LargeTitle>
        <Subheadline>Description and some shit</Subheadline>
      </div>
      <div className="flex flex-col h-4/5 justify-center items-center">
          <Text>Send 30 USDT to escrow wallet</Text>
      </div>
      {/* <MainButton text="Send 30 USDT" /> */}
    </main>
  );
}
