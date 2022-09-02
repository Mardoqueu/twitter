
export default function News({article}) {
  return (
    <a href={article.url} target="_blank">
        <div className="">
            <h6>{article.title}</h6>
        </div>

    </a>
  )
}
