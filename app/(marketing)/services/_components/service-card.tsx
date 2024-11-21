import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


interface Service {
  url: string;
  text: string;
  description: string;
  image: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link href={service.url} className="block h-full">
      <Card className="relative h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative w-full">
          <Image
            src={service.image}
            alt={service.text}
            width={1920}
            height={1080}
            className="object-cover transition-transform duration-300 aspect-video hover:grayscale"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle>{service.text}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-4">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};


export default ServiceCard;
