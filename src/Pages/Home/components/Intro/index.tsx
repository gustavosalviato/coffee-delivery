import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { ContainerFlex, GridIcons, IntroContainer } from "./styles"

export const Intro = () => {
    return (
        <IntroContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <GridIcons>
                <ContainerFlex bgColor="yellow-dark">
                    <ShoppingCart size={28} weight="fill" />
                    <span>Compra simples e segura </span>
                </ContainerFlex>

                <ContainerFlex bgColor="gray">
                    <Package size={28} weight="fill" />
                    <span>Embalagem mantém o café intacto </span>
                </ContainerFlex>

                <ContainerFlex bgColor="yellow-dark">
                    <Timer size={28} weight="fill" />
                    <span>Entrega rápida e rastreada </span>
                </ContainerFlex>

                <ContainerFlex bgColor="purple">
                    <Coffee size={28} weight="fill" />
                    <span>O café chega fresquinho até você</span>
                </ContainerFlex>
            </GridIcons>
        </IntroContainer>)
}