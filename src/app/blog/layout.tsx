export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<header>
				<span>Dev Blog</span>
				<span>News</span>
				<span>Contact</span>
				<span>About</span>
			</header>
			<nav>
				<h3>C#</h3>
				<h3>.NET</h3>
				<h3>ASP.NET Core</h3>
				<h3>JavaScript</h3>
				<h3>React.JS</h3>
				<h3>Next.JS</h3>
				<h3>Blockchain</h3>
			</nav>
			<main>{children}</main>
			<footer>All rights reserved</footer>
		</>
	);
}
