export async function onRequestPost(context) {
    try {
        let input = await context.request.formData();
        let email = input.get('email'); // Get the email from the form

        let honeypot = input.get('phone');
      
        if (honeypot) 
        {
            return new Response("Bot detected", { status: 400 });
        }
  
        if (!email) 
        {
        return new Response("Email is required", { status: 400 });
        }
  
        // Here, you can store the email in KV or any other storage
        const id = crypto.randomUUID();
        await context.env.EMAILS_KV.put(id, email); // Assuming you bind EMAILS_KV in wrangler.toml

        return Response.redirect('/index.html?status=success', 302);
    } 
    catch (err) 
    {
        return Response.redirect('/index.html?status=failed', 302);
    }
}
  