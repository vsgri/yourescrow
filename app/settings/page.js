'use client'

import { Button, Input, LargeTitle, List, Select, Subheadline } from "@telegram-apps/telegram-ui";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function Page() {
  return (
    <main className="h-full w-full">
      <List>
        <div className="w-full flex justify-end">
          <TonConnectButton className="w-full flex p-6" />
        </div>
        <Select header="Language" placeholder="Select">
          <option>English</option>
          <option>Русский</option>
        </Select>
      </List>
    </main>
  );
}
