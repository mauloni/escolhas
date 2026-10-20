// A chave "proxima" cria diferentes caminhos conforme cada decisão.
export const perguntas = {
 abertura: {titulo:'A estreia decisiva',texto:'{nome}, você acaba de chegar ao time principal. {afirmacao} O técnico pergunta como prefere começar.',alternativas:[{texto:'Treinar jogadas coletivas com a equipe.',proxima:'coletivo'},{texto:'Focar nos seus melhores fundamentos.',proxima:'individual'},{texto:'Conversar com o técnico sobre sua função.',proxima:'dialogo'}]},
 coletivo:{titulo:'O passe que muda tudo',texto:'No jogo, um colega está livre perto da área. Você também tem espaço para finalizar.',alternativas:[{texto:'Passar para o colega em melhor posição.',proxima:'finalEquipe'},{texto:'Tentar o chute e assumir o risco.',proxima:'pressao'}]},
 individual:{titulo:'O treino extra',texto:'Você evoluiu, mas um colega está com dificuldade. O que faz?',alternativas:[{texto:'Ajudar o colega a praticar.',proxima:'lideranca'},{texto:'Continuar treinando sozinho.',proxima:'pressao'}]},
 dialogo:{titulo:'A estratégia do treinador',texto:'O técnico pede que você jogue fora da posição favorita. Como reage?',alternativas:[{texto:'Aceitar e aprender a nova função.',proxima:'lideranca'},{texto:'Pedir uma conversa para encontrar uma solução.',proxima:'coletivo'}]},
 pressao:{titulo:'Últimos minutos',texto:'A partida está empatada. Você recebe a bola e vê uma chance de decidir.',alternativas:[{texto:'Arriscar uma finalização bem preparada.',proxima:'finalCoragem'},{texto:'Segurar a bola e organizar o ataque.',proxima:'finalEquipe'}]},
 lideranca:{titulo:'O vestiário precisa de você',texto:'Antes da final, o time está nervoso. Qual sua atitude?',alternativas:[{texto:'Incentivar todos e dividir responsabilidades.',proxima:'finalLider'},{texto:'Manter a concentração e liderar pelo exemplo.',proxima:'finalEquipe'}]}
};
export const finais = {
 finalEquipe:{titulo:'CRAQUE DO COLETIVO',texto:'{nome}, você mostrou que futebol se constrói em equipe. Suas escolhas fortaleceram a confiança do grupo e criaram grandes oportunidades.'},
 finalCoragem:{titulo:'DECISÃO DE CAMISA 10',texto:'{nome}, você assumiu a responsabilidade no momento decisivo. Sua coragem marcou sua trajetória, e você aprendeu a avaliar riscos.'},
 finalLider:{titulo:'CAPITÃO DO FUTURO',texto:'{nome}, sua liderança fez a equipe crescer. Você descobriu que ouvir, apoiar e agir junto também é vencer.'}
};
