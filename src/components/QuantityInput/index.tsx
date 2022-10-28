import { Minus, Plus } from "phosphor-react"
import { InputContainer, InputValue } from "./styles"

export const QuantityInput = () => {
    return (
        <InputContainer>
            <button>
                <Minus weight="bold" />
            </button>
            <InputValue type="number" value={1} readOnly />
            <button>
                <Plus weight="bold" />
            </button>
        </InputContainer>

    )
}