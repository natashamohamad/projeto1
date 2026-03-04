import White from "./content/White";
import Black from "./content/Black";
import { getUserLayer } from "@/utils/get-user-layer";
import { headers, cookies } from "next/headers";

export default async function Page() {
  const cks = await cookies();
  const hdrs = await headers();
  const userLayer = await getUserLayer({ cks, hdrs });
  const whiteContent = userLayer === 1;

  if (whiteContent) {
    return <White />;
  }

  return <Black />;
}
