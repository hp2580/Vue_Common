<template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn size="x-small">Extra small Button</v-btn>
        </v-col>
  
        <v-col cols="12">
          <p class="title_22">v-btn small</p>
          <v-btn size="small" color="primary">Small Button</v-btn>
          <v-btn size="small" color="secondary">Small Button</v-btn>
        </v-col>
  
        <v-col cols="12">
          <p class="title_22">v-btn default</p>
          <v-btn color="secondary">default Button</v-btn>
        </v-col>
        
        <v-col cols="12">
          <p class="title_22">v-btn text</p>
          <v-btn variant="text" color="black" class="button_16">
            default Button text button_16
          </v-btn>
          <v-btn variant="text" color="black" class="button_14">
            default Button text button_14
          </v-btn>
          <v-btn variant="text" color="black" class="button_12">
            default Button text button_12
          </v-btn>
        </v-col>

        <v-col cols="12">
          <p class="title_22">v-btn large</p>
          <v-btn size="large" color="primary">Large Button</v-btn>
          <v-btn size="large" color="secondary">Large Button</v-btn>
          <v-btn size="large" color="primary" variant="outlined">Large Button</v-btn>
          <v-btn size="large" color="primary" icon aria-label="Large Button">
            <v-icon size="24" class="export_white"></v-icon>
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
            <v-btn size="large" color="primary" class="">Large Button</v-btn>
            <v-btn size="large" color="tertiary" icon aria-label="Large Button">
              <v-icon class="export_white"></v-icon>
            </v-btn>
          </v-btn-group>
        </v-col>
  
        <v-col cols="auto">
          <v-btn size="x-large">X-Large Button</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script setup>
    
  </script>
  <style lang="scss">
    
  </style>