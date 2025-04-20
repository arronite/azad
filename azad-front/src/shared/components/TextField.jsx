import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Input = styled(TextField)`
  & .MuiOutlinedInput-notchedOutline {
    border-radius: 5rem;
  }
  & .MuiInputBase-input {
    text-align: right;
  }
  & .Mui-error {
    text-align: start;
  }
`;
