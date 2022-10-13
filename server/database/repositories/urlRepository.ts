// import client from "../client";
import mongoose from "mongoose";
import validUrl from "valid-url";
import shortid from "shortid";
import Url from "../models/Url";

import dotenv from "dotenv";
dotenv.config({ path: ".env" });

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to MongoDB Atlas");
});

export async function shortUrl(longUrl: string, baseUrl: string) {
    if (!validUrl.isUri(baseUrl)) {
        return new Error("Invalid base URL");
    }

    const urlCode = shortid.generate();

    if (validUrl.isUri(longUrl)) {
        try {
            let link = await Url.findOne({
                long: longUrl,
            });

            if (link) {
                return link;
            } else {
                const shortUrl = baseUrl + urlCode;

                // invoking the Url model and saving to the DB
                link = new Url({
                    long: longUrl,
                    short: shortUrl,
                    shortId: urlCode,
                    // date: new Date()
                });
                await link.save();
                return link;
            }
        } catch (err) {
            // exception handler
            console.log(err);
            return new Error("Server Error");
        }
    } else {
        return new Error("Invalid longUrl");
    }
}

export async function getUrls(longUrl?: string) {
    const urls = await Url.find();
    return urls;
}

export async function matchUrl(shortId: string) {
    const url = await Url.findOne({ shortId });
    return url;
}
