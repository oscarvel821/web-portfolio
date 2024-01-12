import type { Entry, EntryField, EntryFields } from "contentful";

export interface TypeProjectFields {
    contentTypeId : "project",
    fields : {
        title : EntryFields.Text,
        description : EntryFields.Text,
        url : EntryFields.Text
    }
}

export type TypeProject = Entry<TypeProjectFields, undefined, string>;
