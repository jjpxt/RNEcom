# RNEcom é um aplicativo mobile de e-commerce completo desenvolvido com React Native e Expo. O projeto foi construído do zero com foco em boas práticas, arquitetura limpa, UI moderna e funcionalidades reais de uma loja online.


## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

Tela de detalhes do produto com:Carrossel de imagens
Bullet points de características
Preço com desconto destacado
Botão de adicionar ao carrinho e favoritos

Carrinho de compras completo:Adicionar/remover produtos
Aumentar/diminuir quantidade (+ / -)
Cálculo automático do total
Contador na tab do carrinho

Sistema de favoritos:Toggle com coração 
Tela dedicada com grid de produtos favoritos
Contador na tab
Navegação para detalhes ao clicar

Perfil do usuário com nome e email real
Autenticação com API real (login persistente com AsyncStorage)
Navegação com Bottom Tabs e Stack Navigator
Design moderno com sombras, bordas arredondadas e cores consistentes

