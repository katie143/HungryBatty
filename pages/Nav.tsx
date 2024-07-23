import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const nav_items = ["about", "projects", "contact", "resume"];
  const router = useRouter();
  return (
    <>
      <div className="relative hidden lg:flex items-center ml-auto">
        <nav className="text-sm leading-6 text-slate-700 dark:text-slate-200">
          <ul className="flex space-x-12">
            {nav_items.map((item) => (
              <Link
                className={
                  router.pathname == "/" + item ? "font-bold text-pink-500" : ""
                }
                href={item}
              >
                <li className="capitalize" key={item}>
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
