
export default function News({article}) {
  return (
    <a href={article.url} target="_blank">
        <div className="flex items-center justify-between">
            <h6>{article.title}</h6>
            <p>{article.source.name}</p>
        </div>
        <img className="w-[70px] h[70px]" src={article.urlToImage}></img>

    </a>
  )
}
