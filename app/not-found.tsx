import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h2 className="text-5xl md:text-7xl font-bold">Not Found</h2>
      <p className="font-medium">Sorry, we couldn&apos;t find that page</p>
      <Link href="/">
        <Button variant="link" className="text-white items-center">
          <Undo2 className="w-4 h-4 mr-2" />
          Return
        </Button>
      </Link>
    </div>
  );
}
