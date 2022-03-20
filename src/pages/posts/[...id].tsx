import { PostLayout } from "@components/post";
import fs from "fs";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import path from "path";

type PostProps = {
    content: string;
};

const Post: NextPage<PostProps> = ({ content }) => {
    return (
        <PostLayout
            date="01/01/2001"
            title="Just a Little Test"
            content={content}
        />
    );
};

export const getStaticProps: GetStaticProps<PostProps> = async function (ctx) {
    if (!ctx?.params?.id) {
        return {
            notFound: true,
        };
    }

    const filename = `${ctx.params.id}.md`;
    const filepath = path.join(process.cwd(), "posts", filename);
    const content = fs.readFileSync(filepath, "utf-8");

    return {
        props: {
            content,
        },
    };
};

export const getStaticPaths: GetStaticPaths = function () {
    const postsDir = path.join(process.cwd(), "posts");
    const posts = fs.readdirSync(postsDir);
    const paths = posts.map((file) => {
        const filename = file.replace(".md", "");
        return `/posts/${filename}`;
    });

    return {
        paths,
        fallback: false,
    };
};

export default Post;
