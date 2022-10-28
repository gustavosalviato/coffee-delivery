import { Minus, Plus } from "phosphor-react"
import { InputContainer, InputValue } from "./styles"

interface QuantityInputProps {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

export const QuantityInput = ({ quantity, onIncrease, onDecrease }: QuantityInputProps) => {
    const disabledButton = quantity <= 1

    return (
        <InputContainer>
            <button onClick={onDecrease} disabled={disabledButton}>
                <Minus weight="bold" />
            </button>

            <InputValue
                type="number"
                value={quantity}
                readOnly
            />

            <button onClick={onIncrease}>
                <Plus weight="bold" />
            </button>
        </InputContainer>

    )
}