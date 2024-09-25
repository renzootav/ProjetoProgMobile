# Tema 3: Aula 06 – Interface Gráfica com React Native (parte III).

### 1) Em termos práticos, dificilmente um aplicativo será composto de apenas uma tela, sendo necessário meios padronizados para a troca de tela, bem como indicações claras de qual tela está ativa no momento. Na plataforma React Native temos três tipos principais de navegação, que são: Stack, Tab e Drawer. Marque a opção correta acerca dos modelos de navegação do React Native:
- [ ] a) A tela que será exibida é associada no atributo component de Screen.
- [ ] b) Apenas o Stack exige encapsulamento em um NavigationContainer.
- [ ] c) O uso de navegação não exige bibliotecas adicionais.
- [ ] d) Não é possível alterar a tela corrente via código.
- [ ] e) O comando createDrawerNavigator define a navegação com abas inferiores.

### 2) Mesmo com todos os padrões definidos para o design de interfaces, muitos aspectos podem ser configurados para obter algum nível de personalização, como o uso das cores da empresa, fontes específicas, ou espaçamento entre componentes. As folhas de estilo controlam a modificação visual, viabilizando a personalização desejada, e ainda podemos utilizar as animações configuráveis para dar um toque pessoal às diversas ações que ocorrem durante a execução, como na abertura de uma tela ou no arraste de algum item pertencente a uma lista. Como animamos uma View para aparecimento gradual?
- [ ] a) Definindo o valor da opacidade com Animated.Value(0), e utilizando timing sobre o valor, com toValue igual a 1 e o tempo desejado em duration.
- [ ] b) Acionando o método easeInEaseOut de LayoutAnimation.
- [ ] c) Acionando o método spring de LayoutAnimation, parametrizado com valor 100.
- [ ] d) Definindo o valor da borda com Animated.Value(0xFFH), e utilizando timing sobre o valor, com toValue igual a 0 e duration igual a 1000.
- [ ] e) Acionando o método linear de LayoutAnimation, parametrizado com valor 100.
