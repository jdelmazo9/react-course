import Head from "next/head";
import WyeworksLogo from "../assets/logo-wye.svg";
import Link from "next/link";
import { FC, ReactNode } from "react";

const Header: FC = () => (
  <header className="items-center flex justify-between font-oswald uppercase px-4 py-2 bg-white shadow font-bold">
    <Link href="/" className="text-xl">
      my<span className="text-red-1">portfolio</span>
    </Link>
    <a target="_blank" rel="noreferrer" href="https://wyeworks.com">
      <WyeworksLogo className="h-5" />
    </a>
  </header>
);

type Props = {
  title: string;
  description: string;
  children: ReactNode;
  sidebar: ReactNode;
};

const Layout: FC<Props> = ({ title, description, children, sidebar }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="h-full flex flex-col">
        <Header />
        <div className="p-8 flex h-full w-full space-x-8">
          <main className="flex-1 flex flex-col">{children}</main>
          {sidebar}
        </div>
      </div>
    </>
  );
};

export default Layout;
