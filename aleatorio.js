const nomes = ['Alex', 'Dani', 'Kai', 'Luca', 'Rafa', 'Sam'];
const afirmacoes = ['Talento abre portas, mas decisões constroem caminhos.', 'Uma equipe cresce quando todos participam.', 'Respeito e dedicação valem dentro e fora do campo.', 'Cada partida é uma oportunidade de aprender.'];
export function aleatorio(lista) { return lista[Math.floor(Math.random() * lista.length)]; }
export function criarPersonagem() { return { nome: aleatorio(nomes), afirmacao: aleatorio(afirmacoes) }; }
