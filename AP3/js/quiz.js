var quiz = new Array(),
    perguntasJaSaiu = new Array(),
    contador = 0 ;

quiz = {
 
	0: {

		pergunta: 'Quando dizemos que “A iluminação por rasterização é apenas uma aproximação", referimo-nos ao fato de que',
		alternativas: {
			0: 'O cálculo de Phong usado é uma versão simplificada', 
			1: 'Apenas calculamos a iluminação em alguns pontos (vértices) e o restante é interpolado',
			2: 'Não consideramos todos os objetos da cena para o cálculo', 
			3: 'Porque a interseção dos raios com os objetos é imprecisa',
			4: 'Porque a câmera não possui os parâmetros corretos'  
		},
		resposta: 1
	},
	1: {
		
		pergunta: 'Triangle strips são',
		alternativas: {
			0: 'triângulos deformados', 
			1: 'Listas de faces desconexas',
			2: 'Triângulos vizinhos e consecutivos, formando tiras', 
			3: 'Triângulos topologicamente corretos',
			4: 'Triângulos com duas normais'  
		},
		resposta: 2
	},
	2: {
		
		pergunta: 'Quanto ao Z-Buffer',
		alternativas: {
			0: 'Garante a correta projeção de um triângulo', 
			1: 'Garante uma correta sobreposição de triângulos',
			2: 'Garante o Clipping de polígonos projetados', 
			3: 'Elimina polígonos que estão fora do frustum da camera',
			4: 'É uma etapa feita depois do Swap de buffers'  
		},
		resposta: 1
	},
	3: {
		
		pergunta: 'A componente de iluminação especular num ponto p pode ser descrita no Phong como',
		alternativas: {
			0: 'Cor (p) = material . (N.L)e , sendo N a normal do ponto, L o vetor de luz para o mesmo ponto e e o coeficiente de especularidade', 
			1: 'Cor (p) = material . e. (N.O) , sendo N a normal do ponto, O o vetor de observador para o mesmo ponto e e o coeficiente de especularidade',
			2: 'Cor (p) = material . L . e , sendo L o vetor de iluminação e e o coeficiente de especularidade', 
			3: 'Cor (p) = material . (R.O)e , sendo R o vetor de reflexo, O o vetor do observador para o mesmo ponto e e o coeficiente de especularidade',
			4: 'Cor (p) = material . I . e , sendo I a constante da luz da cena e e o coeficiente de especularidade'  
		},
		resposta: 3
	},
	4: {
		
		pergunta: 'Não podemos dizer que um pixel shader',
		alternativas: {
			0: 'pode ser programado', 
			1: 'podem haver vários numa mesma cena',
			2: 'altera os vértices da geometria', 
			3: 'Influencia na rasterização',
			4: 'permite influenciar o modelo de iluminação usado'  
		},
		resposta: 2
	},
	5: {
		
		pergunta: 'Em relação ao Bump-mapping',
		alternativas: {
			0: 'cria deformações aparentes na superfície', 
			1: 'cria deformações reais na superfície',
			2: 'Precisa do modelo de iluminação Phong para ser usado', 
			3: 'São invariantes a rotação',
			4: 'Só pode ser usada em triângulos'  
		},
		resposta: 0
	},
	6: {
		
		pergunta: 'Transformações projetivas são transformações que preservam',
		alternativas: {
			0: 'elementos lineares como retas e planos', 
			1: 'área',
			2: 'ângulos entre retas', 
			3: 'curvas',
			4: 'distância entre pontos'  
		},
		resposta: 0
	},
	7: {
		
		pergunta: 'São curvas iterativas cujas funções de mistura são dadas pelas funções de Bernstein',
		alternativas: {
			0: 'Nurbs', 
			1: 'B-Splines',
			2: 'Curvas de Bézier', 
			3: 'Splines Naturais',
			4: 'Curvas poligonais'  
		},
		resposta: 2
	},
	8: {
		
		pergunta: 'Assinale abaixo a função OpenGL que define especificamente uma transformação de visualização, definindo a posição e orientação de uma câmera',
		alternativas: {
			0: 'glLookAt(...);', 
			1: 'glTranslate(...)',
			2: 'glRotate(...);', 
			3: 'glOrtho(...);',
			4: 'glFrustum(...);'  
		},
		resposta: 0
	},
	9: {
		
		pergunta: 'Destaque abaixo o método que não pode ser utilizado para construir um retalho de superfície',
		alternativas: {
			0: 'Método de Coons', 
			1: 'Interpolação bilinear',
			2: 'Lofting', 
			3: 'Método do ponto médio',
			4: 'Superfícies de Bézier'  
		},
		resposta: 3
	},
	10: {
		
		pergunta: 'Assinale a afirmação incorreta. Uma transformação linear T: Rn → Rm é',
		alternativas: {
			0: 'Um caso particular de uma transformação afim', 
			1: 'Uma transformação que mantém fixa a origem',
			2: 'Uma transformação que pode ser representada por uma matriz', 
			3: 'Uma transformação que preserva elementos lineares',
			4: 'Uma transformação que preserva o ângulo entre duas retas'  
		},
		resposta: 4
	},
	11: {
		
		pergunta: 'Um terreno digital, onde para cada ponto identifica-se um único valor de altura, isto é um mapa de elevações, é um exemplo de objeto gráfico',
		alternativas: {
			0: 'espacial e bidimensional', 
			1: 'planar e bidimensional',
			2: 'espacial e unidimensional', 
			3: 'espacial e tridimensional',
			4: 'planar e tridimensional'  
		},
		resposta: 0
	},
	12: {
		
		pergunta: 'Quando dizemos que no OpenGL “O ray tracing é um algoritmo recursivo”, referimonos ao fato de que',
		alternativas: {
			0: 'O reflexo consiste numa chamada recursiva de um raio, na direção do observador', 
			1: 'Usamos estruturas hierárquicas, portanto com acesso recursivo para as folhas',
			2: 'O reflexo consiste numa chamada recursiva de um raio, partindo da câmera', 
			3: 'O reflexo consiste numa chamada recursiva de um raio, partindo da normal',
			4: 'O reflexo consiste numa chamada recursiva de um raio, partindo do ponto de interseção'  
		},
		resposta: 4
	},
	13: {
		
		pergunta: 'Podemos dizer que utilizamos o glBegin( ) no OpenGL para ',
		alternativas: {
			0: 'Inicializar um programa OpenGL', 
			1: 'Iniciar o envio de vértices',
			2: 'Inicializar o call-back de desenho', 
			3: 'Limpar a tela no término de um frame',
			4: 'Criar um novo material a ser usado'  
		},
		resposta: 1
	},
	14: {
		
		pergunta: 'Podemos afirmar que o Z-Buffer',
		alternativas: {
			0: 'É um estágio que corresponde a projeção dos polígonos', 
			1: 'Permite pintar polígonos de forma ordenada com a profundidade',
			2: 'Realiza Clipping de polígonos projetados', 
			3: 'É necessário para calcular o coeficiente especular do Phong',
			4: 'É uma etapa feita depois do Swap de buffers'  
		},
		resposta: 1
	},
	15: {
		
		pergunta: 'A componente de iluminação difusa num ponto p pode ser descrita no Phong como',
		alternativas: {
			0: 'Cor (p) = material . (N.L) , sendo N a normal do ponto e L o vetor de luz para o mesmo ponto', 
			1: 'Cor (p) = material . (N.O) , sendo N a normal do ponto e O o vetor de observador para o mesmo ponto',
			2: 'Cor (p) = material . L, sendo L o vetor de iluminação', 
			3: 'Cor (p) = material . (R.O) , sendo R o vetor de reflexo e O o vetor do observador para o mesmo ponto',
			4: 'Cor (p) = material . I , sendo I a constante da luz da cena'  
		},
		resposta: 0
	},
	16: {
		
		pergunta: 'Não podemos dizer que o Environment-mapping',
		alternativas: {
			0: 'cria deformações aparentes na superfície', 
			1: 'É usada para simular reflexos em tempo real',
			2: 'Precisa de um mapeamento planar sempre', 
			3: 'São fundamentais no Ray tracing',
			4: 'Só pode ser usada em planos'  
		},
		resposta: 1
	},
	17: {
		
		pergunta: 'Em relação ao Bump-mapping',
		alternativas: {
			0: 'cria deformações aparentes na superfície',
			1: 'cria deformações reais na superfície',
			2: 'Precisa do modelo de iluminação Phong para ser usado',
			3: 'São invariantes a rotação',
			4: 'Só pode ser usada em planos'
		},
		resposta: 0
	},
	18: {
		
		pergunta: 'Indique o item que não corresponde a um algoritmo de recorte',
		alternativas: {
			0: 'Algoritmo do ponto médio', 
			1: 'Weiler-Atherton',
			2: 'Sutherland-Hodgeman', 
			3: 'Cyrus-Beck',
			4: 'Cohen-Sutherland'  
		},
		resposta: 0
	},
	19: {
		
		pergunta: 'Escolha a opção que não consiste em uma afirmação verdadeira sobre funções implícitas',
		alternativas: {
			0: 'Lidam naturalmente com mudanças de topologia quando o nível da função é alterado', 
			1: 'São apropriadas para problemas de classificação ponto-conjunto',
			2: 'Permitem a realização de amostragem pontual de modo fácil', 
			3: 'Não permitem a descrição de formas complexas',
			4: 'Descrevem sólidos de forma tão natural quanto superfícies'  
		},
		resposta: 2
	},
	20: {
		
		pergunta: 'Seja T uma matriz de transformação aplicada aos vértices v de um objeto gráfico O, representado por uma malha. A transformação T’ aplicada às normais dos vértices, que produz o mesmo efeito que a transformação T, aplicada aos respectivos vértices é dada por',
		alternativas: {
			0: 'T’ = T', 
			1: 'T’ = T^-T',
			2: 'T’ = T^-1', 
			3: 'T`= T^T',
			4: 'T’ = -T'  
		},
		resposta: 1
	},
	21: {
		
		pergunta: 'Seja I a intensidade da luz incidente em um ponto p, l o vetor que indica a direção de incidência da luz, v a posição do observador, n a normal em p e r o raio de luz refletido. NÃO podemos afirmar sobre a equação (r.v)^x',
		alternativas: {
			0: 'Trata-se da componente especular do modelo Phong', 
			1: 'Quanto maior x, mais distante o material está de um espelho',
			2: 'não são todos os materiais que possuem esta componente', 
			3: 'Esta componente é variante de acordo com a posição do observador',
			4: 'r e v devem estar normalizados para que esta equação seja válida'  
		},
		resposta: 1
	},
	22: {
		
		pergunta: 'As coordenadas de texturas para mapear imagens prontas',
		alternativas: {
			0: 'São vértices e definem uma coordenada espacial para a textura ', 
			1: 'Devem ser criadas durante o pipeline gráfico ',
			2: 'São coordenadas bidimensionais', 
			3: 'São usadas em texturas procedurais',
			4: 'São geradas depois do estágio de iluminação'  
		},
		resposta: 2
	},
	23: {
		
		pergunta: 'Se não fosse pelo Z-Buffer',
		alternativas: {
			0: 'Não poderíamos realizar a interpolação das cores dos vértices.', 
			1: 'Faltariam informações para o clipping',
			2: 'Não haveria como estimar quais polígonos estão fora do frustrum da camera', 
			3: 'Não seria pintar os polígonos na ordem de profundidade',
			4: 'Não haveria informação de profundidade da camera'
		},
		resposta: 3
	},
	24: {
		
		pergunta: 'Qual destes elementos não necessários para calcular o frustrum culling (por exemplo, a BSP)',
		alternativas: {
			0: 'posição da câmera', 
			1: 'Lista de vértices da malha',
			2: 'Lista de Fontes de Luz', 
			3: 'Direção da camera',
			4: 'Angulo de abertura da camera'  
		},
		resposta: 2
	},
	25: {
		
		pergunta: 'Não podemos dizer que um vertex shader',
		alternativas: {
			0: 'pode ser programado', 
			1: 'Pode gerar novos triângulos',
			2: 'altera os vértices da geometria', 
			3: 'Pode conter um modelo de iluminação',
			4: 'permite manipular coordenadas de texturas '  
		},
		resposta: 1
	},
	26: {
		
		pergunta: 'Um dos principais gargalos do ray-tracing é',
		alternativas: {
			0: 'A projeção dos polígonos', 
			1: 'O cálculo de oclusão',
			2: 'O cálculo de interseção raio-polígonos', 
			3: 'A interpolação dos triângulos',
			4: 'O cálculo do componente especular'  
		},
		resposta: 2
	},
	27: {
		
		pergunta: 'Pode-se afirmar que curvas poligonais',
		alternativas: {
			0: 'Podem aproximar uma região do plano com grau de precisão desejado adicionando e posicionando apropriadamente um número suficiente de vértices', 
			1: 'Fornecem uma representação compacta (com poucos elementos) para formas do plano independentemente de sua complexidade',
			2: 'Permitem a fácil manipulação do formato de regiões complexas', 
			3: 'São o tipo de curva mais apropriado para representar formas suaves',
			4: 'Não são apropriadas para representar polígonos'  
		},
		resposta: 0
	},
	28: {
		
		pergunta: 'São transformações que preservam distâncias e ângulos de objetos no plano e no espaço',
		alternativas: {
			0: 'Transformações projetivas', 
			1: 'Escalas e rotações',
			2: 'Transformações lineares', 
			3: 'Translações e rotações',
			4: 'Somente rotações'  
		},
		resposta: 3
	},
	29: {
		
		pergunta: 'Não é uma das propriedades das coordenadas homogêneas',
		alternativas: {
			0: 'Pontos afins, com coordenadas homogêneas (x,y,1), podem ser convertidos para coordenadas euclidianas descartando a última coordenada', 
			1: 'As transformações afins em dimensão n, em coordenadas homogêneas, são dadas por matrizes que descrevem transformações lineares em um espaço de dimensão n+1',
			2: 'A composição de transformações afins e projetivas, utilizando coordenadas homogêneas, pode ser feita somente através de multiplicação de matrizes', 
			3: 'Não representam adequadamente pontos no infinito',
			4: 'Pontos com coordenadas (x,y,w) e (x/w,y/w,1), para w≠0 ,são equivalentes'  
		},
		resposta: 3
	},
	30: {
		
		pergunta: 'São exemplos de B-Splines',
		alternativas: {
			0: 'Nurbs', 
			1: 'Curvas de Bézier ',
			2: 'Curvas poligonais ', 
			3: 'Curvas implícitas',
			4: 'Curvas de Hermite '  
		},
		resposta: 1
	},
	31: {
		
		pergunta: 'Em qual situação NÃO faz sentido usar os light maps',
		alternativas: {
			0: 'Para incluir iluminação global em tempo real', 
			1: 'Para incluir sombras mais precisas (com área light, por exemplo)',
			2: 'Para incluir refração em objetos transparentes ', 
			3: 'Para evitar problemas relativos a vertex lighting',
			4: 'Para incluir radiosidade'  
		},
		resposta: 2
	},
	32: {
		
		pergunta: 'O arranjo de Triangle strips serve para',
		alternativas: {
			0: 'Otimizar o processamento das normais da geometria', 
			1: 'Otimizar o envio de vértices ao pipeline gráfico',
			2: 'Reduzir o número de triângulos da malha', 
			3: 'Realizar clipping de triângulos',
			4: 'Evitar o gargalo de geometria'  
		},
		resposta: 1
	},
	33: {
		
		pergunta: 'Quanto ao Z-Buffer',
		alternativas: {
			0: 'Garante a correta projeção de um triângulo', 
			1: 'Garante uma correta sobreposição de triângulos',
			2: 'Garante o Clipping de polígonos projetados', 
			3: 'Elimina polígonos que estão fora do frustum da camera',
			4: 'É uma etapa feita depois do Swap de buffers'  
		},
		resposta: 1
	},
	34: {
		
		pergunta: 'E equação de especularidade no Phong é dada por K .(R.O)e. É errado afirmar que',
		alternativas: {
			0: 'R é o vetor de reflexo', 
			1: 'O é o vetor de do ponto até a camera',
			2: 'quanto maior o coeficiente e, menor o efeito de especularidade', 
			3: 'O resultado depende da posição do observador',
			4: 'R.O é o cosseno do ângulo formado entre estes dois vetores.'  
		},
		resposta: 2
	},
	35: {
		
		pergunta: 'Não podemos dizer que um pixel shader',
		alternativas: {
			0: 'pode ser programado', 
			1: 'podem haver vários numa mesma cena',
			2: 'altera os vértices da geometria', 
			3: 'Influencia na rasterização',
			4: 'permite influenciar o modelo de iluminação usado'  
		},
		resposta: 2
	},
	36: {
		
		pergunta: 'Em relação ao Bump-mapping',
		alternativas: {
			0: 'cria deformações aparentes na superfície', 
			1: 'cria deformações reais na superfície',
			2: 'Precisa do modelo de iluminação Phong para ser usado', 
			3: 'São invariantes a rotação',
			4: 'Só pode ser usada em triângulos'  
		},
		resposta: 0
	},
	37: {
		
		pergunta: 'Não é um exemplo de função paramétrica',
		alternativas: {
			0: 'Curva de Bézier', 
			1: 'B-Spline',
			2: 'Nurbs', 
			3: 'Imagem 3D',
			4: 'Retalho de Coons'  
		},
		resposta: 3
	},
	38: {
		
		pergunta: 'É um exemplo de estrutura de dados topológica',
		alternativas: {
			0: 'Curva poligonal', 
			1: 'Lista de vértices, arestas e faces',
			2: 'Dado volumétrico', 
			3: 'Imagem 2D',
			4: 'Nurbs'  
		},
		resposta: 1
	},
	39: {
		
		pergunta: 'Uma aplicação direta do Teorema de Jordan é',
		alternativas: {
			0: 'Resolver o problema de classificação ponto-conjunto', 
			1: 'Reconstruir superfícies',
			2: 'Interpolar curvas', 
			3: 'Animar personagens em uma animação por computador',
			4: 'Efetuar simulação de fluídos'  
		},
		resposta: 0
	},
	40: {
		
		pergunta: 'Uma transformação projetiva preserva',
		alternativas: {
			0: 'Distâncias', 
			1: 'Pontos afins',
			2: 'Ângulos', 
			3: 'Retas',
			4: 'Áreas'  
		},
		resposta: 3
	},
	41: {
		
		pergunta: 'Podemos afirmar sobre curvas de Bézier cúbicas',
		alternativas: {
			0: 'Possuem total controle local', 
			1: 'São funções implícitas',
			2: 'O traço da curva está restrito ao fecho convexo do polígono de controle', 
			3: 'Podem ser combinadas para formar curvas maiores diretamente, sem problemas de continuidade',
			4: 'São formadas por segmentos de curvas'  
		},
		resposta: 2
	},
	42: {
		
		pergunta: 'Não é um exemplo de callback do OpenGL',
		alternativas: {
			0: 'renderEvent( )', 
			1: 'transform( )',
			2: 'windowResizeEvent ()', 
			3: 'mouseEvent() ',
			4: 'specialKeysEvents() '  
		},
		resposta: 1
	},
	43: {
		
		pergunta: 'O Swap-Buffer, no OpenGL, consiste em',
		alternativas: {
			0: 'Criar uma textura', 
			1: 'Trocar o conteúdo do Front-Buffer com o Back_Buffer',
			2: 'Inicializar o call-back de desenho', 
			3: 'Etapa de Renderização',
			4: 'Criar um novo material a ser usado'  
		},
		resposta: 1
	},
	44: {
		
		pergunta: 'Quanto ao Z-Buffer podemos afirmar que',
		alternativas: {
			0: 'Permite efetuar blending de cores no framebuffer', 
			1: 'É fundamentalmente utilizado no algoritmo de Raytracing',
			2: 'Não funciona com processos de formação de imagem que utilizam transformações projetivas', 
			3: 'É usado para evitar sobreposição de pixels',
			4: 'É uma estrutura geométrica utilizada para resolver o problema culling'  
		},
		resposta: 3
	},
	45: {
		
		pergunta: 'Não podemos dizer que um vertex shader',
		alternativas: {
			0: 'pode ser programado', 
			1: 'podem haver vários numa mesma cena',
			2: 'pode ser usado para alterar coordenadas de texturas da malha', 
			3: 'Influencia na rasterização',
			4: 'permite influenciar o modelo de iluminação usado'  
		},
		resposta: 3
	},
	46: {
		
		pergunta: 'O Frustrum (abertura) da câmera é fundamental para a estratégia de culling',
		alternativas: {
			0: 'Backface', 
			1: 'Octree',
			2: 'Clipping', 
			3: 'Triangle Fans',
			4: 'Cohen-Sutherland'  
		},
		resposta: 1
	},
	47: {
		
		pergunta: 'Não podemos dizer que as texturas procedurais',
		alternativas: {
			0: 'Possuem resoluções arbitrárias', 
			1: 'Muitas vezes não requerem uma etapa de mapeamento de textura',
			2: 'Podem ser usadas para aplicar rugosidade nas superficies', 
			3: 'Há muitas que usam funções fractais',
			4: 'São métodos de anti-aliasing para texturas'  
		},
		resposta: 4
	},
	48: {
		
		pergunta: 'Uma forma muito comum de representar uma malha é através de uma codificação explícita onde para cada face, armazenamos as coordenadas de cada um de seus vértices. Marque o item que corresponde à afirmação correta',
		alternativas: {
			0: 'É uma representação que permite facilmente encontrar as duas faces vizinhas a uma aresta da malha', 
			1: 'Minimiza redundância no armazenamento dos dados',
			2: 'É robusta a todo tipo de processamento numérico realizado sobre seus vértices', 
			3: 'Não leva em consideração o fato de que vértices são compartilhados por dois ou mais triângulos',
			4: 'É uma codificação que impede automaticamente que uma aresta compartilhada por dois triângulos seja desenhada duas vezes quando cada triângulo for desenhado '  
		},
		resposta: 3
	},
	49: {
		
		pergunta: 'Alguém decide modelar um objeto em um software de modelagem 3D e lhe pergunta qual tipo de objeto gráfico é o mais adequado para modelagem iterativa permitindo controle local na modificação, sem necessidade de editar muitos elementos. Você responde',
		alternativas: {
			0: 'Uma malha de triângulos', 
			1: 'Uma superfície dada por uma mistura de funções implícitas ',
			2: 'Uma superfície de Bézier Cúbica', 
			3: 'Uma superfície B-Spline Cúbica',
			4: 'Um modelo volumétrico'  
		},
		resposta: 3
	},
	50: {
		
		pergunta: 'O Z-Buffer pode ser classificado como um objeto gráfico',
		alternativas: {
			0: 'planar unidimensional', 
			1: 'planar bidimensional',
			2: 'espacial tridimensional', 
			3: 'espacial bidimensional',
			4: 'espacial unidimensional'  
		},
		resposta: 1
	},
	51: {
		
		pergunta: 'Morphing é um tipo de efeito especial em que ocorre tanto uma deformação geométrica quanto uma transição nas cores entre quadros consecutivos de um vídeo. Observando um vídeo clip de um cantor famoso, você percebe que na deformação das formas as retas não são preservadas e as áreas ocupadas pelos objetos mudam. Com base em sua observação você pode afirmar que o tipo de transformação que ocorreu é',
		alternativas: {
			0: 'Um movimento rígido', 
			1: 'Uma transformação afim',
			2: 'Uma transformação projetiva', 
			3: 'Uma rotação seguida de uma escala',
			4: 'Nenhuma das afirmações anteriores, sendo uma transformação não linear bidimensional'  
		},
		resposta: 4
	},
	52: {
		
		pergunta: 'Uma aplicação direta do Teorema de Jordan é',
		alternativas: {
			0: 'Resolver o problema de classificação ponto-conjunto', 
			1: 'Reconstruir superfícies',
			2: 'Interpolar curvas', 
			3: 'Animar personagens em uma animação por computador',
			4: 'Efetuar simulação de fluídos'  
		},
		resposta: 0
	},
	53: {
		
		pergunta: 'É um exemplo de estrutura de dados topológica',
		alternativas: {
			0: 'Curva poligonal', 
			1: 'Lista de vértices, arestas e faces',
			2: 'Dado volumétrico', 
			3: 'Imagem 2D',
			4: 'Nurbs'  
		},
		resposta: 1
	},
	54: {
		
		pergunta: 'Podemos afirmar sobre curvas de Bézier cúbicas',
		alternativas: {
			0: 'Possuem total controle local', 
			1: 'São funções implícitas',
			2: 'O traço da curva está restrito ao fecho convexo do polígono de controle', 
			3: 'Podem ser combinadas para formar curvas maiores diretamente, sem problemas de continuidade',
			4: 'São formadas por segmentos de curvas'  
		},
		resposta: 2
	},
	55: {
		
		pergunta: 'São curvas iterativas cujas funções de mistura são dadas pelas funções de Bernstein',
		alternativas: {
			0: 'Nurbs', 
			1: 'B-Splines',
			2: 'Curvas de Bézier', 
			3: 'Splines Naturais',
			4: 'Curvas poligonais'  
		},
		resposta: 2
	},
	56: {
		
		pergunta: 'Assinale a afirmação incorreta. Uma transformação linear T: R^n → R^m é',
		alternativas: {
			0: 'Um caso particular de uma transformação afim', 
			1: 'Uma transformação que mantém fixa a origem',
			2: 'Uma transformação que pode ser representada por uma matriz ', 
			3: 'Uma transformação que preserva elementos lineares',
			4: 'Uma transformação que preserva o ângulo entre duas retas'  
		},
		resposta: 4
	},
	57: {
		
		pergunta: 'Está errado afirmar sobre o ZBuffer',
		alternativas: {
			0: 'Tem a mesma resolução do Frame Buffer', 
			1: 'É usado no Raytracing',
			2: 'Pode ser inicializado com infinito em cada elemento', 
			3: 'Está dentro do estágio de rasterização',
			4: 'Responsável por determinar se um pixel está encoberto por outro'  
		},
		resposta: 1
	},
	58: {
		
		pergunta: 'O Swap-Buffer, no OpenGL, consiste em',
		alternativas: {
			0: 'Criar uma textura', 
			1: 'Trocar o conteúdo do Front-Buffer com o Back_Buffer',
			2: 'Inicializar o call-back de desenho', 
			3: 'Etapa de Renderização',
			4: 'Criar um novo material a ser usado'  
		},
		resposta: 1
	},
	59: {
		
		pergunta: 'O culling de polígono consiste em',
		alternativas: {
			0: 'projetar o polígono', 
			1: 'rasterizar o interior do polígono',
			2: 'recortar parte do polígono que ficou fora da área de projeção', 
			3: 'eliminar polígonos desnecessários',
			4: 'Transformar as coordenadas do polígono'  
		},
		resposta: 3
	},
	60: {
		
		pergunta: 'A diferença de um pixel shader para um vertex shader é',
		alternativas: {
			0: 'são processados na Gpu', 
			1: 'são gerenciados pela API gráfica',
			2: 'operam em estruturas de dados diferentes', 
			3: 'estão no mesmo estágio do pipeline',
			4: 'Requerem uma malha regular'  
		},
		resposta: 2
	},
	61: {
		
		pergunta: 'Não podemos afirmar do Ray-tracing',
		alternativas: {
			0: 'Calcula parte da iluminação global', 
			1: 'é uma iluminação por pixel',
			2: 'Realiza interpolação de vértices para calcular a iluminação total', 
			3: 'Não requer a etapa de clipping',
			4: 'Pode ser acelerada por uma octree'  
		},
		resposta: 2
	},
	62: {
		
		pergunta: 'A componente de iluminação especular num ponto p pode ser descrita no Phong como',
		alternativas: {
			0: 'Cor (p) = material . (N.L) , sendo N a normal do ponto e L o vetor de luz para o mesmo ponto', 
			1: 'Cor (p) = material . (N.O) , sendo N a normal do ponto e O o vetor de observador para o mesmo ponto',
			2: 'Cor (p) = material . L, sendo L o vetor de iluminação', 
			3: 'Cor (p) = material . (R.O)^n , sendo R o vetor de reflexo , O o vetor do observador para o mesmo ponto e n um coeficiente do material',
			4: 'Cor (p) = material . I , sendo I a constante da luz da cena'  
		},
		resposta: 3
	},
	63: {
		
		pergunta: 'Seja I a intensidade da luz incidente em um ponto p, l o vetor que indica a direção de incidência da luz, v a posição do observador, n a normal em p e r o raio de luz refletido. Além disso seja kd o coeficiente de reflexão difusa. A intensidade da reflexão difusa Id é dada pela expressão',
		alternativas: {
			0: 'Id = kd<n,l>', 
			1: 'Id = kd<l,r>',
			2: 'Id = kd<r,v>', 
			3: 'Id = kd<n,r>',
			4: 'Id= <n,l>^kd'  
		},
		resposta: 0
	},
	64: {
		
		pergunta: 'O frustrum culling de polígonos consiste em',
		alternativas: {
			0: 'projetar o polígono no frustrum da camera', 
			1: 'rasterizar o interior do polígono',
			2: 'recortar parte do polígono que ficou fora da área de projeção', 
			3: 'estratégia de eliminar polígonos não visíveis pela camera',
			4: 'Transformar as coordenadas do polígono para espaço de frustrum'  
		},
		resposta: 3
	},
	65: {
		
		pergunta: 'Sobre o CUDA, NÃO podemos afirmar',
		alternativas: {
			0: 'função que é executada na GPU chama-se kernel', 
			1: 'é uma biblioteca gráfica do OpenGL',
			2: 'cada kernel é instanciado em centenas ou até milhares de threads', 
			3: 'permite desenvolver algoritmos altamente paralelos',
			4: 'requer que os dados da GPU sejam copiados a partir da memória da CPU'  
		},
		resposta: 1
	},
	66: {
		
		pergunta: 'Malhas de terrenos podem ser bastante extensas e consumir bastante tempo de rendering. Para otimizá-los, podemos',
		alternativas: {
			0: 'Usar pixel shaders', 
			1: 'Iluminar apenas alguns de seus vértices',
			2: 'Criar uma amostragem estatística', 
			3: 'Usar Level Of Details',
			4: 'Usar Portais'  
		},
		resposta: 3
	},
	67: {
		
		pergunta: 'Se um artista lhe disser que o jogo está com um gargalo na rasterização, uma das soluções de otimização seria',
		alternativas: {
			0: 'alterar o modelo de iluminação aplicado aos vértices vértices', 
			1: 'Diminuir o número de transformações geométricas',
			2: 'Diminuir a resolução da janela', 
			3: 'Retirar todas as operações de quaternions',
			4: 'Melhorar as estratégias de culling'  
		},
		resposta: 2
	},
	68: {
		
		pergunta: 'Não é uma estrutura de dados para geometria',
		alternativas: {
			0: 'Quadtree', 
			1: 'Octree',
			2: 'BPS', 
			3: 'Triangle Fans',
			4: 'Cohen-Sutherland'  
		},
		resposta: 4
	},
	69: {
		
		pergunta: 'São transformações que preservam distâncias e ângulos de objetos no plano e no espaço',
		alternativas: {
			0: 'Transformações projetivas', 
			1: 'Escalas e rotações ',
			2: 'Transformações lineares', 
			3: 'Translações e rotações ',
			4: 'Somente rotações'  
		},
		resposta: 3
	},
	70: {
		
		pergunta: 'Sobre a tonalização de Phong pode-se afirmar',
		alternativas: {
			0: 'É um modelo de iluminação global', 
			1: 'Determina a tonalidade em um ponto p, em uma face f, calculando a interpolação das cores (tons) determinadas nos vértices de f',
			2: 'Determina a tonalidade em um ponto p, em uma face f, calculando a interpolação das normais nos vértices da face, seguido da avaliação da equação de iluminação em p, baseada na normal n interpolada', 
			3: 'Produz resultados menos precisos que o Flat Shading',
			4: 'É menos custoso computacionalmente que a tonalização Flat Shading'  
		},
		resposta: 2
	},
	71: {
		
		pergunta: 'Seja l o vetor correspondente a direção da luz incidente em um ponto p de uma superfície com normal n. O raio de luz refletido r é dado por',
		alternativas: {
			0: 'n<n,l>-l', 
			1: '(l+n)/2',
			2: '2n<n,l>-l', 
			3: '2n<n,l>-n',
			4: '-l'  
		},
		resposta: 2
	},
	72: {
		
		pergunta: 'Destaque abaixo o método que não pode ser utilizado para construir um retalho de superfície',
		alternativas: {
			0: 'Método de Coons', 
			1: 'Interpolação bilinear',
			2: 'Lofting', 
			3: 'Método do ponto médio',
			4: 'Superfícies de Bézier'  
		},
		resposta: 3
	},
	73: {	
		
		pergunta: 'Assinale a opção que não descreve algoritmos de recorte (clipping)',
		alternativas: {
			0: 'Cohen-Sutherland e Sutherland-Hodgeman', 
			1: 'Cyrus-Beck e Sutherland-Hodgeman',
			2: 'Half-edge e Winged-Edge', 
			3: 'Cyrus-Beck e Cohen-Sutherland',
			4: 'Weiler-Atherton e Cohen-Sutherland'  
		},
		resposta: 2
	},
	74: {
		
		pergunta: 'O conjunto de pontos	dado por f(x,y,z) =	x2+y2+z2≤ 1	pode ser visto como suporte geométrico de um objeto	gráfico',
		alternativas: {
			0: 'Unidimensional	espacial', 
			1: 'Bidimensional	planar',
			2: 'Tridimensional	espacial', 
			3: 'Tridimensional	planar',
			4: 'Unidimensional	planar'  
		},
		resposta: 2
	},
	75: {
		
		pergunta: 'Assinale	a opção	na qual todos os itens correspondem	a estruturas de dados para representação de	malhas',
		alternativas: {
			0: 'Winged-edge, Half-edge, Lista de faces', 
			1: 'Weiler-Atherton, Coons, Quad-edge',
			2: 'Lista de faces,	Winged-Edge, Cyrus-Beck', 
			3: 'Nurbs, Bézier, B-Spline',
			4: 'Sutherland-Hodgman,	Cyrus-Beck,	Weiler-Atherton'  
		},
		resposta: 0
	},
	76: {
		
		pergunta: 'Uma transformação projetiva preserva',
		alternativas: {
			0: 'Distâncias', 
			1: 'Pontos afins',
			2: 'Ângulos', 
			3: 'Retas',
			4: 'Áreas'  
		},
		resposta: 3
	},
	77: {
		
		pergunta: 'Podemos afirmar sobre curvas	de Bézier cúbicas',
		alternativas: {
			0: 'Possuem	total controle local', 
			1: 'São	funções	implícitas',
			2: 'O traço	da curva está restrito ao fecho convexo	do	polígono de	controle', 
			3: 'Podem ser combinadas para formar curvas	maiores	diretamente, semproblemas de continuidade',
			4: 'São	formadas por segmentos de curvas'  
		},
		resposta: 2
	},
	78: {
		
		pergunta: 'O arranjo de	Triangle strips	serve para',
		alternativas: {
			0: 'otimizar o processamento das normais da	geometria', 
			1: 'Otimizar o envio de	vértices ao	pipeline gráfico',
			2: 'Reduzir	o número de	triângulos	da	malha', 
			3: 'Realizar clipping de triângulos',
			4: 'Evitar o gargalo de	geometria'  
		},
		resposta: 1
	},
	79: {
		
		pergunta: 'Podemos afirmar	que	uma	Callback de	Desenho',
		alternativas: {
			0: 'É um estágio do	Ray-tracing', 
			1: 'Consiste em	adicionar uma cor a um triângulo',
			2: 'É a	rotina chamada sempre que a	janela ou parte dela precisa ser redesenhada', 
			3: 'É um método	de	Culling',
			4: 'Corresponde	a rasterização do polígono'  
		},
		resposta: 2
	},
	80: {
		
		pergunta: 'Podemos dizer que os	estágios do	pipeline gráfico em	tempo real podem ser resumidos na seguinte sequencia (atenção com a	ordem!)',
		alternativas: {
			0: 'Aplicação – Geometria - Rasterização', 
			1: 'Geometria – Rasterização - Aplicação',
			2: 'Rasterização – Aplicação - Geometria', 
			3: 'Rasterização – Geometria - Aplicação',
			4: 'Geometria – Aplicação - Rasterização'  
		},
		resposta: 0
	},
	81: {
	
		pergunta: 'O estágio de Iluminação por	vértice',
		alternativas: {
			0: 'Realiza	a interpolação de todos	os pixels do interior de um	triângulo, calculando a	luz	de	cada um	e usando as	cores dos vértices como	base', 
			1: 'Calcula	a iluminação global	da	cena',
			2: 'Pré-computa	as sombras da geometria, para economizar tempo	no	pipeline tempo real', 
			3: 'Calcula	a iluminação incidente em cada vértice da malha',
			4: 'Estima a iluminação	baseada	na	média das cores	obtidas	na	iluminação de cada	vértice'  
		},
		resposta: 3
	},
	82: {
		
		pergunta: 'Na equação Phong	podemos	dizer que a	componente	ambiente é dada	por',
		alternativas: {
			0: 'K.I', 
			1: 'K.(N.L)',
			2: 'K.(O.R)e', 
			3: 'K.I	+ K.(N.L) + K.(O.R)e',
			4: 'K.I	+ K.(N.L)	'  
		},
		resposta: 0
	},
	83: {
		
		pergunta: 'Escolha a opção que corresponde a um	aspecto	não	tratado	pelo algoritmo de Raytracing clássico',
		alternativas: {
			0: 'Visibilidade dos objetos da	cena', 
			1: 'Geração	de sombras',
			2: 'Reflexão especular', 
			3: 'Reflexão difusa',
			4: 'Refração'  
		},
		resposta: 3
	},
}