/* eslint-disable @next/next/no-img-element */
import  Link  from "next/link";

const Whatsapp = () => {
  return <div className="fixed z-50 bottom-10 right-4">
    <Link href="https://wa.me/447949731000" className="text-white hover:text-zinc-500 w-fit rounded">
      <span className="text-white">
        <img src="https://utfs.io/f/K39jtZpI79HTameJzQGkOEQrPXfC93oxns05VjupRNiwHdqT" alt="Whatsapp" className="w-12 h-12" />
      </span>
    </Link>
  </div>;
};
export default Whatsapp;
