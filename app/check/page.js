'use client'

import { Button, Headline, Input, LargeTitle, List, Section, Select, Subheadline, Text, Textarea } from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { MainButton } from "@tma.js/sdk-react";

export default function Page() {
  return (
    <main className="h-full w-full">
      <List>
        <Section>
          <SectionHeader>Name</SectionHeader>
          <div className="px-6 pb-4"><Text>Binance KYC</Text></div>
        </Section>
        <Section>
          <SectionHeader>Description</SectionHeader>
          <div className="px-6 pb-4"><Text>KYC refers to a process that banks and other financial institutions use to gather identifying data and contact information from current and potential customers. Its purpose is to prevent fraud, money laundering, and other illicit activity, as well as the misuse of financial accounts.</Text></div>
        </Section>
        <Section>
          <SectionHeader>Category</SectionHeader>
          <div className="px-6 pb-4"><Text>KYC</Text></div>
        </Section>
        <Section>
          <SectionHeader>Price</SectionHeader>
          <div className="px-6 pb-4"><Text>30 USDT</Text></div>
        </Section>
        <Section>
          <SectionHeader>Deadline</SectionHeader>
          <div className="px-6 pb-4"><Text>May 22, 2024, 10:00 UTC</Text></div>
        </Section>
      </List>
      {/* <MainButton text="Create" /> */}
    </main>
  );
}
