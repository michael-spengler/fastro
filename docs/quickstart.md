# Quickstart

1. Install deno (linux/mac)
    ```
    curl -fsSL https://deno.land/x/install/install.sh | sh
    ```

    For other OS, go to [deno installation.](https://deno.land/manual/getting_started/installation)

2. Install fastro-cli
    ```
    deno install -A https://raw.fastro.dev/master/cli/fastro.ts
    ```

    Add `-f --reload` if you want to get the latest update. 
    
    Change `master` with the latest version to prevent breaking changes.


3. Make a new directory
    ```
    mkdir webapp && cd webapp
    ```

4. Initiate a project
    ```
    fastro init
    ```

5. Run server
    ```
    fastro serve
    ```
    
    Or if you want with `deno`:
    ```
    deno run -A main.ts
    ```

6. Open url
    ```
    http://localhost:3000
    ```
7. Go to [deployment](deployment.md) if you want to publish your webapp.

## What's next:
- [Create a handler](handler.md)
- [Create a middleware](middleware.md)
- [Create static files](static.md)
- [Template rendering](rendering.md)
- [Data validation](validation.md)
- [Publishing and deployment](deployment.md)
- [Fastro API](api.md)
