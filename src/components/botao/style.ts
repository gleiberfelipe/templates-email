import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5rem 1.375rem 5rem 1.375rem; //22px 80px 80px 22px
`

export const Content = styled.div<{ $theme?: '1' | '2' | '3' | '4' }>`
  max-width: 75rem; //1200px
  width: 100%;

  height: 32.25rem; //516px

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem; //48px

  padding: 0px 1.375rem 0px 1.375rem; //0 22px 0 22px

  background-color: ${(props) =>
    props.$theme === '1'
      ? '#2851E3'
      : props.$theme === '2'
        ? '#A728E3'
        : props.$theme === '3'
          ? '#2889E3'
          : '#E32828'};

  border-radius: 0.938rem; //15px

  .Image {
    width: 50%;
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column-reverse;

    padding: 4rem 1.375rem 4rem 1.375rem; //64px 22px 64px 22px

    .Image {
      height: auto;
    }
  }
`

export const Div = styled.div`
  max-width: 30.313rem; //485px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3rem; //48px
`

export const divTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; //16px
`

export const h1Title = styled.h1`
  font-size: 3rem; //48px
  font-weight: 700;

  line-height: 3.42rem; //54.72px

  margin: 0;

  color: #ffffff;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 375px) {
    font-size: 2.25rem; //36px
  }
`

export const spanTitle = styled.span`
  font-size: 1rem; //16px
  font-weight: 400;

  line-height: 1.21rem; //19.36px
  letter-spacing: 0.013rem; //0.2px

  font-family: 'Inter', sans-serif;

  color: #ffffff;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem; //12px
  }
`

export const divRegister = styled.div`
  max-width: 30.313rem; //485px
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem; //16px
`

export const divInput = styled.div`
  max-width: 21.563rem; //345px
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.625rem; //10px

  padding: 10px 15px 10px 15px;

  border-radius: 0.313rem; //5px

  background-color: #ffffff;
`

export const Input = styled.input`
  width: 100%;

  border: none;
  outline: none;

  &::placeholder {
    font-size: 1rem; //16px
    font-weight: 500;

    line-height: 1.21rem; //19.36px
    letter-spacing: 0.013rem; //0.2px

    font-family: 'Inter', sans-serif;

    color: #bdbdbd;
  }
`

export const Button = styled.button`
  max-width: 7.75rem; //124px
  width: 100%;
  height: 2.75rem; //44px

  border: none;
  border-radius: 0.313rem; //5px

  background-color: #000000;

  font-size: 1rem; //16px
  font-weight: 500;

  line-height: 1.21rem; //19.36px
  letter-spacing: 0.029rem; //0.46px

  font-family: 'Inter', sans-serif;

  color: #ffffff;
`
