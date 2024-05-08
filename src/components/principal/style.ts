import styled from 'styled-components'

export const Section = styled.section`
  height: 40.938rem; //655px

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000000;

  border-radius: 0px 0px 3.125rem 3.125rem; //0px, 0px, 50px, 50px

  padding: 0px 1.375rem 0px 1.375rem; //0px 22px 0px 22px

  @media (max-width: 768px) {
    height: auto;
  }
`

export const Container = styled.div`
  width: 90rem; //1140px

  display: flex;
  justify-content: space-between;
  align-items: center;

  .Image {
    width: 50%;
  }

  @media (max-width: 712px) {
    flex-direction: column-reverse;
    gap: 1.375rem; //22px
    padding-top: 4rem; //64px

    .Image {
      height: auto;
    }
  }
`

export const Content = styled.div`
  max-width: 36.875rem; //590px
  width: 100%;
  height: 23.5rem; //376px

  display: flex;
  flex-direction: column;
  gap: 3.125rem; //50px

  @media (max-width: 712px) {
    gap: 24px;
  }
`

export const Div = styled.div`
  width: 100%;
  height: 16.938rem; //271px

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; //16px

  @media (max-width: 712px) {
    gap: 0.75rem; //12px
    height: auto;
  }
`

export const H1 = styled.h1`
  font-size: 3.5rem; //56px
  font-weight: 700;

  line-height: 4.2rem; //67.2px

  margin: 0;

  color: #ffffff;

  @media (max-width: 805px) {
    font-size: 3rem; //48px

    line-height: 3.75rem; //60px
  }

  @media (max-width: 712px) {
    text-align: center;
  }

  @media (max-width: 375px) {
    font-size: 2.25rem; //36px
  }
`

export const Span = styled.span`
  font-size: 1.125rem; //18px
  font-weight: 500;

  line-height: 1.688rem; //27px

  color: #666666;

  @media (max-width: 805px) {
    font-size: 0.875rem; //14px

    line-height: 1.5rem; //24px
  }

  @media (max-width: 712px) {
    text-align: center;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem; //12px
  }
`

export const Button = styled.button<{ $theme?: '1' | '2' | '3' | '4' }>`
  max-width: 12.125rem; // 194px
  width: 100%;
  height: 3.438rem; //55px

  background-color: ${(props) =>
    props.$theme === '1'
      ? '#2851E3'
      : props.$theme === '2'
        ? '#A728E3'
        : props.$theme === '3'
          ? '#2889E3'
          : '#E32828'};

  border: none;

  font-size: 1.125rem; //18px
  font-weight: 600;

  line-height: 1.537rem; //24.59px
  letter-spacing: 0.029rem; //0.46px

  color: #ffffff;

  @media (max-width: 425px) {
    max-width: 7.5rem; //120px
    width: 100%;

    height: 2.813rem; //45px

    font-size: 0.75rem; //12px
    line-height: 1.25rem; //20px
  }

  @media (max-width: 375px) {
    font-size: 0.75rem; //12px
  }
`
