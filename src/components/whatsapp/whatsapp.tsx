import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";

export const ContainerWhatsapp = styled.div`
  max-width: 100px;
  position: fixed;
  bottom: 20px; /* Ajuste a posição vertical conforme necessário */
  right: 20px; /* Ajuste a posição horizontal conforme necessário */
  cursor: pointer;
  z-index: 1000; /* Certifique-se de que o ícone esteja acima de outros elementos */


  svg{
    font-size: 5rem;
    color: #00FF1A;
    
  }
`

export default function Whatsapp () {
  const whatsapp = '';

  const handleWhatsappClick = () =>{
    const whatsappUrl = `https://wa.me/${whatsapp}`
    window.open(whatsappUrl, '_blank')
  }

  return(
<ContainerWhatsapp>
  <FontAwesomeIcon icon={faWhatsapp} onClick={handleWhatsappClick} />
</ContainerWhatsapp>
  )
};