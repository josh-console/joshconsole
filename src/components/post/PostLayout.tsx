export type PostLayoutProps = {
    date: string;
    title: string;
};

export const PostLayout: React.FC<PostLayoutProps> = ({
    children,
    date,
    title,
}) => {
    return (
        <article>
            <h2>{title}</h2>
            <h3>{date}</h3>
            {children}
        </article>
    );
};
