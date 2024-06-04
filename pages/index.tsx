import type { NextPage } from 'next'
import Head from 'next/head'

import { BannerStripe } from '../components/banner-stripe'
import { LogoFull } from '../components/logo-full'
// eslint-disable-next-line no-unused-vars
import { ServiceBlock } from '../components/service-block'

const Home: NextPage = () => (
	<article className="pb-20 md:pb-28">
		<Head>
			<title>Sitter Sisters</title>
			<meta
				name="description"
				content="Two sisters who live in the Highlands area & provide neighbourhood care."
			/>
		</Head>

		<BannerStripe />

		<header className="px-8 pt-8 text-center md:pt-16">
			<h1 className="sr-only">Sitter Sisters</h1>
			<div className="flex justify-center pb-12 md:pb-[4.5rem]">
				<LogoFull />
			</div>

			{/* <p className="mx-auto max-w-sm text-center font-medium text-blue-dark font-poppins text-xl leading-6 leading-trim">
				Two sisters who live in the Highlands area &#38; provide
				neighbourhood care.
			</p> */}
		</header>

		{/* <main className="px-8 pt-16 md:pt-24">
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
			<div className="grid justify-center pt-16 md:pt-24">
				<h2
					className="text-center font-medium text-blue-dark font-poppins text-xl leading-6 leading-trim all-small-caps"
					style={{ fontFeatureSettings: '"cpsp"' }}
				>
					Let us know how we can help!
				</h2>
				<div className="flex flex-col items-center gap-4 pt-8">
					<a
						className="text-blue-dark font-poppins text-2xl leading-6 leading-trim hover:underline"
						href="tel:780-235-2706"
						style={{ fontFeatureSettings: '"case"' }}
					>
						(780) 235-2706
					</a>
					<div className="flex items-center justify-center gap-3">
						<div className="h-px w-12 bg-stone-200" />
						<span className="font-medium text-stone-700 font-poppins text-base leading-5 leading-trim all-small-caps">
							or
						</span>
						<div className="h-px w-12 bg-stone-200" />
					</div>
					<a
						className="text-blue-dark font-poppins text-2xl leading-6 leading-trim hover:underline"
						href="email:info@sittersisters.ca"
						style={{ fontFeatureSettings: '"case"' }}
					>
						info@sittersisters.ca
					</a>
				</div>
			</div>
		</main> */}
	</article>
)

export default Home
