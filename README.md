# Snkrs

## Snkrs Clone Project

## π Yarn berry

1. yarn berry νλ‘μ νΈκ° μλλΌλ©΄

```shell
# Set yarn berry
$ yarn set version berry
```

2. `node_modules` ν΄λ μ­μ 

3. `.yarnrc.yml` μμ 

```yml
# nodeLinker: node-modules μ κ±°
yarnPath: .yarn/releases/yarn-3.3.1.cjs
```

4. `pnp` μΈν

```shell
$ yarn
```

5. `vscode` `plugin` μ€μΉ

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

7. `.tsx` νμΌμμ `path`λ₯Ό λͺ» μ°Ύμ λ, `cmd+shift+p` λλ₯Έ ν `select typesript version` μ ν ν `use workspace version` μ μ ν.
