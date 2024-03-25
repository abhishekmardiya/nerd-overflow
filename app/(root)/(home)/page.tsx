// this is out primary page (home route)

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      {/* UserButton --> user profile button */}
      <UserButton />
    </div>
  );
}
