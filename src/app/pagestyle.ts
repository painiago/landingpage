import styled from "styled-components";
export const ContainerGeral = styled.main`
max-width: 100%;

`
export const ContentWelcome = styled.section`
  max-width: 100%;
  margin: 0 auto;
  /* background-color: rebeccapurple; */
  background-image: url('/imagem/capa2.png');
  background-size: cover;
  @media (max-width:868px){
    padding: 20px !important;
  }


`
export const BoxLogo = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 120px;

  @media (max-width:768px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const BoxImg = styled.div`

max-width: 200px;
display: flex;
justify-content: flex-start;
align-items: flex-start;

  img{
    margin-top: 30px;
    width: 100%;
  }
 
`

export const ContentBoxIntro = styled.div`
  max-width: 500px;
  
  span{
  color: #FFF500;
  font-weight: bold;
 }
  p:nth-of-type(1){
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 25px;
    color: white;
  }
  p:nth-of-type(2){
    font-size: 25px;
    margin-bottom:30px ;
    color: white;

    
    word-spacing: 2px;

  }
  button{
    width: 350px;
    height: 60px;
    border-radius: 30px;
    border: none;
    background: linear-gradient(to right,#F20493,#9616C3) ;
    box-shadow: 0px 0px 10px 3px rgba(139,0,139, 0.6);
    transition: box-shadow 0.3s ease-in-out;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 50px;
    color: white;


    &:hover{
      /* background: rgba(139,0,139, 0.9) !important; */
      box-shadow: 0px 0px 2px 7px rgba(139,0,139, 0.8);
     
    }
    @media (max-width:768px) {
      width: 250px;
  }
  }
  @media (max-width:768px){
    padding: 20px;
    text-align: center;
  }
`

export const ContainerIntro = styled.div`
  /* background-color: orange; */
  max-width: 1000px;
  margin: 0 auto;
  

  h1{
    font-size: 5.4rem;
    color: white;
  }
 
 @media (max-width:768px) {
  h1{
    font-size: 5rem;
    text-align: center;
  }
 }
`
export const ScrollLine = styled.div`
   position: fixed;
  top: 0;
  left: 0;
  width: 2px; 
  height: 100%;
  background-color: #0074d9; 
  opacity: 0;
  transition: opacity 0.3s;
`
// Section 2
export const ContainerSec2 = styled.section`
  background-image: url('/imagem/capa3.png');
  background-size: cover;
  
`
export const ContainerSecBox = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  height: 300px;
  align-items: center;

  @media (max-width:900px){
  display: grid;
  grid-template-columns: 1fr 1fr ;
  height: 430px;
}
`

export const CardBox = styled.div`
  max-width: 200px;
  margin: 0 auto;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: 15px;
 
div:nth-of-type(1){
  display: flex;
  justify-content: center;
  
  img{
    width: 170px;
    height: 160px;
    transition: transform 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1);
  }
    @media (max-width:768px){
    width: 150px;
    height: 150px;
  }
  }
 }
 div:nth-of-type(2){
  margin-bottom: 10px;

  p{
    font-weight: bold;
    color: white;
  }
 }

`

//Section 3

export const ContainerSec3 = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  /* background-color: rebeccapurple; */

`
export const ContainerSecBox3 = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  p:nth-of-type(1){
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    @media (max-width: 768px) {
   font-size: 2.5rem;
}
  }
  p:nth-of-type(2){
    font-size: 1rem;
    
  }
`
export const ContainerSecBox4 = styled.div`
  display: flex;
  align-items: center;
  

  @media (max-width: 900px) {
    flex-direction: column;
}
@media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
}
`
export const ImgSec4 = styled.div `
  max-width: 500px;
  position: relative;
  
  &::before {
  content: "";
  position: absolute;
  top: 65%;
  left: 10%;
  width: 70%;
  height: 30%;
  background-color: var(--color-border);
  filter: blur(100px);
  z-index: -1;
}
  img{
    max-width: 100%;
    height: auto;
    
  }
`
export const ContainerBox3 = styled.div`

ul{


  li{
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 1.5rem;

    list-style: none;

    svg{
      margin-right: 10px;
    }
  }
}
`
export const BoxLine = styled.div`
  width: 100%;
  height: 0.5px;
  background: rgba(255,255,255,0.2);
