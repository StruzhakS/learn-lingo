import { Form } from 'formik';
import styled from 'styled-components';

export const FilterBox = styled(Form)`
  display: flex;
  gap: 20px;
`;

export const SelectFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelOfFilter = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const SelectOfFilter = styled.select`
  display: flex;
  height: 48px;
  padding: 12px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  /* justify-content: center;
  align-items: center; */
  /* gap: 133px; */
  border-radius: 14px;
  option {
    color: rgba(18, 20, 23, 0.2);

    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const OptionOfFIlter = styled.option`
  /* color: black; */
  /* background: red; */
  padding: 20px 20px;
  font-weight: small;
  display: flex;
  /* white-space: pre; */
  min-height: 20px;
  padding: 0px 2px 1px;
  border-radius: 10px;
  color: rgba(13, 98, 224, 0.2);
`;
