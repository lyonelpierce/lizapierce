import Image from "next/image";

const Partnership = () => {
  return (
    <div className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full h-96">
          <Image
            src="/images/partner.jpg"
            alt="Woman in beach"
            fill
            className="rounded-3xl object-cover opacity-40"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/3">
            <h2 className="text-3xl md:text-5xl text-center">
              Let's become a partnership!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
