import { NextResponse } from "next/server";
import axios from "axios";
import { headers } from "next/headers";
export async function GET() {
  try {
    let news;
    const headersList = headers();
    const referer = headersList.get("news-api-nextjs-key");
    if (referer != process.env.NEWS_API_NEXT_JS_KEY) {
      return NextResponse.json({ error: "Invalid API key" });
    } else {
      await axios
        .get(
          "http://api.mediastack.com/v1/news?access_key=" +
            process.env.NEXT_PUBLIC_NEWS_API +
            "&categories=science&limit=10"
        )
        .then((response) => {
        //  console.log(response.data);
          if (response.data) {
            if (response.data.data) {
              news = response.data.data;
            }
          }
        });
    }
    return NextResponse.json({ news });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
