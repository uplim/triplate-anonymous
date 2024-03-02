# 最新のmainブランチを作業ブランチに取り込む

以下の手順で取り込んでください。

```sh
# mainブランチに移動
$ git switch main
# mainブランチを最新にする
$ git pull origin main
# 作業ブランチに移動
$ git switch <working_branch>
# mainブランチの内容を作業ブランチに反映
$ git merge main
```

:::caution
マージしたタイミングでコンフリクトが起こった場合は、[コンフリクトしたら](/help/faq/conflict)を参照してください。
:::
