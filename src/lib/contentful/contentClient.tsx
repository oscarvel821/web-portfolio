import { createClient } from "contentful";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

//standard contentful client
export const client = createClient({
    space : CONTENTFUL_SPACE_ID!,
    accessToken : CONTENTFUL_ACCESS_TOKEN!
})
