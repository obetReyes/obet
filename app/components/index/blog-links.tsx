import { blog } from "~/content"
export const BlogLinks = () => {
  return (
<section className="max-w-5xl mx-auto py-8 h-full" id="blog">
  <h2 className="text-4xl font-bold text-white p-4 text-center">
    mis articulos
  </h2>
  <div className="space-y-8 lg:divide-y lg:divide-slate-600">
    {blog.map((article) => {
      return(
        <div key={article.title} className="pt-8 p-12 lg:p-0 sm:flex lg:items-end group">
      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img className=" rounded-md h-32 w-32 lg:w-32 object-cover" src={article.image} alt="text"/>
      </div>
      <div>
        <p className="mt-3 text-lg font-medium leading-6">
          <a href={article.href} target="_blank" className="text-xl text-gray-300 group-hover:text-gray-500 lg:text-2xl" rel="noreferrer">{article.title}</a>
        </p>
        <p className="mt-2 text-lg text-gray-500">{article.description}</p>
      </div>
    </div>
      )
    })}

  </div>
</section>
  )
}
