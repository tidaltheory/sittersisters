import type { NextPage } from 'next'
import Head from 'next/head'

import { BannerStripe } from '../components/banner-stripe'
import { LogoFull } from '../components/logo-full'
import { ServiceBlock } from '../components/service-block'

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
			<div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:gap-12 lg:flex-row lg:items-start lg:gap-16">
				<ServiceBlock title="General lawn care">
					Mowing, weed-picking, and watering
				</ServiceBlock>
				<ServiceBlock title="Babysitting" orientation="right">
					Red Cross certification and First Aid
				</ServiceBlock>
				<ServiceBlock title="Collecting mail">
					We keep it safe until you return
				</ServiceBlock>
			</div>
		</main>
	</article>
)

export default Home
