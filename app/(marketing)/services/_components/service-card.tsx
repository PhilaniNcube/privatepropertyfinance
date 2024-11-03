import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";


interface Service {
  url: string;
  text: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link href={service.url} className="block h-full">
      <Card className="relative h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
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
