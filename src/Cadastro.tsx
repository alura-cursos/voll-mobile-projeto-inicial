import { VStack, Image, Text, Box, Link } from 'native-base'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';

export default function Login() {
  const [numSecao, setNumSecao] = useState(0);
  const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email'
        },
      ]
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ]
    }
  ]

  function avancarSecao(){
    setNumSecao(numSecao+1)
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box>
        {
          secoes[numSecao].entradaTexto.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>
      <Botao onPress={() => avancarSecao()}>Avançar</Botao>
    </VStack>
  );
}