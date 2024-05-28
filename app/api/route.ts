import { type NextRequest } from "next/server"

export async function GET(request:NextRequest) {
  const requestHeader = new Headers(request.headers)
  console.log(requestHeader.get("Authorization"));
  return new Response("Profile API data")
  
}