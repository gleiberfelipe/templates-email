import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem; //60px

  padding: 5rem 1.375rem 5rem 1.375rem; //80px 22px 80px 22px
`

export const divTitle = styled.div`
  max-width: 75rem; //1200px
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem; //32px
`

export const Div = styled.div`
  max-width: 59.5rem; //952px
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem; //24px
`

export const spanTitle = styled.span`
  font-size: 1.25rem; //20px
  font-weight: 500;

  line-height: 1.875rem; //30px

  color: #757575;

  text-align: center;

  @media (max-width: 712px) {
    font-size: 1.125rem; //18px
  }
`

export const h1Title = styled.h1`
  font-size: 3rem; //48px
  font-weight: 700;

  line-height: 3.42rem; //54.72px

  text-align: center;

  margin: 0;

  color: #212121;

  @media (max-width: 712px) {
    font-size: 2.5rem; //40px
  }
`

export const divCards = styled.div`
  max-width: 75rem; //1220px
  width: 100%;

  display: flex;
  align-items: center;
  gap: 2rem; //32px

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  max-width: 23.375rem; //374px
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.375rem; //22px
`

export const divDescription = styled.div`
  max-width: 20.875rem; //334px
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; //16px
`

export const h1Description = styled.h1`
  font-size: 1.375rem; //22px
  font-weight: 600;

  line-height: 1.664rem; //26.63px
  letter-spacing: 0.013rem; //0.2px

  font-family: 'Inter', sans-serif;

  margin: 0;

  color: #212121;
`

export const spanDescription = styled.span`
  font-size: 1rem; //16px
  font-weight: 500;

  line-height: 1.5rem; //24px
  text-align: center;

  color: #616161;
`