`

export const ContentBox3 = styled.div`
text-align: center;
margin-bottom: 20px;
  p:nth-of-type(1){
    font-size: 1.2rem !important;
  }
`
export const BoxStyle = styled.div`
background-color: rgba(255,255,255,0.2);
padding: 10px;
border-radius: 8px !important;
border: 2px solid #EE0BD7;
/* border-image: linear-gradient(to right, #EE0BD7, #9616C3); */
/* border-image-slice: 1; */

p:nth-of-type(1){
  font-size: 1.2rem;
  color: #FFF500;
  font-weight: bold;
  }

`

// Section 4

export const ContainerSec4 = styled.section `
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 90px;
  
  @media (max-width:900px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width:768px) {
    flex-direction: column;
    padding: 10px;

  }
`

export const Box4 = styled.div`
  max-width: 400px;
  text-align: start;
  margin-right: 30px;
 
  @media (min-width:900px) {
    margin-bottom: 30px;
  }
  @media (max-width:900px) {
    margin-bottom: 30px;
  }
  @media (max-width:768px) {
    margin-bottom: 30px;
  }
  p:nth-of-type(1){
    font-size: 1.5rem;
    font-weight: bold;
    color:var(--color-text) ;
  }
  p:nth-of-type(2){
    font-size: 1.5rem;
    font-weight: bold;
  }
`
export const Box5 = styled.div`
 max-width: 600px;
 background-color: rgba(255,255,255,0.1);
padding: 10px;
border-radius: 8px !important;
border: 2px solid #EE0BD7;
display: flex;
position: relative;
&::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 45%;
  width: 70%;
  height: 30%;
  background-color: var(--color-border);
  filter: blur(100px);
  z-index: -1;
  }
p{
  font-weight: 300;
  text-align: justify;
  margin: 20px;
}
`
export const BoxBtn = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 30px;
  position: relative;

  &::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -10%;
  width: 50%;
  height: 100%;
  background-color: var(--color-roxo);
  filter: blur(130px);
  z-index: -1;
  }

  button{
    width: 300px;
    height: 70px;
    border-radius: 30px;
    border: 1px solid #EE0BD7;
    background-color: rgba(139,0,139, 0.3);
    box-shadow: 0px 0px 10px 3px rgba(139,0,139, 0.6);
    transition: box-shadow 0.3s ease-in-out;
    color: var(--color-text);
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
    &:hover{
    box-shadow: 0px 0px 15px 5px rgba(139,0,139, 0.9);
  }
  }
  
`

//Section 5

export const ContainerSec5 = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 81px;
  display: flex;
  flex-direction: column;
`
export const BoxTitle = styled.div`
  text-align: center;
  margin-bottom: 68px;
  p{
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-text);
  }
`

export const ContentSec5 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  
`
export const BoxSec5 = styled.div`
  display: flex;
  margin-bottom: 30px;
  

  @media (max-width:900px) {
    flex-direction: column;
    padding: 5px;
  }
  @media (max-width:768px) {
    flex-direction: column;
    padding: 5px;
  }
`
export const BoxInsec5 = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  article {
    position: relative;
    &::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 70%;
  background-color: var(--color-roxo);
  filter: blur(150px);
  z-index: -1;
  }
    p:nth-of-type(1){
    margin-bottom: 20px;
    font-weight: bold;
  }
  }
 
  img{
    max-width: 100%;
    height: auto;
    
  }
`
//Section 6

export const ContainerSec6 = styled.section`
  max-width: 1120px;
  margin: 0 auto;
`

export const ContenteSec6 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div:nth-of-type(1){
    position: relative;
    &::before {
  content: "";
  position: absolute;
  top: 0%;
  left: -20%;
  width: 70%;
  height: 70%;
  background-color: var(--color-border);
  filter: blur(200px);
  z-index: -1;
    }
  }
`
export const BoxSec6 = styled.div`
  max-width: 400px;
  margin-right: 20px;
  margin-left: 20px;
  
  img{
    max-width: 100%;
    height: auto;
  }
`
//Section 7

