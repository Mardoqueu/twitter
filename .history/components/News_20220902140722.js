
export default function News({article}) {
  return (
    <a href={article.url} target="_blank">
        <div className="flex">
            <h6>{article.title}</h6>
            <p>{article.source.name}</p>
        </div>
        <img src={article.urlToImage}></img>

    </a>
  )
}
