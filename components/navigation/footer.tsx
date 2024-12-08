import Link from "next/link";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full">
          <ul className="flex flex-col lg:flex-row justify-between items-center uppercase font-extrabold   gap-6 py-6 text-3xl">
            <li>
              <p className="text-white hover:text-zinc-500">London</p>
            </li>
            <li>
              <p className="text-white hover:text-zinc-500">Manchester</p>
            </li>
            <li>
              <p className="text-white hover:text-zinc-500">Edinburgh</p>
            </li>
            <li>
              <p className="text-white hover:text-zinc-500">Cape Town</p>
            </li>
            <li>
              <p className="text-white hover:text-zinc-500">Dubai</p>
            </li>
          </ul>
        </div>
        <div className="pb-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-zinc-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-white hover:text-zinc-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white hover:text-zinc-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/447464882447"
                  className="text-white hover:text-zinc-500"
                >
                  WhatsApp Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://athenamedia.co.uk"
                  className="text-white hover:text-zinc-500 text-xs"
                >
                  Developed By Athena Media &copy; {year}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-zinc-500"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bridging-finance"
                  className="text-white hover:text-zinc-500"
                >
                  Bridging Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/care-home-finance"
                  className="text-white hover:text-zinc-500"
                >
                  Care Home Finance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/resources/privacy-policy"
                  className="text-white hover:text-zinc-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
