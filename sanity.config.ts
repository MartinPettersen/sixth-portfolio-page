// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'sanity';
// eslint-disable-next-line import/no-extraneous-dependencies
import { deskTool } from 'sanity/desk';
// import user from './sanity/schemas/user-schema';
import schemas from './sanity/schemas';


const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: "production",
    title: 'Portfolio Website',
    apiVersion: "2024-09-11",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;