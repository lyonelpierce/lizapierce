import {
  FaCcStripe,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaCcDinersClub,
} from "react-icons/fa6";

const SafePayment = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-xs text-center">Guaranteed Secure Payment</span>
      <div className="flex justify-around">
        <FaCcStripe className="w-10 h-10" />
        <FaCcVisa className="w-10 h-10" />
        <FaCcMastercard className="w-10 h-10" />
        <FaCcAmex className="w-10 h-10" />
        <FaCcDiscover className="w-10 h-10" />
        <FaCcDinersClub className="w-10 h-10" />
      </div>
    </div>
  );
};

export default SafePayment;
