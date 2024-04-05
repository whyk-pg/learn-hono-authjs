# Verify Discord social login on Auth.js and Hono

## 本リポジトリの目的
REST APIを介してDiscordのソーシャルログインを実装するため

## 本リポジトリの達成目標
- [x] Honoでログイン画面を実装する
- [ ] Auth.jsでソーシャルログイン機能を実装し、画面と連携する

### エラー解決メモ
#### UnknownAction: Cannot parse action at /api/auth/callback/discord. Read more at https://errors.authjs.dev#unknownaction
これは`packages/core/src/lib/utils/web.ts`にある`parseActionAndProviderId`という関数で、引数が持っている`basePath`がデフォルトで持っている`/auth`だったため、`/api/auth`と合致せずエラーを投げていた。  
`AuthConfig.basePath`を`/api/auth`にしたら通った。

#### UntrustedHost: Host must be trusted. URL was: http://5409-240f-3e-b3e2-1-cbd-43a4-6c82-bac2.ngrok-free.app/auth/callback/discord. Read more at https://errors.authjs.dev#untrustedhost
これは資料を見る限り、`AuthConfig.trustHost`が`true`なら問題なさそうなので、素直にそうした。

#### MissingSecret: Please define a `secret`.. Read more at https://errors.authjs.dev#missingsecret
こちらについては資料内に`npx auth secret`でランダム文字列を生成する手順が書かれていたので、素直にそうした。

#### InvalidCheck: PKCE code_verifier cookie was missing.. Read more at https://errors.authjs.dev#invalidcheck
未解決

## 参考資料
- [Deployment | Auth.js](https://authjs.dev/getting-started/deployment)
- [@auth/core | Auth.js](https://authjs.dev/reference/core)
- [errors | Auth.js](https://authjs.dev/reference/core/errors)
- [providers | Auth.js](https://authjs.dev/reference/core/providers)
- [providers/discord | Auth.js](https://authjs.dev/reference/core/providers/discord)
- [Refresh token rotation | Auth.js](https://authjs.dev/guides/basics/refresh-token-rotation)
- [Discord Developer Portal — Documentation — OAuth2](https://discord.com/developers/docs/topics/oauth2)
- [next-auth/packages/core/src/types.ts at @auth/core@0.28.2 · nextauthjs/next-auth](https://github.com/nextauthjs/next-auth/blob/%40auth/core%400.28.2/packages/core/src/types.ts)
- [next-auth/packages/core/src/lib/utils/web.ts at @auth/core@0.28.2 · nextauthjs/next-auth](https://github.com/nextauthjs/next-auth/blob/%40auth/core%400.28.2/packages/core/src/lib/utils/web.ts)
- [Next.jsのRoute HandlersでHonoを使いつつAuth.jsで認証してCloudflare PagesにDeployしたい](https://zenn.dev/yu7400ki/articles/58091688063734)
- [OAuthとは | OAuthの仕組みを図解でわかりやすく解説 - ITを分かりやすく解説](https://medium-company.com/oauth/)