import { getUrls } from "~/server/database/repositories/urlRepository";

export default defineEventHandler(async (e) => {
    const urls = await getUrls();
    return urls;
});
