<template>
    <v-container>
      <h1 class="heading_36">icon</h1>
      <v-row>
        <v-col cols="auto" class="bg-gray-050">
          <p class="title_16">icon size small : 16px</p>
          <v-icon size="small" class="export_white"></v-icon>
          <v-icon size="small" class="arrow_black"></v-icon>
          <p class="title_16">icon size default : 24px</p>
          <v-icon class="arrow_black"></v-icon>
          <v-icon class="export_white"></v-icon>
          <v-icon class="top_black"></v-icon>
          <v-icon class="search_white"></v-icon>
          <v-icon class="heart_white"></v-icon>
          <p class="title_16">icon size large : 32px</p>
          <v-icon size="large" class="export_white"></v-icon>
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
          <p class="title_22 mt-5">v-btn default</p>
          <v-btn color="secondary">default Button</v-btn>
          <v-btn color="secondary" disabled>default Button</v-btn>
          <br/>
          <v-btn color="black" variant="outlined">default Button</v-btn>
          <v-btn color="black" variant="outlined" disabled>default Button</v-btn>
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
        <v-col cols="auto" class="bg-gray-050">
          <v-btn size="x-large" icon>
            <v-icon class="top_black"></v-icon>
          </v-btn>
        </v-col>

      </v-row>
    </v-container>
  </template>
  <script setup>
    
  </script>
  <style lang="scss" scoped>
  .v-col {
    &>.v-btn {
      margin: 4px;
    }
  }
  </style>