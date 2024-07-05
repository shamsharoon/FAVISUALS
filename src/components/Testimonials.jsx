import React from 'react';
import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const testimonials = [
  {
    title:
      "Great edit on my car, lots of effects that stood out while watching the video, definitely recommend FA.Visuals for your next video!",
    client: "Sayer Aziz",
    clientInfo: "★★★★★",
    img: "https://lh3.googleusercontent.com/a/ACg8ocKtv0ZxHfVRaDr9Sz9H8JoCp6JCFPk8TKiPmjzBs2zv4G7Y0g=w120-h120-p-rp-mo-br100",
    translateY: 'lg:translate-y-[-20px]'
  },
  {
    title:
      "Insane edits! Fair prices and excellent delivery times. Would suggest to book with him.",
    client: "Fahim Fahim",
    clientInfo: "★★★★★",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWlfq4PLMwit4mrZYfz0dOKdHXi3xudArSfDZYtzjES5T7nD0mf=w120-h120-p-rp-mo-br100",
    translateY: 'lg:translate-y-[10px]'
  },
];

function TestimonialCard({ img, client, title, clientInfo, translateY }) {
  return (
    <Card shadow={false} className="bg-primary rounded-2xl p-6">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography
          color="current"
          className="lg:mb-20 mb-4 text-2xl font-normal text-black"
        >
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse lg:flex-nowrap gap-x-6 justify-between items-center">
        <div className="flex-1">
          <Typography variant="h6" color="black" className={`text-2xl font-bold ${translateY}`}>
            {client}
          </Typography>
          <Typography
            variant="paragraph"
            className={`font-normal !text-black text-sm ${translateY}`}
          >
            <i className="fas fa-star text-gray-800"></i>
            <i className="fas fa-star text-gray-800"></i>
            <i className="fas fa-star text-gray-800"></i>
            <i className="fas fa-star text-gray-800"></i>
            <i className="fas fa-star text-gray-800"></i>
          </Typography>
        </div>
        <img src={img} className={`max-w-[5rem] flex-shrink-0 ${translateY}`} alt={client} />
      </CardBody>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <Typography
          variant="h2"
          color="current"
          className="mb-4 !text-2xl lg:!text-4xl text-primary font-bold"
        >
          The Heartfelt Testimonials of Clients
        </Typography>
        <Typography
          variant="lead"
          className="max-w-3xl !text-gray-200 mb-10 lg:mb-20"
        >
          At FA Visuals, our top priority is to deliver professional, high-quality work that exceeds our clients' expectations and makes them proud to promote.
        </Typography>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>

        <Card
          shadow={false}
          className="mt-8 bg-primary text-center rounded-2xl p-6"
        >
          <CardHeader color="transparent" floated={false} shadow={false}>
            <Typography
              color="black"
              className="mb-4 !text-2xl lg:!text-2xl max-w-4xl !leading-snug mx-auto font-normal"
            >
              &quot;Excellent video and editing from FA Visuals. Would 100% recommend him to make a edit for your cars!&quot;
            </Typography>
          </CardHeader>
          <CardBody className="items-center mx-auto py-2">
            <img
              src="https://lh3.googleusercontent.com/a-/ALV-UjWVpICXUcbUCtbrnhCpTmn90NDSii5QhBdi_T--I48lYBRNg4g=w120-h120-p-rp-mo-br100"
              className="max-w-[5rem] mx-auto grayscale"
              alt="Review"
            />
            <Typography variant="h6" color="black" className="text-2xl font-bold">
              Musa Farooqui
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-black"
            >
              <i className="fas fa-star text-gray-800"></i>
              <i className="fas fa-star text-gray-800"></i>
              <i className="fas fa-star text-gray-800"></i>
              <i className="fas fa-star text-gray-800"></i>
              <i className="fas fa-star text-gray-800"></i>
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonials;
