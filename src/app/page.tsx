import ClientFetch from "@/components/ClientFetch";
import ServerFetch from "@/components/ServerFetch";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1>Notes</h1>
      <ServerFetch />
      <ClientFetch />
    </main>
  );
}
