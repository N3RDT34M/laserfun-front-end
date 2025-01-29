<script setup lang="ts">
import { serverAPI } from '@/composables/API';
import type { ListElement, TextElement } from '@vueform/vueform';
import { ref, useTemplateRef, watch, type Ref } from 'vue';

const nbPlayersBlue : Ref<TextElement|null> = ref(null);
const nbPlayersRed : Ref<TextElement|null> = ref(null);

const bluePlayerList : Ref<ListElement|null> = ref(null);
const redPlayerList : Ref<ListElement|null>  = ref(null);

const maxPlayers : number = 12; //TODO this value must be asked to the API

const updatePlayerList = (playerList : Ref<ListElement|null>, nbPlayers : Ref<TextElement|null>) => {
  if (!playerList.value || !nbPlayers?.value) return;
  else if (!(nbPlayers?.value ?? undefined))
    return;

  while (playerList.value?.length < parseInt(nbPlayers?.value?.toString() ?? '0')
         &&  playerList.value?.length <= maxPlayers/2-1)
    playerList.value?.add({});
  while (playerList.value?.length > parseInt(nbPlayers?.value?.toString() ?? '0'))
  {
    let lastIndex : number = playerList.value?.length - 1;
    if (!lastIndex) return;
    playerList.value?.remove(lastIndex);
  }
};

const updateBluePlayerList = () => {
  updatePlayerList(bluePlayerList, nbPlayersBlue);
};
const updateRedPlayerList = () => {
  updatePlayerList(redPlayerList, nbPlayersRed);
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
    <Vueform
    validate-on="change"
    class="container mt-4"
    endpoint="/game/set" method="post">

      <StaticElement
      name="titleBlue"
      content="Équipe bleue"
      description="Configurez les détails de l'équipe bleue"
      tag="h2"
      top="2"
      />
      <TextElement
      name="nameBlue"
      label="Nom de l'équipe bleue"
      placeholder="Équipe bleue"
      rules="required"
      />
      <TextElement
      name="nbPlayersBlue"
      ref="nbPlayersBlue"
      required="true"
      input-type="number"
      :rules="['required','between:1,'+maxPlayers/2,'integer']"
      :messages="{ between: 'Valeur entrée incorrecte.' }"
      label="Nombre de joueurs bleus"
      placeholder="6 max"
      @change="onNbPlayerBlueChange"
      />
      <ListElement
      ref="bluePlayerList"
      :disabled="true"
      name="bluePlayerList"
      :sort="true"
      :object="{
        schema: {
          name: { type: 'text', placeholder: 'Pseudo du joueur', rules: 'required' },
        }
      }"
      />

      <StaticElement
      name="titleRed"
      content="Équipe rouge"
      description="Configurez les détails de l'équipe rouge"
      tag="h2"
      top="2"
      />
      <TextElement
      name="nameRed"
      label="Nom de l'équipe rouge"
      placeholder="Équipe rouge"
      rules="required"
      />
      <TextElement
      name="nbPlayersRed"
      ref="nbPlayersRed"
      required="true"
      input-type="number"
      :rules="['required','between:1,'+maxPlayers/2,'integer']"
      :messages="{ between: 'Valeur entrée incorrecte.' }"
      label="Nombre de joueurs rouges"
      placeholder="6 max"
      @change="onNbPlayerRedChange"
      />
      <ListElement
        ref="redPlayerList"
        :disabled="true"
        name="redPlayerList"
        :sort="true"
        :object="{
          schema: {
            name: { type: 'text', placeholder: 'Pseudo du joueur', rules: 'required' },
          }
        }"
      />

      <ButtonElement
      name="confirm"
      :submits="true"
      button-label="Valider les équipes"
      :full="true"
      size="lg"
      />

    </Vueform>
  </main>
</template>