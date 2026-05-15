// app/admin/page.tsx

import { supabaseServer } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

async function updateStatus(id: string, status: string) {
  "use server"

  await supabaseServer
    .from("services_request")
    .update({ status })
    .eq("id", id)

  revalidatePath("/admin")
}

async function deleteRequest(id: string) {
  "use server"

  await supabaseServer
    .from("services_request")
    .delete()
    .eq("id", id)

  revalidatePath("/admin")
}

export default async function Dashboard() {
  const { data: requests } = await supabaseServer
    .from("services_request")
    .select(`
      id,
      name,
      email,
      message,
      status,
      created_at,
      services (
        title_pt
      )
    `)
    .order("created_at", { ascending: false })

  const total = requests?.length || 0
  const newCount = requests?.filter(r => r.status === "new").length || 0
  const answeredCount = requests?.filter(r => r.status === "answered").length || 0

  return (
    <div className="mt-[20vh] min-h-screen bg-background p-10">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Controle de solicitações de serviço
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-6">
          <KpiCard title="Total" value={total} />
          <KpiCard title="Novas" value={newCount} />
          <KpiCard title="Respondidas" value={answeredCount} />
        </div>

        {/* LISTA */}
        <div className="space-y-6">
          {requests?.map((req) => (
            <div
              key={req.id}
              className="border rounded-xl p-6 bg-card shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="font-semibold text-lg">
                    {req.services?.title_pt}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {new Date(req.created_at).toLocaleString()}
                  </p>
                </div>

                <StatusBadge status={req.status} />
              </div>

              <div className="space-y-2 mb-4">
                <p><strong>Nome:</strong> {req.name}</p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${req.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {req.email}
                  </a>
                </p>
                {req.message && (
                  <p><strong>Mensagem:</strong> {req.message}</p>
                )}
              </div>

              <div className="flex gap-3">
                <form action={updateStatus.bind(null, req.id, "answered")}>
                  <button className="text-green-600 text-sm">
                    Marcar como respondido
                  </button>
                </form>

                <form action={deleteRequest.bind(null, req.id)}>
                  <button className="text-red-600 text-sm">
                    Deletar
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

function KpiCard({ title, value }: { title: string, value: number }) {
  return (
    <div className="border rounded-xl p-6 bg-card shadow-sm">
      <p className="text-sm text-muted-foreground">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const colors = {
    new: "bg-yellow-500",
    viewed: "bg-blue-500",
    answered: "bg-green-600",
  }

  return (
    <span
      className={`px-3 py-1 text-xs text-white rounded-full ${colors[status as keyof typeof colors]}`}
    >
      {status}
    </span>
  )
}