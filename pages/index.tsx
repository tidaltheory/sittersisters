import type { NextPage } from 'next'
import Head from 'next/head'

import { BannerStripe } from '../components/banner-stripe'
import { LogoFull } from '../components/logo-full'
// Import Image from 'next/image'

const Home: NextPage = () => (
	<article className="pb-20 md:pb-28">
		<Head>
			<title>Sitter Sisters</title>
			<meta
				name="description"
				content="Two sisters who live in the Highlands area & provide neighbourhood care."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<BannerStripe />

		<header className="px-8 pt-8 text-center md:pt-16">
			<h1 className="sr-only">Sitter Sisters</h1>
			<div className="flex justify-center pb-12 md:pb-[4.5rem]">
				<LogoFull />
			</div>

			<p className="mx-auto max-w-sm text-center font-medium text-blue-dark font-sofia text-xl leading-6 leading-trim">
				Two sisters who live in the Highlands area &#38; provide
				neighbourhood care.
			</p>
		</header>

		<main className="px-8 pt-16 md:pt-24">
			<div className="mx-auto flex max-w-4xl flex-col gap-8 md:gap-12 lg:flex-row lg:gap-16">
				<div className="grid flex-1 gap-1">
					<h3 className="font-medium text-blue-light font-sofia text-2xl leading-8 leading-trim md:text-center">
						General lawn care
					</h3>
					<p className="text-stone-800 font-sofia leading-5 leading-trim md:text-center">
						Mowing, weed-picking, and watering
					</p>
				</div>
				<div className="flex-1">
					<h3 className="font-medium text-green-dark font-sofia text-2xl leading-8 leading-trim md:text-center">
						Babysitting
					</h3>
				</div>
				<div className="flex-1">
					<h3 className="font-medium text-blue-light font-sofia text-2xl leading-8 leading-trim md:text-center">
						Collecting mail
					</h3>
				</div>
			</div>
		</main>

		{/* <footer className={styles.footer}>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by{' '}
				<span className={styles.logo}>
					<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						width={72}
						height={16}
					/>
				</span>
			</a>
		</footer> */}
	</article>
)

export default Home
