var quiz = new Array(),
    perguntasJaSaiu = new Array(),
    contador = 0 ;

quiz = {
 
	0: {

		pergunta: 'Está errado afirmar sobre o ZBuffer ',
		alternativas: {
			0: 'Tem a mesma resolução do Frame Buffer', 
			1: 'É usado no Raytracing',
			2: 'Pode ser inicializado com infinito em cada elemento', 
			3: 'Está dentro do estágio de rasterização',
			4: 'Responsável por determinar se um pixel está encoberto por outro'  
		},
		resposta: 1
	},

	1: {

		pergunta: 'Está errado afirmar sobre o ZBuffer',
		alternativas: {
			0: 'Tem a mesma resolução do Frame Buffer', 
			1: 'é necessário uma área de ZBuffer por polígono',
			2: 'Pode ser inicializado com infinito em cada elemento', 
			3: 'Está dentro do estágio de rasterização',
			4: 'Responsável por determinar se um pixel está encoberto por outro'  
		},
		resposta: 1
	},

	2: {

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

	3: {

		pergunta: 'O culling de polígono consiste em:',
		alternativas: {
			0: 'projetar o polígono', 
			1: 'rasterizar o interior do polígono',
			2: 'recortar parte do polígono que ficou fora da área de projeção', 
			3: 'eliminar polígonos desnecessários',
			4: 'Transformar as coordenadas do polígono'  
		},
		resposta: 3
	},

	4: {

		pergunta: 'Podemos dizer que um pixel shader:',
		alternativas: {
			0: 'Interfere na rasterização de um polígono', 
			1: 'interfere na rasterização de um vértice',
			2: 'Calcula a iluminação por vértice', 
			3: 'Determina a distância do vértice até a camera',
			4: 'realiza o estágio de projeção, dentre outras coisas'  
		},
		resposta: 0
	},

	5: {

		pergunta: 'Está errado afirmar sobre o ZBuffer',
		alternativas: {
			0: 'É usado para gerar um mapa de sombras', 
			1: 'Não precisa ser usado no Raytracing',
			2: 'Pode ser inicializado com infinito em cada elemento', 
			3: 'Está dentro do estágio de rasterização',
			4: 'Responsável por determinar se um pixel está encoberto por outro'  
		},
		resposta: 0
	},

	6: {

		pergunta: 'O Ray-tracing termina em algum momento porque',
		alternativas: {
			0: 'cada recursão tem um peso menor de contribuição da cor final', 
			1: 'todos os raios, em algum momento, saem por completo da cena',
			2: 'O algoritmo de culling retira raios desnecessários', 
			3: 'Devido ao Clipping',
			4: 'Devido a Octree'  
		},
		resposta: 0
	},

	7: {

		pergunta: 'As matrizes afins de transformação permitem',
		alternativas: {
			0: 'calcular o culling de polígonos', 
			1: 'resolver problemas de profundidade, na etapa de projeção',
			2: 'acelerar o processo de iluminação', 
			3: 'pré-computar a iluminação global',
			4: 'ser agrupadas em uma única matriz, através da multiplicação entre elas'  
		},
		resposta: 4
	},

	8: {

		pergunta: 'Um triangle Strip é:',
		alternativas: {
			0: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices Vi, Vi+1, Vi+2', 
			1: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, Vi, Vi+1',
			2: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, Vi, Vn (n é o último polígono da malha)', 
			3: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, V2, Vi',
			4: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices Vi, Vn-1, Vn'  
		},
		resposta: 0
	},

	9: {

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

	10: {

		pergunta: 'Se um artista lhe disser que o jogo está com um gargalo na rasterização, uma das soluções de otimização seria:',
		alternativas: {
			0: 'alterar o modelo de iluminação aplicado aos vértices vértices ', 
			1: 'Diminuir o número de transformações geométricas',
			2: 'Diminuir a resolução da janela', 
			3: 'Retirar todas as operações de quaternions',
			4: 'Melhorar as estratégias de culling'  
		},
		resposta: 2
	},
	11: {

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

	12: {

		pergunta: 'Não podemos dizer que as texturas procedurais',
		alternativas: {
			0: 'Possuem resoluções arbitrárias', 
			1: 'Muitas vezes não requerem uma etapa de mapeamento de textura',
			2: 'Podem ser usadas para aplicar rugosidade nas superficies', 
			3: 'Há muitas que usam funções fractais',
			4: 'São métodos de anti-aliasing para imagens'  
		},
		resposta: 4
	},

	13: {

		pergunta: 'Não podemos dizer que o bump-mapping',
		alternativas: {
			0: 'cria deformações aparentes na superfície', 
			1: 'não deforma a malha',
			2: 'Precisa de um mapeamento de textura', 
			3: 'Podem ser usadas em tempo real',
			4: 'Não permite o uso do componente especular'  
		},
		resposta: 4
	},

	14: {

		pergunta: 'Seja I a intensidade da luz incidente em um ponto p, l o vetor que indica a direção de incidência da luz, v a posição do observador, n a normal em p e r o raio de luz refletido. NÃO podemos afirmar sobre a equação (r.v) x',
		alternativas: {
			0: 'Trata-se da componente especular do modelo Phong', 
			1: 'Quanto maior x, mais distante o material está de um espelho',
			2: 'não são todos os materiais que possuem esta componente', 
			3: 'Esta componente é variante de acordo com a posição do observador',
			4: 'r e v devem estar normalizados para que esta equação seja válida'  
		},
		resposta: 1
	},

	15: {

		pergunta: 'As coordenadas de texturas usadas em malhas 3D :',
		alternativas: {
			0: 'São vértices colocados de forma artificial', 
			1: 'Devem ser criadas durante o pipeline gráfico',
			2: 'São coordenadas bidimensionais, atreladas a um vértice', 
			3: 'São usadas apenas em texturas procedurais',
			4: 'São geradas depois do estágio de iluminação'  
		},
		resposta: 2
	},

	16: {

		pergunta: 'Se não fosse pelo Z-Buffer:',
		alternativas: {
			0: 'Não poderíamos realizar a interpolação das cores dos vértices.', 
			1: 'Faltariam informações para o clipping',
			2: 'Não haveria como estimar quais polígonos estão fora do frustrum da camera', 
			3: 'Não seria possível pintar os polígonos na ordem de profundidade',
			4: 'Não seria possível aplicar cullings'  
		},
		resposta: 3
	},

	17: {

		pergunta: 'Qual destes elementos não são necessários para calcular o frustrum culling (por exemplo, a BSP):',
		alternativas: {
			0: 'posição da câmera', 
			1: 'Lista de vértices da malha',
			2: 'Lista de Fontes de Luz', 
			3: 'Direção da camera',
			4: 'Angulo de abertura da camera'  
		},
		resposta: 2
	},

	18: {

		pergunta: 'Não podemos dizer que um vertex shader',
		alternativas: {
			0: 'pode ser programado.', 
			1: 'Pode gerar novos triângulos',
			2: 'altera os vértices da geometria', 
			3: 'Pode conter um modelo de iluminação',
			4: 'permite manipular coordenadas de texturas'  
		},
		resposta: 1
	},

	19: {

		pergunta: 'Um kernel é',
		alternativas: {
			0: 'Uma função que é executada na GPU', 
			1: 'Outro nome dado ao polígono',
			2: 'Um modelo de interpolação', 
			3: 'Um shader',
			4: 'Um modelo de iluminação'  
		},
		resposta: 0
	},

	20: {

		pergunta: 'Usamos Quaternions porque',
		alternativas: {
			0: 'São ótimos algoritmos de iluminação', 
			1: 'Para resolver problemas de profundidade, na etapa de projeção',
			2: 'Para realizar clipping de polígonos', 
			3: 'Para construir as matrizes de transformação',
			4: 'No lugar da matriz de rotação, para evitar erros acumulados'  
		},
		resposta: 4
	},

	21: {

		pergunta: 'Podemos dizer que as texturas procedurais',
		alternativas: {
			0: 'São texturas que correspondem a uma imagem bitmap estática', 
			1: 'são funções que em geral não contém periodicidade de padrões',
			2: 'São texturas sempre usadas para aplicar rugosidade nas superficies', 
			3: 'São usadas para substituir o reflexo no tempo real',
			4: 'São métodos de anti-aliasing para imagens'  
		},
		resposta: 1
	},

	22: {

		pergunta: 'Não podemos dizer que o bump-mapping',
		alternativas: {
			0: 'cria deformações aparentes na superfície', 
			1: 'não deforma a malha',
			2: 'Precisa de um mapeamento de textura', 
			3: 'Podem ser usadas em tempo real',
			4: 'Não permite o uso do componente especular'  
		},
		resposta: 4
	},

	23: {

		pergunta: 'Podemos afirmar que a função glSwapBuffers(...) permite',
		alternativas: {
			0: 'apagar os bits de profundidade do framebuffer', 
			1: 'inverter os canais de cores do framebuffer',
			2: 'trocar o conteúdo atual do frontbuffer pelo do backbuffer, fazendo com o que o desenho feito no backbuffer seja exibido na tela', 
			3: 'o uso de um único buffer (single buffer) no processo de visualização',
			4: ' combinar o conteúdo do frontbuffer com o backbuffer'  
		},
		resposta: 2
	},

	24: {

		pergunta: 'A custo computacional do algoritmo de Raytracing não depende da:',
		alternativas: {
			0: 'quantidade de polígonos na cena', 
			1: 'número de pixels na imagem final a ser gerada',
			2: 'quantidade de níveis de recursão das reflexões e transmissões de raios no algoritmo', 
			3: 'quantidade de fontes luz na cena',
			4: 'do ângulo que as fontes de luz fazem com a cena'  
		},
		resposta: 4
	},

	25: {

		pergunta: 'Assinale a função da OpenGL que permite definir os parâmetros intrínsecos de uma câmera sintética',
		alternativas: {
			0: 'glLookAt(...).', 
			1: 'glTranslate(...)',
			2: 'glRotate(...)', 
			3: 'glBegin(...)',
			4: 'glFrustum(...)'  
		},
		resposta: 4
	},

	26: {

		pergunta: 'sobre o Frame Buffer não podemos afirmar',
		alternativas: {
			0: 'Tem a mesma resolução do ZBuffer', 
			1: 'Somente é usado quando não há Back Buffer presente',
			2: 'Funciona junstamente com a função de Swap Buffer', 
			3: 'É composto por pixels',
			4: 'Reside na GPU'  
		},
		resposta: 1
	},

	27: {

		pergunta: 'Podemos dizer que utilizamos o glBegin( ) no OpenGL para',
		alternativas: {
			0: 'Inicializar um programa OpenGL', 
			1: 'Iniciar o envio de vértices',
			2: 'Inicializar o call-back de desenho', 
			3: 'Limpar a tela no término de um frame',
			4: 'Criar um novo material a ser usado'  
		},
		resposta: 1
	},

	28: {

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

	29: {

		pergunta: 'Em relação às Transformações afins, podemos afirmar que',
		alternativas: {
			0: 'consiste em representar um espaço 2D imerso em um espaço 3D', 
			1: 'Consiste numa transformação do espaço 2D para o 3D',
			2: 'Requer uma etapa de projeção', 
			3: 'É o mesmo que transformação de translação',
			4: 'Preservam retas, razão de seção e coordenadas baricêntricas'  
		},
		resposta: 4
	},

	30: {

		pergunta: 'É ERRADO afirmar que',
		alternativas: {
			0: 'O uso de coordenadas homogêneas consiste em representar um espaço 2D imerso em um espaço 3D', 
			1: 'Em coordenadas homogêneas, um ponto do plano é representado por uma tripla [x,y,w] ao invés de um par (x,y).',
			2: 'Duas coordenadas homogênas [x,y,w] e [x´, y´, w´] representam o mesmo ponto se uma é um múltiplo da outra', 
			3: 'Podemos tratar todas as transformações de forma unificada se representarmos os pontos do espaço em coordenadas homogêneas',
			4: 'Para homogeneizar um ponto para coordenadas homogêneas devemos aplicar um transformador para que w = 0'  
		},
		resposta: 4
	},

	31: {

		pergunta: 'Usamos Quaternions porque:',
		alternativas: {
			0: 'São ótimos algoritmos de iluminação', 
			1: 'Para resolver problemas de profundidade, na etapa de projeção',
			2: 'Para realizar clipping de polígonos', 
			3: 'Para construir as matrizes de transformação',
			4: 'No lugar da matriz de rotação, para evitar erros acumulados'  
		},
		resposta: 4
	},

	32: {

		pergunta: 'Um triangle Fan é',
		alternativas: {
			0: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices Vi, Vi+1, Vi+2', 
			1: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, Vi, Vi+1',
			2: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, Vi, Vn (n é o último polígono da malha)', 
			3: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, V2, Vi',
			4: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices Vi, Vn-1, Vn'  
		},
		resposta: 1
	},

	33: {

		pergunta: 'A componente de iluminação especular num ponto p pode ser descrita no Phong como',
		alternativas: {
			0: 'Cor (p) = material . (N.L) , sendo N a normal do ponto e L o vetor de luz para o mesmo ponto', 
			1: 'Cor (p) = material . (N.O) , sendo N a normal do ponto e O o vetor de observador para o mesmo ponto',
			2: 'Cor (p) = material . L, sendo L o vetor de iluminação', 
			3: 'Cor (p) = material . (R.O)n, sendo R o vetor de reflexo , O o vetor do observador para o mesmo ponto e n um coeficiente do material',
			4: 'Cor (p) = material . I , sendo I a constante da luz da cena'  
		},
		resposta: 3
	},

	34: {

		pergunta: 'Quando realizamos transformações geométricas no espaço, usando ângulos de Euler, podemos ter como problema o Gimbal lock, que consiste em',
		alternativas: {
			0: 'falta de ajustes adequados dos parâmetros', 
			1: 'Perda de graus de liberdade em certas configurações',
			2: 'Transformações que anulam outras transformações', 
			3: 'Ambiguidade de rotação',
			4: 'Ausencia de dados na matriz'  
		},
		resposta: 1
	},

	35: {

		pergunta: 'Qual destas estrutura de dados não pode ser usada para Culling?:',
		alternativas: {
			0: 'Quadtree', 
			1: 'Octree',
			2: 'BSP', 
			3: 'Triangle Fans',
			4: 'Portais'  
		},
		resposta: 3
	},

	36: {

		pergunta: 'Podemos dizer que as texturas procedurais',
		alternativas: {
			0: 'São texturas que correspondem a uma imagem bitmap estática', 
			1: 'são funções que em geral não contém periodicidade de padrões',
			2: 'São texturas sempre usadas para aplicar rugosidade nas superficies', 
			3: 'São usadas para substituir o reflexo no tempo real',
			4: 'São métodos de anti-aliasing para imagens'  
		},
		resposta: 1
	},

	37: {

		pergunta: 'Não podemos dizer que o bump-mapping',
		alternativas: {
			0: 'cria deformações aparentes na superfície', 
			1: 'não deforma a malha',
			2: 'Precisa de um mapeamento de textura', 
			3: 'Podem ser usadas em tempo real',
			4: 'Não permite o uso do componente especular'  
		},
		resposta: 4
	},

	38: {

		pergunta: 'No OpenGL, a normal de um polígono é',
		alternativas: {
			0: 'Guardada no vértice', 
			1: 'Guardada no material do objeto',
			2: 'Guardada na textura do objeto', 
			3: 'A mesma para todo o objeto ',
			4: 'Calculada de acordo com a posição da camera'  
		},
		resposta: 0
	},

	39: {

		pergunta: 'O culling de polígono consiste em:',
		alternativas: {
			0: 'projetar o polígono', 
			1: 'rasterizar o interior do polígono',
			2: 'recortar parte do polígono que ficou fora da área de projeção', 
			3: 'eliminar polígonos desnecessários',
			4: 'Transformar as coordenadas do polígono'  
		},
		resposta: 3
	},

	40: {

		pergunta: 'Em relação às Transformações afins, podemos afirmar que',
		alternativas: {
			0: 'consiste em representar um espaço 2D imerso em um espaço 3D', 
			1: 'Consiste numa transformação do espaço 2D para o 3D',
			2: 'Requer uma etapa de projeção', 
			3: 'É o mesmo que transformação de translação',
			4: 'Preservam retas, razão de seção e coordenadas baricêntricas'  
		},
		resposta: 4
	},

	41: {

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

	42: {

		pergunta: 'Usamos Quaternions porque',
		alternativas: {
			0: 'São ótimos algoritmos de iluminação', 
			1: 'Para resolver problemas de profundidade, na etapa de projeção',
			2: 'Para realizar clipping de polígonos', 
			3: 'Para construir as matrizes de transformação',
			4: 'No lugar da matriz de rotação, para evitar erros acumulados'  
		},
		resposta: 4
	},

	43: {

		pergunta: 'É ERRADO afirmar que num sistema de coordenadas homogêneas podemos afirmar que ',
		alternativas: {
			0: 'O uso de coordenadas homogêneas consiste em representar um espaço 2D imerso em um espaço 3D', 
			1: 'Em coordenadas homogêneas, um ponto do plano é representado por uma tripla [x,y,w] ao invés de um par (x,y)',
			2: 'Duas coordenadas homogênas [x,y,w] e [x´, y´, w´] representam o mesmo ponto se uma é um múltiplo da outra', 
			3: 'Podemos tratar todas as transformações de forma unificada se representarmos os pontos do espaço em coordenadas homogêneas',
			4: 'Para homogeneizar um ponto para coordenadas homogêneas devemos aplicar um transformador para que w = 0'  
		},
		resposta: 4
	},

	44: {

		pergunta: 'A componente de iluminação especular num ponto p pode ser descrita no Phong como',
		alternativas: {
			0: 'Cor (p) = material . (N.L) , sendo N a normal do ponto e L o vetor de luz para o mesmo ponto', 
			1: 'Cor (p) = material . (N.O) , sendo N a normal do ponto e O o vetor de observador para o mesmo ponto',
			2: 'Cor (p) = material . L, sendo L o vetor de iluminação', 
			3: ' Cor (p) = material . (R.O)n , sendo R o vetor de reflexo , O o vetor do observador para o mesmo ponto e n um coeficiente do material',
			4: 'Cor (p) = material . I , sendo I a constante da luz da cena'  
		},
		resposta: 3
	},

	45: {

		pergunta: 'Quando realizamos transformações geométricas no espaço, usando ângulos de Euler, podemos ter como problema o Gimbal lock, que consiste em:',
		alternativas: {
			0: 'falta de ajustes adequados dos parâmetros', 
			1: 'Perda de graus de liberdade em certas configurações',
			2: 'Transformações que anulam outras transformações', 
			3: 'Ambiguidade de rotação',
			4: 'Ausencia de dados na matriz'  
		},
		resposta: 1
	},

	46: {

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

	47: {

		pergunta: 'Não podemos dizer que as texturas procedurais:',
		alternativas: {
			0: 'Possuem resoluções arbitrárias', 
			1: 'Muitas vezes não requerem uma etapa de mapeamento de textura',
			2: 'Podem ser usadas para aplicar rugosidade nas superficies', 
			3: 'Há muitas que usam funções fractais',
			4: 'São métodos de anti-aliasing para imagens'  
		},
		resposta: 4
	},

	48: {

		pergunta: 'Podemos dizer que o Environment-mapping',
		alternativas: {
			0: 'É uma das etapas do Ray-tracing', 
			1: 'É uma textura para deformar uma geometria',
			2: 'Simula o reflexo na rasterização', 
			3: 'É uma técnica de culling de terrenos',
			4: 'Não permite o uso do componente especular'  
		},
		resposta: 2
	},

	49: {

		pergunta: 'Está errado afirmar sobre o ZBuffer',
		alternativas: {
			0: 'Tem a mesma resolução do Frame Buffer ', 
			1: 'é necessário uma área de ZBuffer por polígono',
			2: 'Pode ser inicializado com infinito em cada elemento', 
			3: 'Está dentro do estágio de rasterização',
			4: 'Responsável por determinar se um pixel está encoberto por outro'  
		},
		resposta: 1
	},

	50: {

		pergunta: 'Sobre o CUDA, NÃO podemos afirmar',
		alternativas: {
			0: 'função que é executada na GPU chama-se kernel', 
			1: 'é uma biblioteca gráfica do OpenGL ',
			2: 'cada kernel é instanciado em centenas ou até milhares de threads', 
			3: 'permite desenvolver algoritmos altamente paralelos',
			4: 'requer que os dados da GPU sejam copiados a partir da memória da CPU '  
		},
		resposta: 1
	},

	51: {

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

	52: {

		pergunta: 'Podemos dizer que um pixel shader:',
		alternativas: {
			0: 'Interfere na rasterização de um polígono', 
			1: 'interfere na rasterização de um vértice',
			2: 'Calcula a iluminação por vértice', 
			3: 'Determina a distância do vértice até a camera',
			4: 'realiza o estágio de projeção, dentre outras coisas '  
		},
		resposta: 0
	},

	53: {

		pergunta: 'O Ray-tracing termina em algum momento porque',
		alternativas: {
			0: 'cada recursão tem um peso menor de contribuição da cor final ', 
			1: 'todos os raios, em algum momento, saem por completo da cena ',
			2: 'O algoritmo de culling retira raios desnecessários', 
			3: 'Devido ao Clipping ',
			4: 'Devido a Octree'  
		},
		resposta: 0
	},

	54: {

		pergunta: 'Usamos Quaternions porque:',
		alternativas: {
			0: 'São ótimos algoritmos de iluminação', 
			1: 'Para resolver problemas de profundidade, na etapa de projeção',
			2: 'Para realizar clipping de polígonos', 
			3: 'Para construir as matrizes de transformação ',
			4: 'No lugar da matriz de rotação, para evitar erros acumulados'  
		},
		resposta: 4
	},

	55: {

		pergunta: 'Um triangle Strip é',
		alternativas: {
			0: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices Vi, Vi+1, Vi+2 ', 
			1: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, Vi, Vi+1',
			2: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, Vi, Vn (n é o último polígono da malha) ', 
			3: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, V2, Vi ',
			4: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices Vi, Vn-1, Vn '  
		},
		resposta: 0
	},

	56: {

		pergunta: 'Malhas de terrenos podem ser bastante extensas e consumir bastante tempo de rendering.Para otimizá-los, podemos ',
		alternativas: {
			0: 'Usar pixel shaders', 
			1: 'Iluminar apenas alguns de seus vértices',
			2: 'Criar uma amostragem estatística ', 
			3: 'Usar Level Of Details ',
			4: ' Usar Portais '  
		},
		resposta: 3
	},

	57: {

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

	58: {

		pergunta: 'Não é uma estrutura de dados para geometria ',
		alternativas: {
			0: 'Quadtree', 
			1: 'Octree ',
			2: 'BPS', 
			3: 'Triangle Fans ',
			4: 'Cohen-Sutherland '  
		},
		resposta: 4
	},

	59: {

		pergunta: 'Não podemos dizer que as texturas procedurais',
		alternativas: {
			0: 'Possuem resoluções arbitrárias', 
			1: 'Muitas vezes não requerem uma etapa de mapeamento de textura',
			2: 'Podem ser usadas para aplicar rugosidade nas superficies ', 
			3: 'Há muitas que usam funções fractais',
			4: 'São métodos de anti-aliasing para imagens '  
		},
		resposta: 4
	},

	60: {

		pergunta: 'Não podemos dizer que o bump-mapping:',
		alternativas: {
			0: 'cria deformações aparentes na superfície', 
			1: 'não deforma a malha',
			2: 'Precisa de um mapeamento de textura', 
			3: 'Podem ser usadas em tempo real',
			4: 'Não permite o uso do componente especular '  
		},
		resposta: 4
	},

	61: {

		pergunta: 'No pipeline gráfico tempo real a normal de um polígono é',
		alternativas: {
			0: 'Utilizada no cálculo de projeção do mesmo', 
			1: 'É utilizada no cálculo da componente difusa',
			2: 'É fundamental para estimar a iluminação ambiente', 
			3: 'É guardada na textura do material',
			4: 'Calculada de acordo com a posição da camera'  
		},
		resposta: 1
	},

	62: {

		pergunta: 'O frustrum culling de polígono consiste em:',
		alternativas: {
			0: 'projetar o polígono dentro do plano de projeção da camera', 
			1: 'rasterizar o interior do polígono',
			2: 'recortar parte do polígono que ficou fora da área de projeção', 
			3: 'eliminar polígonos que estão fora do volume da camera',
			4: 'Transformar as coordenadas do polígono'  
		},
		resposta: 3
	},

	63: {

		pergunta: 'Em relação às Transformações afins, podemos afirmar que',
		alternativas: {
			0: 'consiste em representar um espaço 2D imerso em um espaço 3D', 
			1: 'Consiste numa transformação do espaço 2D para o 3D',
			2: 'Requer uma etapa de projeção', 
			3: 'É o mesmo que transformação de translação',
			4: 'Preservam retas, razão de seção e coordenadas baricêntricas'  
		},
		resposta: 4
	},

	64: {

		pergunta: 'Não podemos afirmar do Ray-tracing ',
		alternativas: {
			0: 'Calcula parte da iluminação global', 
			1: 'é uma iluminação por pixel',
			2: 'Apenas pode tratar polígono como geometria', 
			3: 'Não requer a etapa de clipping',
			4: 'Pode ser acelerada por uma octree'  
		},
		resposta: 2
	},

	65: {

		pergunta: 'As matrizes homogêneas',
		alternativas: {
			0: 'São ótimas estruturas para acelerar a iluminação', 
			1: 'São utilizadas para resolver problemas de profundidade, na etapa de projeção',
			2: 'Servem para realizar clipping de polígonos', 
			3: 'Podem ser usadas para transformar coordenadas globais em coordenadas de camera',
			4: 'São usadas no lugar da matriz de rotação, para evitar erros acumulados'  
		},
		resposta: 3
	},

	66: {

		pergunta: 'Um triangle Fan é:',
		alternativas: {
			0: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices Vi, Vi+1, Vi+2', 
			1: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, Vi, Vi+1',
			2: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, Vi, Vn (n é o último polígono da malha)', 
			3: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices V1, V2, Vi',
			4: 'Uma maneira de ordenar os vértices de uma malha, de forma que cada triângulo possa ser descrito pelos vértices Vi, Vn-1, Vn'  
		},
		resposta: 1
	},

	67: {

		pergunta: 'A componente de iluminação especular num ponto p pode ser descrita no Phong como',
		alternativas: {
			0: 'Cor (p) = material . (N.L) , sendo N a normal do ponto e L o vetor de luz para o mesmo ponto', 
			1: 'Cor (p) = material . (N.O) , sendo N a normal do ponto e O o vetor de observador para o mesmo ponto',
			2: 'Cor (p) = material . L, sendo L o vetor de iluminação', 
			3: 'Cor (p) = material . (R.O)n , sendo R o vetor de reflexo , O o vetor do observador para o mesmo ponto e n um coeficiente do material',
			4: 'Cor (p) = material . I , sendo I a constante da luz da cena'  
		},
		resposta: 3
	},

	68: {

		pergunta: 'Quando realizamos transformações geométricas no espaço, usando ângulos de Euler, podemos ter como problema o Gimbal lock, que consiste em:',
		alternativas: {
			0: 'falta de ajustes adequados dos parâmetros', 
			1: 'Perda de graus de liberdade em certas configurações',
			2: 'Transformações que anulam outras transformações', 
			3: 'Ambiguidade de rotação',
			4: 'Ausencia de dados na matriz'  
		},
		resposta: 1
	},

	69: {

		pergunta: 'Não é uma estrutura de dados hierárquica para geometria',
		alternativas: {
			0: 'Quadtree', 
			1: 'Octree',
			2: 'BSP', 
			3: 'Triangle Fans',
			4: 'Kd-Tree'  
		},
		resposta: 3
	},

	70: {

		pergunta: 'O Backface culling',
		alternativas: {
			0: 'Requer ordenamento de profundidade de polígonos para ser usado', 
			1: 'Elimina todos os polígonos oclusos',
			2: 'Requer a normal do polígono para ser calculado', 
			3: 'é aplicado no estágio de rasterização',
			4: 'Realiza o recorte de polígonos que caíram fora da área de projeção'  
		},
		resposta: 2
	},

	71: {

		pergunta: 'Podemos dizer que o Environment-mapping',
		alternativas: {
			0: 'É uma das etapas do Ray-tracing', 
			1: 'É uma textura para deformar uma geometria',
			2: 'Simula o reflexo na rasterização', 
			3: 'É uma técnica de culling de terrenos',
			4: 'Não permite o uso do componente especular'  
		},
		resposta: 2
	}	
}