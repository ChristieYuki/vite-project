import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface CustomInputProps {
 onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

const CustomInput = ({ onChange, value, placeholder }: CustomInputProps) => {
  return <StyledInput onChange={onChange} value={value} placeholder={placeholder}/>
}

export default CustomInput;