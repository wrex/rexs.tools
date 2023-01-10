export type PostMetaData = {
	title: string;
	description: string;
	date: string;
	image: { url: string; alt: string };
	tags: string[];
};

export type Post = {
	route: string;
	srcPath: string;
	meta: PostMetaData;
};

export type PostData = {
	posts: Post[];
	tagCounts: { [key: string]: number };
};
