import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .provider {
    position: relative;
    margin-top: 5rem;
  }

  .slider {
    width: 100%;

    .slide {
      display: flex;
      justify-content: center;
      cursor: pointer;

      img {
        width: 39.5rem;
        height: 39.5rem;

        padding: 1rem;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }

  .slide:hover img {
      transform: scale(1.1);
      opacity: 85%;
  }

    .desc {
      text-align: center;
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > span:nth-child(1) {
        font-size: 2.6rem;
        font-weight: bold;
        
      }

      > span:nth-child(2) {
        font-size: 1.8rem;
        margin: .8rem 0;
      }
    }
  }

  .buttonArrow {
    position: absolute;
    top: 35%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;

    width: max-content;
    background-color: transparent;
  }

  .back {
    left: 0;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .next {
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back:hover, .next:hover {
    opacity: 50%;
  }
`;
