import { marked } from "marked";

export type PostLayoutProps = {
    content: string;
    date: string;
    title: string;
};

export const PostLayout: React.FC<PostLayoutProps> = ({
    content,
    date,
    title,
}) => {
    if (!content) {
        return null;
    }

    return (
        <article>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <div
                dangerouslySetInnerHTML={{
                    __html: marked(content),
                }}
            />
        </article>
    );
};
