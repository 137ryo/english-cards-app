import styled from "styled-components";

const SContainer = styled.div`
  text-align: center;
`;
const STitle = styled.h2`
  font-family: "Noto Sans JP", sans-serif;
`;

export const Help = () => {
  return (
    <SContainer>
      <STitle>ヘルプ / 使い方</STitle>
      <p>①１つ目のフォームに覚えたい英単語を入力します。</p>
      <p>②2つ目のフォームに覚えたい単語の日本語訳(答え)を入力します。</p>
      <p>③内容に間違いがなければ、追加ボタンを押します。</p>
      <p>④新しくカードが追加されるので、学習に利用しましょう！</p>
      <p>⑤カードの左側のボタン「答えを見る」を押すと、答えが表示されます。</p>
      <STitle>注意事項</STitle>
      <p>
        ※ 一度に追加できるカードは10枚までです。
        <br />
        10枚追加してしまうとカードの追加ができなくなります。
      </p>
      <p>※ カードを削除すると、再び追加ができるようになります。</p>
    </SContainer>
  );
};
