import { db } from "@/server/db";
import {
    investors as investorsTable,
    startups as startupTable,
} from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function VerifyDocument() {
  const investors = await db.query.investors.findMany({
    where: (investor, { eq }) => eq(investor.isVerified, false),
  });

  const startups = await db.query.startups.findMany({
    where: (startup, { eq }) => eq(startup.isVerified, false),
  });

  const handleVerify = async (table: typeof startupTable | typeof investorsTable, userId: number) => {
    "use server";
    await db.update(table).set({ isVerified: true }).where(eq(table.id, userId));
    revalidatePath("/")
  };

  return (
    <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Pending verifications
        </h2>
    <ul role="list" className="divide-y divide-gray-100 ">
      {investors.map((user) => (
        <li key={user.id} >
            <form action={async () =>{"use server"; await handleVerify(investorsTable, user.id)}} className="flex justify-between gap-x-6 py-5">

          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {user.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {user.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">Investor</p>
          <button
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Verify
          </button>
          </div>
            </form>
        </li>
      ))}
      {startups.map((user) => (
        <li key={user.id} >
            <form action={async() => {"use server"; await handleVerify(startupTable, user.id)}} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {user.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {user.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">Startup</p>
          <button
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Verify
          </button>
          </div>
          </form>
        </li>
      ))}
    </ul>
    </div>
  );
}
