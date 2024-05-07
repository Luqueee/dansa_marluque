import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ request }) => {
  const { data, error } = await supabase.auth.getSession();
  //console.log(data);
  if (error) {
    return new Response(error.message, { status: 500 });
  } else {
    if (data.session?.access_token) {
      let { data: emails, error } = await supabase.from("emails").select("*");
      if (error) {
        return new Response(error.message, { status: 500 });
      } else {
        return new Response(
          JSON.stringify({
            emails,
          }),
        );
      }
    } else {
      return new Response("Usuario no autenticado", { status: 500 });
    }
  }
};
