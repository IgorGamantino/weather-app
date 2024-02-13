import * as S from "./styles"

export function Home () {
  return (
    <S.Container>
      <S.Linear 
       colors={['#7abcff', '#59abf8', '#4096ee']}
      />
      <S.Title>
        Container Home
      </S.Title>
    </S.Container>
  )
}