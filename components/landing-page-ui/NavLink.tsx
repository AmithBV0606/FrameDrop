import Link from "next/link";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-gray-200 hover:text-white"
    >
      {children}
    </Link>
  );
}