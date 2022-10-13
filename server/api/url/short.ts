import { shortUrl } from "~/server/database/repositories/urlRepository";

export default defineEventHandler(async (event) => {
    const body = await useBody(event);
    const longUrl = body.longUrl;
    const baseUrl = body.baseUrl;

    const urls = await shortUrl(longUrl, baseUrl);
    return urls;
});
