import styled from "styled-components";
import { CardContentBasic } from "../AddressCard/styles";


export const CardItemsSelected = styled(CardContentBasic)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;

  div{
    display: flex;
  }

  &.list{   
    display: flex;
    flex-direction: column;
  }

`