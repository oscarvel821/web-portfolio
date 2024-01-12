import { TypeProject, TypeProjectFields } from "../types/contentful";
import { client } from "./contentClient";
import type { Entry, EntryFields } from "contentful";

interface Project {
    title : string;
    description : string;
    url : string;
}

interface ProjectSkeleton {
    contentTypeId : "project",
    fields : {
        title : EntryFields.Text,
        description : EntryFields.Text,
        url : EntryFields.Text
    }
}

export function parseContentfulBlogPost(projectEntry?: TypeProject): Project | null {
	if (!projectEntry) {
		return null
	}

	return {
		title: projectEntry.fields.title || '',
		description: projectEntry.fields.description || null,
        url : projectEntry.fields.url || ""
	}
}

export async function fetchProjects() : Promise<Project[]> {
    const projectsResult = await client.getEntries<ProjectSkeleton>({
        content_type: "project",
        include: 2,
    })

    return projectsResult.items.map((projectEntry) => parseContentfulBlogPost(projectEntry) as Project);
}