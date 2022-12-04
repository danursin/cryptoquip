import Cryptoquip from "../components/Cryptoquip";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Cryptoquip</title>
                <meta name="description" content="Cryptoquip newspaper puzzle solver/helper" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Cryptoquip />
            </main>
        </div>
    );
}
