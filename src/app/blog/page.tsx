export default function Blog() {
	return (
		<>
			<div className='mx-10 grid grid-cols-3 gap-3 font-serif subpixel-antialiased'>
				<div className='my-6 col-span-2'>
					<h1 className='text-5xl font-bold '>
						Dot NET was released few days ago
					</h1>
					<span className='font-medium text-stone-500'>id: some uuid</span>
				</div>

				<div className='col-span-3 text-lg leading-7 text-left normal-case indent-3'>
					<p className='my-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
						porttitor eget dolor morbi non arcu risus. Sed viverra ipsum nunc
						aliquet bibendum enim facilisis gravida neque. Ultrices eros in
						cursus turpis. Diam sollicitudin tempor id eu nisl. At auctor urna
						nunc id cursus metus aliquam eleifend.
					</p>
					<p className='my-4'>
						Dignissim cras tincidunt lobortis feugiat vivamus at. Libero justo
						laoreet sit amet cursus sit amet dictum. Arcu cursus euismod quis
						viverra nibh cras pulvinar mattis nunc. Velit euismod in
						pellentesque massa. Amet porttitor eget dolor morbi non arcu risus
						quis varius. Cursus in hac habitasse platea dictumst quisque
						sagittis purus. Lobortis feugiat vivamus at augue eget.
					</p>
					<p className='my-4'>
						Donec ultrices tincidunt arcu non. Malesuada pellentesque elit eget
						gravida cum sociis natoque. Phasellus egestas tellus rutrum tellus.
						Vel eros donec ac odio. Pharetra pharetra massa massa ultricies mi.
						Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
						Dui ut ornare lectus sit amet est placerat. Sit amet est placerat in
						egestas erat. Metus aliquam eleifend mi in nulla posuere
						sollicitudin. Quam id leo in vitae turpis. Pharetra sit amet aliquam
						id diam maecenas ultricies mi.
					</p>
					<p className='my-4'>
						Enim sit amet venenatis urna cursus eget nunc scelerisque. Nunc sed
						velit dignissim sodales. Sed euismod nisi porta lorem. Porttitor
						rhoncus dolor purus non enim praesent. Varius sit amet mattis
						vulputate enim nulla aliquet. Diam sollicitudin tempor id eu nisl
						nunc mi ipsum faucibus. Velit egestas dui id ornare arcu odio ut.
						Nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
					</p>
					<p className='my-4'>
						Consectetur adipiscing elit pellentesque habitant morbi tristique
						senectus. Lacinia quis vel eros donec ac. Sit amet nisl suscipit
						adipiscing bibendum est ultricies integer. Nulla pharetra diam sit
						amet nisl suscipit adipiscing. Ut lectus arcu bibendum at varius vel
						pharetra vel. Arcu dui vivamus arcu felis bibendum ut tristique et
						egestas. Eu facilisis sed odio morbi quis commodo odio aenean sed.
					</p>
				</div>

				<div className='col-span-2 font-sans'>
					<span className='font-medium text-stone-500'>
						Created at two days ago.
					</span>
					<br />
					<span className='font-medium text-stone-500'>
						Last edited three hours ago.
					</span>
					<br />
				</div>
				<div className='col-span-1 text-right'>
					<span className='text-lg font-bold text-stone-500'>
						Author: some one
					</span>
				</div>
				<footer className='col-span-3 my-10 pt-10 text-right border-t-2 border-stone-[0.5 rem]'>
					<span className='text-sm font-sans font-semibold text-stone-300'>
						All rights reserved | copyrighted 2023 | Gayashan Wagachchi
					</span>
				</footer>
			</div>
		</>
	);
}
