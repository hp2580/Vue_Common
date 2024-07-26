<script setup>
import { ref } from 'vue';
const checkbox1 = ref(true);
const checkbox2 = ref(true);
const checkbox3 = ref(false);
const radios = ref('1');
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-checkbox
          v-model="checkbox1"
          hide-details
          ></v-checkbox>
        <v-checkbox
          v-model="checkbox2"
          label="텍스트"
          disabled
          hide-details
          ></v-checkbox>
        <v-checkbox
          v-model="checkbox3"
          label="텍스트"
          disabled
          hide-details
          ></v-checkbox>
          <br/>
          <br/>
        <v-checkbox
          v-model="checkbox1"
          hide-details
          >
          <template v-slot:label>
            <span class="text_14">텍스트 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore.</span>
          </template>
          </v-checkbox>
      </v-col>
      <v-col cols="12" class="mt-10">
        <v-checkbox
          v-model="checkbox1"
          class="small"
          hide-details
          ></v-checkbox>
          <v-checkbox
          v-model="checkbox2"
          class="small"
          label="텍스트"
          disabled
          hide-details
          ></v-checkbox>
          <v-checkbox
          v-model="checkbox3"
          class="small"
          label="텍스트"
          disabled
          hide-details
          ></v-checkbox>
          <br/>
          <br/>
          <v-checkbox
          v-model="checkbox1"
          class="small"
          hide-details
          >
          <template v-slot:label>
            <span class="text_14">텍스트 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore.</span>
          </template>
          </v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-radio-group v-model="radios" class="type_button" hide-details>
          <v-radio label="앱 단독" value="1"></v-radio>
          <v-radio label="실물카드만" value="2"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" class="mt-4">
        <div class="radio_button">
          <p>
            <v-icon class="mastercard"></v-icon>
            MasterCard
          </p>
          <div>18,000원</div>
        </div>
        <v-radio-group v-model="radios" class="type_button" hide-details>
          <v-radio value="1">
            <template v-slot:label>
              <div class="radio_button">
                <p>
                  <v-icon class="mastercard"></v-icon>
                  MasterCard
                </p>
                <div>18,000원</div>
              </div>
            </template>
          </v-radio>
          <v-radio value="2">
            <template v-slot:label>
              <div class="radio_button">
                <p>국내전용</p>
                <div>15,000원</div>
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped></style>
