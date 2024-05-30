import { defineConfig } from "tinacms"

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

export default defineConfig({
  client: { skip: true },
  branch,

  // Get this from tina.io
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  clientId: "c4959a97-105f-4f85-a1fb-a90a5207d9fd",
  // Get this from tina.io
  // token: process.env.TINA_TOKEN,
  token: "df266ea11b72b9b211b43acf44f8fa1f1579d8d9",
  // localContentPath: "../../../demo-content",
  localContentPath: "https://github.com/Aibono1225/demo-content/blob/main",
  build: {
    outputFolder: "admin",
    publicFolder: "static",
    basePath: "demo-tina-web",
  },
  media: {
    tina: {
      mediaRoot: "https://github.com/Aibono1225/demo-content/blob/main",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "https://github.com/Aibono1225/demo-content/tree/main/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
})
