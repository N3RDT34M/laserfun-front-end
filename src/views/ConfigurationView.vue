<script setup lang="ts">
import type { ListElement, TextElement } from '@vueform/vueform';
import { ref, useTemplateRef, watch, type Ref } from 'vue';

const nbPlayersBlue : Ref<TextElement|null> = ref(null);
const nbPlayersRed : Ref<TextElement|null> = ref(null);

const bluePlayerList : Ref<ListElement|null> = ref(null);
const redPlayerList : Ref<ListElement|null>  = ref(null);

const updateBluePlayerList = () => {
  if (!bluePlayerList.value) return;

  while (bluePlayerList.value?.size ?? 1 < nbPlayersBlue?.value?.value ?? 0)
    bluePlayerList.value?.add({});
  while (bluePlayerList.value?.size ?? 0 > nbPlayersBlue?.value?.value ?? 1)
  {
    let lastIndex : number = parseInt(bluePlayerList.value?.size ?? '');
    if (!lastIndex) return;
    bluePlayerList.value?.remove(lastIndex);
  }
};
const updateRedPlayerList = () => {

};

watch(nbPlayersBlue, updateBluePlayerList);
watch(nbPlayersRed, updateRedPlayerList);

const onNbPlayerBlueChange = (newValue: any) => {
  nbPlayersBlue.value = newValue;
  console.log(`Nombre de joueurs bleus: ${newValue}`);
};

const onNbPlayerRedChange = (newValue: any) => {
  nbPlayersRed.value = newValue;
  console.log(`Nombre de joueurs rouges: ${newValue}`);
};
</script>

<template>
  <main>
    <Vueform validate-on="change">
      <TextElement name="nameBlue" label="Nom de l'équipe bleue" placeholder="Équipe bleue" />
      <TextElement name="nameRed" label="Nom de l'équipe rouge" placeholder="Équipe rouge" />
      <TextElement
        name="nbPlayersBlue"
        ref="nbPlayersBlue"
        input-type="number"
        :rules="['required','between:1,6','integer']"
        :messages="{ between: 'Valeur entrée incorrecte.' }"
        label="Nombre de joueurs bleus"
        placeholder="6 max"
        @change="onNbPlayerBlueChange"
      />
      <TextElement
        name="nbPlayersRed"
        ref="nbPlayersRed"
        input-type="number"
        :rules="['required','between:1,6','integer']"
        :messages="{ between: 'Valeur entrée incorrecte.' }"
        label="Nombre de joueurs rouges"
        placeholder="6 max"
        @change="onNbPlayerRedChange"
      />

      <ListElement
        ref="bluePlayerList"
        :disabled="true"
        name="bluePlayerList"
        :sort="true"
        :object="{
          schema: {
            name: { type: 'text'},
          }
        }"
      />
      <ListElement
        ref="redPlayerList"
        :disabled="true"
        name="redPlayerList"
        :sort="true"
        :object="{
          schema: {
            name: { type: 'text' },
          }
        }"
      />
    </Vueform>
  </main>
</template>