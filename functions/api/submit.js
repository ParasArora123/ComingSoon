export async function onRequestPost(context) {
    try {
      let input = await context.request.formData();
      let email = input.get('email'); // Get the email from the form
  
      if (!email) {
        return new Response("Email is required", { status: 400 });
      }
  
      // Here, you can store the email in KV or any other storage
      const id = crypto.randomUUID();
      await context.env.EMAILS_KV.put(id, email); // Assuming you bind EMAILS_KV in wrangler.toml
  
      return new Response("Email saved successfully", { status: 200 });
    } catch (err) {
      return new Response("Error saving email", { status: 500 });
    }
  }
  