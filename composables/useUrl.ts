export async function shortUrl(longUrl: string, baseUrl: string) {
    const url = await $fetch('/api/url/short', { method: 'POST', body: { longUrl: longUrl, baseUrl: baseUrl }})
    return url
}


export async function getUrls(longUrl: string) {
    const urls = await $fetch('/api/url', { method: 'GET'})
    return urls
}

export async function matchUrl(shortId: string) {
    const urls = await $fetch('/api/url/match',  { method: 'POST', body: { shortId }})
    return urls
}
