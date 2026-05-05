import { Navigate, useParams } from "react-router-dom";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectDetail() {
  const { projectSlug } = useParams();

  if (!projectSlug) {
    return <Navigate to="/" replace />;
  }

  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return <ProjectDetailTemplate project={project} />;
}
