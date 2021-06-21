# 凡尔赛语录

[![Build Status](https://github.com/justjavac/deno_deploy_versailles/workflows/ci/badge.svg?branch=main)](https://github.com/justjavac/deno_deploy_versailles/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_deploy_versailles)](https://github.com/justjavac/deno_deploy_versailles/blob/main/LICENSE)

凡尔赛语录。部署在 [Deno Deploy](https://deno.com/deploy)。

> 用最低调的话，炫最高调的耀

## 本地开发

1. 安装 `deployctl`:

```bash
deno install -Afr --no-check https://deno.land/x/deploy/deployctl.ts
```

1. 启动本地开发服务器：

```bash
deployctl run --watch ./main.ts
```

### License

[deno_deploy_versailles](https://github.com/justjavac/deno_deploy_versailles) is
released under the MIT License. See the bundled [LICENSE](./LICENSE) file for
details.
