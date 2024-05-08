import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem; //72px

  padding: 5rem 1.375rem 5rem 1.375rem; //80px 22px 80px 22px
`

export const divTitle = styled.div`
  max-width: 78.875rem; //1262px
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; //16px
`

export const h1Title = styled.h1`
  font-size: 3rem; //48px
  font-weight: 700;

  line-height: 3.42rem; //54.72px

  margin: 0;

  color: #212121;

  @media (max-width: 712px) {
    font-size: 2.5rem; //40px
    text-align: center;
  }
`

export const spanTitle = styled.span`
  font-size: 1.25rem; //20px
  font-weight: 500;

  line-height: 1.875rem; //30px

  color: #757575;
`

export const Content = styled.div`
  max-width: 61.25rem; //980px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4rem; //64px

  @media (max-width: 712px) {
    gap: 6.25rem; //100px
  }
`

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  gap: 6.25rem; //100px

  .Image {
    width: 50%;
  }

  @media (max-width: 712px) {
    flex-direction: column;
    gap: 1.75rem; //28px

    .Image {
      height: auto;
    }
  }
`

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  gap: 6.25rem; //100px

  .Image {
    width: 50%;
  }

  @media (max-width: 712px) {
    flex-direction: column-reverse;
    gap: 1.75rem; //28px

    .Image {
      height: auto;
    }
  }
`

export const divDescription = styled.div`
  max-width: 26.813rem; //429px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem; //32px
`

export const h1Description = styled.h1`
  font-size: 2.25rem; //36px
  font-weight: 700;

  line-height: 2.7rem; //43.2px

  margin: 0;

  color: #212121;

  @media (max-width: 712px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    font-size: 28px; //16px
  }
`

export const spanDescription = styled.span`
  font-size: 1.125rem; //18px
  font-weight: 500;

  line-height: 1.688rem; //27px

  color: #666666;

  @media (max-width: 712px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    font-size: 1rem; //16px
  }
`
