import { useFormContext } from "react-hook-form"
import { Input } from "../../../../components/Input"
import { AddressFormContainer } from "./styles"

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        };
    };
}

export const FormAddress = () => {
    const { register, formState } = useFormContext()

    const { errors } = formState as unknown as ErrorsType

    return (
        <AddressFormContainer>
            <Input placeholder="CEP"
                className="cep"
                {...register('zipCode')}
                error={errors.zipCode?.message}
            />

            <Input
                placeholder="Rua"
                className="street"
                {...register('street')}
                error={errors.street?.message}

            />

            <Input
                placeholder="Número"
                {...register('number')}
                error={errors.number?.message}

            />

            <Input
                placeholder="Complemento"
                rightText="Opcional"
                className="complement"
                {...register('complement')}
                error={errors.complement?.message}

            />

            <Input
                placeholder="Bairro"
                {...register('district')}
                error={errors.district?.message}

            />

            <Input
                placeholder="Cidade"
                {...register('city')}
                error={errors.city?.message}

            />

            <Input
                placeholder="UF"
                {...register('UF')}
                error={errors.UF?.message}

            />
        </AddressFormContainer>
    )
}