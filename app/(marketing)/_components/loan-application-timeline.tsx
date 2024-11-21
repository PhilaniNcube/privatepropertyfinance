import Image from "next/image";
import  TimelineItem  from "./timeline-item";


const steps = [
  {
    title: "Initial Free Fact Find",
    description:
      "We gather key details about your financing requirements to provide expert guidance and secure the best possible outcomes.",
  },
  {
    title: "Lender Engagement",
    description:
      "We present you with a clear and concise overview of the indicative lending proposal from selected lenders.",
  },
  {
    title: "Client Agreement",
    description:
      "Once you formally engage with us, we promptly initiate the application process with the most suitable lender.",
  },
  {
    title: "Document Gathering",
    description:
      "We collect all necessary documents required by the lender to meet their criteria and progress the application.",
  },
  {
    title: "Credit Approval",
    description:
      "Depending on various factors, certain lenders will approve loans subject to property valuations.",
  },
  {
    title: "Valuation",
    description:
      "We collaborate with you and the lender to select the most suitable valuer with expertise in the relevant sector.",
  },
  {
    title: "Loan Offer",
    description:
      "The lender issues a formal loan offer outlining key details and allowing for minor adjustments before proceeding to the legal process.",
  },
  {
    title: "Legals",
    description:
      "The lenders' solicitors and your solicitors engage on pre-drawdown conditions before drawdown.",
  },
  {
    title: "Completion",
    description:
      "Once all legal matters are finalised, the funds are transferred to your solicitor, completing the drawdown process.",
  },
];

export function LoanApplicationTimeline() {
  return (
    <div className="max-w-7xl mx-auto bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        8 Steps to Completion Application Process
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <ol className="relative">
            {steps.map((step, index) => (
              <TimelineItem
                key={index}
                title={step.title}
                description={step.description}
                isCompleted={index === 0}
                isLast={index === steps.length - 1}
              />
            ))}
          </ol>
          <p className="mt-6 text-sm text-gray-600">
            For commercial mortgages, this process typically takes 4–6 weeks,
            depending on various factors. Bridging loans can often be completed
            within a matter of days. At Private Property Finance, we will be
            here every step of the journey.
          </p>
        </div>
        <div className="rounded-md h-full w-full hidden lg:block">
          <Image
            src="https://utfs.io/f/K39jtZpI79HTPHYL06YDEh0cZmVTUtWF4XL2gsw5Qxf3k8b1"
            alt="Loan Application Timeline"
            width={500}
            height={1000}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
