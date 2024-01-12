const Heading = ({ text, cart }: { text: string; cart?: number }) => {
  return (
    <h2 className="text-xl">
      {text} {cart && `(${cart})`}
    </h2>
  );
};

export default Heading;
