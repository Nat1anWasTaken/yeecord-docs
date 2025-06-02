import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import * as source from "../../.source";

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(source.blog, []),
});

export const docs = loader({
  source: source.docs.toFumadocsSource(),
  baseUrl: "/docs",
});
