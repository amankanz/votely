import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We've seen a 300% increase in sales since we started using Votely.",
    name: "Nancy Thompson",
    title: "CEO at Organic Beauty Co",
    avatar: "/client_4.jpeg",
  },
  {
    id: 2,
    quote:
      "Votely has helped us build trust with our customers and grow our business.",
    name: "Alex Johnson",
    title: "Owner at Elite Fitness Studio",
    avatar: "/client_2.jpeg",
  },
  {
    id: 3,
    quote:
      "Our customers love the personal touch of Votely's review responses.",
    name: "Sophia Lee",
    title: "Marketing Manager at Tech Solutions",
    avatar: "/client_3.jpeg",
  },
  {
    id: 4,
    quote:
      "Votely's detailed analytics have given us invaluable insights into our business.",
    name: "Michael Davis",
    title: "General Manager at Gourmet Kitchen",
    avatar: "/ziha.jpeg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          What our customers say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-white border rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={30}
                  height={30}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm font-bold">{`"${testimonial.quote}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
