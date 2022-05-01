export function BannerStripe() {
	return (
		<div className="">
			<div className="flex">
				<div className="h-2 flex-1 bg-orange-dark" />
				<div className="h-2 flex-1 bg-blue-dark" />
				<div className="h-2 flex-1 bg-red-dark" />
				<div className="h-2 flex-1 bg-green-dark" />
			</div>
			<div className="flex">
				<div className="h-10 flex-1 bg-orange-light" />
				<div className="h-10 flex-1 bg-blue-light" />
				<div className="h-10 flex-1 bg-red-light" />
				<div className="h-10 flex-1 bg-green-light" />
			</div>
		</div>
	)
}