export const ContainerSec7 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 93px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
export const BoxSec7 = styled.div`
  text-align: center;

  p:nth-of-type(1){
    color: var(--color-text);
    font-size: 3rem;
    font-weight: bold;
  }
  p:nth-of-type(2){
    font-size: 2.4rem;
  }
`
export const BoxSec8 = styled.div`
  display: flex;
  align-items: center;
  @media (max-width:900px){
    flex-direction: column;
    padding: 10px;
  }
  @media (max-width:768px){
    flex-direction: column;
    padding: 10px;
  }
 
`
export const BoxContSec8 = styled.div`
  max-width: 500px;

  img{
    max-width: 100%;
    height: auto;
  }
`
export const BoxContSec9 = styled.div`
    max-width: 500px;
    height: 300px;
    border-radius: 20px;
    border: 1px solid rgb(238,11,215);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    background-color: var(--background-roxo);
    display: flex;
    flex-direction: column;
    @media (max-width:768px) {
      height: 350px;
}
  ul{
    
    li{
      list-style: none;
      margin-bottom: 10px;
      svg{
        margin-right: 10px;
        color: var(--color-text);
      }
    }
  }

`

export const BoxIntro8 = styled.div`
  p:nth-of-type(1){
    font-size: 1.8rem;
    color: var(--color-blue);
    margin-bottom: 20px;
    font-weight: bold;
    @media (max-width:768px) {
      margin-top: 1rem;
      font-size: 1.5rem;
}
  }
  p:nth-of-type(2){
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  
`

// Section 8

export const ContainerSec8 = styled.section`
max-width: 1000px;
margin: 0 auto;
margin-top: 9rem;
justify-content: center;
@media (max-width:900px) {
    padding: 10px;
    max-width: 800px;
  }
  @media (max-width:768px) {
    padding: 10px;
  }
  @media (max-width:468px) {
    padding: 10px;
  }

`
export const ContentSec8 = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 20px;

  @media (max-width:768px) {
  }

`

export const Sec8Img = styled.div`
  max-width: 400px;
  margin-top: 2rem;

  img{
    max-width: 100%;
    height: auto;
  }
`

export const BoxOffPrice = styled.div`
  margin-top: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  p:nth-of-type(1){
    font-size: 2rem;
    font-weight: bold;
  }
  p:nth-of-type(2){
    font-size: 1.4rem;
    font-weight: 500;
  }
  @media (max-width:768px) {
    p{
      font-size: 1.1rem !important;
    }
  }
`
export const BoxBtn8 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  button{
    width: 25rem;
    height: 70px;
    border-radius: 50px;
    border: 1px solid #EE0BD7;
    background-color: rgba(139,0,139, 0.5);
    box-shadow: 0px 0px 15px 10px rgba(139,0,139, 0.6);
    transition: box-shadow 0.3s ease-in-out;
    color: var(--color-text);
    font-weight: bold;
    cursor: pointer;
    font-size: 1.5rem;
    &:hover{
    box-shadow: 0px 0px 15px 10px rgba(139,0,139, 0.9);
  }
  }
  @media (max-width:768px) {
    width: 13rem;
    button{
      font-size: 0.9rem;
    }
  }
`
export const BoxTime = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
  align-items: center !important;
  div:nth-of-type(1){

    p:nth-of-type(1){
      text-align: center !important;
    }
  }
`

export const BoxTimeIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  font-weight: bold;
  p:nth-of-type(1){
    font-size: 2rem;
  }
  p:nth-of-type(2){
    font-size: 1.5rem;
  }
  @media (max-width:768px) {
    p{
      font-size: 1rem !important;
    }
  }
`
export const BoxIntroIntro = styled.div`
  display: flex;
  margin-top: 20px;

  @media (max-width:768px) {
  align-items: center;
  margin-left: 30px;
  }
`

// Section 9

export const ContainerSec9 = styled.div`

  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 90px;
`

export const ContentSec9 = styled.div`
  width: 100%;
  margin:  0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BoxBtn9 = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  @media (max-width:768px) {
      padding: 5px;
    }

  button{
    width: 500px;
    height: 75px;
    border-radius: 30px;
    border: 1px solid #0BEE14;
    background-color: rgba(18,111,17, 0.9);
    /* box-shadow: 0px 0px 10px 3px rgba(139,0,139, 0.6); */
    transition: box-shadow 0.3s ease-in-out;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:768px) {
      font-size: 1rem;
    }
    img{
      width: 25px;
      margin-left: 10px;
      @media (max-width:768px) {
        width: 15px;
    }
    }
    &:hover{
    box-shadow: 0px 0px 15px 5px rgba(18,238,20, 0.7);
  }
  }
`

