const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Title of project",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "subject" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectInfo",
      title: "projectInfo",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "githubLinks",
      titles: "GithubLinks",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "hostLinks",
      titles: "HostLinks",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "projectLinks",
      title: "Project Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "link",
          title: "Link",
          fields: [
            {
              name: "url",
              title: "URL",
              type: "url",
            },
            {
              name: "name",
              title: "Name",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "tech",
      titles: "Tech",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
