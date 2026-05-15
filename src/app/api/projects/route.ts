import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";


// GET - LIST PROJECTS
export async function GET() {
  const { data, error } = await supabaseServer
    .from("projects")
    .select(`
      id,
      title_pt,
      title_en,
      description_pt,
      description_en,
      github_url,
      host_url,
      created_at,

      projects_demos (
        id,
        url
      ),

      project_stacks (
        stacks (
          id,
          name
        )
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  const formatted = data?.map((project) => ({
    ...project,
    stacks: project.project_stacks.map((s: any) => s.stacks),
  }));

  return NextResponse.json(formatted);
}



// POST - CREATE PROJECT
export async function POST(req: Request) {
  const body = await req.json();

  const {
    title_pt,
    title_en,
    description_pt,
    description_en,
    github_url,
    host_url,
    demos = [],
    stacks = [],
  } = body;

  const { data: project, error } = await supabaseServer
    .from("projects")
    .insert({
      title_pt,
      title_en,
      description_pt,
      description_en,
      github_url,
      host_url,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  const projectId = project.id;

  // INSERT DEMOS
  if (demos.length) {
    const demoRows = demos.map((url: string) => ({
      project_id: projectId,
      url,
    }));

    await supabaseServer
      .from("projects_demos")
      .insert(demoRows);
  }

  // INSERT STACK RELATION
  if (stacks.length) {
    const stackRows = stacks.map((stack_id: string) => ({
      project_id: projectId,
      stack_id,
    }));

    await supabaseServer
      .from("project_stacks")
      .insert(stackRows);
  }

  return NextResponse.json(project);
}



// PUT - UPDATE PROJECT
export async function PUT(req: Request) {
  const body = await req.json();

  const {
    id,
    title_pt,
    title_en,
    description_pt,
    description_en,
    github_url,
    host_url,
    demos = [],
    stacks = [],
  } = body;

  const { error } = await supabaseServer
    .from("projects")
    .update({
      title_pt,
      title_en,
      description_pt,
      description_en,
      github_url,
      host_url,
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  // RESET DEMOS
  await supabaseServer
    .from("projects_demos")
    .delete()
    .eq("project_id", id);

  if (demos.length) {
    const demoRows = demos.map((url: string) => ({
      project_id: id,
      url,
    }));

    await supabaseServer
      .from("projects_demos")
      .insert(demoRows);
  }

  // RESET STACKS
  await supabaseServer
    .from("project_stacks")
    .delete()
    .eq("project_id", id);

  if (stacks.length) {
    const stackRows = stacks.map((stack_id: string) => ({
      project_id: id,
      stack_id,
    }));

    await supabaseServer
      .from("project_stacks")
      .insert(stackRows);
  }

  return NextResponse.json({ success: true });
}



// DELETE - DELETE PROJECT
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing project id" },
      { status: 400 }
    );
  }

  const { error } = await supabaseServer
    .from("projects")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}