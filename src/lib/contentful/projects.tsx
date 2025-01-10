import { TypeProject } from "../types/contentful";
import { client } from "./contentClient";
import type { EntryFields, Asset, AssetLink } from "contentful";
import { ContentfulImage } from "../types/contentfulImage";

// //This is our simplifed version of our Asset aka contentful type Image
// interface ContentfulImage {
//     url : String;
//     alt : String;
//     width : number;
//     height : number;
// }

//this is our simplifed version of our contentful type "Project"
interface Project {
    title : string;
    description : string;
    url : string;
    image : ContentfulImage | null;
}

interface ProjectSkeleton {
    contentTypeId : "project",
    fields : {
        title : EntryFields.Text,
        description : EntryFields.Text,
        url : EntryFields.Text,
        project_image : Asset
    }
}

export function parseContentfulImage(asset? : Asset<undefined, string> | {sys : AssetLink}) : ContentfulImage | null {
    if (!asset){
        return null
    }

    if(!('fields' in asset)){
        return null
    }

    return {
        url : asset.fields.file?.url || '',
        alt : asset.fields.description ||  '',
        width : asset.fields.file?.details.image?.width || 0,
        height : asset.fields.file?.details.image?.height || 0
    }
}

export function parseContentfulBlogPost(projectEntry?: TypeProject): Project | null {
	if (!projectEntry) {
		return null
	}

	return {
		title: projectEntry.fields.title || '',
		description: projectEntry.fields.description || null,
        url : projectEntry.fields.url || "",
        image : parseContentfulImage(projectEntry.fields.project_image)
	}
}

export async function fetchProjects() : Promise<Project[]> {
    const projectsResult = await client.getEntries<ProjectSkeleton>({
        content_type: "project",
        include: 2,
    })

    return projectsResult.items.map((projectEntry) => parseContentfulBlogPost(projectEntry) as Project);
}