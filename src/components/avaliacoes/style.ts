import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem; //50px

  padding: 5rem 1.375rem 5rem 1.375rem; //22px 80px 80px 22px
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

export const containerAssessments = styled.div`
  max-width: 68.375rem; //1094px
  width: 100%;

  padding: 1.25rem; //20px

  .mySwiper .swiper-button-prev,
  .mySwiper .swiper-button-next {
    color: black;
  }

  .slide {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 510px) {
    .mySwiper .swiper-button-prev,
    .mySwiper .swiper-button-next {
      display: none;
    }
  }
`

export const Div = styled.div`
  max-width: 25.875rem; //414px
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.688rem; //27px
`

export const divStars = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; //8px

  .img path {
    fill: #af32e9;
  }
`

export const Span = styled.span`
  font-size: 1.25rem; //20px
  font-weight: 500;

  line-height: 2rem; //32px
  letter-spacing: 0.013rem; //0.2px

  text-align: center;

  color: #424242;

  @media (max-width: 528px) {
    font-size: 1rem; //16px

    text-align: center;
  }
`

export const divProfile = styled.div`
  max-width: 5.5rem; //88px
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; //8px
`

export const spanProfile = styled.span`
  font-size: 0.875rem; //14px
  font-weight: 500;

  line-height: 1.059rem; //16.94px
  letter-spacing: 0.013rem; //0.2px

  color: #757575;
`
