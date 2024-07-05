import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

const testimonials = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, harum dolor omnis libero illo possimus! Et maiores qui, labore distinctio asperiores tenetur voluptate similique ratione aperiam eius excepturi temporibus nisi.",
    client: "Ferdaws Amini",
    clientInfo: "Graphic Designer, @_FA.VISUALS_",
    img: "https://www.material-tailwind.com/image/Logo-coinbase.svg",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, harum dolor omnis libero illo possimus! Et maiores qui, labore distinctio asperiores tenetur voluptate similique ratione aperiam eius excepturi temporibus nisi.",
    client: "Ferdaws Amini",
    clientInfo: "Graphic Designer, @_FA.VISUALS_",
    img: "https://www.material-tailwind.com/image/Logo-coinbase.svg",
  },
];

function TestimonialCard({ img, client, title, clientInfo }) {
  return (
    <Card shadow={false} className="bg-primary rounded-2xl p-6">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography
          color=""
          className="lg:mb-20 mb-4 text-2xl font-bold text-black"
        >
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <Typography variant="h6" color="blue-gray" className="text-2xl">
            {client}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-bold !text-black text-sm"
          >
            {clientInfo}
          </Typography>
        </div>
        <img src={img} className="max-w-[8rem]" alt={client} />
      </CardBody>
    </Card>
  );
}

export function TestimonialSection16() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <Typography
          variant="h2"
          color=""
          className="mb-4 !text-2xl lg:!text-4xl text-primary font-bold"
        >
          The Heartfelt Testimonials of Clients
        </Typography>
        <Typography
          variant="lead"
          className="max-w-3xl !text-gray-200 mb-10 lg:mb-20"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illo fugiat neque repellat modi excepturi aliquam mollitia. Illum reprehenderit voluptas quos, hic, molestiae iure, quisquam possimus deleniti suscipit at earum?
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
              className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
            >
              &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde vitae expedita animi porro consequuntur officiis blanditiis vero obcaecati. Rerum quaerat commodi fugit temporibus officiis! Sit est fugiat sequi exercitationem perspiciatis!&quot;
            </Typography>
          </CardHeader>
          <CardBody className="items-center mx-auto py-2">
            <img
              src="https://www.material-tailwind.com/image/Logo-coinbase.svg"
              className="max-w-[8rem] mx-auto grayscale"
              alt="spotify"
            />
            <Typography variant="h6" color="blue-gray" className="text-2xl">
              Ferdaws Amini
            </Typography>
            <Typography
              variant="paragraph"
              className="font-bold !text-black"
            >
              Graphic Designer
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSection16;