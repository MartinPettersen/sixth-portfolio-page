import { PortableTextBlock } from "sanity";

export type About = {
    _id: string;
    _createdAt: Date;
    name: string;
    aboutInfo: string;
    aboutContent: PortableTextBlock[];
    aboutInfoNorwegian: string;
}