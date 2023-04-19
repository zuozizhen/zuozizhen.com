declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"black-mirro-bandersnatch.mdx": {
  id: "black-mirro-bandersnatch.mdx",
  slug: "black-mirro-bandersnatch",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"cachemoment-new-branding.mdx": {
  id: "cachemoment-new-branding.mdx",
  slug: "cachemoment-new-branding",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"chatgpt-signup.mdx": {
  id: "chatgpt-signup.mdx",
  slug: "chatgpt-signup",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"cron-design.mdx": {
  id: "cron-design.mdx",
  slug: "cron-design",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"css-standard.mdx": {
  id: "css-standard.mdx",
  slug: "css-standard",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"design-trend-2019.mdx": {
  id: "design-trend-2019.mdx",
  slug: "design-trend-2019",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"draw-1.mdx": {
  id: "draw-1.mdx",
  slug: "draw-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"figma-bytedance.mdx": {
  id: "figma-bytedance.mdx",
  slug: "figma-bytedance",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"figmachina.mdx": {
  id: "figmachina.mdx",
  slug: "figmachina",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"flatland.mdx": {
  id: "flatland.mdx",
  slug: "flatland",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"life-in-a-day-2020.mdx": {
  id: "life-in-a-day-2020.mdx",
  slug: "life-in-a-day-2020",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"luowang.mdx": {
  id: "luowang.mdx",
  slug: "luowang",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"master-principle.mdx": {
  id: "master-principle.mdx",
  slug: "master-principle",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"mastergo-principle-case.mdx": {
  id: "mastergo-principle-case.mdx",
  slug: "mastergo-principle-case",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"medium-new-logo.mdx": {
  id: "medium-new-logo.mdx",
  slug: "medium-new-logo",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"meetup-ziru.mdx": {
  id: "meetup-ziru.mdx",
  slug: "meetup-ziru",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"personal-website.mdx": {
  id: "personal-website.mdx",
  slug: "personal-website",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"share-movie-korea.mdx": {
  id: "share-movie-korea.mdx",
  slug: "share-movie-korea",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"share-movie-science.mdx": {
  id: "share-movie-science.mdx",
  slug: "share-movie-science",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"think-plus.mdx": {
  id: "think-plus.mdx",
  slug: "think-plus",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"website-for-designer-1.mdx": {
  id: "website-for-designer-1.mdx",
  slug: "website-for-designer-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"website-for-designer-2.mdx": {
  id: "website-for-designer-2.mdx",
  slug: "website-for-designer-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"zuibishe.mdx": {
  id: "zuibishe.mdx",
  slug: "zuibishe",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"project": {
"mastergo-design-system.mdx": {
  id: "mastergo-design-system.mdx",
  slug: "mastergo-design-system",
  body: string,
  collection: "project",
  data: InferEntrySchema<"project">
},
"mastergo.mdx": {
  id: "mastergo.mdx",
  slug: "mastergo",
  body: string,
  collection: "project",
  data: InferEntrySchema<"project">
},
"smartisan.mdx": {
  id: "smartisan.mdx",
  slug: "smartisan",
  body: string,
  collection: "project",
  data: InferEntrySchema<"project">
},
},
"team": {
"janette-lynch.md": {
  id: "janette-lynch.md",
  slug: "janette-lynch",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"marcell-ziemann.md": {
  id: "marcell-ziemann.md",
  slug: "marcell-ziemann",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"robert-palmer.md": {
  id: "robert-palmer.md",
  slug: "robert-palmer",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
