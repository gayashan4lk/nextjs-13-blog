export default function ManuItem({ menuItem }: { menuItem: string }) {
	return (
		<div className='sm:px-8 hover:bg-stone-300'>
			<h3 className='py-2 hover:cursor-pointer font-semibold'>{menuItem}</h3>
		</div>
	);
}
