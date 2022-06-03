import Head from 'next/head'
import Link from 'next/link'
import LayoutSearch from './layoutSearch'

const siteTitle = "StarWars API Routes"
const title = "The Star Wars Characters"

export default function Layout({children, home}){
    
    return (
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta
                    name='The Star Wars'
                    content='Learn how to fetch data from star wars api'
                />
                <meta name='og:title' content={siteTitle} />
                <meta name='twitter:card' content='summary_large_image' />
                <title>{siteTitle}</title>
            </Head>
            <header className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
                <h3>{title}</h3>
                <LayoutSearch head></LayoutSearch>
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div>
                    <Link href='/'>
                        <a className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>

    );
}