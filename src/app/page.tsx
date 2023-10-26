'use client';
/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {ContainerGeral,ContentWelcome,ContainerIntro,ContentBoxIntro,BoxLogo, BoxImg,ContainerSec2, ContainerSecBox, CardBox, ContainerSec3, ContainerSecBox3, ContainerSecBox4, ImgSec4, ContainerBox3, ContentBox3, BoxStyle, BoxLine, ContainerSec4, Box4, Box5, BoxBtn, ContainerSec5, ContentSec5, BoxSec5, BoxInsec5, BoxTitle, ContainerSec6, ContenteSec6, BoxSec6, ContainerSec7, BoxSec7, BoxSec8, BoxContSec8, BoxContSec9, BoxIntro8, ContainerSec8, ContentSec8, Sec8Img, BoxOffPrice, BoxBtn8, BoxTime, BoxTimeIntro, BoxIntroIntro, ContainerSec9, ContentSec9, BoxBtn9, BoxSuport, BoxSuportIntro, ContainerSec10, ContentSec10, BoxImg10, BoxLei, BoxSec10, BoxTxTLei, ContainerSec11, ContentSec11, BoxPerg, BoxSec11, ContainerFooter, Stars, Stars2} from './pagestyle'
import { faBuildingColumns, faCaretRight,faCircleCheck, faGem, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import {StyleSheetManager} from 'styled-components';

const CountDowTimer = dynamic(() => import ('@/components/contador/CountdowTimer'), { ssr: false })

export default function Home() {


  const whatsapp = '0000';

  const handleWhatsappClick = () =>{
    const whatsappUrl = `https://wa.me/${whatsapp}`
    window.open(whatsappUrl, '_blank')
  }

  const targetDate = new Date ('2023-11-23T18:00:00')
  
  return (
    <StyleSheetManager shouldForwardProp={(prop)=> !prop.startsWith('backgroundImage')}>
    <main>
      <ContainerGeral>
        <ContentWelcome backgroundImage='/imagem/capa2.png'>
        <BoxLogo>
          <BoxImg>
               <img src="/imagem/logo1.png" loading='lazy'  alt="" />
          </ BoxImg>
          </BoxLogo>
          <ContainerIntro> 
            <h1>META CRIPTO 3.0</h1>
            <ContentBoxIntro>
              <p>Top 1 - Cursos de Cripto no Brasil</p>
              <p><span>ATENÇÃO:</span> Aprenda agora, a partir de um método próprio de multiplicação e proteção de capital, a como investir no mercado mais assimétrico do século XXI: o de criptomoedas.</p>
              <button>Quero meu acesso</button>
            </ContentBoxIntro>
          </ContainerIntro>
        </ContentWelcome>
        <ContainerSec2>
        <ContainerSecBox>
          <CardBox>
            <div>
             <img src="/imagem/graficicon.png" loading='lazy' alt="grafico" />
            </div>
            <div>
              <p>Gráficos</p>
            </div>
          </CardBox>
          <CardBox>
            <div>
            <img src="/imagem/nft.png" loading='lazy' alt="nft" />  
            </div>
            <div>
              <p>NFT</p> 
            </div>
          </CardBox>
          <CardBox>
            <div>
            <img src="/imagem/fundamentosicon.png" loading='lazy' alt="fundamentos" />
            </div>
            <div>
              <p>Fundamentos</p>
            </div>
          </CardBox>
          <CardBox>
            <div>
              <img src="/imagem/alavancagemicon.png" loading='lazy' alt="alavancagem" />
            </div>
              <div>
                <p>Alavancagem</p>
              </div>
          </CardBox>
          </ContainerSecBox>
        </ContainerSec2>
      <ContainerSec3>
        <ContainerSecBox3 >
          <p>A Maior Oportunidade da Década</p>
          <p>Aprenda com um método <strong>seguro</strong> que vai te tornar capaz de tomar suas próprias decisões afim de encontrar as melhores oportunidades de investimentos em cripto.</p>
        </ContainerSecBox3 >
        <ContainerSecBox4>
          <ImgSec4>
             <Stars></Stars>
              <Stars2></Stars2> 
              <img src="/imagem/btc2.png" loading='lazy' alt=""  />
          </ImgSec4>
          <ContainerBox3>
            <ContentBox3>
              <BoxStyle>
                <p>5 MOTIVOS PARA ACREDITAR QUE ESTÁ É</p>
              </BoxStyle>
              <p>A Maior Oportunidade da Década</p>
            </ContentBox3>
            <ul>
              <li ><FontAwesomeIcon icon={faCaretRight} />FUNDAMENTOS INTACTOS </li>
              <BoxLine></BoxLine>
              <li ><FontAwesomeIcon icon={faCaretRight} />LIBERDADE </li>
              <BoxLine></BoxLine>
              <li ><FontAwesomeIcon icon={faCaretRight} />DESCENTRALIZAÇÃO </li>
              <BoxLine></BoxLine>
              <li ><FontAwesomeIcon icon={faCaretRight} />ADOÇÃO EM MASSA </li>
              <BoxLine></BoxLine>
              <li ><FontAwesomeIcon icon={faCaretRight} />PRIVACIDADE </li>
            </ul>
          </ContainerBox3>
        </ContainerSecBox4>
      </ContainerSec3>
      <ContainerSec4>
        <Box4>
          <p>SERVE PRA VOCÊ?</p>
          <p>Para quem é?</p>
        </Box4>
        <Box5>
          <p>Nosso curso é projetado para atender a uma ampla gama de alunos, desde aqueles que estão dando os primeiros passos em um novo campo até profissionais experientes em busca de aprimoramento. Seja você um novato em busca de conhecimento fundamental ou um veterano experiente em busca de atualizações e aprofundamento, nosso curso é a escolha certa para você. Nossa abordagem flexível e abrangente garante que todos os participantes, independentemente do nível de experiência, encontrarão valor e benefícios significativos ao longo do curso.</p>
        </Box5>
      </ContainerSec4>
        <BoxBtn>
            <button>Garantir minha vaga</button>
       </BoxBtn>
       <ContainerSec5> 
        <BoxTitle>  
          <p>CONTEÚDO DO CURSO</p>
        </BoxTitle>
        <ContentSec5>
          <BoxSec5>
            <BoxInsec5>
             <img src="/imagem/aulas.png" loading='lazy' alt="" />
            </BoxInsec5>
            <BoxInsec5>
            <article>
              <p>Aulas em Vídeo</p>
              <p>Todas as aulas são gravadas em vídeo para facilitar o aprendizado. Elas sempre estarão disponíveis em nossa área de membros exclusiva.</p>
              </article>
            </BoxInsec5>
          </BoxSec5>
          <BoxSec5>
          <BoxInsec5>
            <img src="/imagem/live.png" loading='lazy' alt="" />
            </BoxInsec5>
            <BoxInsec5>
            <article>
              <p>Live com especialistas</p>
              <p>Toda semana você terá duas lives com especialistas do mundo dos investimentos, onde irá tirar todas as suas dúvidas.</p>
            </article>
            </BoxInsec5>
          </BoxSec5>
          <BoxSec5>
          <BoxInsec5>
            <img src="/imagem/whats.png"  loading='lazy' alt="" />
            </BoxInsec5>
            <BoxInsec5>
              <article>
                <p>Grupo de Estudos</p>
                <p>Os alunos se ajudam sempre compartilhando experiências e formas de melhorar o aprendizado de inglês.</p>
              </article>
            </BoxInsec5>
          </BoxSec5>
        </ContentSec5>
       </ContainerSec5>
       <ContainerSec6>
        <ContenteSec6>
          <BoxSec6>
            <img src="/imagem/modulo1.png" loading='lazy' alt="" />
          </BoxSec6>
          <BoxSec6>
            <img src="/imagem/modulo2.png" loading='lazy' alt="" />
          </BoxSec6>
          <BoxSec6>
            <img src="/imagem/modulo3.png" loading='lazy' alt="" />
          </BoxSec6>
          <BoxSec6>
            <img src="/imagem/modulo4.png" loading='lazy' alt="" />
          </BoxSec6>
        </ContenteSec6>  
       </ContainerSec6>
       <ContainerSec7>
        <BoxSec7>
          <p>BÔNUS PARA TODOS QUE</p>
          <p>Entrarem Nessa Turma</p>
        </BoxSec7>
        <BoxSec8>
          <BoxContSec8>
            <img src="/imagem/curso.png" loading='lazy' alt="" />
          </BoxContSec8>
          <BoxContSec9>
            <BoxIntro8>
              <p>META CRIPTO 2.0</p>
              <p>Receba como bônus o curso de criptomoedas mais vendido do Brasil em  2021.</p>
            </BoxIntro8>
            <ul>
              <li><FontAwesomeIcon icon={faBuildingColumns} />+ 12 Mil Alunos</li>
              <li><FontAwesomeIcon icon={faStar} />Nota 4.8 na Hotmart</li>
              <li><FontAwesomeIcon icon={faGem} />Best Seller 2021</li>
              <li><FontAwesomeIcon icon={faCircleCheck} />+ 150 Aulas e +80h de Conteúdo</li>
              <li><FontAwesomeIcon icon={faPlus} />Mentoria </li>
            </ul>
          </BoxContSec9>
        </BoxSec8>
       </ContainerSec7>
       <ContainerSec8>
        <ContentSec8>
          <Sec8Img>
            <img src="/imagem/logo1.png" loading='lazy' alt="" />
          </Sec8Img>
          <BoxOffPrice>
            <p>Oferta exclusiva para</p>
            <p>ÚLTIMA turma</p>
          </BoxOffPrice>
          <BoxOffPrice>
            <p>12X DE R$ 155,59</p>
            <p>OU R$ 1597 À VISTA</p>
          </BoxOffPrice>
          <BoxBtn8>
            <button>Quero meu acesso agora</button>
          </BoxBtn8>
          <BoxTime>
            <div>
              <p>ESTÁ OFERTA ACABA EM:</p>
            </div>
            <CountDowTimer targetDate={targetDate}/>
          </BoxTime>
        </ContentSec8>
       </ContainerSec8>
       <ContainerSec9>
        <ContentSec9>
          <h2>AINDA COM DÚVIDAS?</h2>
          <BoxBtn9>
            <button onClick={handleWhatsappClick} >Atendimento por Whatsapp 
              <img src="/imagem/fawhatsapp2.png" loading='lazy' alt="" />
            </button>
          </BoxBtn9>
          <BoxSuport> 
            <p>Atendimento por Email</p>
            <BoxSuportIntro>
              <p>suporte@metacripto.com</p>
            </BoxSuportIntro>
          </BoxSuport>
        </ContentSec9>
       </ContainerSec9>
       <ContainerSec10>
        <ContentSec10>
          <BoxSec10>
            <BoxImg10>
              <img src="/imagem/selo.png" alt="" loading='lazy'/>
            </BoxImg10>
            <BoxTxTLei>
              <p>RISCO ZERO</p>
              <p>Garantia Incondicional de 7 Dias</p>
            </BoxTxTLei>
          </BoxSec10>
          <BoxLei>
            <p>Você tem, por lei, o direito de testar o produto durante 7 dias. Se dentro desse período você achar que o curso não é pra você, basta abrir uma solicitação de reembolso dentro da plataforma do curso.</p>
          </BoxLei>
        </ContentSec10>
       </ContainerSec10>
       <ContainerSec11>
        <ContentSec11>
          <BoxSec11>
            <p>Perguntas frequêntes</p>
          </BoxSec11>
          <BoxPerg>
            <div>
            <details  >  
              <summary >Quais as formas de pagamento?</summary>
              <p>Pagando com cartão de crédito você recebe acesso imediato. Por PIX, alguns minutos após fazer o pagamento. Boleto pode levar até 72 horas para ser identificado pelo nosso sistema.</p>
            </details>  
            <details>
              <summary>Quanto tem de acesso ao curso?</summary>
              <p>O tempo de acesso é de 1 ano, sendo que ao fim deste período você pode renovar com um desconto especial dos alunos.</p>
            </details>
            <details>
              <summary>Se eu não conseguir assistir as lives, como posso acessar as aulas?</summary>
            <p>O conteúdo das lives estará disponível gravado para os alunos acessarem quando quiserem. A plataforma de acesso pode ser o Hotmart ou o Youtube. O acesso às aulas é flexível e garantido enquanto as plataformas mencionadas existirem.</p>
            </details>
            <details>
              <summary>O curso funciona mesmo que não saiba NADA sobre criptomoedas?</summary>
              <p>Funciona! Toda a trilha de aprendizado foi minunciosamente criada para te levar do básico ao avançado.</p>
            </details>
            <details>
              <summary>Tem certificado?</summary>
              <p>Sim, mas é necessário que todas as aulas sejam concluídas para que a solicitação seja aprovada na plataforma de treinamento. </p>
            </details>
            <details>
              <summary>Se eu tiver dúvidas, como eu faço?</summary>
              <p>Temos um canal de suporte exclusivo para sanar dúvidas, é só enviar um email para suporte@metacripto.com</p>
            </details>
            </div>
          </BoxPerg>
        </ContentSec11>
       </ContainerSec11>
      </ContainerGeral>
      <ContainerFooter>
        <div>
          <p>Copyright © 2023 Meta Cripto | Todos os direitos reservados.</p>
        </div>
        <div>
          <p>Made by a Iago Nascimento</p>
        </div>
        <div>
          <a href="https://iagonascimento.vercel.app/" target='_blank'>Contato</a>
        </div>
        </ContainerFooter> 
        {/* <ScrollLine/> */}
    </main>
    </StyleSheetManager>
  )
}
