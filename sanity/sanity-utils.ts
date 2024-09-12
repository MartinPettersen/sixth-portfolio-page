/* eslint-disable import/export */
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project } from "@/types/Project";
import { About } from "@/types/About";
import { Education } from "@/types/Education";


export async function getAbout(): Promise<About[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "about"]{
            _id,
            _createdAt,
            name,
            aboutInfo,
            information,
            aboutInfoNorwegian,
        }`
    )
}


export async function getEducation(): Promise<Education[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "education"]{
            _id,
            _createdAt,
            name,
            firstBach,
            firstBachInfo,
            firstBachInfoBlock,
            secondBach,
            secondBachInfo,
            secondBachInfoBlock
        }`
    )
}

export async function getProjects(): Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            category,
            projectInfo,
            information,
            tech,
            githubLinks,
            hostLinks,
            "image": image.asset->url,
            "alt": image.alt,
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            category,
            projectInfo,
            information,
            tech,
            githubLinks,
            hostLinks,
            "image": image.asset->url,
            "alt": image.alt,
        }`,
        { slug }
    )
}

export async function searchProject(searchTerm: string): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && $searchTerm in tech]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            category,
            projectInfo,
            information,
            tech,
            githubLinks,
            hostLinks,
            "image": image.asset->url,
            "alt": image.alt,
        }`,
        { searchTerm }
    )
}

export async function newestProject(): Promise<Project[]> {
    
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" ]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            category,
            projectInfo,
            information,
            tech,
            githubLinks,
            hostLinks,
            "image": image.asset->url,
            "alt": image.alt,
        }`
    )
}

export async function searchProjects(searchTerm: string): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && $searchTerm in tech]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            category,
            projectInfo,
            information,
            tech,
            githubLinks,
            hostLinks,
            "image": image.asset->url,
            "alt": image.alt,
        }`,
        { searchTerm }
    )
}

export async function getProjectCategories(categoryTerm: string): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && category == $categoryTerm]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            category,
            projectInfo,
            information,
            tech,
            githubLinks,
            hostLinks,
            "image": image.asset->url,
            "alt": image.alt,
        }`,
        { categoryTerm }
    )
}