export const BoxSuport = styled.div`
max-width: 1000px;
text-align: center;
  p:nth-of-type(1){
    font-size: 1.4rem;
  }  

`
export const BoxSuportIntro = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  p{
    font-size: 1rem !important;
    color: black;
  }  

`

// Section 10

export const ContainerSec10 = styled.section`
  margin-top: 6rem;
  max-width: 100%;
  border: 1px solid #EE0BD7;
  background-color: rgb(71,19,80,0.4);
  
`

export const ContentSec10 = styled.div`
max-width: 1200px;
padding: 20px;
margin: 0 auto;
display: flex;
flex-direction: row;
align-items: center;

@media (max-width:860px) {
  flex-direction: column;
}

`

export const BoxSec10 = styled.div`
  max-width: 700px !important;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width:568px) {
  flex-direction: column;
}
`

export const BoxLei = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  @media (max-width:768px) {
  margin-top: 30px;
  margin-left: 0;
}
  p{
    font-size: 1.3rem;
    font-weight: 300;
    text-align: justify;
  }
`
export const BoxImg10 = styled.div`
  max-width: 300px;

  @media (max-width:768px) {
  max-width: 200px;
  }
  img{
    max-width: 90%;
    height: auto;

    @media (min-width:768px) {
      width: 90%;
      height: auto;
    }
  }
`

export const BoxTxTLei = styled.div`
  max-width: 260px;
  margin-left: 25px;
  @media (max-width:768px) {
  margin-top: 30px;

}
  p:nth-of-type(1){
    font-size: 1.8rem;
    text-align: justify;
    color: var(--color-text);

    @media (min-width:768px) and (max-width:900px) {
    font-size: 1.4rem !important;    
}
}
p:nth-of-type(2){
    font-size: 1.5rem;
    text-align: justify;
    @media (min-width:768px) and (max-width:900px) {
    font-size: 1.2rem !important;    
}

}
`

// Section 11

export const ContainerSec11 = styled.section`
  margin-top: 5rem;
`
export const ContentSec11 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`
export const BoxSec11 = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 2rem;
    font-weight: bold;
  }
`
export const BoxPerg = styled.div`
  width: 100%;
  
  details{
    margin-top: 20px;
    cursor: pointer; 
}

    summary{
      font-size: 1.2rem;
      margin-bottom: 20px;
      transition:  color 0.3s ease-in-out;

    }
    p{
      font-size: 1.1rem;
      color: #ffbd24;
    }
`
// Footer

export const ContainerFooter = styled.footer`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  align-items:center;
  justify-content: center;
  margin-top: 8rem;
  margin-bottom: 1rem;
  padding: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  div:nth-of-type(1){
    width: 100%;
    display: flex;
    justify-content: center;

    p{
      text-align: start;
      font-size: 0.9rem;
    }
  }
  div:nth-of-type(2){
    width: 100%;
    display: flex;
    justify-content: center;
    p{
      text-align: start;
      font-size: 0.9rem;
      @media (max-width:768px) {
        justify-content: center;
        text-align: center;
      }
    }
  }
`

// Animação Estrelas 

export const Stars = styled.div`
  position: absolute;
	width: 3px;
	height: 3px;
	border-radius: 50%;
	box-shadow: 50px 30px rgb(255, 183, 15),
    100px 80px rgb(255, 184, 31),
    80px 120px rgb(255, 240, 25),
    300px 20px rgb(255, 193, 6),
    250px 130px rgb(255, 247, 19),
    200px 50px rgb(255, 187, 29),
    150px 100px rgb(234, 201, 19),
    320px 100px rgb(255, 181, 22);
    animation: anim-stars 10s linear infinite;

    &::after{
  content: " ";
  position: absolute;
  top: 150px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  box-shadow: 50px 30px white,
    100px 80px white,
    80px 120px white,
    300px 20px white,
    250px 130px white,
    200px 50px white,
    150px 100px white,
    320px 100px white;
}
@keyframes anim-stars {
  from {
      transform: translateY(0px);
  }
  to {
      transform: translateY(-150px);
  }
}
`
export const Stars2 = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white,
    125px 35px white,
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    220px 115px white;
  animation: anim-stars 20s linear infinite;

  &::after{
  content: " ";
  position: absolute;
  top: 150px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white,
    125px 35px white,
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    220px 115px white;
}
`