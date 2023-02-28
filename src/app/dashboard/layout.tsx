export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<nav>navigation bar</nav>
			<main>{children}</main>
		</>
	);
}
