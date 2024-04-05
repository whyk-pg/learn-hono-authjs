import { Hono } from "hono";
import { Layout } from "./components/layout";

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
