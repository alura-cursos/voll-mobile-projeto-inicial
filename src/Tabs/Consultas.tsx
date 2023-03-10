import { VStack, Text } from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'

export default function Consultas(){
  return(
    <VStack p="5">
      <Text>Consultas</Text>
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto='https://github.com/andreocunha.png'
        data='20/04/2023'
      />
    </VStack>
  )
}