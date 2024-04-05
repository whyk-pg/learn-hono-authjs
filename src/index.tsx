import { Hono } from "hono";
import { Layout } from "./components/layout";
import { CALLBACK_URL, auth } from "./lib/auth";

const app = new Hono();

app.get("/", (ctx) => {
  return ctx.html(
    <Layout>
      <section>
        <h2>Hello, creater...</h2>
      </section>
      <form action="/auth/discord">
        <fieldset>
          <legend>Social login</legend>
          <button type="submit">Discord login</button>
        </fieldset>
      </form>
    </Layout>,
  );
});

app.get("/auth/discord", async (ctx) => {
  return ctx.redirect(CALLBACK_URL);
});

app.get(CALLBACK_URL, async (ctx) => {
  return await auth(ctx);
});

app.notFound((ctx) => {
  return ctx.html(
    <Layout>
      <section>
        <h2>Page Not Found</h2>
        <a href="/">Back to TOP</a>
      </section>
    </Layout>,
    404,
  );
});

export default app;
