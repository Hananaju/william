import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../componentes/Texto';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';

export default function Bandeja({ topo, detalhes, itens }) {
  return <>
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome }
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo} />
          <View style={estilos.bandeja}>
            <Detalhes {...detalhes} />
            <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
          </View>
        </>
      }}
    />
  </>
}

const estilos = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  bandeja: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});