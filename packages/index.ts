// createApp で受け付けるオプションの型を定義
export type Options = {
  render: () => string
}

// chibivue インスタンスの型を定義
export type App = {
  // id を指定してマウントする
  mount: (selector: string) => void
}

// chibivue インスタンスを作る
export const createApp = (options: Options): App => {
  return {
    // id を指定してマウントする
    mount: selector => {
      // Document: querySelector() メソッド
      // 指定されたセレクターまたはセレクター群に一致する、文書内の最初の Element を返します。
      // https://developer.mozilla.org/ja/docs/Web/API/Document/querySelector
      const root = document.querySelector(selector)
      if (root) {
        root.innerHTML = options.render()
      }
    }
  }
}