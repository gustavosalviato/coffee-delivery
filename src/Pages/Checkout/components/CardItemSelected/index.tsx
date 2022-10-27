import { Minus, Plus, Trash } from 'phosphor-react'
import logo from '../../../../assets/tradicional.png'
import { CardItemContainer, ContainerFlexButton, RemoveButton, TitlesAndButtonsContainer, } from './styles'


export const CarItemSelected = () => {
  return (
    <CardItemContainer>
      <img src={logo} alt="" />


      <TitlesAndButtonsContainer>
        <span>Expresso Tradicional</span>

        <ContainerFlexButton>
          <span>
            <button>
              <Minus />
            </button>
            <small>1</small>
            <button>
              <Plus />
            </button>
          </span>

          <RemoveButton className='removeButton'>
            <Trash size={16} />
            Remover
          </RemoveButton>
        </ContainerFlexButton>
      </TitlesAndButtonsContainer>

      <strong>39,90</strong>
    </CardItemContainer >
  )
}