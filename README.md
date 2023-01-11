# Snkrs

## Snkrs Clone Project

## 🐈 Yarn berry

1. yarn berry 프로젝트가 아니라면

```shell
# Set yarn berry
$ yarn set version berry
```

2. `node_modules` 폴더 삭제

3. `.yarnrc.yml` 수정

```yml
# nodeLinker: node-modules 제거
yarnPath: .yarn/releases/yarn-3.3.1.cjs
```

4. `pnp` 세팅

```shell
$ yarn
```

5. `vscode` `plugin` 설치

```shell
$ yarn dlx @yarnpkg/sdks vscode
```

6. `gitignore` zero install setting

```shell
# zero install
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

7. `.tsx` 파일에서 `path`를 못 찾을 때, `cmd+shift+p` 누른 후 `select typesript version` 선택 후 `use workspace version` 을 선택.
