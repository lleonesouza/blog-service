export default async (RSS2JSON_URL:any) => {
    const res = await (await fetch(RSS2JSON_URL)).json()
    const stories: stories[] = []
    res.data.items.map((storie:any) => {
        stories.push({
            title: storie.title,
            date: storie.pubDate,
            link: storie.link,
            author: storie.author,
            html: storie.description,
            thumbnail: storie.thumbnail,
        })
    })
    return stories
}