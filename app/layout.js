'use client'

import "./globals.css";
import '@telegram-apps/telegram-ui/dist/styles.css';

import { SDKProvider } from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { AppRoot } from "@telegram-apps/telegram-ui";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body className="h-screen w-screen">
        <SDKProvider>
          <TonConnectUIProvider manifestUrl="https://dns.ton.org/tonconnect-manifest.json">
            <AppRoot className="h-full w-full">
              {children}
            </AppRoot>
          </TonConnectUIProvider>
        </SDKProvider>
      </body>
    </html>
  );
}
