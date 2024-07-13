# إرسم لي - مشروع توليد الصور باللغة العربية

بصراحة وبدون إحراج وبدون مقابل. فقط إستمتع بما صنع في البحرين 🇧🇭 وبكل حب ♥️.



### Based on => PHP hello world for Cloudflare Workers

Your PHP code in [index.php](https://github.com/cloudflare/php-worker-hello-world/blob/master/index.php), running on Cloudflare Workers

This project uses [babel-preset-php](https://gitlab.com/kornelski/babel-preset-php) to convert PHP to JavaScript.

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/cloudflare/php-worker-hello-world
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

#### babel-preset-php

```
cd projectname

# run once to install babel-preset-php and dependencies
npm install

# run every time you update index.php
npm run build
```

That will compile your code into index.js, after which you can run `wrangler publish` to push it to Cloudflare.

For more information on how PHP translates to JavaScript, see the [docs for babel-preset-php](https://gitlab.com/kornelski/babel-preset-php).