//import { ChakraProvider } from '@chakra-ui/react';
import Providers from '@/utils/provider';
import './globals.scss';

export const metadata = {
  title: 'Dancing on dangerous Portfolio.',
  description: 'Giovani Fouz Portfolio',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
