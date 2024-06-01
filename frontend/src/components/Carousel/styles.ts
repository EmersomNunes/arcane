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
      padding: 2rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_OFFERS};

      img {
        padding: 3rem;
      }
    }
  }

  .slide:hover img {
    transform: scale(1.2);
  }

.button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
}

.back {
  left: 0;
  display: flex;
  align-items: center;
  justify-content: start;
}

.next {
  right: -8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back:hover, .next:hover {
  opacity: 50%;
}
`;
