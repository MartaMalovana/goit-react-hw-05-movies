import styled from "@emotion/styled";

export const MovieInfo = styled.div`
    display: flex;
    margin-left: 20px;
`;

export const Image = styled.img`
    margin-right: 20px;
    width: calc(100% / 7 - 20px);
    min-width: 200px;
    object-fit: contain;
`;

export const MovieBlock = styled.div`
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
    padding: 0 0 10px 0;
`;

export const AdditionalInfo = styled.div`
    border-bottom: 1px solid grey;
`;

export const Genre = styled.span`
    margin-right: 12px;
`;

export const BackButton = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-top: 10px;
`;

export const Title = styled.p`
    margin-left: 20px;
`;