import type { Entry, EntryFields, Asset } from "contentful";

export interface TypeProjectFields {
    contentTypeId : "project",
    fields : {
        title : EntryFields.Text,
        description : EntryFields.Text,
        url : EntryFields.Text,
        project_image : Asset

    }
}

export type TypeProject = Entry<TypeProjectFields, undefined, string>;
