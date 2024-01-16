const WidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="bg-black pt-20 md:pt-24 flex-grow h-full md:h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">{children}</div>
    </div>
  );
};

export default WidthWrapper;
