<script setup></script>
<template>
    <v-container>
      <h1 class="heading_36">icon</h1>
      <v-row>
        <v-col cols="12" class="bg-gray-050">
          <p class="title_16">icon size small : 16px</p>
          <v-icon size="small" class="arrow_black"></v-icon>
          <v-icon size="small" class="question_gray"></v-icon>
          <p class="title_16">icon size default : 24px</p>
          <v-icon class="arrow_black"></v-icon>
          <v-icon class="export_white"></v-icon>
          <v-icon class="top_black"></v-icon>
          <v-icon class="search_white"></v-icon>
          <v-icon class="heart_white"></v-icon>
          <v-icon class="close_black"></v-icon>
          <v-icon class="family_card_01"></v-icon>
          <v-icon class="family_card_02"></v-icon>
          <v-icon class="family_card_03"></v-icon>
          <v-icon class="family_card_04"></v-icon>
          <p class="title_16">icon size large : 32px</p>
          <v-icon size="large" class="export_white"></v-icon>
          <p class="title_16">icon size etc</p>
          <p class="text_14">select open icon</p>
          <v-icon class="open_black"></v-icon>
          <p class="text_14">input delete icon</p>
          <v-icon class="delete_gray"></v-icon>
          <p class="text_14">카드 뒷면</p>
          <v-icon class="rotate_black"></v-icon>
          <p class="text_14">mastercard</p>
          <v-icon class="mastercard"></v-icon>
        </v-col>
        <v-divider class="my-4"></v-divider>
        <v-col cols="12">
          <p class="title_16">icon button</p>
          <button type="button" aria-label="닫기">
            <v-icon class="close_black"></v-icon>
          </button>
          <a href="#" aria-label="닫기">
            <v-icon class="close_black"></v-icon>
          </a>
          <button type="button" aria-label="삭제">
            <v-icon class="delete_gray"></v-icon>
          </button>
          <a href="#" aria-label="삭제">
            <v-icon class="delete_gray"></v-icon>
          </a>
          <button type="button" aria-label="도움말">
            <v-icon size="small" class="question_gray"></v-icon>
          </button>
          <a href="#" aria-label="도움말">
            <v-icon size="small" class="question_gray"></v-icon>
          </a>
        </v-col>
      </v-row>
      <h1 class="heading_36 mt-10">button</h1>
      <v-row>
        <v-col cols="12">
          <p class="title_22 mt-5">v-btn text underline</p>
          <p class="title_16">default Button text button_16</p>
          <v-btn variant="text" color="black" class="button_16 underline">
            버튼 이름(button)
          </v-btn>
          <br/>
          <v-btn variant="text" color="black" class="button_16 underline" href="#">
            버튼 이름(a)
          </v-btn>
          <p class="title_16">default Button text button_14</p>
          <v-btn variant="text" color="black" class="button_14 underline">
            버튼 이름
          </v-btn>
          <p class="title_16">default Button text button_12</p>
          <v-btn variant="text" color="black" class="button_12 underline">
            버튼 이름
          </v-btn>
        </v-col>
        <v-col cols="12">
          <p class="title_22 mt-5">v-btn text arrow</p>
          <p class="title_16">default Button text button_16</p>
          <v-btn variant="text" color="black" class="button_16">
            버튼 이름(button)
            <v-icon size="small" class="arrow_black"></v-icon>
          </v-btn>
          <br/>
          <v-btn variant="text" color="black" class="button_16" href="#">
            버튼 이름(a)
            <v-icon size="small" class="arrow_black"></v-icon>
          </v-btn>
          <p class="title_16">default Button text button_14</p>
          <v-btn variant="text" color="black" class="button_14">
            버튼 이름
            <v-icon size="small" class="arrow_black"></v-icon>
          </v-btn>
          <p class="title_16">default Button text button_12</p>
          <v-btn variant="text" color="black" class="button_12">
            버튼 이름
            <v-icon size="small" class="arrow_black"></v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12">
          <p class="title_22 mt-5">v-btn x-small</p>
          <v-btn size="x-small" color="primary">XSmall Button</v-btn>
          <v-btn size="x-small" color="secondary">XSmall Button</v-btn>
          <v-btn size="x-small" color="tertiary">영문전환</v-btn>
          <v-btn size="x-small" color="black" variant="outlined" rounded="xs">PDF 다운로드</v-btn>
          <v-btn size="x-small" color="black" variant="outlined" rounded="xl">
            <v-icon class="rotate_black"></v-icon>
            뒷면
          </v-btn>
        </v-col>
        <v-col cols="12">
          <p class="title_22 mt-5">v-btn small</p>
          <v-btn size="small" color="primary">Small Button</v-btn>
          <v-btn size="small" color="primary" disabled>Small Button</v-btn>
          <br/>
          <v-btn size="small" color="secondary">Small Button</v-btn>
          <v-btn size="small" color="secondary" disabled>Small Button</v-btn>
        </v-col>
        <v-col cols="auto" class="bg-gray-050">
          <v-btn size="small" color="white">Small Button</v-btn>
          <v-btn size="small" color="white" disabled>Small Button</v-btn>
        </v-col>
  
        <v-col cols="12">
          <p class="title_22 mt-5">v-btn regular</p>
          <v-btn color="secondary">regular Button</v-btn>
          <v-btn color="secondary" disabled>regular Button</v-btn>
          <br/>
          <v-btn color="black" variant="outlined">regular Button</v-btn>
          <v-btn color="black" variant="outlined" disabled>regular Button</v-btn>
          <br/>
          <v-btn-group class="regular">
            <v-btn color="secondary">regular Button</v-btn>
            <v-btn color="secondary">regular Button</v-btn>
          </v-btn-group>
        </v-col>
        
        <v-col cols="12">
          <p class="title_22 mt-5">v-btn large</p>
          <v-btn size="large" color="primary">Large Button</v-btn>
          <v-btn size="large" color="primary" disabled>Large Button</v-btn>
          <br/>
          <v-btn size="large" color="secondary">Large Button</v-btn>
          <v-btn size="large" color="secondary" disabled>Large Button</v-btn>
          <br/>
          <v-btn size="large" color="tertiary">Large Button</v-btn>
          <v-btn size="large" color="tertiary" disabled>Large Button</v-btn>
          <br/>
          <v-btn size="large" color="black" variant="outlined">Large Button</v-btn>
          <v-btn size="large" color="black" variant="outlined" disabled>Large Button</v-btn>
          <br/>
          <v-btn size="large" color="primary" aria-label="Large Button">
            <v-icon class="export_white mr-1"></v-icon>
            Large Button
          </v-btn>
          <v-btn size="large" color="primary" aria-label="Large Button">
            Large Button
            <v-icon class="export_white ml-1"></v-icon>
          </v-btn>
          <v-btn size="large" color="tertiary" icon aria-label="Large Button">
            <v-icon class="export_white"></v-icon>
          </v-btn>
          <v-btn-group class="large">
            <v-btn size="large" color="secondary">Large Button</v-btn>
            <v-btn size="large" color="primary">Large Button</v-btn>
          </v-btn-group>
          <v-btn-group class="large">
            <v-btn size="large" color="secondary" class="flex-grow-0">Large Button</v-btn>
            <v-btn size="large" color="primary">Large Button</v-btn>
          </v-btn-group>
          <v-btn-group class="large">
            <v-btn size="large" color="primary" class="">버튼 이름 Large Button</v-btn>
            <v-btn size="large" color="tertiary" icon aria-label="Large Button">
              <v-icon class="export_white"></v-icon>
            </v-btn>
          </v-btn-group>
        </v-col>
  
        <v-col cols="auto">
          <p class="title_22 mt-5">v-btn x-large</p>
          <v-btn size="x-large" icon color="tertiary">
            <v-icon class="search_white"></v-icon>
          </v-btn>
          <v-btn size="x-large" icon color="tertiary">
            <v-icon class="heart_white"></v-icon>
          </v-btn>
          <v-btn-group class="x-large">
            <v-btn size="x-large" icon color="tertiary">
              <v-icon class="search_white"></v-icon>
            </v-btn>
            <v-btn size="x-large" icon color="tertiary">
              <v-icon class="heart_white"></v-icon>
            </v-btn>
          </v-btn-group>
        </v-col>
        <v-col cols="12" class="bg-gray-050">
          <v-btn size="x-large" icon>
            <v-icon class="top_black"></v-icon>
          </v-btn>
        </v-col>

      </v-row>
    </v-container>
  </template>
  <style lang="scss" scoped>
  .v-col {
    &>.v-btn {
      margin: 4px;
    }
  }
  </style>