import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    category: string;
    projectInfo: string;
    content: PortableTextBlock[];
    information: PortableTextBlock[];
    tech: string[];
    githubLinks: string[];
    hostLinks: string[];
    image: string;
    alt: string;
}