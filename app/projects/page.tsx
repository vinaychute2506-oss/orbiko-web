import { redirect } from "next/navigation";

// Redirect /projects/* → /portfolio/*
export default function ProjectsRedirect() {
  redirect("/portfolio");
}
