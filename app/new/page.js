'use client'

import { Button, Headline, Input, LargeTitle, List, Select, Subheadline, Textarea } from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { useMainButton } from "@tma.js/sdk-react";

export default function Page() {
  const mainButton = useMainButton();

  return (
    <main className="h-full w-full">
      <List>
        <SectionHeader large className="mx-2">
          New product
        </SectionHeader>
        <Input header="Name" placeholder="Name of product" />
        <Textarea header="Description" placeholder="Here write your description" />
        <div className="flex">
          <Input header="Price" placeholder="Price for your product" type="number" />
          <Select value="none">
            <option>TON</option>
            <option>USDT</option>
          </Select>
        </div>
        <Select header="Select">
          <option>KYC</option>
          <option>Whitelist</option>
        </Select>
        <Input header="Name" placeholder="Name of product" type="date" />
      </List>
      {/* <MainButton text="Continue" /> */}
    </main>
  );
}
