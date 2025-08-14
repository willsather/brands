import Link from "next/link";

export function GetStartedButton() {
  return (
    <Link
      href="/#get-started"
      className="rounded-xl border border-[#001E2B] bg-[#00ED64] px-4 py-2 font-medium text-sm transition-colors duration-200 hover:rounded-full"
    >
      Get Started
    </Link>
  );
}
