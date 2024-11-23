import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link';

export default function FullWidthBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-accent to-green-400 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              See how much you can borrow in 60 Seconds
            </h2>
            <p className="mt-2 text-sm sm:text-base opacity-80">
              Get a quick estimate of your borrowing power
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/get-a-quote" >
              <Button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                Check Now
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
