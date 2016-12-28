# React-redux-count-smallSample
  
Reduxアーキテクチャの最小サンプル  

reduxではAction => Reducer => Store を順に作り  

それらでできたreduxアーキテクチャを
react-reduxにてDOMに表示する。  

その際はmapStateToProps と、 mapDispatchToPropsの
二つの関数を作り、それらをconnectする。  

そうすることでReactでreduxアーキテクチャを作ることができる。  

メリット：コンポーネントが増えた際のデータフローを一方通行にすることで
state, props地獄から抜け出すことができる。

デメリット：難しい  

知っておく技術：
・React  
・ES6  
・webpack(babel)  

・redux(Fluxアーキテクチャ)  
