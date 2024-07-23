import Link from "next/link";

function HeaderName() {
  const first_name = "Katie";
  const last_name = "Chan";

  return (
    <>
      <div className="mr-3 flex-none overflow-hidden md:w-auto uppercase tracking-[3px] text-2xl font-thin">
        <Link href="/">
          <h1 className="name">
            {first_name}
            <span className="text-pink-500">{last_name}</span>
          </h1>
        </Link>
      </div>
    </>
  );
}

export default HeaderName;
