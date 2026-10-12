function Article({ title, text }) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    );
}

function MultipleArticles({ articles }) {
    return (
        <div>
            {articles.map((article, index) => (
                <Article key={index} title={article.title} text={article.text} />
            ))}
        </div>
    );
}

export { Article, MultipleArticles };