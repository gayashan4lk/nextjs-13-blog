export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className=''>
				<header className='sticky top-0 w-full bg-stone-800'>
					<h1 className='p-2 font-serif text-3xl text-center sm:text-left text-white'>
						Dev Blog
					</h1>
				</header>
				<div className='sm:grid sm:grid-cols-5 sm:gap-4'>
					<nav className='w-full sm:h-screen sm:col-span-1 bg-stone-200 '>
						<div className='text-center sm:text-left text-stone-800 divide-y-[0.1rem] divide-stone-300'>
							<div className='sm:px-8 hover:bg-stone-300'>
								<h3 className='py-2 hover:cursor-pointer font-semibold'>
									ASP.NET Core
								</h3>
							</div>
							<div className='sm:px-8 hover:bg-stone-300'>
								<h3 className='py-2 hover:cursor-pointer font-semibold'>
									ASP.NET Core
								</h3>
							</div>
							<div className='sm:px-8 hover:bg-stone-300'>
								<h3 className='py-2 hover:cursor-pointer font-semibold'>
									ASP.NET Core
								</h3>
							</div>
							<h3 className='py-2'>.NET</h3>
							<h3 className='py-2'>C#</h3>
							<h3 className='py-2'>JavaScript</h3>
							<h3 className='py-2'>React.JS</h3>
							<h3 className='py-2'>Next.JS</h3>
							<h3 className='py-2'>Blockchain</h3>
						</div>
					</nav>
					<main className='w-full sm:col-span-4'>{children}</main>
				</div>
				<footer className='bg-stone-300 text-center'>
					<span className='font-sans font-semibold'> All rights reserved</span>
				</footer>
			</div>
		</>
	);
}
