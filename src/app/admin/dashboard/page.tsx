async function getRequests() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/admin/requests`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Dashboard() {
  const requests = await getRequests();

  return (
    <div className="p-12">

      <h1 className="text-3xl mb-10">
        Service Requests
      </h1>

      <div className="space-y-6">

        {requests.map((r: any) => (
          <div
            key={r.id}
            className="border p-6 rounded"
          >
            <h2>{r.name}</h2>

            <p>{r.email}</p>

            <p>{r.message}</p>

            <span>Status: {r.status}</span>
          </div>
        ))}

      </div>
    </div>
  );
}