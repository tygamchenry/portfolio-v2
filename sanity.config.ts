import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

const config = defineConfig({
    projectId: 'mt62k9s3',
    dataset: 'production',
    title: "Tyga's Portfolio 2.0",
    apiVersion: "2023-12-05",
    basePath: "/studio",
    plugins: [deskTool()],
    schema: { types: schemaTypes }
});

export default config;