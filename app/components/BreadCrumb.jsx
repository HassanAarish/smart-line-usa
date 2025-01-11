"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Breadcrumb = () => {
  const router = useRouter();
  const breadcrumbs = router?.asPath?.split("/")?.filter((path) => path);

  return (
    <nav className="bg-gray-100 py-2 px-4">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="text-blue-600">
            Home
          </Link>
        </li>
        {breadcrumbs?.map((crumb, idx) => (
          <li key={idx} className="flex items-center">
            <span className="mx-1 text-gray-400">/</span>
            <Link
              href={`/${breadcrumbs.slice(0, idx + 1).join("/")}`}
              className="text-blue-600 capitalize"
            >
              {crumb}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
