import { PortableTextBlock } from "sanity";

export type Education = {
    _id: string;
    _createdAt: Date;
    name: string;
    firstBach: string;
    firstBachInfo: string;
    firstBachLocation: string;
    firstBachInfoBlock: PortableTextBlock[];
    secondBach: string;
    secondBachInfo: string;
    secondBachLocation: string;
    secondBachInfoBlock: PortableTextBlock[];
}