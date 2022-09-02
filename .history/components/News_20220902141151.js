
export default function News({article}) {
  return (
    <a href={article.url} target="_blank">
      <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">            <div className="">
                <h6>{article.title}</h6>
                <p>{article.source.name}</p>
            </div>
        </div>
        <img className="w-[70px] h-[70px]" src={article.urlToImage} alt=""></img>

    </a>
  )
}
