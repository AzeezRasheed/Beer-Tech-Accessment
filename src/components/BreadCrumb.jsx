import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = () => {
  const location = useRouter();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  const category = new URLSearchParams(location.search).get("category");

  console.log(pathSegments);
  return (
    <div>
      {/* Home Link */}
      <Link href="/">Home</Link>

      {/* Dynamic Links based on path segments */}
      {pathSegments.map((segment, index) => (
        <span key={segment}>
          {" / "}
          <Link
            className="capitalize"
            href={`/${pathSegments.slice(0, index + 1).join("/")}`}
          >
            {segment}
          </Link>
        </span>
      ))}

      {category && <>{" / "}</>}

      {/* Category Link */}
      {category && (
        <Link href={`${location.pathname}?category=${category}`}>{category}</Link>
      )}
    </div>
  );
};

export default Breadcrumb;
