import type { APIRoute } from "astro";
import { resend } from "../../../lib/resend";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  const email = formData.get("email")?.toString();
  const name = formData.get("name")?.toString();
  const lastname = formData.get("last")?.toString();
  const textarea = formData.get("textarea")?.toString();

  if (name && email && lastname && textarea) {
    console.log(name, lastname, email, textarea);
    const { error } = await supabase
      .from("emails")
      .insert([
        { email: email, name: name, lastname: lastname, message: textarea },
      ]);

    if (error) {
      return new Response(error.message, { status: 500 });
    } else {
      const { data, error } = await resend.emails.send({
        from: "Contacto <contacto@dansamarluque.com>",
        to: `${name} <${email}>`,
        subject: "Contacto Estudi de Dansa Mar Luque",
        html: "Hola, hemos recibido tu correo. Nos pondremos en contacto contigo lo antes posible.",
      });
      if (error) {
        return new Response(error.message, { status: 500 });
      } else {
        console.log({ data });
        return redirect("/contact");
      }
    }
  } else {
    return redirect("/contact");
  }
};
