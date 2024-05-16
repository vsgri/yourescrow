'use client'

import { Button, LargeTitle, Spinner, Steps, Subheadline, Text } from "@telegram-apps/telegram-ui";

export default function Page() {
  return (
    <main className="h-full w-full p-4">
      <div>
        <Steps count={3} progress={1}/>
        <LargeTitle>Order j3q945t8</LargeTitle>
        <Subheadline>Description and some shit</Subheadline>
      </div>
      <div className="flex h-4/5 justify-center items-center">
          <Text>Wait, until the buyer send crypto to escrow wallet</Text>
          <Spinner size="l" />
      </div>
    </main>
  );
}
