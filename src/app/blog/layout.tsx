export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<header>DevBlog</header>
			<nav>Topics</nav>
			<main>{children}</main>
			<footer>All rights reserved</footer>
		</>
	);
}
