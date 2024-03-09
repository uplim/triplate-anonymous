---
sidebar_position: 0
---

# ローカル環境

## nodenv経由でNode.jsを利用している場合

### nodenvを最新にする

```sh
# homebrew経由でnodenvを利用している場合
$ brew update && brew upgrade node-build

# Git経由でnodenvを利用している場合
$ git -C ~/.nodenv/plugins/node-build pull
```

Git経由の場合はnodenvが入っている場所は適宜変えてください。おそらく`~/.nodenv`に入っていることが多いと思います

### nodejsを最新にする

以下のコマンドを順番に打ってください

```sh
$ nodenv install <.node-veresionに記載されているバージョン>
$ nodenv local <.node-veresionに記載されているバージョン>
$ corepack enable
```

## asdf経由でNode.jsを利用している場合

### asdfを最新にする

```sh
$ asdf update
```

### Node.jsを最新にする

```sh
$ asdf install nodejs <.node-veresionに記載されているバージョン>
$ asdf local nodejs <.node-veresionに記載されているバージョン>
$ corepack enable
$ asdf reshim nodejs
```
