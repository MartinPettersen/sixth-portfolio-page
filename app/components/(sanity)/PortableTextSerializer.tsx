import { PortableTextComponents } from "@portabletext/react";
import React from "react";

const PortableTextSerializer: PortableTextComponents = {
  block: ({
    value,
    children,
  }) => {
    switch (value.style) {
      case "h1":
        return <h1 className="text-4xl font-extrabold my-4">{children}</h1>;
      case "h2":
        return <h2 className="text-3xl font-bold my-4">{children}</h2>;
      case "h3":
        return <h3 className="text-2xl font-semibold my-4">{children}</h3>;
      case "h4":
        return <p className="text-base my-2">{children}</p>;
      default:
        return <p>{children}</p>;
    }
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-5">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ( {children, value }) => {
        const target = (value?.href || '').startsWith("http") ? "_blank" : undefined;
        return (
            <a href={value?.href} target={target} rel={target === '_blank' ? "noopener noreferrer" : undefined} className="underline text-blue-400">
                {children}
            </a>
        )
    }
  },
};

export default PortableTextSerializer;
