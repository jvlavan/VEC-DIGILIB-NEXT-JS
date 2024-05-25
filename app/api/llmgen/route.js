const { NextRequest, NextResponse } = require("next/server");
import { headers } from "next/headers";
async function run(model, input) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.WORKERS_AI_KEY}/ai/run/${model}`,
    {
      headers: {
        Authorization: "Bearer " + process.env.WORKERS_BEARER_KEY,
      },
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}

export async function POST(request, context) {
  const reschat = await request.json();
  //   const modeldescription = headers().get("Agentdescription");
  const authorization = headers().get("Authorization");
 // console.log(reschat.messages);
  if (authorization != process.env.AUTHORISATION_KEY) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 403 });
  }

  const res = await run("@cf/mistral/mistral-7b-instruct-v0.1", {
    messages: reschat.messages,
  });
  if (res.success == true) {
    if (res.result.response) {
      return NextResponse.json({ res }, { status: 200 });
    }
    return NextResponse.json({ error: "No response" }, { status: 400 });
  }
  return NextResponse.json({ error: res.errors }, { status: 400 });
}
