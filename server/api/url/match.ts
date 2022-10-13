import { matchUrl } from "~/server/database/repositories/urlRepository";

export default async (req, res) => {
    const body = await useBody(req);
    console.log(body);
    const shortId = body.shortId;
    const url = await matchUrl(shortId);
    if (url) return url;
    return new Error("Invalid Short Url");
};
