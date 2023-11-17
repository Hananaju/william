/* trocar a logo da loja */
import logo from '../../assets/logo.png';

import burrito from '../../assets/comidas/burrito.png';
import cachorroQuente from '../../assets/comidas/cachorro-quente.png';
import hamburguer from '../../assets/comidas/hamburger.png';
import sanduicheCaseiro from '../../assets/comidas/sanduiche-caseiro.png';
import sanduicheFrango from '../../assets/comidas/sanduiche-frango.png';

const cesta = {
  topo: {
    titulo: "Detalhe da compra",
  },
  detalhes: {
    nome: "Bandeja de aperitivos",
    logoLoja: logo,
    nomeLoja: "Sabor do Interior",
    descricao: "O gostinho da sua casa está aqui"
  },
  itens: {
    titulo: "Itens da bandeja",
    lista: [
      {
        nome: "Burrito de Batata Frita",
        imagem: burrito,
        preco: "R$30,00",
        botao: "Adicionar a cesta"
      },
      {
        nome: "Cachorro Quente Comum",
        imagem: cachorroQuente,
        preco: "R$15,00",
        botao: "Adicionar a cesta"
      },
      {
        nome: "Hamburger",
        imagem: hamburguer,
        preco: "R$25,00",
        botao: "Adicionar a cesta"
      },
      {
        nome: "Sanduíche Caseiro",
        imagem: sanduicheCaseiro,
        preco: "R$10,00",
        botao: "Adicionar a cesta"
      },
      {
        nome: "Sanduíche de Frango",
        imagem: sanduicheFrango,
        preco: "R$15,00",
        botao: "Adicionar a cesta"
      }
    ]
  }
}

export default cesta;