interface Values {
  redirect: any;
  url: any;
  cookies: any;
}

export async function onRequest(Values: any, next: any) {
  const refreshToken = Values.cookies.get("sb-refresh-token");
  const accessToken = Values.cookies.get("sb-access-token");
  console.log("middleware ejecutandose", Values.url.pathname);
  if (Values.url.pathname.includes("/dashboard")) {
    console.log("middleware verificando pagina");
    if (!accessToken || !refreshToken) {
      console.log("sesion no iniciada");

      return Values.redirect("/");
    }
    console.log("sesion iniciada");
  }
  return next();
}
