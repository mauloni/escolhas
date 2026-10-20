import { criarPersonagem } from './aleatorio.js';
import { perguntas, finais } from './perguntas.js';
const telas = { inicio:document.getElementById('inicio'), jogo:document.getElementById('jogo'), resultado:document.getElementById('resultado') };
const alternativas = document.getElementById('alternativas');
let personagem, etapaAtual = 0, historico = [];
function mostrarTela(nome){Object.entries(telas).forEach(([chave,tela])=>tela.classList.toggle('ativa',chave===nome));}
function substituir(texto){return texto.replace(/\{nome\}/g,personagem.nome).replace(/\{afirmacao\}/g,personagem.afirmacao);}
function iniciaJogo(){personagem=criarPersonagem();etapaAtual=0;historico=[];mostrarTela('jogo');mostrarPergunta('abertura');}
function mostrarPergunta(chave){
 const pergunta=perguntas[chave];if(!pergunta){mostrarResultado(chave);return;}
 etapaAtual++;
 document.getElementById('etapa').textContent=`ETAPA ${String(etapaAtual).padStart(2,'0')}`;
 document.getElementById('placar').textContent=`${Math.min(etapaAtual,3)} DE 3 DECISÕES`;
 document.getElementById('progresso').style.width=`${Math.min((etapaAtual-1)/3*100,100)}%`;
 document.getElementById('titulo-pergunta').textContent=substituir(pergunta.titulo);
 document.getElementById('texto-pergunta').textContent=substituir(pergunta.texto);
 alternativas.replaceChildren();
 pergunta.alternativas.forEach((opcao,indice)=>{
  const botao=document.createElement('button');botao.className='opcao';
  const letra=document.createElement('span');letra.textContent=String.fromCharCode(65+indice)+'.';
  const texto=document.createElement('div');texto.textContent=substituir(opcao.texto);
  botao.append(letra,texto);
  botao.addEventListener('click',()=>{alternativas.querySelectorAll('button').forEach(b=>b.disabled=true);historico.push(substituir(opcao.texto));mostrarPergunta(opcao.proxima);},{once:true});
  alternativas.appendChild(botao);
 });
}
function mostrarResultado(chave){const final=finais[chave];if(!final){console.error('Final desconhecido:',chave);return;}
 mostrarTela('resultado');document.getElementById('titulo-final').textContent=final.titulo;document.getElementById('texto-final').textContent=substituir(final.texto);
 const caixa=document.getElementById('historico');caixa.replaceChildren();const titulo=document.createElement('strong');titulo.textContent='SUAS ESCOLHAS';const lista=document.createElement('ol');historico.forEach(escolha=>{const item=document.createElement('li');item.textContent=escolha;lista.appendChild(item);});caixa.append(titulo,lista);
}
document.getElementById('iniciar').addEventListener('click',iniciaJogo);
document.getElementById('reiniciar').addEventListener('click',iniciaJogo);
