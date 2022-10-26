import { Minus, Plus, Trash } from 'phosphor-react'
import logo from '../../../../assets/tradicional.png'
import { CardItemContainer, BasicContainer } from './styles'


export const CarItemSelected = () => {
  return (
    <CardItemContainer>
      <img src={logo} alt="" />

      <div>
        <span>Expresso Tradicional</span>

        <div className='divFlex'>
          <BasicContainer>
            <button>
              <Minus />
            </button>

            <small>1</small>

            <button>
              <Plus />
            </button>
          </BasicContainer>

          <BasicContainer>
            <button>
              <Trash />

              REMOVER
            </button>

          </BasicContainer>
        </div>
      </div>

      <strong>R$ 9,90</strong>
    </CardItemContainer>
  )
}