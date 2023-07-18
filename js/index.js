const data = [
  {
    id: 1,
    img: "../img/camisa_waer1.jpg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 300,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "../img/camisa_waer2.jpg",
    nameItem: "Moleton Black Waer",
    description:
      "A moleton Black Wear chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 250,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisa"],
  },
  {
    id: 3,
    img: "../img/camisa_waer3.jpg",
    nameItem: "Corta New Black",
    description:
      "Esta corta--vento durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 400,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "../img/calça_waer1.jpg",
    nameItem: "New Black Cargo",
    description:
      "Esta calça é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 60,
    addCart: "Adicionar ao carrinho",
    tag: ["Calça"],
  },
  {
    id: 5,
    img: "../img/calça_waer2.jpg",
    nameItem: "Cargo XL Waer",
    description:
      "Agora você encontrou a calça básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 120,
    addCart: "Adicionar ao carrinho",
    tag: ["Calça"],
  },
  {
    id: 6,
    img: "../img/calça_waer3.jpg",
    nameItem: "Short Black Waer",
    description:
      "Short-Sleeve é melhor opção no dias de muito calor. Esta short de poliést...",
    value: 50,
    addCart: "Adicionar ao carrinho",
    tag: ["Calça"],
  },
];

let quantidade = 0;

let total = 0;

// separando os itens

let listCalçados = []

let listCamisetas = []

let listCalças = []

let listAcessórios = []

function separateItens(lista) {

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].tag == 'calca') {
      listCalçados.push(lista[i])
    } else if (lista[i].tag == 'Camisetas') {
      listCamisetas.push(lista[i])
    } else if (lista[i].tag == 'acessorios') {
      listAcessórios.push(lista[i])
    } else {
      listCalças.push(lista[i])
    }
  }
}
separateItens(data)

// criando os elementos pelo DOM

const ulContainer = document.querySelector('.container1')

function createrItens(objeto) {

  let li = document.createElement('li')

  let img = document.createElement('img')

  let nameItem = document.createElement('h2')

  let value = document.createElement('h3')

  let tag = document.createElement('h5')

  let addCart = document.createElement('button')

  nameItem.innerText = objeto.nameItem

  value.innerText = `R$${objeto.value}`

  tag.innerText = objeto.tag

  img.src = objeto.img

  addCart.innerText = objeto.addCart

  addCart.id = objeto.id

  addCart.addEventListener('click', (button) => {

    let evento = button.target

    let eventoId = evento.id

    let yu = procurandoId(eventoId)

    quantidade++

    document.querySelector('#quanti').innerHTML = `${quantidade}`

    total += objeto.value

    document.querySelector('#tota').innerHTML = `R$ ${total}`

    renderProdutos(yu)

    let section = document.querySelector('.compras')

    section.remove();

    

  })
  // remover carrinho
  // const removerCart = document.querySelector('.carrinho')

  // function desabilite(cartRemover) {

  //   let p = document.createElement('p')

  //   let small = document.createElement('small')

  //   buttonRemove.addEventListener('click', function (e) {


  //     // let section = document.querySelector('.carrinho')

  //     section.remove();

  //   })

  //   removerCart.append(p, small)

  // }


  // cria uma função que vai renderizar o produto no carrinho
  function renderProdutos(prt) {

    let criaPrdutosC = document.querySelector('#renderPt')

    let li = document.createElement('li')
    li.classList.add('produtCar')

    let img = document.createElement('img')

    let nameItem = document.createElement('h2')

    let value = document.createElement('h3')

    let buttonRemove = document.createElement('button')
    buttonRemove.classList.add('bntRemove')

    li.id = prt.id

    nameItem.innerText = prt.nameItem

    value.innerText = `R$: ${prt.value}`

    tag.innerText = prt.tag

    img.src = prt.img

    buttonRemove.innerText = 'Remover'

    li.append(img, nameItem, value, buttonRemove)

    // remover do carrinho
    buttonRemove.addEventListener('click', function (e) {

      quantidade--

      document.querySelector('#quanti').innerHTML = `${quantidade}`

      total -= objeto.value

      document.querySelector('#tota').innerHTML = `R$ ${total}`

      li.remove();

      

    })

    criaPrdutosC.append(li)

  }

  function procurandoId(id) {

    for (let i = 0; i < data.length; i++) {

      let itemArmazem = data[i]

      if (data[i].id == id) {

        return data[i]

      }

    }

  }

  li.className = 'box'

  addCart.setAttribute('id', objeto.id)

  // addCart.setAttribute('class', 'btn1')

  li.append(img, tag, nameItem, value, addCart)

  return li
}





// para adicionar no carrinho de compras?

function secao_List_Objeto(listaAlt) {

  const ulContainer = document.querySelector('.container1')

  for (let i = 0; i < listaAlt.length; i++) {

    ulContainer.appendChild(createrItens(listaAlt[i]))

  }

}
secao_List_Objeto(listCalçados);
secao_List_Objeto(listCamisetas);
secao_List_Objeto(listAcessórios);
secao_List_Objeto(listCalças);







