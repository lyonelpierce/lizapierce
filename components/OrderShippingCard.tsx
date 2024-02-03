import { OrderShippingCardProps } from "@/types/ProductVariants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn, formatter } from "@/lib/utils";

const OrderShippingCard = ({
  order,
  className,
}: {
  order: OrderShippingCardProps;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <h3 className="text-xl font-semibold">Shipping Information</h3>
          <Separator className="bg-zinc-800" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4 divide-y divide-zinc-800 text-sm">
            <p className="flex justify-between capitalize">
              <span className="font-medium">Name: </span>
              {order.name}
            </p>
            <p className="flex justify-between capitalize">
              <span className="font-medium">Address: </span>
              {order.address}
            </p>
            <p className="flex justify-between">
              <span className="font-medium">E-mail: </span>
              {order.email}
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Phone: </span>
              {order.phone}
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Date: </span>
              {order.createdAt.toLocaleDateString()}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="w=full md:w-1/2">
        <CardHeader>
          <h3 className="text-xl font-semibold">Order Details</h3>
          <Separator className="bg-zinc-800" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4 divide-y divide-zinc-800 text-sm">
            {order.orderItems.map((orderItem) => (
              <div key={orderItem.id} className="flex flex-col">
                <p className="flex justify-between font-medium w-full">
                  <span>{orderItem.product.name}</span>
                  {formatter.format(orderItem.variant.price)}
                </p>
                <p className="text-zinc-500">{orderItem.variant.title}</p>
              </div>
            ))}
            <div className="flex justify-between">
              <span className="font-medium">Total: </span>
              {formatter.format((order.total ?? 0) / 100)}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderShippingCard;
