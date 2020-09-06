import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translateX(-90%);
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 0 30px 0px ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  z-index: 9;

  :before {
    content: '';
    position: absolute;
    left: 90%;
    transform: translateX(-50%);
    width: 2rem;
    height: 0.8rem;
    bottom: 100%;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow: 0 0 30px 0px ${({ theme }) => theme.colors.grey};
  }
`;

export const Title = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey}`};
`;

export const Name = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Icon = styled(NotificationsIcon)`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Content = styled.div`
  width: 30rem;
  max-height: 13.8rem;
  border-radius: 0 0 8px 8px;
  overflow: auto;
`;

export const LoadMore = styled.div``;
