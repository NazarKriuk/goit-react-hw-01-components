import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  padding: 120px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileCadr = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 15px 1px #c8c8c8;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 30px 30px 0 30px;
`;

export const CardThum = styled.div`
  
  overflow: hidden;
  border-radius: 50%;
`;

export const CardAvatar = styled.img`
display: block;
height: auto;
max-width: 100%;
`;

export const CardTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const CardText = styled.p`
  color: #9a9a9a;
`;

export const CardStats = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const CardStatsItem = styled.li`
  flex: 1 1 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #f0f0f0;
  border: 1px solid #e4e4e4;
`;

export const StatsItemQuantity = styled.span`
  font-weight: 700;
`;
